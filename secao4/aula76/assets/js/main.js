let conta = document.querySelector('#conta');

document.addEventListener('click', (e)=>{
    let alvo = e.target;
    if(alvo.classList.contains('operador')){
        let valor = alvo.innerText;
        displayConta(valor);
    }
    if(alvo.classList.contains('backspace')){
        delCaractere();
    }
    if(alvo.classList.contains('limpar')){
        limpar();
    }
    if(alvo.classList.contains('total')){
        total();
    }

}
)

function displayConta(valor){
    conta.innerText += valor;
}

function delCaractere(){
    conta.innerText = conta.innerText.slice(0, -1);
}

function limpar(){
    conta.innerText = '';
}

function total(){
    try {
        let expr = conta.innerText;

        if (!expressaoValida(expr)) {
            throw new Error("Expressão inválida!");
        }

        let resultado = eval(expr);
        conta.innerText = resultado;

    } catch (erro) {
        conta.innerText = "Erro";
    }
}

function expressaoValida(expr) {
    return /^[0-9+\-*/().\s]+$/.test(expr);
}