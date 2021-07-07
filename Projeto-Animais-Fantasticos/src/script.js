const animais = document.getElementById('animais');
console.log(animais);

const gridSelection = document.getElementsByClassName('grid-section');
console.log(gridSelection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(nodeItem, index, array){
  nodeItem.classList.add('verde');
  console.log(index);
  console.log(array);
})

const arrayHTMLList = Array.from(gridSectionHTML);

arrayHTMLList.forEach(function(htmlItem, index, array){
  htmlItem.classList.add('amarelo');
  console.log(index);
  console.log(array);
  }); 