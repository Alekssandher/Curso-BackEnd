const Usuario = require('../model/usuario')
const authService = require('../service/auth.service')

const createUser = (user) => {
    return Usuario.create(user)
}
const loginService = (res, user) => {
    
    try {
        let secret = generateLocalToken()

        let token = authService.generateToken(user.id, secret)

        return {user, token}

    } catch (error) {
        console.log(`erro usuario.service: ${error}`)
        return res.status(500).send({message: "erro interno, tente novamente mais tarde"})
    }
}

const find = () => {
    return Usuario.find()
}

const generateLocalToken = function() {
    let token = Math.random().toString(36).substring(2)
    return token
    
}
module.exports ={
    createUser,
    loginService,
    find
}