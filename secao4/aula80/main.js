function* geradora1(){
        yield 'Valor 1';
        //Código qualquer
        yield 'Valor 2';
        //Código qualquer
        yield 'Valor 3';
        //Código qualuqer
}

const g1 = geradora1()
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

console.log('--------------------')

function* geradora2(){
    yield* geradora3();
    yield 4;
    yield function(){
        console.log('Passo 5')
    };
}  

function* geradora3(){
    yield 1;
    yield 2; 
    yield function(){
        console.log('Passo 3')
    };
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);

const func = g2.next().value;
func();

console.log(g2.next().value);
const func5 = g2.next().value;
func5();
console.log(g2.next());