export function geraSenha(numLines, addNum, addUpper, addLower, addSpecial) {
  if(numLines <= 5 || (!addNum && !addLower && !addUpper && !addSpecial)){
    alert('Indique ao menos 5 caracteres e uma opção');
    return;
  }

  let senha = '';

  while(numLines > 0){
    if(numLines > 0 && addNum){
      senha += randomNum();
      numLines --;
    }
    if(numLines > 0 && addUpper){
      senha += UpperLetter();
      numLines --;
    }
    if(numLines > 0 && addLower){
      senha += LowerLetter();
      numLines --;
    }
    if(numLines > 0 && addSpecial){
      senha += randomSpecial();
      numLines --;
    }
  }

  return senha;
}

function randomNum(){
  const nums = '0123456789';
  const indice = Math.floor(Math.random() * nums.length);

  return nums[indice];
}

function LowerLetter(){
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const indice = Math.floor(Math.random() * letters.length);

  return letters[indice];
}

function UpperLetter(){
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const indice = Math.floor(Math.random() * letters.length);

  return letters[indice];
}

function randomSpecial(){
  const specials = "'!@#$%&*()-_=+{}[]`´^~?|"
  const indice = Math.floor(Math.random() * specials.length);

  return specials[indice];
}