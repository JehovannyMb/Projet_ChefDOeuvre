import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import axios from 'axios'
import NavBar from '../components/NavBar'


export default function LogIn() {
   const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        if(data.emailUtilisateur ='' ){
           
            toast.error("Veuillez remplir le champ mail")

        }else{
            axios
            .get(`http://localhost:3000/Utilisateurs?mailUtilisateur=${data.mailUtilisateur}`)
            .then((res)=>{
                if(res.data.length > 0){
                    toast.error("Un compte existe déjà avec cette adresse mail")
                }else{
                    axios
                    .get(`http://localhost:3000/Utilisateurs?tel=${data.tel}`)
                    .then((res)=>{
                        if(res.data.length > 0){
                        toast.error("Un compte existe déjà avec ce numéro de téléphone")
                    }else{
                        axios
                        .get(`http://localhost:3000/Utilisateurs?nomUtilisateur=${data.nomUtilisateur}`)
                        .then((res)=>{
                            if(res.data.length>0){
                                toast.error("Un compte existe déjà avec ce nom d'utilisateur")
                            }else{
                                axios
                                .post("http://localhost:3000/Utilisateurs", data)
                                .then((res) =>{
                                    console.log(res);
                                toast.success("Inscription réussie");
                                navigate("/SignIn");
                                })
                                .catch((err)=> {
                                    console.log(err);
                                    toast.error("Une erreur est survenue lors de l'inscription")
                                })
                            }
                        })
                      
                    }})}})}};


    return (
        <>
        <div>
            <NavBar/>
        </div>
            <div className=' text-white h-80 w-full'>
               
                <div className=' flex justify-between'>
                    <h1 className='  w-full text-3xl font-bold pl-48 pr-48 pt-20 '>
                        Inscription
                    </h1>
                    <img className=' size-40 mr-4 ' src="../src/icons/Logo_JEM.png" alt="profil" />

                </div>

            </div>
            <div className='bg-white rounded-lg h-full pb-80  w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex-row space-y-10 w-full p-40 ' action="text">
                    <div>
                        <h2>Informations personnelles</h2>

                    </div>

                    <div className=' bg-slate-200 rounded-xl p-4 '>
                        <TextField id="outlined-basic" label="Nom d'utilisateur" fullWidth type='text' variant="outlined" {...register("nomUtilisateur", { required: "Veuillez saisir un nom", minLength : {value: 5, message: "Veuillez saisir un nom de plus de 5 caractères"} })}  />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <TextField id="outlined-basic" label="Adresse mail" fullWidth type='email' variant="outlined" {...register("mailUtilisateur", {required: "Veuillez saisir votre adresse mail", pattern:"/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"})} />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <TextField id="outlined-basic" label="Numéro de téléphone" fullWidth type='tel' variant="outlined" {...register("tel", {required: "Veuillez saisir un numéro de téléphone", minLength: {value:10, message: "Veuillez saisir un numéro contenant 10 chiffres"}})} />

                    </div>
                    <div className='  bg-slate-200 rounded-xl p-4'>
                        <TextField id="outlined-basic" label="Mot de passe" fullWidth type='password' variant="outlined" {...register("motDePasse", {required: "Veuillez saisir un mot de passe", minLength : {value:5, message:"Veuillez saisir un mot de passe d'au moins 5 caractères"}})} />

                    </div>

                    <div className=' text-center'>
                    <Button sx={'background-color: rgb(23, 37, 84)'} type='submit' fullWidth variant="contained">Enregistrer</Button>

                    <div>
                        <NavLink to={'/Home'}>
                            <Button sx={'background-color: rgb(23, 37, 84); margin-top:2em'} fullWidth variant="contained">Sortir</Button>

                        </NavLink>

                    </div>
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
