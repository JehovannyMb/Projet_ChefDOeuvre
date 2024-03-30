import React from 'react'
import Btn_Log from './Btn_Log'
import Btn_Get from './Btn_Get'
import { NavLink } from 'react-router-dom'

export default function SignIn() {
    return (
        <>
            <div className=' text-white h-80 w-full'>
                <div className='flex items-center justify-between p-4'>
                    <div>
                        <h1 className=' w-full text-left font-bold text-5xl p-2'>J E M</h1>

                    </div>
                    <div className=' bg-slate-200 rounded-xl p-4'>
                        <NavLink to={'/SignIn/Home'}>
                            <button className='p-2'>
                                <img className=' h-5' src="../src/icons/retour.png" alt="MenuIcon" />

                            </button>
                        </NavLink>
                    </div>
                </div>
                <h1 className='  w-full text-center text-3xl font-bold pl-48 pr-48 pt-20 '>
                    Bienvenue dans <a className=' text-red-500' href="#">Jeune Memoire</a> , renseignez vos informations de connexion
                </h1>
            </div>
            <div className='bg-white rounded-lg h-full pb-80  w-full'>
                <form className='flex-row space-y-10 w-full p-40 ' action="text">
                    <div className=' bg-slate-200 rounded-xl p-4 '>
                        <label htmlFor="loginType">Type de connexion</label>
                        <br />
                        <input className=' bg-slate-200' type="text" placeholder='student or teacher' />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="UserName">Nom d'utilisateur</label>
                        <br />
                        <input className=' bg-slate-200' type="text" id='UserName' placeholder="Nom d'utilisateur" />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="Password">Mot de passe</label>
                        <br />
                        <input className=' bg-slate-200' type="text" id='Password' placeholder='Mot de passe' />

                    </div>

                </form>
                <div className=' text-center'>
                    <NavLink to={"Menu"}>
                        <Btn_Get title1Btn1={'Connexion'} />
                    </NavLink>
                    <Btn_Log title2Btn2={'Mot de passe oublié'} />
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
