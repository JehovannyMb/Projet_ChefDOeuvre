const express = require('express')
const { Pool} = require('pg');
const path = require('path')
const { table } = require('console');
const pool = new Pool({
    user: "admin",
    host: "localhost",
    database: "OO1",
    password: "admin",
    port: 3000
})
console.log("connexion à la base de données réussite")
const app = express();

const port = 3000;


app.set("view engine","ejs");
app.set("views",__dirname +"/views");
app.get('/',(req,res)=>{
    res.send('Page principale')
    // res.render('index');
})

app.post('/',(req,res)=>{
    const from = req.id=' de Jehovanny'
    const to = req.id=' à modifier'
    res.send('Page principale'+from+ ' ' + to)
})

app.put('/',(req,res)=>{
    res.send('La méthode put')
})

app.delete('/',(req,res)=>{
    res.send('La méthode delete')
})

app.listen(port, (req,res)=>{
    console.log('Serveur en marche')
})