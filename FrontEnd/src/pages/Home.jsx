import React from 'react'
import Btn_Log from '../components/Btn_Log'
import Btn_Get from '../components/Btn_Get'
import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
      <div className=' text-white h-80 w-full'>
        
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
          <NavLink to={"/SignIn"}>
            <Btn_Get title1Btn1={'Commencer'} />
          </NavLink>
          <NavLink to={"/LogIn"}>
            <Btn_Log title2Btn2={'Créer un compte'} />
          </NavLink>
        </div>
      </div>
      <footer className=' h-10'>
        <div className=' flex gap-2 text-white opacity-50 justify-center mt-2 '>
          <h4>Terms</h4>
          <h4>Privacy</h4>
          <h4>Security</h4>
          <h4>Status</h4>
          <h4>Docs</h4>
          <h4>Contact</h4>
          <h4>Do not share the personal information</h4>
          <h4>© 2024 JEM, Inc</h4>

        </div>
      </footer>
    </>
  )
}
