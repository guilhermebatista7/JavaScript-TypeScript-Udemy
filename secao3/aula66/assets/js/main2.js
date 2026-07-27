//Ex comm limitação de timer

function relogio(){    
    const res = document.querySelector('#res');
    let segundos = 0;
    let timer = null;
    let rodando = false;

    function atualizarDisplay(){
        const data = new Date(segundos * 1000);
        res.innerHTML = data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    document.addEventListener('click', function (e){
        const elemento = e.target;

        // INICIAR
        if(elemento.classList.contains('iniciar')){
            
            if (rodando) return; // impede múltiplos timers
            
            rodando = true;

            timer = setInterval(function(){
                segundos++;
                atualizarDisplay();
            }, 1000);
        }

        // PAUSAR
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            rodando = false;
        }

        // ZERAR
        if(elemento.classList.contains('zerar')){
            clearInterval(timer);
            rodando = false;
            segundos = 0;
            atualizarDisplay();
        }
    });

    atualizarDisplay();
}

relogio();