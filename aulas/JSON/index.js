

const json = `{"nome": "Alek","idade": 19,"professor": true, "turmas": [12,33,4,7] }`
const obj = JSON.parse(json)


const Pessoa = {
    nome: "Alk",
    sobrenome: "Max",
    idade: 19,
    altura: 1.67
}

const json2 = JSON.stringify(Pessoa)
obj.turmas.map( function(valor, position){
    console.log(`posição: ${position} valor: ${valor}`)
})

obj.salario = 1000

console.log(obj.salario)
