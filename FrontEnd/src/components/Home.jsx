import React from 'react'
import Btn_Log from './Btn_Log'
import Btn_Get from './Btn_Get'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className=' text-white h-80 w-full'>
        <div className='flex items-center justify-between p-4'>
          <div>
            <h1 className=' w-full text-left font-bold text-5xl p-2'>J E M</h1>

          </div>
          <div className=' bg-slate-200 rounded-xl p-4'>
              <button className='p-2'>
                <img className=' h-5' src="../src/icons/marque-x.png" alt="MenuIcon" />

              </button>
          </div>
        </div>
        <h1 className='  w-full text-center text-3xl font-bold p-10 '>
          Plus proche de l'université, plus proche de l'étudiant
        </h1>
        <h2 className=' opacity-50 p-2 text-center'>
          Assurez-vous d'avoir un compte avant de commencer
        </h2>
      </div>
      <div className='bg-white rounded-lg text-center h-full p-40 '>
        <div className=' pb-40'>
          <img className=' size-40 m-auto ' src="../src/icons/Logo_JEM.png" alt="logo" />

        </div>
        <div className=' '>
          <NavLink to={"SignIn"}>
            <Btn_Get title1Btn1={'Commencer'} />
          </NavLink>
          <NavLink to={"LogIn"}>
            <Btn_Log title2Btn2={'Créer un compte'} />
          </NavLink>
        </div>
      </div>
      <footer className=' h-10'>

      </footer>
    </>
  )
}
