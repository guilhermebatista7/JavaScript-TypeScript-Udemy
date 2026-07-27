class Carro{
  #velocidade = 0;

  constructor(nome){
    this.nome = nome;
  }

  acelerar() {
    if(this.#velocidade >= 100) return;
    this.#velocidade++;
  }

  freiar() {
    if(this.#velocidade <= 0) return;
    this.#velocidade--;
  }

  get velocidade(){
    return this.#velocidade;
  }

  set velocidade(valor){
    if(typeof(valor) !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this.#velocidade = valor;
  }
}

const c1 = new Carro('Fusca');
c1.acelerar();
console.log(`Velocidade:`, c1.velocidade);
c1.acelerar();
console.log(`Velocidade:`, c1.velocidade);
c1.freiar();
console.log(`Velocidade:`, c1.velocidade);