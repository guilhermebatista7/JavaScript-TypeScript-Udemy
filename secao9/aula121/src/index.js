import "../public/assets/css/style.css"
import { geraSenha } from "./modulo1";

window.document.addEventListener('click', function (e) {
  if (e.target.classList.contains('senha')) {
    formarSenha();
  }
})

function formarSenha() {
  let numLines = window.document.querySelector(`#numLines`).value;
  let addNum   = window.document.querySelector(`#addNum`).checked;
  let addUpper = window.document.querySelector(`#addUpper`).checked;
  let addLower = window.document.querySelector(`#addLower`).checked;
  let addSpecial = window.document.querySelector(`#addSpecial`).checked;

  console.log(addLower, addSpecial);
  const res = document.getElementById('res');
  res.innerHTML = geraSenha(numLines, addNum, addUpper,addLower, addSpecial);
}

