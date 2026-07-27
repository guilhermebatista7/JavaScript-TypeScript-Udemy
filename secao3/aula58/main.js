
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r)
}

let min;
let max;
let rand = random(min, max);
 
/*while(rand !== 2){
    rand = random(1, 3);
    console.log(rand);
}*/

do{
    rand = random(1, 10);
    console.log(rand)
} while(rand !== 1);


