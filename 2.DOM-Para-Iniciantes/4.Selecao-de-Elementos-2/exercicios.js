//Exercicio 1
console.log('Exercicio 1')
const todosAnimais = document.querySelectorAll('img');
todosAnimais.forEach(animal => {
  console.log(animal);
});

//Exercicio 2
console.log('Exercicio 2');
const imagensAnimais = document.querySelectorAll('img[src^="../images/imagem"]');
//console.log(imagensAnimais);
imagensAnimais.forEach(imagem => {
  console.log(imagem);
})

//Exercicio 3
console.log('Exercicio 3');
const allLinks = document.querySelectorAll('[href^="#"]');
allLinks.forEach(link => {
  console.log(link);
})

//Exercicio 4
console.log('Exercicio 4');
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

//Exercicio 5
console.log('Exercicio 5');
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);