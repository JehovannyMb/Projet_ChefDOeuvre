import React, { useEffect, useState } from 'react'
import Btn_Get from './Btn_Get'
import Btn_Log from './Btn_Log'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function LogIn() {
    const [InputName, setInputName] = useState('')
    const [InputMail, setInputMail] = useState('')
    const [InputNum, setInputNum] = useState('')
    const [InputPassword, setInputPassword] = useState('')

    useEffect(() => {
        axios.get('/user', {
            params: {
                email: InputMail,
                name: InputName,
            }
        });
    }).then(()=>{
        console.log('Changement effectué avec succès')
    })
    .catch(()=>{
        console.log('Erreur dans le changement');
    })
    .finally(()=>{
        console.log('useEffect opérationnel');
    })

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
                    <img className=' size-40 mr-4 ' src="../src/icons/Logo_JEM.png" alt="profil" />

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
                        <input value={InputName} onChange={(e) => setInputName(e.target.value)} className=' bg-slate-200' type="text" placeholder="Nom d'utilisateur" />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="Mail">E-mail</label>
                        <br />
                        <input value={InputMail} onChange={(e) => setInputMail(e.target.value)} className=' bg-slate-200' type="text" id='E-mail' placeholder="E-mail" />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="Numero">Numéro de Téléphone</label>
                        <br />
                        <input value={InputNum} onChange={(e) => setInputNum(e.target.value)} className=' bg-slate-200' type="text" id='Numéro' placeholder="Numéro de Téléphone" />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <label htmlFor="Password">Mot de passe</label>
                        <br />
                        <input value={InputPassword} onChange={(e) => setInputPassword(e.target.value)} className=' bg-slate-200' type="text" id='Password' placeholder='Mot de passe' />

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
