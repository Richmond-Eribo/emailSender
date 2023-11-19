/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Button,
} from '@nextui-org/react'
import EditSVG from './svg/editSVG'
import DeleteSVG from './svg/deleteSVG'
import PopoverWrapper from './wrappers/popover'

// interface
import {Irecipient, iColumns} from '../types/interfaces'

type Props = {
  recipients: Irecipient[]
  setRecipient(recipients: Irecipient): void
}

const ConfigRecipients = ({recipients, setRecipient}: Props) => {
  const renderCell = React.useCallback(
    (recipient: Irecipient, columnKey: string | number) => {
      //   const cellValue = recipient[columnKey]

      switch (columnKey) {
        case 'actions':
          return (
            <div className='relative flex items-center gap-2'>
              <Tooltip content='Edit user'>
                <span className='text-lg cursor-pointer text-default-400 active:opacity-50'>
                  <EditSVG />
                </span>
              </Tooltip>

              <PopoverWrapper
                buttonIcon={
                  <span className='text-lg cursor-pointer text-danger active:opacity-50'>
                    <DeleteSVG />
                  </span>
                }
              >
                <div className='px-1 py-2'>
                  <div className='font-bold text-small'>
                    Are you sure you want to delete?
                  </div>
                  <div className='flex gap-2 mt-2 text-tiny'>
                    <Button
                      onClick={() => setRecipient(recipient)}
                      size='sm'
                      color='danger'
                      className='w-full'
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </PopoverWrapper>
            </div>
          )
        case 'name':
          return (
            <div className='flex flex-col min-w-[200px]'>
              <p className='text-sm capitalize text-bold'>{recipient.name}</p>
              <p className='text-sm capitalize text-bold text-default-400'>
                {recipient.email}
              </p>
            </div>
          )
        case 'role':
          return (
            <div className='flex flex-col min-w-[150px]'>
              <p className='text-sm capitalize text-bold'>{recipient.role}</p>
              <p className='text-sm capitalize text-bold text-default-400'>
                {recipient.company}
              </p>
            </div>
          )

        default:
          return null
      }
    },
    [setRecipient]
  )

  return (
    <Table
      isHeaderSticky
      aria-label='Example table with custom cells'
      classNames={{
        base: 'max-h-[520px] ',
        table: 'min-h-[320px]',
        wrapper: ' rounded-none shadow-none',
      }}
    >
      <TableHeader columns={columns}>
        {column => (
          <TableColumn
            key={column.key}
            align={column.key === 'actions' ? 'center' : 'start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody emptyContent={'No recipients to display.'} items={recipients}>
        {item => (
          <TableRow key={item.name}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
// 'Name', 'Email', 'Company', 'Role'

const columns: iColumns[] = [
  {
    name: 'ACTIONS',
    key: 'actions',
  },
  {
    name: 'NAME',
    key: 'name',
  },
  {
    name: 'ROLE',
    key: 'role',
  },
]

export default ConfigRecipients
