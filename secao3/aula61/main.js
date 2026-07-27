function num(n){
    if(n%3 == 0 && n%5 == 0){
        return "FizzBuzz"
    }
    if(n%3 == 0){
        return "Fizz"
    }
    if(n%5 == 0){
        return "Buzz"
    }
    
    if(isNaN(n)){
        return n
    }

    return n;
    
    
}

const r = (n) => (isNaN(n) ? n : ((n%3 == 0 && n%5 == 0) ? "FizzBuzz" : (n%3 == 0) ? "Fizz" : (n%5 == 0)? "Buzz" : n )); 

/*const r = (n) =>
    isNaN(n)
        ? n
        : (n % 3 == 0 && n % 5 == 0)
            ? "FizzBuzz"
            : (n % 3 == 0)
                ? "Fizz"
                : (n % 5 == 0)
                    ? "Buzz"
                    : n;*/

for(let i=0; i<=10; i++){
    let res = r(i);
    console.log(res);
}

/*
FizzBuzz
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
*/ 