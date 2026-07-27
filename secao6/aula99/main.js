function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
  if(this.saldo < valor){
    console.log('Saldo insuficiente');
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
}

Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function(){
  console.log(`Ag.: ${this.agencia}/ Conta: ${this.conta}/ Saldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
  if(valor > (this.saldo + this.limite)){
    console.log('Saldo insuficiente');
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
}

const conta1 = new Conta(101, 10, 100);
conta1.verSaldo();
conta1.depositar(10);
conta1.sacar(20);
conta1.sacar(1000);
console.log('--------------')

const contaCorrente1 = new ContaCorrente(100, 23, 100, 100);
contaCorrente1.verSaldo();
contaCorrente1.sacar(100);
contaCorrente1.sacar(100);