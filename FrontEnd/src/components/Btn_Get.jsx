import React from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from './SignIn'

export default function Btn_Get(props) {
  return (
    <div className=' rounded-xl'>
        <button className=' text-white bg-blue-950 rounded-xl w-80 h-10 '>
            {props.title1Btn1}
        </button>
        {/* </NavLink> */}
    </div>
  )
}
