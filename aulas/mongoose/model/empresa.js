const mongoose = require('mongoose')

const empresaSchema = new mongoose.Schema({
    nome: {type: String, unique: true, required: true},
    numFuncionarios: {type: Number, unique: false, required: true},
    nacionalidade: {type: String, required: false}
})
const Empresa = mongoose.model('Empresa', empresaSchema)

module.exports = Empresa