const nome = ['Guilherme', 'Yasmin', 'Batista'];
console.log(nome);
nome[2] = 'João';
delete nome[2];
console.log(nome);

console.log('--------------');

const arr = [1, 2, 3];
const novo = arr;
// const novo = [...arr]
const removido = novo.pop();
console.log(removido);
console.log(arr);
console.log(arr.length);
arr.push(4);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

console.log('----------------');
const cod = [10, 20, 30, 40];
const novoCod = cod.slice(0, -1);
console.log(novoCod);

console.log('----------------');
const ident = "Guilherme Batista de Souza";
const novoIdent = ident.split(' ');
console.log(novoIdent);
const arrNome = [ 'Guilherme', 'Batista', 'de', 'Souza' ];
const oldIdent = arrNome.join(' ');
console.log(oldIdent);