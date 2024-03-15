import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/Menu'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Menu GetStart={onclick} /> */}
    <SignIn />
    </>
  )
}

export default App
