import React from 'react'
import Btn_Get from './Btn_Get'
import Btn_Log from './Btn_Log'

export default function 
() {
  return (
    <div className='bg-white rounded-lg h-full pb-80  w-full text-center'>
      <div className='p-40 text-center rounded-lg border-solid '>
      <img className=' size-40 ' src="../src/images/profile-pic.png" alt="logo" />
      </div>
        <Btn_Get />
        <Btn_Log />
    </div>
  )
}
