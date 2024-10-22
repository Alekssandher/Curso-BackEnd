const Usuario = require("../model/usuario")

const loginService = (email) => Usuario.findOne({email})
const updateToken = (userEmail, userToken) => { 

    const filter = {email: userEmail}
    const update = {token: userToken}

    console.log("User updated")
    return Usuario.findOneAndUpdate(filter, update)
}
const findAllUsers = () => {
    console.log("Users found")
    return Usuario.find()
    
} 
module.exports = {
    loginService,
    updateToken,
    findAllUsers
}