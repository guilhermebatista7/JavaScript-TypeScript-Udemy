function Pessoa(nome, sobrenome){
    const id = 0;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }

    /* n funciona

    this.mostraSobrenome(){
        console.log(this.sobrenome)
    }

    */
}

const p1 = new Pessoa('Guilherme', 'Batista');
p1.metodo();
//console.log(id)
