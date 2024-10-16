// Array de objetos que representa cartas com remetente, destinatário, conteúdo, assinatura e informações adicionais
const cartas = [
    // Carta 1
    {
        id: 1, // ID único da carta
        remetente: { // Dados do remetente
            endereco: "Rua Arnaldo José Berlino",
            estado: "PR",
            cidade: "Umuarama",
            cep: 87511074
        },
        destinatario: { // Dados do destinatário
            endereco: "Quadra 605 Norte Alameda 18",
            estado: "TO",
            cidade: "Palmas",
            cep: 77001756
        },
        conteudo: { // Conteúdo da carta
            assunto: "",
            texto: "",
        },
        assinatura: "assinatura", // Assinatura da carta
        data: new Date(2024, 10, 15), // Data de envio da carta
        selo: true, // Indica se a carta tem selo
        metodoEnvio: "Carta Registrada", // Tipo de envio
        codigoRastreio: "BR123456789SE" // Código de rastreamento
    },
    // Carta 2
    {
        id: 2, // ID único da carta
        remetente: { // Dados do remetente
            endereco: "Rua da Cioba",
            estado: "PB",
            cidade: "Cabedelo",
            cep: 58106022
        },
        destinatario: { // Dados do destinatário
            endereco: "Rua Teófilo Marinho",
            estado: "RO",
            cidade: "Porto Velho",
            cep: 76803838
        },
        conteudo: { // Conteúdo da carta
            assunto: "",
            texto: "",
        },
        assinatura: "assinatura", // Assinatura da carta
        data: new Date(2024, 8, 5), // Data de envio da carta
        selo: true, // Indica se a carta tem selo
        metodoEnvio: "PAC", // Tipo de envio
        codigoRastreio: "PA661572828BR" // Código de rastreamento
    }
]

// Função para buscar todas as cartas
const findAllLetters = (req, res) => {
    res.send(cartas) // Envia todas as cartas como resposta
}

// Função para buscar uma carta específica pelo ID
const findLetter = (req, res) => {
    const id = req.params.id // Pega o ID da carta a partir dos parâmetros da requisição

    let found = false // Variável para verificar se a carta foi encontrada
    // Percorre o array de cartas
    cartas.map(function(valor) {
        if (valor.id == id) { // Verifica se o ID bate com o da carta
            found = true // Marca como encontrada
            return res.send(valor) // Envia a carta correspondente
        }
    })
    if (!found) { // Se a carta não foi encontrada
        res.status(404).send({message: "Not found"}); // Envia uma resposta de erro 404
    }
}

const createLetter = (req, res) => {
    const letter = req.body

    function checkLetter(letter) {
        const requiredFields = ['id', 'remetente', 'destinatario', 'conteudo', 'assinatura', 'selo', 'metodoEnvio', 'codigoRastreio']
        const requiredChildren = [
            {parent: 'remetente', fields: ['endereco', 'estado', 'cidade', 'cep']},
            {parent: 'destinatario', fields: ['endereco', 'estado', 'cidade', 'cep'] },
            {parent: 'conteudo', fields: ['assunto', 'texto']}
        ]

        for (const field of requiredFields){
            if (!letter[field]){
                // Retorna 'false' se a validação falhar
                res.status(404).send({message: `O campo ${field} está vazio`})
                return false
            }
        }

        for (const child of requiredChildren){
            for (const field of child.fields){
                if (!letter[child.parent][field]){
                    // Retorna 'false' se a validação falhar
                    res.status(404).send({message: `O campo ${child.parent}.${field} está vazio`})
                    return false
                }
            }
        }
        // Retorna 'true' se a validação passar
        return true
    }

    // Verifica se a carta é válida antes de continuar
    if (!checkLetter(letter)) {
        return; // Se a validação falhar, interrompe a execução da função
    }

    cartas.push(letter) // Adiciona a nova carta ao array
    res.status(202).send(cartas) // Envia a lista de cartas atualizada como resposta
}


// Função para deletar uma carta pelo ID
const deleteLetter = (req, res) => {
    const id = req.params.id // Pega o ID da carta a ser deletada

    const index = cartas.findIndex((letter) => letter.id == id) // Encontra o índice da carta com o ID correspondente

    if (index === -1) { // Se a carta não for encontrada
        return res.status(404).send({ message: "Carta não encontrada" }) // Envia uma resposta de erro 404
    }

    cartas.splice(index, 1) // Remove a carta do array
    res.status(202).send(cartas) // Envia a lista de cartas atualizada
}

// Exporta as funções para serem usadas em outros módulos
module.exports = {
    findAllLetters,
    findLetter,
    createLetter,
    deleteLetter
}
