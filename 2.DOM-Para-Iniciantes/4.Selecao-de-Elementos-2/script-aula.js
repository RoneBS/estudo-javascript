//HTML Colletcion vs NodeList

//A diferenca esta nos metodos e propriedades de ambas. NodeList que retorna
//com querySlectorAll e estatica, ou seja, se algum elemento for adicionado
//depois do retorno da lista, este elemento nao sera acrescentado a ela

const titulo = document.querySelector('.titulo');
const gridSectionHTMLTeste = document.getElementsByClassName('grid-selection');
const gridSectionNodeTeste = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTMLTeste); // 4 itens
console.log(gridSectionNodeTeste); // 3 itens

//Como a lista HTMLColletcion que getElementsByClassName retorna nao e estatica
//o itemm adicionado depois entra na lista

//Array Like
//HTMLCollection e NodeList sao array-like, sao semelhantes a arrays, mas nao
//sao. Apenas NodeList possui um metodo de array, o forEach();

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array){
  gridItem.classList.add('azul');
  console.log(index); // index do item da lista
  console.log(array) // lista completa
});

//No caso de uma lista precisar ser iterada e nao ser um array, ela pode ser
//transformada em um utilizando o metodo Array.from(gridSection);
