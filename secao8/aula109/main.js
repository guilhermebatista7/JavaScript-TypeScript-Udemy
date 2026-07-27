import { esperaAi } from "../aula108/main.js";

const promises = [
  //'Primeiro valor',
  esperaAi('PRIMEIRA PROMISE', 2),
  esperaAi('SEGUNDA PROMISE', 2),
  esperaAi('TERCEIRA PROMISE', 2),
  //'Último valor'
];

Promise.all(promises)
  .then(valor => console.log(valor))
  .catch((e) => console.log('Erro', e));

//console.log(promises);