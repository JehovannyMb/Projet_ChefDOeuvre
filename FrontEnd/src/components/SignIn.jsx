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
                        <button className='p-2'>Menu</button>
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
                    <Btn_Get />
                    <Btn_Log />
                </div>

            </div>
            <footer className=' h-10'>

            </footer>
        </>
    )
}
