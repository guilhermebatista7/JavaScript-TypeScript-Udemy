const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Batista',
    idade: 19,
    endereco: {
        rua: 'Brasil',
        numero: 0
    }
};

const {nome: teste, sobrenome, idade, peso = 'não tem', endereco, endereco: {rua, numero}} = pessoa;
console.log(teste, sobrenome, idade, peso, rua, numero);

const {nome, ...resto} = pessoa;
console.log(resto);