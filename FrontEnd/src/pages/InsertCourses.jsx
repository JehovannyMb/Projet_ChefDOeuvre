import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import axios from 'axios'
import NavBar from '../components/NavBar'
import { Document, Page } from "react-pdf";
export default function InsertCourses() {
    const [contenu, setContenu] = useState('')
    const [pdfUrl, setPdfUrl] = useState('');
    const user = JSON.parse(localStorage.getItem('Utilisateurs'));
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const Files = {
            ...data,
            idUtilisateur: user.id,
            nomUtilisateur: user.nomUtilisateur,
            date: new Date(),
        }
        axios
            .get(`http://localhost:3000/Files=${data.Files}`)
            .then((res) => {
                if (res.data.length > 0) {
                    toast.error("Ce document existe déjà, veuillez insérer un autre ou changer de nom")
                } else {

                }
            })
        axios
            .post(`http://localhost:3000/Files`, Files)
            .then((res) => {
                console.log(res);
                console.log(res.data.file, 'file');

                toast.success("Insertion réussie");
                reset();
            }).catch((err) => {
                console.log(err);
                toast.error("Une erreur est survenue lors de l'insertion")
            })
    }
    const handleFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const fileContent = reader.result;
            setContenu(fileContent); 
            console.log(fileContent, 'abc');
            setPdfUrl(fileContent);
            const formData = new FormData();
            formData.append('file', file); // Ajoutez le fichier au FormData
            console.log(formData, 'abc');
            axios.post('http://localhost:3000/Files', formData)
                .then((res) => {
                    console.log(res);
                    toast.success("Insertion réussie");
                    reset();
                })
                .catch((err) => {
                    console.error(err);
                    toast.error("Une erreur est survenue lors de l'insertion");
                });
        };

        if (file) {
            reader.readAsDataURL(file); // Lire le fichier en tant que données URL
        } else {
            setContenu('Aucun fichier');
        }
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className=' p-5'>

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
                <form onSubmit={handleSubmit(onSubmit)} accept='.pdf' action='file'>
                    <div className=' p-40'>
                        <TextField id="outlined-basic" multiline:true type='text' label="Description du document" variant="outlined" {...register("description", { required: "Veuillez donner une petite description de votre document", maxLength: { value: 150, message: "Votre description ne doit pas exéder 150 caractères" } })} />
                        {/* <TextField id="outlined-basic" label="Fichier pdf" accept="application/pdf" type='file' variant="outlined" {...register("file", {required:"Veuillez inserer un document"})} /> */}
                        <input type="file" name="file" id="file" onChange={handleFile} accept='.pdf' />
                        <Button sx={'background-color: rgb(23, 37, 84); margin-top:2em'} type='submit' fullWidth variant="contained">Inserer</Button>

                    </div>
                </form>
                <div className=' flex justify-center'>
                    {pdfUrl && <embed src={pdfUrl} width="500" height="400" type="application/pdf" />}
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
