import React from 'react'

import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import DownArraySVG from './svg/downArraySVG'

const ChooseTemplate = () => {
  type iKey = 'default' | 'colourful' | 'formal'
  const [selectedOption, setSelectedOption] = React.useState<Set<iKey>>(
    new Set(['default'])
  )

  const descriptionsMap = {
    default: 'This uses the default template, for this mail',
    colourful: 'This uses the colourful template, for this mail',
    formal: 'This uses the formal template, for this mail',
  }

  const labelsMap = {
    default: 'Default template',
    colourful: 'Colourful template',
    formal: 'Formal template',
  }

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0]

  return (
    <ButtonGroup variant='flat'>
      <Button variant='bordered'>{labelsMap[selectedOptionValue]}</Button>
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
          <Button isIconOnly variant='bordered'>
            <DownArraySVG />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label='Merge options'
          selectedKeys={selectedOption}
          selectionMode='single'
          onSelectionChange={key => setSelectedOption(key as Set<iKey>)}
          className='max-w-[300px]'
        >
          <DropdownItem key='default' description={descriptionsMap['default']}>
            {labelsMap['default']}
          </DropdownItem>
          <DropdownItem
            key='colourful'
            description={descriptionsMap['colourful']}
          >
            {labelsMap['colourful']}
          </DropdownItem>
          <DropdownItem key='formal' description={descriptionsMap['formal']}>
            {labelsMap['formal']}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default ChooseTemplate
