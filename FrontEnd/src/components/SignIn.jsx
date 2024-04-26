import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import axios from 'axios'

export default function SignIn() {
    useEffect(()=>{
        if(localStorage.getItem("Utilisateurs")){
            navigate("/Menu");
        }
    });
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        axios
        .get(`http://localhost:3000/Utilisateurs?mailUtilisateur=${data.mailUtilisateur}&motDePasse=${data.motDePasse}`)
        .then((res)=>{
            if(res.data.length>0){
                localStorage.setItem("Utilisateurs", JSON.stringify(res.data[0]))
                navigate("/Menu")
                toast.success("Connexion réussie")

            }else{
                toast.error("Les identifiants sont incorrects ou vous ne disposez pas de compte inscrit dans le site")
            }
        }).catch((err)=> {
            console.log(err);
            toast.error("Une erreur est survenue lors de l'inscription")
        })
      }
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
                <form onSubmit={handleSubmit(onSubmit)} className='flex-row space-y-10 w-full p-40 ' action="text">
                    <Typography className=''> Connexion</Typography>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <TextField id="outlined-basic" label="Adresse e-mail" fullWidth type='email' variant="outlined" {...register("mailUtilisateur", {required: "Veuillez saisir votre adresse mail", pattern:"/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"})}  />
                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                    <TextField id="outlined-basic" label="Mot de passe" fullWidth type='password' variant="outlined" {...register("motDePasse", {required: "Veuillez saisir un mot de passe", minLength : {value:5, message:"Veuillez saisir un mot de passe d'au moins 5 caractères"}})} />
                    </div>
                    <div className=' text-center'>
                    <Button sx={'background-color: rgb(23, 37, 84)'} type='submit' fullWidth variant="contained">Connexion</Button>
                    <Button sx={'background-color: rgb(23, 37, 84); margin-top:2em'} fullWidth variant="contained">Mot de passe oublié</Button>
                    <Typography paddingTop={2}>Voulez-vous créer un compte?
                    <NavLink to={"/LogIn"}> Cliquez ici!</NavLink>
                    </Typography>
                </div>
                </form>
       

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
