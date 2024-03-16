import React from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from './SignIn'

export default function Btn_Get() {
  return (
    <div className=' rounded-xl'>
      <NavLink to={"SignIn"}>
        <button className=' text-white bg-blue-950 rounded-xl w-80 h-10 '>
            Get Started
        </button>
        </NavLink>
    </div>
  )
}
