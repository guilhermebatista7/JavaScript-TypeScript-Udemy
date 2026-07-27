function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('teste', 120);
p1.aumento(100);
console.log(p1);

/*************************************************************************/

const p2 = {
  nome: 'teste2',
  preco: 200,
}

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100);
console.log(p2);