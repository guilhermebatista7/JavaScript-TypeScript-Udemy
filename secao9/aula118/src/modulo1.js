
export function geraCPF(){
  let cpf = Math.floor(100000000 + Math.random() * 900000000);
  cpf = String(cpf);

  const cpfArray  = Array.from(cpf);

  if(isSequencia(cpfArray)){
    return false;
  }

  const FDigCpf   = getFirstDigit(cpfArray);
  cpfArray.push(String(FDigCpf));
  const SDigitCpf = getSecondDigit(cpfArray);
  cpfArray.push(String(SDigitCpf));

  let pre = cpfArray.slice(0, 9);
  let end = cpfArray.slice(9, 11);

  pre = pre.join('');
  end = end.join('');

  pre = pre.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');

  cpf = pre + '-' + end;

  return cpf;
}

function getFirstDigit(cpfArray){
  let soma = cpfArray.reduce((acumulador, numero, index) => {
    return acumulador + (Number(numero * (10 - index)));
  }, 0);

  let res = (11 - (soma % 11)) < 10 ? (11 - (soma % 11)) : 0;

  return res;
}

function getSecondDigit(cpfArray){
  let soma = cpfArray.reduce((acumulador, numero, index) => {
    return acumulador + (Number(numero * (11 - index)));
  }, 0);

  let res = (11 - (soma % 11)) < 10 ? (11 - (soma % 11)) : 0;

  return res;
}

function isSequencia(cpfArray){
  return cpfArray.join('') === cpfArray[0].repeat(cpfArray.length);
}