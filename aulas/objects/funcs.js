
function Conta(numeroConta, agencia, cpfTitular, saldo) {
    this.numeroConta = numeroConta,
    this.agencia = agencia,
    this.cpfTitular = cpfTitular,
    this.saldo = saldo,

    this.depositar = function(valor){
        this.saldo += valor
        return console.log(`Saldo atual: ${this.saldo}`)
    },

    this.sacar = function(valor){
        if (this.saldo < valor) {
            return console.log(`Seu saldo é de: ${this.saldo} e você está tentando sacar ${valor}`)
        }else {
            this.saldo -= valor
            return console.log(`Seu saldo atual é de ${this.saldo}`)
        }
        
        
        
    }
}

module.exports = {
    Conta
}