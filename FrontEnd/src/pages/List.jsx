import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { Avatar, Box, Stack, Typography } from '@mui/material'

export default function List() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [course, setCourse]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/Files")
        .then((res)=>{
            setCourse(res.data);
        })
    })
    return (
        <>
        <div>
            <NavBar/>
        </div>
            <div className=' text-white h-40 w-full'>
                <div className='flex items-center  p-4 gap-4 justify-center'>
                    <div className=' w-full space-x-4 bg-slate-200 rounded-xl p-4 '>
                        <NavLink to={"/Menu"}>
                            <button>
                                <img className=' h-5' src="/src/icons/1814075_find_magnifier_magnifying glass_search_icon.png" alt="SearchIcon" />
                            </button>
                        </NavLink>
                        <input className=' bg-slate-200' type="text" placeholder=' Recherche' />

                    </div>
                    <div className=' bg-slate-200 rounded-xl p-4' >
                        <button className=''>
                            <img className=' h-5' src="/src/icons/3844444_dot_menu_more_option_icon.png" alt="MenuIcon" />

                        </button>
                    </div>
                </div>
            </div>
            <div className=' text-white text-center p-4'>
                <h1 className=' underline text-2xl font-bold pb-4'>OUVRAGES</h1>
                <h1 className=' italic w-full text-3xl font-bold '>
                    On admire toujours l'ouvrage ou l'on retrouve ses pensées. L'amour a besoindes yeux comme la pensée a besoin de la mémoire
                </h1>
                <h2><a className=' text-red-500' href="#">Madame Necker</a></h2>

            </div>
            <div className='bg-white rounded-lg space-y-2 h-full pb-80  w-full'>
                <div className=' space-y-2 p-4'>
                    <div className=' border-dashed border-2 py-2 border-b-blue-900 border-y-white border-x-white flex gap-4 rounded-t-xl p-4 '>
                        <h2> Liste d'ouvrages :</h2>

                    </div>
                    <div className=' border-dashed border-2 border-b-blue-900  border-y-white border-x-white flex gap-4 rounded-t-xl p-4'>
                        <NavLink to={'/Course'}>
                            <button>
                                <img className=' h-10' src="/src/icons/pile-de-livres.png" alt="course" />
                            </button>
                        </NavLink>
                        <h2 className=' font-bold'> xxxxxxxxxxxxxxxxxx</h2>
                    </div>
                    <div>
                    {course.map((courses)=> 
                                <div >
                                    <div>
                                        <Avatar></Avatar>
                                        <Typography>{courses.nomUtilisateur}</Typography>
                                        <Typography> {courses.description} </Typography>
                                    </div>
                                   
                                </div>
                                
                                )}
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
