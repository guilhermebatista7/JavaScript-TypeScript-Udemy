const numeros = [5, 50, 80, 1, 2, 3, 27]
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0)

console.log(total);