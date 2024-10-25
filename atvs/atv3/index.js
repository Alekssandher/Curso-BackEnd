const express = require('express')
const mongoose = require('mongoose')
const usuario = require('./router/usuario.router')
const userService = require('./service/usuario.service')
const authService = require('./service/auth.service')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/empresa')

app.use(express.json())

app.use('/home', usuario)

app.get('/', (req, res) => {
    res.send("hello world")
    
})

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost${port}`)
})

