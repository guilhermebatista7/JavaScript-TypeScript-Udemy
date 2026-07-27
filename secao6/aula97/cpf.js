console.log('Validando CPF');

export function validaCPF(cpf){
  cpf       = cpf.replace(/\D+/g, '');

  if(cpf.length > 11){
    return false;
  }

  const cpfArray  = Array.from(cpf);

  if(isSequencia(cpfArray)){
    return false;
  }

  let temp  = cpfArray.slice(0,9);
  const FDigCpf   = getFirstDigit(temp);
  temp.push(String(FDigCpf));
  const SDigitCpf = getSecondDigit(temp);
  temp.push(String(SDigitCpf));

  if(cpf === temp.join('')){
    return true;
  }

  return false;
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

//console.log(validaCPF('705.484.450-52'));
//console.log(validaCPF('467.993.008-08'));
//console.log(validaCPF('111.111.111-11'));

//705.484.450-52