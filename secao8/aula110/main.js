function rand(min, max){
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

export function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof(msg) !== 'string'){
      return reject('BAD Value');
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

async function executar(){
  const fase1 = await esperaAi('Fase 1 ok', rand(1, 3));
  console.log(fase1);
  const fase2 = await esperaAi('Fase 2 ok', rand(1, 3));
  console.log(fase2);
  const fase3 = await esperaAi('Fase 3 ok', rand(1, 3));
  console.log(fase3);
}
executar();