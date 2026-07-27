function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*form.onsubmit = function(evento){
        evento.preventDefault();
    };*/

    function pessoa(nome, sobrenome, peso, altura){
        return{
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        }
    };

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        let info = pessoa(nome, sobrenome, peso, altura);
        pessoas.push(info);
        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome} ${sobrenome} </p>` + `<p> ${peso} ${altura} </p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

    
}

meuEscopo();