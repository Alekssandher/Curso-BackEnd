
const empresas = [
    {
        id: 1,
        nome: "empresa 1",
        numFuncionarios: 100
    },
    {
        id: 2,
        nome: "empresa 2",
        numFuncionarios: 20
    },
    {
        id: 3,
        nome: "empresa 3",
        numFuncionarios: 55
    }
];

const findAllEmpresas = (req, res) => {
    res.send(empresas);
    
};

const find = (req, res) => {
    const id = req.params.id;

    let found = false;

    empresas.map(function(valor){
        
        if(valor.id == id){
            found = true;
            return res.send(valor);
            
        }
    });
    if (!found){
        res.status(404).send({message: "Not found"});
    }
    
};

const createEmpresa = (req, res) => {

    const empresa = req.body;

    if (Object.keys(empresa).length === 0) {
        return res.status(400).send({message: "Corpo da mensagem vazio!"});
    };

    if (!empresa.id){
        return res.status(400).send({message: "Campo ID não encontrado"});
    };

    if (!empresa.nome){
        return res.status(400).send({message: "Campo nome não encontrado"});
    };

    if (!empresa.numFuncionarios){
        return res.status(400).send({message: "Campo numFuncionarios não encontrado"});
    };

    empresa.nacionalidade = "BR";
    
    empresas.push(empresa);

    res.status(201).send(empresas);

};

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa
};