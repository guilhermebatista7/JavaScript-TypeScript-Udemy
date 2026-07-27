function saudacao(nome){
    console.log(`Bom dia ${nome}`);
    return 123;
}

saudacao("Guilherme");

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

console.log(soma());

//função anônima

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));

//Arrow function
/*const raizQ = (n) => {
    return n ** 0.5;
};*/

const raizQ = n => n ** 0.5;

console.log(raizQ(16));