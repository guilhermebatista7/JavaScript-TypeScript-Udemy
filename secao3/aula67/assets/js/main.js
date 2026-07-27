let inputTarefa = document.querySelector('.novaTarefa');
let addTarefa = document.querySelector('.addTarefa');
const lista = document.querySelector('.listaTarefa');

function criarLi(){
    const li = document.createElement('li');
    return li;
}

function criarTarefa(tarefa){
    const li = criarLi();
    li.textContent = tarefa;
    lista.appendChild(li);
    limparCampo();
    criarBotaoApagar(li);
    salvarTarefa();
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    let botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'botaoApagar')
    
    li.appendChild(botaoApagar);
}

function limparCampo(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

addTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
})

//tecla enter no input
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa);
    }
})

document.addEventListener('click', function(button){
    let b = button.target;
    if(b.classList.contains('botaoApagar')){
        b.parentElement.remove();
        salvarTarefa();
    }
    
})

function salvarTarefa(){
    const listaTarefa = lista.querySelectorAll('li');
    const arraylista = [];

    for(let i=0; i < listaTarefa.length; i++){
        arraylista.push(listaTarefa[i].childNodes[0].data.trim());
    }
    const tarefasJSON = JSON.stringify(arraylista);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const arraylista = JSON.parse(tarefas);

    for(let tarefa of arraylista){
        criarTarefa(tarefa);
    }
}

addTarefasSalvas()