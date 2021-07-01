//Escopo de funcao
//As variaveis declaradas dentro de uma funcao, so podem ser acessadas dentro
//da mesma, se ela for utilizada fora, e retornado um erro informando que a
//variavel nao existe

function saudacao(){
  let periodo = 'Bom dia';
  console.log(periodo);
}

saudacao(); // 'Bom dia' no console
//console.log(periodo); // Erro, periodo is no defined

console.log('***-***-***-***')

//Este formato evita o conflito entre nomes de variaveis

//Ao declarar uma variavel sem descrever seu tipo (var, let ou const), se cria
//uma variavel que pode ser acessadao em qualquer escopo, ela se torna uma 
//variavel global, desta forma, ela nao e uma boa pratica.

function saudacoes(){
  periodo = 'Bom dia';
  console.log(periodo);
}

saudacoes(); // 'Bom dia';
console.log(periodo); // 'Bom dia'

//Isto pode ser resolvido utilizando o 'use strict'.

//Escopo de funcao (pai - global)
//As variaveis que sao declaradas no escopo pai (global) da funcao podem ser
//acessadas pelas funcoes

let carro = 'Gol';

function mostrarCarro(){
  let conteudo = `Meu carro e um ${carro}`;
  console.log(conteudo);
}

mostrarCarro(); // Meu carro e um Gol
console.log(carro); // Gol

//Escopo de bloco
//Variaveis criadas com var se referem ao escopo global, se ela for criada
//dentro de um bloco podera ser acessada fora deste bloco de codigo, perdendo
//o sentido do escopo de bloco, que e manter a variavel estrita ao bloco que
//ela foi criada.
//Este bloco nao e o bloco de uma funcao, e sim de ifs, elses, for loops, que 
//tem codigos dentro do par de chaves {}.

//Com a introducao do es6, a melhor forma de declarar variaveis e utilizando
//let e const, pois elas respeitam o escopo de bloco.

//No exemplo abaixo, a variavel criada utilizando var, tem seu conteudo
//acessado fora do escopo de if, o que n seria possivel usando let ou const

if(true){
  var veiculo = 'Onix';
  console.log(veiculo);
}

console.log(veiculo);

//Trocando var por let, por exemplo, a variavel nao pode mais ser acessada
//fora do bloco

if(true){
  let carros = 'Siena';
  console.log(carros);
}

//console.log(carros); // Erro, carros is not defined

//As chaves {} sozinhas criam um bloco, entao o que estiver dentro deste
//bloco, vai estar no escopo de bloco

//CONST
//O const tem como caracteristica o formato de constante, as variaveis que sao
//declaradas com const nao podem alterar seu valor, tambem utiliza escopo
//de bloco, tambem nao permite redeclarar a variavel

const diaSemana = 'segunda-feira';
//diaSemana = 'terca-feira';// erro, variavel nao pode ser modificada
//const semana; // erro, nao pode ser declarada sem valor;

const data = {
  dia: 01,
  mes: 'julho',
  ano: 2021,
}

data.dia = 02; //Funciona
//data = 'agosto'; // erro

//LET 
//O let permite a modificacoes dos valores da variavel, tambem respeita o escopo
//de bloco, e impede a redeclaracao da variavel.

let anoVigente;
anoVigente = 2021;
anoVigente++;
console.log(anoVigente); // 2019
let anoVigente = 2021; // erro, nao permite redeclara a variavel