const pessoas = [
  {id: 3, nome: 'Guilherme'},
  {id: 2, nome: 'Lucas'},
  {id: 1, nome: 'Eduardo'}
]

const novasPessoas = new Map();

for(const [index, pessoa] of pessoas.entries()){
  const {id} = pessoa;
  console.log(index);
  novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);
console.log(novasPessoas.get(3));