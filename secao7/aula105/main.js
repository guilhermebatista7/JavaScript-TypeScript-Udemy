class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume(){
    this.volume += 2;
  }

  static soma(x, y){
    return x+y;
  }
}

const controle1 = new ControleRemoto('LG');
console.log(controle1);
controle1.aumentarVolume();
console.log(controle1);

let res = ControleRemoto.soma(10, 6);
console.log(res);