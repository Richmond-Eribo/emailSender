import {Button, Input} from '@nextui-org/react'
import {useState, FormEvent, useMemo} from 'react'

// interfaces
import {Irecipient} from '../types/interfaces'
import InfoSnippet from './info-snippet'
// import Toast from '../utils/toastAlert'

type Props = {
  addRecipient: (e: Irecipient, arg: 'add' | 'remove') => boolean
}

const ToRecipient = ({addRecipient}: Props) => {
  // recipient information state
  const [recipientInfo, setRecipientInfo] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  })

  const [recipientAddedState, setRecipientAddedState] = useState<
    'success' | 'danger' | null
  >(null)

  // handle form submit event by adding recipient to the table
  const handInputChange = (value: string, name: string) => {
    setRecipientInfo(prevState => ({...prevState, [name]: value}))

    // Toast('success', 'Recipient has been added')
  }

  // HANDLE THE FORM SUBMISSION
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = addRecipient(recipientInfo, 'add')

    if (result) {
      setRecipientAddedState('success')
    } else {
      setRecipientAddedState('danger')
    }

    setTimeout(() => {
      setRecipientInfo({
        name: '',
        email: '',
        company: '',
        role: '',
      })
      setRecipientAddedState(null)
    }, 1000)
  }

  // validation of the mail
  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalid = useMemo(() => {
    if (recipientInfo.email === '') return false

    return validateEmail(recipientInfo.email) ? false : true
  }, [recipientInfo.email])

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      {recipientAddedState && (
        <InfoSnippet
          info={recipientAddedState}
          description={
            recipientAddedState === 'success'
              ? 'Recipient added successfully'
              : 'Recipient already exist... Try again'
          }
        />
      )}

      <Input
        // autoFocus
        required
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
        required
        label='Email'
        labelPlacement='outside'
        placeholder='Enter email'
        type='email'
        variant='bordered'
        value={recipientInfo.email}
        onValueChange={value => handInputChange(value, 'email')}
        // validation
        isInvalid={isInvalid}
        color={isInvalid ? 'danger' : 'default'}
        errorMessage={isInvalid && 'Please enter a valid email'}
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
