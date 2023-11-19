import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  // Tooltip,
} from '@nextui-org/react'

type Props = {
  buttonIcon: React.ReactNode
  children: React.ReactNode
}

const PopoverWrapper = ({buttonIcon, children}: Props) => {
  return (
    <Popover placement='bottom' offset={20} showArrow>
      <PopoverTrigger>
        {/* <Tooltip color='danger' content='Delete user'> */}
        <Button isIconOnly variant='light'>
          {buttonIcon}
        </Button>
        {/* </Tooltip> */}
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  )
}

export default PopoverWrapper
