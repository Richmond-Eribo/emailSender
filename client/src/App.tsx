// import {useState} from 'react'

import {Button} from '@nextui-org/react'
import EditorArea from './components/EditorArea'
// import ToRecipient from './components/to-recipient'
import ModalOverlay from './components/wrappers/modal'
import ToRecipient from './components/to-recipient'
import SettingSVG from './components/svg/settingSVG'
import ConfigRecipients from './components/config-recipients'
import ChooseTemplate from './components/choose-template'
import SendArrowSVG from './components/svg/sendArrowSVG'
import TestCount from './components/testcount'
import {useState} from 'react'

interface iRecipient {
  name: string
  email: string
  company: string
  role: string
}

function App() {
  // const [count, setCount] = useState(0)
  const [recipientState, setRecipientState] = useState<iRecipient[]>([
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      company: 'JJ Associates',
      role: 'CEO',
    },
    {
      name: 'Mary Smith',
      email: 'marysmith@yahoo.com',
      company: 'MS Solutions',
      role: 'Manager',
    },
    {
      name: 'James Lee',
      email: 'jameslee@hotmail.com',
      company: 'JL Technologies',
      role: 'Developer',
    },
    {
      name: 'Lisa Chen',
      email: 'lisachen@gmail.com',
      company: 'LC Design',
      role: 'Designer',
    },
  ])

  const removeValue = (v: iRecipient) => {
    setRecipientState(prevState => prevState.filter(rec => rec.name !== v.name))
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen gap-4 '>
      {/* <div className=' flex  w-[90%] shadow-sm rounded-lg pt-3  h-10 border'></div> */}

      <TestCount />

      <p>Send Email panel</p>

      <div className='editor-holder overflow-clip flex flex-col justify-between items-center w-[90%] shadow-lg rounded-xl py-3  min-h-[28rem] border'>
        {/* <ToRecipient /> */}
        <div className='w-[95%] rounded-xl border h-10 flex items-center px-3  justify-between'>
          <ModalOverlay
            modalTitle='Add Recipient'
            modalButtonContent='To: recipient(s)'
            modalButtonStyle='min-w-[280px] px-0 border-none outline-none text-sm'
            alignText='left'
          >
            <ToRecipient />
          </ModalOverlay>

          <ModalOverlay
            modalTitle='Configure Recipients'
            isIconOnly
            modalButtonContent={<SettingSVG />}
            modalButtonStyle='border-none outline-none text-sm'
          >
            <ConfigRecipients
              recipients={recipientState}
              setRecipient={removeValue}
            />
          </ModalOverlay>
        </div>

        {/* editor for writing the mails */}
        <EditorArea />

        <div className=' flex justify-between items-center  w-[95%]  rounded-lg px-1  h-10'>
          <ChooseTemplate />
          <Button color='primary' endContent={<SendArrowSVG />}>
            Send Mail
          </Button>
        </div>
      </div>
    </main>
  )
}

export default App
