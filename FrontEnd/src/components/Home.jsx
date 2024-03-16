import React from 'react'
import Btn_Log from './Btn_Log'
import Btn_Get from './Btn_Get'

export default function Home() {
  return (
    <>
      <div className=' text-white h-80 w-full'>
        <div className='flex items-center justify-between p-4'>
          <div>
            <h1 className=' w-full text-left font-bold text-5xl p-2'>J E M</h1>

          </div>
          <div className=' bg-slate-200 rounded-xl p-4'>
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
      <div className='bg-white rounded-lg text-center h-full p-40 '>
        <div className=' pb-40'>
          <img className=' size-40 ' src="../src/images/profile-pic.png" alt="logo" />

        </div>
        <div className=' '>
          <Btn_Get />
          <Btn_Log />

        </div>
      </div>
      <footer className=' h-10'>

      </footer>
    </>
  )
}
