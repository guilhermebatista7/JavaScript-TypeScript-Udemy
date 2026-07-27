function criaPessoa(nome, sobrenome, idade){
    return{ nome, sobrenome,idade}
};

const pessoa1 = criaPessoa('Guilherme', 'Batista', 19);

console.log(pessoa1.nome);

const pessoa3 = {
    nome:'Luiz',

    fala(){
        console.log(`${this.nome} está falando oi`)
    }
};

pessoa3.fala();