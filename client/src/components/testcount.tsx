import {Button} from '@nextui-org/react'
import {useState, useCallback} from 'react'

const TestCount = () => {
  const [count, setCount] = useState(0)

  const addCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <p>add count button</p>
      <p className='text-2xl'>{count}</p>
      <Button onClick={addCount}>add</Button>
    </div>
  )
}

export default TestCount
