// Objetos
//Conjunto de propriedades que possuemm chaves e valores, tambem recebem funcoes
//que sao os metodos do objeto

let usuario = {
  nome: 'john',
  idade: 40,
  email: 'john@gmail.com',
  localodade: 'brasil',
}

//Para acessar o valor das propriedades, se usa o nome do objeto seguida do ponto
//e a chave da propriedade(seu nome);

console.log(usuario.nome);

//Para ver todas as propriedades, basta colocar o objeto no console

console.log(usuario);

//O objeto pode conter funcoes, elas serao usadas como metodos, semelhante
//ao etodos string como toUpperCase() e etc.
//Abaixo um exemplo de um novo objeto com seus metodos:

let calculadora = {
  soma: function (num1, num2) {
    return num1 + num2;
  }
}

//Para acessar o metodo do objeto, segue a mesma forma de acessar uma propriedade
//mas como se trata de um metodo, e preciso passar o parenteses com os argumentos
//necessarios

console.log(calculadora.soma(1, 3));

//THIS - objeto que refencia o contexto do elemento, no escopo que ele se 
//encontra, se usar o this no escopo global, ele retorna o objeto window, se for
//utilizado em uma funcao, tambem retorna este mesmo objeto.
//Se for utilizado no metodo de um objeto, ele retorna os elentos do objeto,
//ele reconhece o objeto como um escopo nao global.
//ele sempre fara a ferencia ao proprio objeto no contexto que ele esta.

let quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    //o this da acesso a variavel lados e seu valor, se this n fosse utilizado
    //a funcao perimetro nao seria capaz de acessar lado, copmo this tem acesso
    //a todo o objeto, atraves dele, e possivel referenciar a variavel nesta
    //funcao
    return this.lados * lado;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//Os metodos podem ser escritos de forma abreviada dentro dos objetos

let quadrados = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

//Como a funcao e anonima, ela pode ser resumida a seu nome e o parenteses com ou
//sem parametros. E importante rressaltar que n se trata de arrow functions

//Os objetos tabem tem um papel imoprtante na organizacao do codigo em pequenas
//partes reutilizaveis.

//O javascript possui varios objetos nativos com metodos que podem ser utilizados
// o Math e um exemplo de objeto que possui varios metodos com calculos matematicos

Math.PI; // 3.14
Math.random(); // retorna um numero aleatorio

let pi = Math.PI;
console.log(pi);

//O proprio "console" que e utilizado para mostrar os dados no console do browser
//e um objeto, e "log" e u dos seus varios metodos.

