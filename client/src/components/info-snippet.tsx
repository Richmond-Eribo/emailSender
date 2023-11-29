import {Card, CardBody} from '@nextui-org/react'

type Props = {
  info: 'success' | 'danger'
  description: string
}

export default function InfoSnippet({info, description}: Props) {
  return (
    <Card
      fullWidth
      isBlurred
      shadow='sm'
      className={` text-white borde py-1 
      ${info == 'success' ? 'bg-blue-400/60' : 'bg-red-400/60'} `}
    >
      <CardBody className='py-1'>
        <p>{description} </p>
      </CardBody>
    </Card>
  )
}
