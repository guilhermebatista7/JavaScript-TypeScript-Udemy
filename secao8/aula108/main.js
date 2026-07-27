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

/*
esperaAi(1, rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados no banco', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Trtando dados', 2);
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados')
  })
  .catch((e) => {
    console.log('Error: ', e);
  })

*/