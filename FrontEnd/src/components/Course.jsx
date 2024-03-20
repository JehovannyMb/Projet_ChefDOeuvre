import React from 'react'
import Btn_Log from './Btn_Log'
import Btn_Get from './Btn_Get'

export default function Course() {
    return (
        <>
           <div className=' p-5'>

           </div>
            <div className='bg-white rounded-lg text-center h-full p-40 '>

                <div className=' flex justify-center'>
                    <Btn_Get title1Btn1={'Commenter'} />
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
                    <h4>© 2024 GitHub, Inc</h4>

                </div>
            </footer>
        </>
    )
}
