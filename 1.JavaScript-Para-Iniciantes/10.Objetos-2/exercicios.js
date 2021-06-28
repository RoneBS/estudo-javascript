//Exercicio 1

let meusDados = {
  nome: 'John',
  sobrenome: 'Doe',
  idade: '30'
}

console.log(meusDados);

//Exercicio 2

meusDados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}

console.log(meusDados.nomeCompleto(), meusDados);

//Exercicio 3

let carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

console.log(carro);

//Exercicio 4

let cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }

}

console.log(cachorro.latir('homem'));