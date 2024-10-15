
const cartas = [
    // Item 1
    {
        id: 1,
        remetente: {
            endereco: "Rua Arnaldo José Berlino",
            estado: "PR",
            cidade: "Umuarama",
            cep: 87511074
        },
        destinatario: {
            endereco: "Quadra 605 Norte Alameda 18",
            estado: "TO",
            cidade: "Palmas",
            cep: 77001756
        },
        conteudo: {
            assunto: "",
            texto: "",
            
        },
        assinatura: "assinatura",
        data: new Date(2024, 10, 15),
        selo: true,
        metodoEnvio: "Carta Registrada",
        codigoRastreio: "BR123456789SE"

    },
    //Iem 2
    {
        id: 2,
        remetente: {
            endereco: "Rua da Cioba",
            estado: "PB",
            cidade: "Cabedelo",
            cep: 58106022
        },
        destinatario: {
            endereco: "Rua Teófilo Marinho",
            estado: "RO",
            cidade: "Porto Velho",
            cep: 76803838
        },
        conteudo: {
            assunto: "",
            texto: "",
            
        },
        assinatura: "assinatura",
        data: new Date(2024, 8, 5),
        selo: true,
        metodoEnvio: "PAC",
        codigoRastreio: "PA661572828BR"

    }
]

const findAllLetters = (req, res) => {
    res.send(cartas)
}

const findLetter = (req, res) => {
    const id = req.params.id

    let found = false
    cartas.map(function(valor){
        if (valor.id == id){
            found = true
            return res.send(valor)
        }
    })
    if (!found){
        res.status(404).send({message: "Not found"});
    }

}
const createLetter = (req, res) => {
    const letter = req.body
   

    function checkLetter(letter) {
        const requiredFields = ['id', 'endereco', 'remetente', 'destinatario', 'assinatura', 'selo', 'metodoEnvio', 'codigoRastreio']
        for (const field of requiredFields){
            if (!letter[field]){
                return res.status(404).send({message: `O campo ${field} está vazio`})
            }
        }
    }
    checkLetter(letter)

    cartas.push(letter)
    res.status(202).send(cartas)
}
const deleteLetter = (req, res) => {
    
    const id = req.params.id
    const index = cartas.findIndex((letter) => letter.id == id)

    if (index === -1) {
        return res.status(404).send({ message: "Carta não encontrada" })
    }
    cartas.splice(index, 1)

    res.send(cartas)
   
   
}
module.exports = {
    findAllLetters,
    findLetter,
    createLetter,
    deleteLetter
}