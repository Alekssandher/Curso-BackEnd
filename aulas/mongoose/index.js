const mongoose = require('mongoose')
const express = require("express");
const empresa = require("./router/empresa.router");
const connectToDatabase = require("./database/database")

const app = express();
const port = 3000;

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

app.post("/login", async (req, res) => {
    const {email, senha} = req.body
    const user = await authService.loginService(email)

    if (!user){
        return res.status(400).send({message: "Usuario não encontrado"})
    }

    if (senha != user.senha) {
        return res.status(400).send({message: "Senha errada"})
    }
    
    await authService.findAllUsers()

    await authService.updateToken(email, token())
    
    return res.status(200).send(user)

    // res.send(user)
})

app.listen(port, () => {
    console.log(`Servidor https://localhost:${port}`)
});

const token = function() {
    let token = Math.random().toString(36).substring(2)
    return token
    
}
