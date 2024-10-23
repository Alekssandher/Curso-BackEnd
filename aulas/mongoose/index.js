const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const express = require("express");
const empresa = require("./router/empresa.router");

const connectToDatabase = require("./database/database")

const app = express();
const port = 3000;
const secret = 'sda2sc4qdasd14sdf2'
const authService = require('./service/auth.service')


app.use(express.json());
app.use("/empresa", empresa);

mongoose.connect('mongodb://localhost:27017/Empresa')

app.get("/", (req, res) => {
    res.send("Hello world")
    console.log(token())
});

app.get("/contato", (req, res) => {
    res.send("contato p")
});
app.get("/testeToken", (req, res) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).send({message: "O token não foi informado"})
    }

    const parts = authHeader.split(" ")

    if (parts.length !== 2) {
        return res.status(401).send({message: "Token é inválido"})
    }

    const [schema, token] = parts

    if (!/^Bearer$/i.test(schema)){
        return res.status(401).send({message: "Token mal-formatado"})
    }

    jwt.verify(token, secret, (error, decoded) => {
        console.log(decoded)
        res.send(decoded)

        if (error) {
            console.log(`erro: ${error}`)
            return res.status(500).send({message: "Erro interno, tente novamente"})
        }
    })

   
})
app.post("/login", async (req, res) => {
    const {email, senha} = req.body
    const user = await authService.loginService(email)
    
    if (!user){
        return res.status(400).send({message: "Usuario não encontrado"})
    }

    if (senha != user.senha) {
        return res.status(400).send({message: "Senha errada"})
    }

    let token = await authService.generateToken(user.id, secret)

    return res.status(200).send({user, token})

    // res.send(user)
})

app.listen(port, () => {
    console.log(`Servidor https://localhost:${port}`)
});

const token = function() {
    let token = Math.random().toString(36).substring(2)
    return token
    
}
