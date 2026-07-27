function soma(x, y){
    if(typeof(x) !== 'number' || typeof(y) !== 'number'){
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try{
    console.log(soma('a', 2));
    console.log(soma(2, 2));
}catch(error){
    console.log(error);
}

