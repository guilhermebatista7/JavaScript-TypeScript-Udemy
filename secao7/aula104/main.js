class Dispositivo{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado){
      console.log(`${this.nome} já ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar(){
    if(!this.ligado){
      console.log(`${this.nome} já desligado`);
      return;
    }

    this.ligado = false;
  }
}

class Celular extends Dispositivo{
  constructor(nome, preco){
    super(nome);
    this.preco = preco;
  }

  ligar() {
    console.log('método sobrescrito')
  }
}

const d1 = new Dispositivo('celular');
console.log(d1);
console.log('');

const c1 = new Celular('s23', 2220);
console.log(c1);
c1.ligar();
console.log(c1);