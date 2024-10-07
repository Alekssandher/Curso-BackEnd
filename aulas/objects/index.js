const { Conta } = require("./funcs");

var contas = []

contas.push(new Conta(12345, 1, "123.123.123-01", 100))

console.log(contas[0].saldo)

contas[0].depositar(600)

contas[0].sacar(520)
