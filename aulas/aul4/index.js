
// const Pessoa = {
//     nome: "Alek",
//     sobrenome: "Max",
//     altura: 1.67,
//     idade: 19,

//     envelhecer: function(anos){
//         return this.idade += anos
//     }
// };

// console.log(typeof(Pessoa));
// console.log(Pessoa.envelhecer(3));

function novaPessoa(nome, sobrenome, altura, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.altura = altura, 
    this.idade = idade
};

const Pessoa = new novaPessoa("Mell", "P", 1.70, 15);
var Pessoas = [];

Pessoas.push(new novaPessoa("Alek", "Max", 1.67, 19));
Pessoas.push(new novaPessoa("Mell", "P", 1.70, 15));

console.log(Pessoas);