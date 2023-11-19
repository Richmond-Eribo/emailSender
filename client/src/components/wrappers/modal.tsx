import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

interface iVariants {
  placement?:
    | 'center'
    | 'auto'
    | 'top'
    | 'bottom'
    | 'top-center'
    | 'bottom-center'
    | undefined
  modalTitle: string
  modalButtonContent: string | React.ReactNode
  modalButtonSize?: 'sm' | 'md' | 'lg'
  modalButtonVariant?:
    | 'solid'
    | 'faded'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'ghost'
    | 'shadow'
  modalButtonStyle?: string
  modalContentStyle?: {
    body: string
    // do not need this because backdrop is blurred
    // backdrop: string
    base: string
    header: string
    footer: string
    closeButton: string
  }
  children: React.ReactNode
  isIconOnly?: boolean
  alignText?: 'center' | 'left' | 'right'
}

const ModalOverlay = ({
  placement = 'center',
  children,
  modalTitle,
  modalButtonStyle,
  modalButtonSize = 'sm',
  modalButtonVariant = 'bordered',
  modalButtonContent,
  isIconOnly = false,
  alignText = 'center',
}: iVariants) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <div className='flex flex-wrap gap-3'>
        <Button
          variant={modalButtonVariant}
          isIconOnly={isIconOnly}
          //   color='warning'
          size={modalButtonSize}
          onPress={() => onOpen()}
          className={modalButtonStyle}
        >
          <span className={`w-full text-${alignText}`}>
            {modalButtonContent}
          </span>
        </Button>
      </div>
      <Modal
        backdrop='blur'
        placement={placement}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {modalTitle}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalOverlay
