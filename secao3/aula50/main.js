let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
console.log('------------------------');

const numeros = [10, 20, 30, 40, 50, 60];
const [primeiro, segundo, , quarto, ...resto] = numeros;
console.log(primeiro, segundo, quarto);
console.log(resto);

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let [,,[,oitavo]] = nums;
console.log(oitavo);