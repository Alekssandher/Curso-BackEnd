
const Pessoa = {
    nome: "Alek",
    sobrenome: "Max",
    altura: 1.67,
    idade: 19,

    envelhecer: function(anos){
        return this.idade += anos
    }
};

console.log(typeof(Pessoa));
console.log(Pessoa.envelhecer(3));