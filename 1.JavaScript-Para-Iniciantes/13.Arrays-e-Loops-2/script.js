//Iterando arrays com loop for
//dado o seguinnte array

consoles = ['Xbox series x/s', 'PS5', 'Switch', '3DS'];

for (let i = 0; i < consoles.length; i++){
  console.log(consoles[i]);
}

//Para iterar os arrays, a variavel consoles precisa ser inserida na condicao 
//do laco, como o array tem varias posicoes, o atributo .length da o tamanho
//total do array, que neste caso e 4, entao o for sabe que consoles e igual a 4.
//A condicao e q i seja menor que o tamanho do array (4) para continuar o laco

//no console.log(consoles[i]), o 'i' vai representar a posicao do array:
//Xbox series x/s - [0]
//PS5             - [1]
//Switch          - [2]
//3DS             - [3]

//E como se i recebece o valor que esta dentro do array.

//Algumas paralavras chaves auxiliam os lacos de repeticao a parar ou continuar
//sob determinada circustancia.

//O BREAK serve para encerrar o laco, se uma determinada condicao for atendida
//ele encerra o laco
console.log('***---***---***---***')

for (let i = 0; i < consoles.length; i++){
  if (consoles[i] === 'PS5'){
    break;
  }
  console.log(consoles[i]);
}

//O break interrompeu o laco porq a condicao, (se consoles na posicao i for
//igual a 'PS5') retornou true, ai o break para o laco

//Uma outra propriedade que ajuda no controle e o CONTINUE, ele para o array e
//a partir da posicao que ele for acionado

console.log('***---***---***---***')

for (let i = 0; i < consoles.length; i++){
  if (consoles[i] === 'PS5'){
    continue;
  }
  console.log(consoles[i]);
}

//O continue parou o laco no elemento 'PS5', e retomou a partir do elemento
//seguinte, basicamente e como se ele ignorasse o elemento, e continuasse a
//partir do proximo.

//FOREACH
//O metodo forEach e um laco for de forma simplificada, ele recebe como parametro
//uma funcao callback e esta funcao rercebe 3 parametros, um elemento, o index,
//e um array.

console.log('***---***---***---***')

consoles.forEach(function(item, index, consoles){
  console.log(item, index, consoles)
})

//Este laco vai mostrar o seguinte conteudo no console

/*Xbox series x/s 0 (4) ["Xbox series x/s", "PS5", "Switch", "3DS"]
script.js:62 PS5 1 (4) ["Xbox series x/s", "PS5", "Switch", "3DS"]
script.js:62 Switch 2 (4) ["Xbox series x/s", "PS5", "Switch", "3DS"]
script.js:62 3DS 3 (4) ["Xbox series x/s", "PS5", "Switch", "3DS"]*/

//Ele mostra o elemento, a sua posicao e o array completo
//como o array tem um tamanho total de 4, ele repetiu a acao 4 vezes.

//De forma comum o forEach faz o mesmo q o laco forr de umma forma simplificada
//Se o objetivo for apenas iterar o arrray, ele e feito da serguinte forma:

console.log('***---***---***---***')

consoles.forEach(function(game){
  console.log(game);
})

//O forEach e utilizado como um metodo, apos o nome do array, utiliza o ponto
//seguido de forEach(), ele tem uma funcao anonima para qual passamos os
//parametros que serao utilizados, no caso o nome 'game' e o promeiro parametro 
//dos 3 que esta funcao possui, esta variavel tem funcao similar ao
// "i" responsavel por ser o valor iterado que vai mostrar a posicao que o
//array se encontra. Lembrando que esta variavel pode receber qualquer nome