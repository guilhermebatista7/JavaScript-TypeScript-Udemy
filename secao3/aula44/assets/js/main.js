function escopo() {

    let form = document.querySelector(`.form`);
    let resultado = document.querySelector('#resultado');

    function recebeEvento(evento) {
        evento.preventDefault();
        let peso = Number(form.querySelector('#peso').value);
        let altura = Number(form.querySelector('#altura').value);

        Validacao(peso, altura);

    }

    form.addEventListener('submit', recebeEvento);

    function Validacao(peso, altura) {

        if (peso != '' && altura != '') {

            console.log(typeof(peso), typeof(altura));

            if (isNaN(peso) || isNaN(altura)) {
                resultado.innerHTML = "Utilize apenas números"
            } else {
                
                if (peso > 0 && altura > 0) {
                    calculoImc(peso, altura);
                } else {
                    resultado.innerHTML = "Digite valores positivos"
                }
            }

        } else {

            if (peso == '' && altura != '') {
                resultado.innerHTML = "Digite um peso válido";
            }
            if (peso != '' && altura == '') {
                resultado.innerHTML = "Digite uma altura válida";
            }
            if (peso == '' && altura == '') {
                resultado.innerHTML = "Digite dados válidos";
            }
        }
    }

    function calculoImc(peso, altura) {
        let imc = peso / altura ** 2

        if (imc < 18.5) {
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} | Abaixo do peso`;
        }
        if (imc >= 18.5 && imc < 24.9) {
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} | Peso normal`;
        }
        if (imc >= 25 && imc < 29.9) {
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} | Sobrepeso`;
        }
        if (imc >= 30 && imc < 34.9) {
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} | Obesidade grau 1`;
        }
        if (imc >= 35 && imc < 39.9) {
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} | Obesidade grau 2`;
        }
        if (imc >= 40) {
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} | Obesidade grau 3`;
        }
    }

}

escopo();