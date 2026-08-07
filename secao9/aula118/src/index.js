import "../public/assets/css/style.css"
import {geraCPF} from "./modulo1";

window.document.addEventListener('click', function(e){
  if(e.target.classList.contains('geraCpf')){
    buscarCpf();
  }
})

function buscarCpf(){
  const res = document.getElementById('res');
  res.innerHTML = geraCPF();
}

