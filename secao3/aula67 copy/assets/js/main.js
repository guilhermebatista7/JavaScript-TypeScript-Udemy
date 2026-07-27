let inputTarefa = document.querySelector('.inputTarefa');
let listaTarefas = document.querySelector('.listaTarefa');
let btnAddTarefa = document.querySelector('.addTarefa');

btnAddTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
})

function criarTarefa(tarefa){
    let li = criarLi();
    li.textContent = tarefa + " ";
    listaTarefas.appendChild(li);

    criarBtnDeletar(li);
    limparInput();
    salvarTarefa();
}

function criarLi(){
    let li = document.createElement('li');
    return li;
}

function criarBtnDeletar(li){
    let btn = document.createElement('button');
    btn.textContent = "Deletar";
    btn.classList = "btnDeletar"
    li.appendChild(btn);
}

function limparInput(){
    inputTarefa.value = "";
    inputTarefa.focus();
}

document.addEventListener('click', function(e){
    let btnAlvo = e.target;
    if(btnAlvo.classList.contains('btnDeletar')){
        btnAlvo.parentElement.remove();
        salvarTarefa();
    }
})

inputTarefa.addEventListener('keypress', function(k){
    if(k.keyCode == 13){
        criarTarefa(inputTarefa.value);
    }
})

function salvarTarefa(){
    let lista = listaTarefas.querySelectorAll('li');
    let arrayLista = [];

    for(let el of lista){
        arrayLista.push(el.childNodes[0].data.trim());
    }
    
    const JsonTarefas = JSON.stringify(arrayLista);
    const tarefas = localStorage.setItem('tarefas', JsonTarefas);
}

function addTarefaSalva(){
    let tarefas = localStorage.getItem('tarefas');
    tarefas = JSON.parse(tarefas)

    for(let tarefa of tarefas){
        criarTarefa(tarefa);
    }
}

addTarefaSalva();





