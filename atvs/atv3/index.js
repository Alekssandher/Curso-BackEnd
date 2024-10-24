const express = require('express')
const mongoose = require('mongoose')
const usuario = require('./router/usuario.router')
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/')
app.use(express.json())
app.use('/usuario', usuario)

app.get("/home", (req, res) => {
    res.send("Home page")
})

app.get('/', (req, res) => {
    res.send('Raiz')
})

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost${port}`)
})