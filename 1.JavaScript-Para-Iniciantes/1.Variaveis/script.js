console.log('rodou!');
var nome = 'Meu Nome';
var idade = 34;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

//Criando varias variaveis usando var somente uma vez

var sobrenome = 'Fulano', 
    cidade = 'Algum lugar do Brasil';

//Declarando uma variavel undefined

var indeifinida;

//O nome das variaveis podem iniciar com $(cifrao) _(underline) ou letras
//podem conter numeros mas nao iniciar com eles.
//Nao se Utililiza caracteres especiais nas variaveis, ha excessoes 
//E case sensitive, diferencia maiusculas de minusculas
//Nao utilizar paralavras reservadas da linguagem
//Camel case = E uma convencao usada para padronizar a declaracao das variaveis
//O padrao e q a letra da segunda palavra sempre comeca com letra maiuscula
//Ex: abrirModal

//Nomes invalidos

// var &nome;
// var function;
// var 1possuiFaculdade;

//Nomes Validos

// var $selecionar;
// var _nome;
// var PossuiFaculdadeNoExterior;

//Variavel que foi somente iniciada, sera undefined

var valorNaoDefinido;
console.log(valorNaoDefinido);

//Se ela nao foi inicada o console retorna um erro

//console.log(aindaNaoFuiDeclarada);

// Hoisting
// Sobe os deteminadas funcoes e tipos de variaveis para o topo da memoria
//de uma forma mais simples de entender, para o topo do documento

var comida;
console.log(comida); //retorna undefined
comida = 'pizza'; 
console.log(comida);// agora ele retorna o valor;

//Mudando o valor das variaveis

//var e let permitem ser alteradas

var email = 'meuemail@hotmail.com'
email = 'meuemail@gmail.com';
console.log(email);

let endereco = 'Rua 10'
endereco = 'rua 11';
console.log(endereco);

//const nao permite alterar seu valor

// const tipoSangue = 'O+';
// tipoSangue = 'O-';
// console.log(tipoSangue);
