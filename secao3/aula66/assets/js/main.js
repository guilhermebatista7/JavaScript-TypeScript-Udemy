function relogio(){    
    let res = document.querySelector('#res');
    let data = new Date();
    let timer;
    data.setHours(0);
    data.setMinutes(0);
    data.setSeconds(0);

    

    document.addEventListener('click', function (e){
        const elemento = e.target;

        if(elemento.classList.contains('iniciar')){
            if (timer) return;
            
            timer = setInterval(function(){
                data.setSeconds(data.getSeconds()+1);
                res.innerHTML = data.toLocaleTimeString('pt-br', {
                hour12: false,
            });
            
            }, 1000)
        }

        if(elemento.classList.contains('pausar')){
            setTimeout(function(){
                clearInterval(timer);
            })
        }

        if(elemento.classList.contains('zezar')){
            data.setHours(0);
            data.setSeconds(0);
            data.setMinutes(0);

            res.innerHTML = data.toLocaleTimeString('pt-br', {
                hour12: false,
            });
        }
    })

}

relogio();















