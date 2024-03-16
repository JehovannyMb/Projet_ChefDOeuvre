import { useState } from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home GetStart={onclick} />
    {/* <SignIn /> */}
    {/* <Menu /> */}
    </>
  )
}

export default App
