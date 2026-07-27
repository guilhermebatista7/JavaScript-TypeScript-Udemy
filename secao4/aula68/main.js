//Declara função (hoisting)
function falaOi(){
    console.log('Olá')
}

//FirstClass objects 
//Function expression
const souUmDado = function(){
    console.log('Sou um dado');
}
souUmDado();

//podemos passar para outra função
function executa(funcao){
    funcao();
}
executa(souUmDado);

//Arrow functions
const arrow = () =>{
    console.log('Sou uma arrow function');
}
arrow();

//Dentro de obj
const obj = {
    falar(){
        console.log('Estou falando');
    }
}
obj.falar();