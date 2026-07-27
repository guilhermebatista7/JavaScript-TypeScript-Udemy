const num = Number(prompt('Digite um número'));
const numTitulo = document.getElementById('numero');
const textoDiv = document.getElementById('texto');

numTitulo.innerHTML = num;
textoDiv.innerHTML = `<p>Raíz quadrada: ${Math.sqrt(num)}</p></br>`;

textoDiv.innerHTML += `<p> ${num} é inteiro: ${Number.isInteger(num)}</p></br>`;

textoDiv.innerHTML += `<p> ${num} é NaN: ${Number.isNaN(num)}</p></br>`
textoDiv.innerHTML += `<p> Arredondando para cima: ${Math.ceil(num)}</p></br>`
textoDiv.innerHTML += `<p> Arredondando para baixo: ${Math.floor(num)}</p></br>`
textoDiv.innerHTML += `<p> Com duas casa decimais: ${num.toFixed(2)}</p></br>`;

