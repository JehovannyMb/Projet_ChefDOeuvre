import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item_1 from './components/Item_1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' text-white h-80 w-full'>
        <div className='flex justify-between'>
          <div>
            <h1 className=' w-full text-left font-bold text-5xl p-2'>J</h1>
            <h1 className=' w-full text-left font-bold text-5xl p-2'>E</h1>
            <h1 className=' w-full text-left font-bold text-5xl p-2'>M</h1>

          </div>
          <div>
            <button className='p-2'>Menu</button>
          </div>
        </div>
        <h1 className='  w-full text-center text-3xl font-bold p-5 '>
          Closer the university of the student
        </h1>
        <h2 className=' opacity-50 p-2 text-center'>
          Makes sure you have an account before to get started.
        </h2>
      </div>
      <Item_1 />
    </>
  )
}

export default App
