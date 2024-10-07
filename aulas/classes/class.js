class Pessoa {
    constructor (nome, idade, genero, altura){
        this.nome = nome,
        this.idade = idade,
        this.genero = genero, 
        this.altura = altura
    }
}

class Professor extends Pessoa{
    constructor (nome, idade, genero, altura, salario, turmas){
        super (
            nome,
            idade,
            genero,
            altura
        )
        this.salario = salario,
        this.turmas = turmas
    }
}

const professores = []
professores.push(new Professor("Alek", 19, "M", 1.67, 2300, 12))

console.log(professores[0])