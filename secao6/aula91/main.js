function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        //value: estoque,   //valor
        //writable: true,   //valor pode ser alterado
        configurable: true, //estrutura pode ser alterada
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new Error;
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto('Camisa', 100, 10);
p1.estoque = 90;
console.log(p1.estoque);