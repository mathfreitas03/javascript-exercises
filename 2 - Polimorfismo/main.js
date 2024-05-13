function ContaBancaria(agencia, conta){
    this.agencia = agencia
    this.conta = conta
    this.saldo = 0
}

ContaBancaria.prototype.depositar = function (valorDeposito){
    this.saldo += valorDeposito
}

ContaBancaria.prototype.sacar = function (valorSacado){
    this.saldo = this.saldo >= valorSacado ? this.saldo - valorSacado : this.saldo
}

ContaBancaria.prototype.verSaldo = function (){
    return this.saldo
}

function ContaCorrente(agencia, conta, limite){
    ContaBancaria.call(this, agencia, conta)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valorSacado) {
    if(valorSacado > this.saldo || valorSacado > this.limite){
        console.log("Não foi possível concluir a operação")
        return
    }
    this.saldo -= valorSacado
}

function ContaPoupanca(agencia, conta, limite){
    ContaBancaria.call(this, agencia, conta)
    this.limite = limite
}

ContaPoupanca.prototype = Object.create(ContaBancaria.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

ContaPoupanca.prototype.sacar = function (valorSacado) {
    if(valorSacado > this.saldo * 0.1){
        console.log("Não é possível sacar valores maiores do que 10% do valor do saldo")
        return
    }
    this.saldo -= valorSacado
}

const c1 = new ContaBancaria('12/0', 123456)
const c2 = new ContaCorrente('12/1', 123467, 500)
const c3 = new ContaPoupanca('12/2', 123467)

c2.depositar(1000)
c2.sacar(1100)
console.log(c2)

c3.depositar(1000)
c3.sacar(101)
console.log(c3)