const usuarioService = require('../service/usuario.service')
const mongoose = require('mongoose')

const createUser = async (req, res) => {
    try {
        const user = req.body
        if (!user.email) {
            return res.status(400).send({message: "Campo e-mail vazio"})
        }
        if (!user.senha) {
            return res.status(400).send({message: "Campo senha vazio"})
        }

        return res.status(201).send(await usuarioService.createUser(user))

    }catch(error){
        console.log(`erro: ${err}`)
        return res.status(500).send("Erro no servidor")
    }

}

const loginUser = async (req, res) => {
    const {email, senha} = req.body
    const user = await authService.loginService(email)

    try {
        if (senha != user.senha || !user) {
            return res.status(400).send({message: "usuario ou senha errados"})
        }
        let token = await authService.generateToken(user.id, secret)

        return res.status(200).send({user, token})
    }catch(error){
        console.log(`erro: ${error}`)
        return res.status(400).send({message: "Erro interno, tente novamente"})
    }
}

module.exports = {
    createUser,
    loginUser
}