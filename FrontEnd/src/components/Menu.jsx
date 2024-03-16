import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <div className=' text-white h-40 w-full'>
                <div className='flex items-center  p-4 gap-4 justify-center'>
                    <div className=' w-full space-x-4 bg-slate-200 rounded-xl p-4 '>
                        <NavLink to={"Menu"}>
                        <button>
                            <img src="#" alt="SearchIcon" />
                        </button>
                        </NavLink>
                        <input className=' bg-slate-200' type="text" placeholder='Search' />

                    </div>
                    <div className=' bg-slate-200 rounded-xl p-4' >
                        <button className=''>Menu</button>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg space-y-2 h-full pb-80  w-full'>
                <div className=' space-y-2 p-4'>
                    <div className=' border-dashed border-2 py-2 border-b-blue-900 border-y-white border-x-white flex gap-4 rounded-t-xl p-4 '>
                        <h2> Liste des services :</h2>

                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white flex gap-4 rounded-t-xl p-4'>
                        <button>
                            <img src="#" alt="ProfileIcon" />
                        </button>
                        <h2> Manage profile</h2>
                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white flex gap-4 rounded-t-xl p-4'>
                        <button>
                            <img src="#" alt="ProfileIcon" />
                        </button>
                        <h2> Inserrer des cours</h2>
                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white flex gap-4 rounded-t-xl p-4'>
                        <button>
                            <img src="#" alt="ProfileIcon" />
                        </button>
                        <h2> Consulter des cours</h2>
                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white flex gap-4 rounded-t-xl p-4'>
                        <button>
                            <img src="#" alt="ProfileIcon" />
                        </button>
                        <h2> Deconnexion</h2>
                    </div>
                </div>

            </div>
            <footer className=' h-10'>

            </footer>

        </>
    )
}
