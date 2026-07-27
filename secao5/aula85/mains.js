const numeros = [10, 12, 33, 54, 76];
const numerosDobro = numeros.map(el => el*2);
console.log(numerosDobro);

const pessoas = [
  {nome:'Guilherme', idade:20},
  {nome:'Yasmin', idade:20}
]
const apenasNome = pessoas.map(valor => valor.nome);

const pessoasId = pessoas.map((el, indice) => {
  const newEl = {...el};
  newEl.id = indice;
  return newEl;
})

const idadeAp = pessoas.map(obj => {
  const newObj = {...obj};
  return `Idade: ${newObj.idade}`;
})

console.log(apenasNome);
console.log(pessoasId);
console.log(idadeAp)