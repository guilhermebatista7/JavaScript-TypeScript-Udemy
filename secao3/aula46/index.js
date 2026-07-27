let umDia = 60 * 60 * 24 * 1000; //são usados milissegundos
const data = new Date(1555784067000);
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.getTime()) // milissegundos desde a data 01/01/1970 até a data informada

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(dataTeste.getDate());
    const mes = zeroEsquerda(dataTeste.getMonth() + 1);
    const ano = dataTeste.getFullYear();
    const hora = zeroEsquerda(dataTeste.getHours());
    const min = zeroEsquerda(dataTeste.getMinutes());
    const seg = zeroEsquerda(dataTeste.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataTeste = new Date();
const dataBrasil = formataData(dataTeste);
console.log(dataBrasil)