const Usuario = require('../model/usuario')
const jwt = require('jsonwebtoken')

const loginService = (email) => Usuario.findOne({email})

const updateToken = (userEmail, userToken) => {
    const filter = {email: userEmail}
    const update = {token: userToken}

    console.log("User updated")
    return Usuario.findOneAndUpdate(filter, update)

}

const findAllUsers = () => {
    console.log('users found')
    return Usuario.find()
}

const generateToken = (userId, secret) => {
    return jwt.sign(userId, secret)
}

module.exports = {
    loginService,
    updateToken,
    findAllUsers,
    generateToken
}