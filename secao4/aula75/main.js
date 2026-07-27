function criaPessoa(nome, sobrenome, alt, pes, idade){
    return{
        nome,
        sobrenome,
        idade,
        fala(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura: alt,
        peso: pes,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        set setarIdade(valor){
            this.idade = valor;
        },

        set sepNomeSobr(valor){
            valor = valor.split(' ');
            console.log(valor);
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
    }
}

const p1 = criaPessoa('Guilherme', 'Bastita', 1.8, 80);
const p2 = criaPessoa('Yasmin', 'Osti', 1.6, 60);
console.log(p1.fala('falando sobre futebol'));
console.log(p1.imc);
//console.log(p1.imc());    não funciona pois 'get' faz a função imc ser um atributo

p1.setarIdade = 20;
console.log(p1.idade);

console.log('--------------');
p2.sepNomeSobr = 'Yasmin Delalibera Osti';
console.log(p2.nome);
console.log(p2.sobrenome);


//console.log(p1.imc());    não funciona pois 'get' faz a função imc ser um atributo