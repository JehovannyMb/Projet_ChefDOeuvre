import React, { useEffect } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function Menu() {
    useEffect(()=>{
        if(!localStorage.getItem("Utilisateurs")){
            navigate("/SignIn")
        }
    });
    const navigate = useNavigate();

    return (
        <>
        <div>
            <NavBar/>
        </div>
            <div className=' text-white h-40 w-full'>
                <div className='flex items-center  p-4 gap-4 justify-center'>
                    <div className=' w-full space-x-4 bg-slate-200 rounded-xl p-4 '>
                        <NavLink to={"Menu"}>
                            <button>
                                <img className=' h-5' src="../src/icons/1814075_find_magnifier_magnifying glass_search_icon.png" alt="SearchIcon" />
                            </button>
                        </NavLink>
                        <input className=' bg-slate-200' type="text" placeholder=' Recherche' />

                    </div>
                    <div className=' bg-slate-200 rounded-xl p-4' >
                        <button className=''>
                            <img className=' h-5' src="../src/icons/3844444_dot_menu_more_option_icon.png" alt="MenuIcon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className=' text-white text-center p-4'>
                <h1 className=' underline w-full text-3xl font-bold pb-4 '>
                    LISTE DES SERVICES
                </h1>
            </div>
            <div className='bg-white rounded-lg space-y-2 h-full pb-80  w-full'>
                <div className=' space-y-2 p-4'>
                    <div className=' border-dashed border-2 py-2 border-b-blue-900 border-y-white border-x-white flex gap-4 rounded-t-xl p-4 '>
                        <h2> Options :</h2>

                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white rounded-t-xl p-4'>
                        <button className=' flex gap-4'>
                            <img className=' h-10' src="../src/icons/livre (1).png" alt="ProfileIcon" />
                            <h2 className=' font-bold'> Gestion du profil</h2>

                        </button>
                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white rounded-t-xl p-4'>
                        <NavLink to={'InsertCourses'}>
                            <button className=' flex gap-4'>
                                <img className=' h-10' src="../src/icons/livre.png" alt="ProfileIcon" />
                                <h2 className=' font-bold'> Insérer des cours</h2>
                            </button>
                        </NavLink>
                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white rounded-t-xl p-4'>
                        <NavLink to={'List'}>

                            <button className=' flex gap-4'>
                                <img className=' h-10' src="../src/icons/livre-ouvert.png" alt="ProfileIcon" />
                                <h2 className=' font-bold'> Consulter des cours</h2>

                            </button>
                        </NavLink>

                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white flex gap-4 rounded-t-xl p-4'>
                        <button className=' flex gap-4'>
                            <img className=' h-10' src="../src/icons/deconnexion.png" alt="ProfileIcon" />
                            <h2 className=' font-bold'> Deconnexion</h2>

                        </button>
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
