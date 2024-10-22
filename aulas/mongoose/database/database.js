const mongoose = require('mongoose')

function connectToDatabase(res) {
    mongoose.connect('mongodb://localhost:27017/Cats')

    const catSchema  = {
        "nome": String,
        "idade": Number,
        "genero": String,
        "porte": String,
        "peso": Number,
        "docil": Boolean
    }

    const Cat = mongoose.model('Cat', catSchema)
    const catInfo = {
        nome: "Paçoca",
        idade: 4,
        genero: "M",
        porte: "Pequeno",
        peso: 4.3,
        docil: false
    }

    const catCreated = new Cat(catInfo)

    catCreated.save().then(() => console.log("Cata savend in database"))

    res.send("Cat saved")
}

module.exports = connectToDatabase