import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item_1 from './components/Item_1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' h-80'>
      <h1 className=' size-20 h-20 text-center text-white '>
        
      </h1>
      <h2 className=' text-white size-4'>
      Closer the university of the student
      </h2>
      <p className=' text-white opacity-50 text-center'>
      Makes sure you have an account before to get started.
      </p>
    </div>
    <Item_1 />
    </>
  )
}

export default App
