import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item_1 from './components/Item_1'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu GetStart={onclick} />
    </>
  )
}

export default App
