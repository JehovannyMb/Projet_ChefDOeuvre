import React from 'react'
import Btn_Log from './Btn_Log'
import Btn_Get from './Btn_Get'

export default function SignIn() {
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
                <h1 className='  w-full text-center text-3xl font-bold pl-48 pr-48 pt-20 '>
                    Bienvenue dans <a className=' text-red-500' href="#">Jeune Memoire</a> , renseignez vos informations de connexion
                </h1>
            </div>
            <div className='bg-white rounded-lg h-full pb-80  w-full text-center'>
                <div className='p-40 text-center rounded-lg border-solid '>
                    <input type="text" />
                </div>
                <Btn_Get />
                <Btn_Log />
            </div>

        </>
    )
}
