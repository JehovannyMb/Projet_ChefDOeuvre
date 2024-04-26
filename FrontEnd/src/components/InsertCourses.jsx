import React, { useEffect, useState } from 'react'
import Btn_Log from './Btn_Log'
import Btn_Get from './Btn_Get'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function InsertCourses() {
    const [InputCourse, setInputCourse] = useState('')

    useEffect(()=>{
        axios.get('/user',)
    })
    return (
        <>
            <div className=' p-5'>
                <div className=' w-20 bg-slate-200 rounded-xl p-4'>
                    <button className='p-2'>
                        <img className=' h-5' src="/src/icons/retour.png" alt="MenuIcon" />

                    </button>
                </div>
                <div className=' text-white text-center p-4'>
                    <h1 className=' underline text-2xl font-bold pb-4'>INSERTION</h1>
                    <h1 className=' italic font w-full text-3xl font-bold '>
                    “Chaque grand poète intègre le monde d'une façon qui n'est qu'à lui.”
                    </h1>
                    <h2><a className=' text-red-500' href="#">Pierre Emmanuel</a></h2>
                </div>
            </div>
            <div className='bg-white rounded-lg text-center h-full p-4 '>
                <div className=' border-dashed border-2 py-2 border-b-blue-900 border-y-white border-x-white flex gap-4 rounded-t-xl p-4 '>
                    <h2> Inserez votre ouvrage ici : </h2>

                </div>
                <div className=' p-40'>
                    <input value={InputCourse} onChange={(e)=>setInputCourse(e.target.value)} type="file" name="course" id="course" />
                </div>
                <div className=' flex justify-center'>
                    <Btn_Get title1Btn1={'Inserrer'} />
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
