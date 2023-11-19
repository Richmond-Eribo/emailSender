import {Button, Input} from '@nextui-org/react'

const ToRecipient = () => {
  return (
    <form className='flex flex-col gap-4'>
      <Input
        // autoFocus
        label='Name'
        labelPlacement='outside'
        placeholder='Enter full name'
        variant='bordered'
        classNames={{
          label: '',
        }}
      />
      <Input
        label='Email'
        labelPlacement='outside'
        placeholder='Enter email'
        type='email'
        variant='bordered'
      />
      <Input
        label='Company   '
        labelPlacement='outside'
        placeholder='Enter company name'
        variant='bordered'
      />
      <Input
        label='Role   '
        labelPlacement='outside'
        placeholder='Enter role'
        variant='bordered'
      />

      <Button>Add Recipient</Button>
    </form>
  )
}

export default ToRecipient
