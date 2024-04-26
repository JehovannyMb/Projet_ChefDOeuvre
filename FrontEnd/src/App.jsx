import { useState } from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Menu from './components/Menu'
import LogIn from './components/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    {/* <SignIn /> */}
    {/* <Menu /> */}
    {/* <LogIn /> */}
    </>
  )
}

export default App
