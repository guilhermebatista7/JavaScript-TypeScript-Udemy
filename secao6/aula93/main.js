function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function(){
        return this.nome + 'aaa ' + this.sobrenome;
    }
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Guilherme', 'Batista');
console.log(p1.nomeCompleto());