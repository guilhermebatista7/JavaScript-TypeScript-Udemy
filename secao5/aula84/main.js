const numeros = [5, 50, 21, 10, 20, 34, 7, 88];
const numerosFilt = numeros.filter(el => el > 10);
//const numerosFilt = numeros.filter((el) => return el > 10);
console.log(numerosFilt);



const nomes = [
  {nome:'Guilherme', idade: 20},
  {nome:'Yasmin', idade: 20},
  {nome:'João', idade: 10}
]

const nomesGrandes = nomes.filter(valor => valor.nome.length >= 5);
const pessoasOld = nomes.filter(valor => valor.idade >= 18);
const terminaE = nomes.filter(valor => valor.nome.slice(-1) == 'e');
//const terminaE = nomes.filter(valor => valor.nome.toLowerCase().endsWith('e'));
console.log(nomesGrandes);
console.log(pessoasOld);
console.log(terminaE);