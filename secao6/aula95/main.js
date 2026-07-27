function Produto(nome, preco){
  this.nome  = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, peso, estoque){
  Produto.call(this,nome, preco);
  this.peso = peso;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function(){
      return estoque;
    },
    set: function(valor){
      estoque = valor;
    }
  })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 30, 'Preta');
camiseta.aumento(10);
camiseta.desconto(20);
console.log(camiseta);

const caneca = new Caneca('caneca', 100, 10, 0);
console.log(caneca.estoque);
caneca.estoque = 10;
console.log(caneca.estoque);