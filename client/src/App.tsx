/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react'
import EditorArea from './components/EditorArea'
import ModalOverlay from './components/wrappers/modal'
import ToRecipient from './components/to-recipient'
import SettingSVG from './components/svg/settingSVG'
import ConfigRecipients from './components/config-recipients'
import ChooseTemplate from './components/choose-template'
import SendArrowSVG from './components/svg/sendArrowSVG'
import {Button} from '@nextui-org/react'

// axios
import Axios from './utils/axiosConfig'

// interfaces
import {Irecipient, TemplateKey, iEditorData} from './types/interfaces'

function App() {
  const [recipientState, setRecipientState] = useState<Irecipient[]>([])
  const [editorData, setEditorData] = useState<iEditorData[]>([])
  const [selectedTemplate, setSelectedTemplate] = React.useState<
    Set<TemplateKey>
  >(new Set(['default']))

  // handling recipients add and remove function
  const updateRecipient = (recipient: Irecipient, arg: 'add' | 'remove') => {
    // check if recipient is in recipientstate
    const checkIfRecipientExist = recipientState.find(
      rec => rec.email === recipient.email
    )

    // example of includes on recpientstate

    switch (arg) {
      case 'add': {
        if (checkIfRecipientExist) {
          return false
        } else {
          setRecipientState(prev => [...prev, recipient])
          return true
        }
      }
      case 'remove': {
        setRecipientState(prevState => [...prevState, recipient])
        return true
      }
    }
  }

  // Handling Editor data
  // useref gives a typescript error, I have not looked into it
  const saveEditorButton = React.createRef<any>()
  const saveEditorFunciton = (EditorJSONData: iEditorData) => {
    setEditorData([EditorJSONData])
  }

  // Handling the template for the mail
  const changeSelectedTemplate = (selectedKeys: Set<TemplateKey>) => {
    setSelectedTemplate(selectedKeys as Set<TemplateKey>)
  }

  // uploading message, recipient, and default template to the backend
  const sendMailToBackend = async () => {
    // first of the Editor data needs to be saved. This is handled by a useRef button inside the EditorArea Component
    await saveEditorButton.current!.click()

    // check if recipientstate is empty
    if (recipientState.length === 0) {
      alert('you have no email recipient added')
      return
    }

    // const MailData
    const mailData = {
      recipient: recipientState,
      message: editorData,
      template: selectedTemplate,
    }

    // request to send the data to the backend
    Axios.post('/send-mails-to-recipients', mailData)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen gap-4 '>
      {/* <div className=' flex  w-[90%] shadow-sm rounded-lg pt-3  h-10 border'></div> */}

      <p>Send Email panel</p>

      <div className='editor-holder overflow-clip flex flex-col justify-between items-center w-[90%] md:w-[80%] lg:w-[60%] shadow-lg rounded-xl py-3 bg-gray-50  min-h-[14rem] border'>
        <div className='w-[95%] rounded-xl border h-10 flex items-center px-3  justify-between'>
          <ModalOverlay
            modalTitle='Add Recipient'
            modalButtonContent='To: Recipient(s)'
            modalButtonStyle='min-w-[260px] w-full px-0 border-none outline-none text-sm'
            alignText='left'
            modalContainerStyle='w-full '
          >
            <ToRecipient addRecipient={updateRecipient} />
          </ModalOverlay>

          <ModalOverlay
            modalTitle='Configure Recipients'
            isIconOnly
            modalButtonContent={<SettingSVG />}
            modalButtonStyle='border-none outline-none text-sm flex justify-center'
          >
            <ConfigRecipients
              recipients={recipientState}
              setRecipient={updateRecipient}
            />
          </ModalOverlay>
        </div>

        {/* editor for writing the mails */}
        <EditorArea
          ref={saveEditorButton!}
          storeEditorData={saveEditorFunciton}
        />

        <div className=' flex justify-between items-center  w-[95%]  rounded-lg px-1  h-10'>
          <ChooseTemplate
            selectedOption={selectedTemplate}
            setSelectedOption={changeSelectedTemplate}
          />

          <Button
            onClick={sendMailToBackend}
            color='primary'
            endContent={<SendArrowSVG />}
          >
            Send Mail
          </Button>
        </div>
      </div>
    </main>
  )
}

export default App
