// Importa o módulo 'carta.controller', onde as funções de manipulação de cartas estão definidas
const carta = require("../controller/carta.controller")

// Cria uma nova instância do router do Express para lidar com as rotas da aplicação
const router = require("express").Router()

// Cria as rotas
router.get("/findAllLetters", carta.findAllLetters)
router.get("/findLetter/:id", carta.findLetter)
router.post("/createLetter", carta.createLetter)
router.get("/deleteLetter/:id", carta.deleteLetter)

//Exporta o router para ser usado noutros lugares
module.exports = router