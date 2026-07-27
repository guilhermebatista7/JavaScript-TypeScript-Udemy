function Produto(nome, preco, estoque, cor, cliente){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque,   //valor
        writable: true,   //valor pode ser alterado
        configurable: true, //estrutura pode ser alterada
    });

    Object.defineProperties(this, {
        cor: {
            enumerable: true,
            value: cor,
            writable: true,
            configurable: false
        },
        cliente:{
            enumerable: true,
            value: cor,
            writable: true,
            configurable: false
        }
    })
}

const p1 = new Produto('Camisa', 100, 10);
p1.value = 90;
console.log(p1);