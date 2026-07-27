function somar(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}

somar(1, 3, 2, 4);

//Desestruturação objeto
function des({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Guilherme', sobrenome: 'Batista', idade: 19};
des(obj);

//Desestruturação array
function desArray([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
let array = [1, 3, 4];
desArray(array);

//Utilização do resto dos parâmetros
const conta = function(operador, acumulador, ...numeros){
    console.log(arguments)
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};

conta('+', 0, 10, 20, 30, 40);

//Dica: usar rest operator ao invés de arguments quando não der
const resultado = (...args) =>{
    console.log(args);
}

resultado('Guilherme', 20, 50, 198);