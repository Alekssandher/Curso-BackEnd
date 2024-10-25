const userService = require('../service/usuario.service')
const authService = require('../service/auth.service')

const createUser = async (req, res) => {
    try {
        const user = req.body
       
        if (!user.nome) {
            return res.status(400).send({message: "Campo nome vazio"})
        }
        
        if (!user.email) {
            return res.status(400).send({message: "Campo e-mail vazio"})
        }
        if (!user.senha) {
            return res.status(400).send({message: "Campo senha vazio"})
        }

        return res.status(201).send(await userService.createUser(user))

    }catch(error){
        console.log(`erro: ${error}`)
        return res.status(500).send({message: 'erro interno, tente novamente mais tarde'})
    }

}

const loginUser = async (req, res) => {
    try {
        const { email, senha } = req.body;
       
        if (!email) return res.status(400).send({message: "campo email vazio"})
        if (!senha) return res.status(400).send({message: "campo senha vazio"})
        
        const user = await authService.loginService(email)

        if (email != user.email || senha != user.senha ){
            return res.status(400).send({message: "usuario ou senha incorreto"})
        }

        return res.status(200).send(await userService.loginService(res, user))

    }catch(error){
        console.log(`erro usuario.controller: ${error}`)
        return res.status(500).send(`erro: ${error}`)
    }
}

const findAllUsers = async (req, res) => {
    try {
        
        return res.status(201).send(await userService.find())

    } catch (error) {
        console.log(`erro usuario.controller: ${error}`)
        return res.status(400).send({message: `erro interno, tente novamente mais tarde`})
    }
}
module.exports = {
    createUser,
    loginUser,
    findAllUsers
}