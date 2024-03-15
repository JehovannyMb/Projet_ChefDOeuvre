import React from 'react'
import Btn_Log from './Btn_Log'
import Btn_Get from './Btn_Get'

export default function Menu() {
  return (
    <>
      <div className=' text-white h-80 w-full'>
        <div className='flex justify-between'>
          <div>
            <h1 className=' w-full text-left font-bold text-5xl p-2'>J E M</h1>

          </div>
          <div>
            <button className='p-2'>Menu</button>
          </div>
        </div>
        <h1 className='  w-full text-center text-3xl font-bold p-10 '>
          Closer the university of the student
        </h1>
        <h2 className=' opacity-50 p-2 text-center'>
          Makes sure you have an account before to get started.
        </h2>
      </div>
      {/* <Item_1 /> */}
      <div className='bg-white rounded-lg h-full pb-80  w-full text-center'>
      <div className='p-40 text-center rounded-lg border-solid '>
      <img className=' size-40 ' src="../src/images/profile-pic.png" alt="logo" />
      </div>
        <Btn_Get />
        <Btn_Log />
    </div>

    </>
  )
}
