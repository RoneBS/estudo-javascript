//Node 
//Todas as tags html sao representadas pelo objeto Element, assim herdadendo
//seus metodos e propriedades. Element e um tipo de objeto Node.

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto contido no elemento (tag)
titulo.classList; // retorna as classes que o elemento possui
titulo.id // retorna o id da tag
titulo.offsetHeight; //retorna a altura do elemento;

titulo.addEventListener('click', callbackFunc => {
  console.log('voce clicou no titulo!');
  // ativa a funcao callback ao clicar no titulo (h1);
});

//E possivel passar algumas propriedades no retorno:

titulo.addEventListener('click', function(){
  console.log('Voce clicou no: ', titulo.innerText);
  //Este mesmo exemplo pode ser usado com textConntent
  console.log('Voce clicou no: ', titulo.textContent);
})

