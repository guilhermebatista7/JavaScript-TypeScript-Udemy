function main(){
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]

    let [{tag, texto}, ...resto] = elementos;
    console.log(tag, texto);
    console.log(elementos[0].tag);

    let sec = document.querySelector(`.container`);

    for( let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let element = document.createElement(tag);
        element.textContent = texto;
        sec.appendChild(element);

    }
    
    /*for(let i=0; i<elementos.length; i++ ){
        let element = document.createElement(elementos[i].tag);

        element.textContent = elementos[i].texto;
        sec.appendChild(element);
    }*/

}

main();