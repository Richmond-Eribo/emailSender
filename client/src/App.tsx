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
  // handling recipients
  const [recipientState, setRecipientState] = useState<Irecipient[]>([])

  const addRecipient = (newRecipient: Irecipient) => {
    setRecipientState(prevState => [...prevState, newRecipient])
  }

  const removeRecipient = (v: Irecipient) => {
    setRecipientState(prevState => prevState.filter(rec => rec.name !== v.name))
  }

  // Handling Editor data
  const [editorData, setEditorData] = useState<iEditorData[]>([])
  // useref gives a typescript error, I have not looked into it
  const saveEditorButton = React.createRef<any>()

  const saveEditorFunciton = (EditorJSONData: iEditorData) => {
    setEditorData([EditorJSONData])
  }

  // Handling the template for the mail
  const [selectedTemplate, setSelectedTemplate] = React.useState<
    Set<TemplateKey>
  >(new Set(['default']))

  const changeSelectedTemplateFunction = (selectedKeys: Set<TemplateKey>) => {
    setSelectedTemplate(selectedKeys as Set<TemplateKey>)
  }

  // uploading message, recipient, and default template to the backend
  const sendMailToBackendFunction = async () => {
    // first of the Editor data needs to be saved. This is handled by a useRef button inside the EditorArea Component
    await saveEditorButton.current!.click()

    // const MailData
    const mailData = [recipientState, editorData, selectedTemplate]

    // request to send the data to the backend
    Axios.post('/singleMail', mailData)
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

      <div className='editor-holder overflow-clip flex flex-col justify-between items-center w-[90%] shadow-lg rounded-xl py-3  min-h-[28rem] border'>
        <div className='w-[95%] rounded-xl border h-10 flex items-center px-3  justify-between'>
          <ModalOverlay
            modalTitle='Add Recipient'
            modalButtonContent='To: recipient(s)'
            modalButtonStyle='min-w-[280px] px-0 border-none outline-none text-sm'
            alignText='left'
          >
            <ToRecipient addRecipient={addRecipient} />
          </ModalOverlay>

          <ModalOverlay
            modalTitle='Configure Recipients'
            isIconOnly
            modalButtonContent={<SettingSVG />}
            modalButtonStyle='border-none outline-none text-sm'
          >
            <ConfigRecipients
              recipients={recipientState}
              setRecipient={removeRecipient}
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
            setSelectedOption={changeSelectedTemplateFunction}
          />

          <Button
            onClick={sendMailToBackendFunction}
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
