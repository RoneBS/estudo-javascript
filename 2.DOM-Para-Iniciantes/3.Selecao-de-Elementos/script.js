//Selecao de elementos
//Existem formas diferentes de selecionar elementos

//ID
//Para selecionar os id's presentes no DOM e utilizado um seletor chamado
//getElementById, como o proprio nome sugere, ele seleciona o id passado a
//ele como argumento:

const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

//retorna null caso nao exista
const naoExiste = document.getElementById('teste');

//Classe e Tag
//Existem seletores para classes e tags, seguem a  mesma premissa do seletor
//anterior, para selecionar classes e utilizado o getElementByClassName, para
//uma tag especifica, getElementByTagName:

//O exemplo abaixo seleciona pela classe, retorna uma lista HTMLCollection

const gridSelection = document.getElementsByClassName('grid-selection');
const contato = document.getElementsByClassName('grid-selection contato');

//Seleciona totas as tags Ul, tambem retorna um HTMLCollection

const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSelection[0]);

//Seletor Geral
//O seletor querySelector serve para selecionar todo o tipo de element, ele
//substitui os seletores anteriores, pois ele consegue fazer a mesma funcao
//Ele retorna o primeiro elemento que estiver na ordem, um p ou ul, o que estiver
//listado primeiro vai ser o selecionado, e o resto ignorado.

//ponto antes do nome da classe para identificar que e uma classe
const animais = document.querySelector('.animais');

//# antes do nome do id para identificar que e um id
const contato = document.querySelector('#contato');

//seleciona o ultimo item li dentro da classe "animais-lista"
const ultimoItem = document.querySelector('.animais-lista li:last-child');

//seleciona todos os itens href que comecam (^) com "https://"
const linkCSS = document.querySelector('[href^="https://"]');

//seleciona o conteudo de ul
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

//Selecionando varios elementos
//Para selecionar varios elementos do mesmo tipo e utilizado o querySelectorAll
//Ele funciona da mesma forma que o querySelector, mas com o poder de selecionar
//todos os elementos do mesmo tipo.

//seleciona todas as classes "grid-section"
const gridSection = document.querySelectorAll('.grid-selection');

//seleciona todas os elementos "ul"
const listas = document.querySelectorAll('ul');

//Seleciona todas as classes "titulo"
const titulos = document.querySelectorAll('.titulo');

//Seleciona todas as imagens dentro da classe "animais-lista" 
const fotosAnimais = document.querySelectorAll('.animais-lista img');

//Retorna o segundo elemento da lista
console.log(gridSection[1]);

//Diferente do getElementsByClassName, alista aqui e estatica