const numeros = [5, 50, 37, 65, 78, 10];
const numerosPares = numeros.filter(el => el % 2 == 0);
const dobroPares = numerosPares.map(el => el * 2);
const somaPares = dobroPares.reduce((valAnterior, valAtual) => {
  valAnterior += valAtual;
  return valAnterior;
}, 0);

console.log(somaPares);

/* Outra forma
const numerosPares = numeros
  .filter(el => el % 2 == 0)
  .map(el => el * 2)
  .reduce((acc, valor) => ac + valor);

  console.log(numerosPares);
*/