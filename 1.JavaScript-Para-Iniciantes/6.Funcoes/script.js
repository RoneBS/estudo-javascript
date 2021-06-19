//Funcoes
//Sao codigos que sao executados que fazem determinada acao, atraves de um bloco
//de codigo, podem ser reutilizados e servem pra uma infinidade situacoes

function areaQuadrado(lado /*parametro */) {
  return lado * lado; // parametros
}

//function e a palavra reservada que define uma funcao, em seguida vem seu nome.
 //os parenteses servem para receber parametros, apos as chaves vem o trecho de 
 //codigo que faz algo. return "retorna" algum valor ou resultado da funcao

 //Para executar a funcao, se faz a chamada , escrevendo seu nome, e dentro dos
 //parentes passamos os argumentos necessarios para que ela funcione, nao e 
 //obrigado uma funcao ter parametros e argumentos

// Para chamar uma funcao, e necessario o seu nome e argumentos, se houver
 areaQuadrado(4 /*argumento*/); // 16
 areaQuadrado(5); // 25
 areaQuadrado(2); // 4

 //Obs: parametros sao as variaveis dadas na declaracao de uma funcao que ficam
 //dentro do parenteses dela: "function calcMedia(av1, av2 <- parametros)"

 //Os argumentos sao os valores que passamos na chamada da funcao, que os
 //parametros vao receber na funcao: calcMedia(10, 9 <- argumentos)
 //De uma forma simples, cada parametro, recebe um agumento

 function calcMedia(av1, av2){
   return (av1 + (av2 * 2)) / 3;
 }

 console.log(calcMedia(10, 10));

 //A funcao abaixo n tem parametros nem argumentos

 function imprimeFrase(){
   console.log('Hello World');
 }

 imprimeFrase();

 //Dentro das funcoes podemos ter diversas estruturas, condicionais, lacos de 
 //repeticao entre outras, ex:

 function corFavorita(cor){
    if(cor === 'azul')  {
      return 'Eu gosto do ceu';
    } else if(cor === 'verde'){
      return 'Eu gosto do campo'
    } else {
      return 'Eu nao gosto de cores'
    }
 }

 //No console do navegador, ao digitar "corFavorita('azul')", sera obtido o 
 //retorno "Eu gosto de ceu"

 //funcoes tambem podem ser passadas como argumento de outras funcoes, esta 
 //pratica e chamada de callback, expressao muito recorrente no javascript

 addEventListener('click', function(){
   console.log('Clicou')
 });

 //A funcao possui dois parametros
 //O primeiro e a string 'click' (um metodo que sera abordado futuramente)
 //O segundo e uma funncao anonima

 //OBS: uma funcao anonima nao possui nome, sao escritas como "function(){}" ou 
 //"() => {}" (esta ultima e uma arrow function, sera abordada futuramente);

 