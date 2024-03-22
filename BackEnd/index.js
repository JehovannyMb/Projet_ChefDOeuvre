const express = require('express')

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Page principale')
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