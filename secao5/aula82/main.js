const nomes = ['Guilherme', 'Batista', 'Yasmin', 'João', 'Maria'];
const removidos = nomes.splice(3, 2);
// nomes.aplice(1, Number.MAX_VALUE);
console.log(removidos);
console.log(nomes);

nomes.splice(1, 1, 'Souza');
console.log(nomes);