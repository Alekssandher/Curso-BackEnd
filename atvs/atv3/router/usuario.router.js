const usuario = require('../controller/usuario.controller')

const router = require('express').Router()

router.post('/createUser', usuario.createUser)
router.post('/loginUser', usuario.loginUser)

module.exports = router