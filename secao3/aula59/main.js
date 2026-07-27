const arr = [1, 2, 3, 4, 5, 6, 7, 8]

for(let numero of arr){

    if(numero == 3){
        continue;
    }

    if(numero ==  4){
        break;
    }

    console.log(numero);
}