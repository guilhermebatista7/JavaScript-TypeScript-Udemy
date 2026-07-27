const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
alunos[4] = "Guilherme";

console.log(alunos.length);

alunos.push('Lucas');
alunos.unshift('Eduardo');
alunos.pop();
alunos.shift();
console.log(alunos);

console.log(alunos.slice(0,3));
