
const empresaService = require('../service/empresa.service')
const mongoose = require('mongoose')

const findAllEmpresas = async (req, res) => {
    res.status(200).send(await empresaService.findAllEmpresa());
    
};

const find = async (req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)


        let found = false;
        const empresa = await empresaService.findByIdEmpresa(id)

        if (empresa != null){
            found = true
        }

        if (!found){
            return res.status(404).send({message: "Empresa não encontrada, tente outro id"})
        }
        
        return res.status(200).send(await empresaService.findByIdEmpresa(id))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send("Erro no servidor, tente novamente mais tarde")
    }
    
};

const createEmpresa = async (req, res) => {

    const empresa = req.body;

    if (Object.keys(empresa).length === 0) {
        return res.status(400).send({message: "Corpo da mensagem vazio!"});
    };

    if (!empresa.nome){
        return res.status(400).send({message: "Campo nome não encontrado"});
    };

    if (!empresa.numFuncionarios){
        return res.status(400).send({message: "Campo numFuncionarios não encontrado"});
    };


    return res.status(201).send(await empresaService.createEmpresa(empresa));

};

const deleteEmpresa = async (req, res) => {
    const id = req.params.id

    return res.status(200).send(await empresaService.deleteEmpresa(id))
}

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa,
    deleteEmpresa
};