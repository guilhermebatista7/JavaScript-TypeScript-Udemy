const nome = 'Guilherme';
const nomes = ['Guilherme', 'Yasmin', 'Guilherme'];

for(let i in nome){
    console.log(i, nome[i]);
}

for(let i in nomes){
    console.log(i, nomes[i]);
}

console.log('----------------');

for(let valor of nome){
    console.log(valor);
}

for(let valor of nomes){
    console.log(valor);
}

console.log('----------------');

let num = 10;
num = String(num);

for(let i in num){
    console.log(num[i]);
}

console.log('----------------');

nomes.forEach(function(valor, indice){
    console.log(valor, indice);
} );