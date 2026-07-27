const pessoa = {
  nome: 'Guilherme',
  idade: 20, 
  profissao: 'dev'
} 

const pessoa2 = {...pessoa};

console.log(Object.getOwnPropertyDescriptor(pessoa2, 'nome'));
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

for(let [chave, valor] of Object.entries(pessoa)){
  console.log(chave, valor);
}