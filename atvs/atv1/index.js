
class Usuario {
    constructor (nome, sobrenome, dataDeNascimento, email, senha, idade, id){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.dataDeNascimento = dataDeNascimento,
        this.email = email,
        this.senha = senha,
        this.idade = idade,
        this.id = id

    }    

}

const usuarios = []
usuarios.push(new Usuario("Alekssandher", "Max", 2005, "alekssandher1@hotmail.com", 237843, 19, 1))

const json = JSON.stringify(usuarios[0])
console.log("Classes: ", usuarios[0])

console.log(`Json: ${json}`)