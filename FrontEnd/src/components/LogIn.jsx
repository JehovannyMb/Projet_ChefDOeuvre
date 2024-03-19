import React from 'react'
import Btn_Get from './Btn_Get'
import Btn_Log from './Btn_Log'
import { NavLink } from 'react-router-dom'

export default function LogIn() {
    return (
        <>
            <div className=' text-white h-80 w-full'>
                <div className='flex items-center justify-between p-4'>
                    <div className=' bg-slate-200 rounded-xl p-4'>
                        <NavLink to={'/SignIn/Home'}>
                            <button className='p-2'>
                                <img className=' h-5' src="../src/icons/retour.png" alt="MenuIcon" />

                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className=' flex justify-between'>
                <h1 className='  w-full text-3xl font-bold pl-48 pr-48 pt-20 '>
                    Inscription
                </h1>
                <img className=' size-40 mr-4 ' src="../src/images/profile-pic.png" alt="profil" />

                </div>
               
            </div>
            <div className='bg-white rounded-lg h-full pb-80  w-full'>
                <form className='flex-row space-y-10 w-full p-40 ' action="text">
                    <div>
                        <h2>Informations personnelles</h2>

                    </div>

                    <div className=' bg-slate-200 rounded-xl p-4 '>
                        <label htmlFor="Nom d'utilisateur">Nom d'utilisateur</label>
                        <br />
                        <input className=' bg-slate-200' type="text" placeholder="Nom d'utilisateur" />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="Mail">E-mail</label>
                        <br />
                        <input className=' bg-slate-200' type="text" id='E-mail' placeholder="E-mail" />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="Numero">Numéro de Téléphone</label>
                        <br />
                        <input className=' bg-slate-200' type="text" id='Numéro' placeholder="Numéro de Téléphone" />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="Password">Mot de passe</label>
                        <br />
                        <input className=' bg-slate-200' type="text" id='Password' placeholder='Mot de passe' />

                    </div>

                </form>
                <div className=' text-center'>
                    <Btn_Get title1Btn1={'Enregistrer'} />
                    <div>
                        <NavLink to={'/SignIn/Home'}>
                            <Btn_Log title2Btn2={'Sortir'} />

                        </NavLink>

                    </div>
                </div>

            </div>
            <footer className=' h-10'>

            </footer>
        </>
    )
}
