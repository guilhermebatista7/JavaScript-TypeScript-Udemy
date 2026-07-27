const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Batista'
}

const pessoa2 = new Object();
pessoa2.nome = 'Guilherme';
pessoa2.sobrenome = 'Batista';
pessoa2.falar = function() {
    console.log(`${this.nome} está falando`);
}

pessoa2.falar();
