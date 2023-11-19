import {Button, Input} from '@nextui-org/react'
import {useState, FormEvent} from 'react'

// interfaces
import {Irecipient} from '../types/interfaces'

type Props = {
  addRecipient: (e: Irecipient) => void
}

const ToRecipient = ({addRecipient}: Props) => {
  const [recipientInfo, setRecipientInfo] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  })

  const handInputChange = (value: string, name: string) => {
    setRecipientInfo(prevState => ({...prevState, [name]: value}))
  }

  // HANDLE THE FORM SUBMISSION
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addRecipient(recipientInfo)

    setTimeout(() => {
      setRecipientInfo({
        name: '',
        email: '',
        company: '',
        role: '',
      })
    }, 500)
  }

  // const inputData = [
  //   {
  //     label: 'Name',
  //     placeholder: 'Enter full name',

  //   }
  // ]

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <Input
        // autoFocus
        label='Name'
        labelPlacement='outside'
        placeholder='Enter full name'
        variant='bordered'
        classNames={{
          label: '',
        }}
        value={recipientInfo.name}
        onValueChange={value => handInputChange(value, 'name')}
      />
      <Input
        label='Email'
        labelPlacement='outside'
        placeholder='Enter email'
        type='email'
        variant='bordered'
        value={recipientInfo.email}
        onValueChange={value => handInputChange(value, 'email')}
      />
      <Input
        label='Company   '
        labelPlacement='outside'
        placeholder='Enter company name'
        variant='bordered'
        value={recipientInfo.company}
        onValueChange={value => handInputChange(value, 'company')}
      />
      <Input
        label='Role   '
        labelPlacement='outside'
        placeholder='Enter role'
        variant='bordered'
        value={recipientInfo.role}
        onValueChange={value => handInputChange(value, 'role')}
      />

      <Button type='submit'>Add Recipient</Button>
    </form>
  )
}

export default ToRecipient
