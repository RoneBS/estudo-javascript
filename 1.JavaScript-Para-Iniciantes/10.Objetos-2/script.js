//Um objeto e criado a partir de um tipo de variavel (var, let, const) seguido
//do nome que sera dado a ele, finalizando com o sinal de igual e o par de chaves
//onde serao inseridos suas propriedades e metodos.

let pessoa = {}
let motocicleta = {}

console.log(typeof pessoa); // retorna object

//O ponto utilizando para acessar as propridades e metodos de um objeto, e 
//chamado de dot notation.
//quando este ponto e tulizado para acessar valores, e dot notation get

let menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
}

let bg = menu.backgroundColor; // retorna '#84e'

//Essas propriedades podem ter seus valores modificados utilizando o dot notatiom

menu.backgroundColor = '#000';

console.log(menu.backgroundColor);
//Ao verificar o console, o valor de backgroundColor sera a cor preta (#000)
//mas a variavel "bg" ainda mantem o antigo valor (#84e);

//Tambem e possivel adicionar propriedades novas ao objeto
//utilizando dot notation, ou dot notation set

menu.color = '#fff';

console.log(menu);

//No console, menu tem mais uma propriedade adicionada

//O mesmo vale para adicionar um novo metodo

menu.propriedadesCss = function () {
  console.log('Propriedades css');
}

menu.propriedadesCss();
console.log(menu);

// Propriedades e Heranca
//O objeto herda propriedades e metodos do objeto que foi utilizado para criar o
//mesmo

let menus = {
  width: 800,
}

menus.hasOwnProperty('width'); // true
menus.hasOwnProperty('height'); // false
//este metodo verifica se o metodo possui a propriedade passada a ele como
//parametro

//hasOwnProperty e um metodo de Object, que e umma funcao, todo objeto criado
//utiliza a funcao Object, que tambbem possui propriedades e metodos, que podem
//ser erdadas, no caso acima, o objeto menu usou um metodo do objeto 'Object'