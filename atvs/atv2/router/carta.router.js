
const carta = require("../controller/carta.controller")

const router = require("express").Router()

router.get("/findAllLetters", carta.findAllLetters)
router.get("/findLetter/:id", carta.findLetter)
router.post("/createLetter", carta.createLetter)
router.get("/deleteLetter/:id", carta.deleteLetter)

module.exports = router