//Tipos de dados
//Todos sao primitivos exceto os objetos
//Os tipos primitivos sao imutaveis

var nome = 'Meu Nome'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol();  // Symbol
var novoObjeto = {}; // Object

//Verificando o tipo da variavel

console.log(typeof nome);

//concatenando strings

var sobrenome = 'Fulano';

nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

//Concatenando numbers e strings

var dinheiro = 100;

var meuDinheiro = nome + ' tem ' + dinheiro + ' reais';
console.log(meuDinheiro)

//ao concatenar numero com string, o tipo sera uma string
console.log(typeof meuDinheiro);

//Strings podem ser criadas com aspas simples ou duplas
//porem se for necessario adicionar algum calor que precise de 
//aspas, o ideal e a string maior usar aspas duplas e a menor simples

//const linguagem = "JavaScript e "super" legal" Invalido
//const linguagem = "Javascritp e 'super' legal" Valido

//Usar a barra invertida neste caso, vai funcionar para manter dois pares
//de aspas duplas

//const linguagem = "JavaScript e \"super\" legal" Valido

//porem nao e amplamente utilizado

//Template String
//Ao inves de concatenar as variaveis com strings, se adiciona as variavies
// num par de chaves precedidos do cifrao "${}"
//A template string usa o apostrofo ao inves das aspas, tambem podem
//usados somente para as strings

const minhaGrana = `${nome} tem ${dinheiro} reais`;
console.log(minhaGrana);

//Nao e mais necessario utilizar o operador de adicao para concatenar os valores
//E um metodo que e muito utilizado

//Exercicios

