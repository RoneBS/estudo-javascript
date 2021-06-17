//Operador Logico && "E"
//Compara se duas expressoes, e valida a sentenca somente se as duas
//forem verdadeiras

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cao'; // 'Cao' - se ambos fores true, retorna o ultimo valor
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

//Se o valor false, ele retorna o mesmo e interrompe a verificacao

if((5 - 5) && (5 + 5)){
  //Como 5 - 5 = 0, e 0 e um valor false, ele encerra a verificacao
  //todas as sentensas precisam ser verdadeiras, vai retornar 'Falso'
  console.log('Verdadeiro');
} else {
  console.log('Falso')
}

//Operador Logico || 'OU'
//Verifica se uma das sentencas e verdadeira, retorna falso no caso das 
//duas serem falsas

true || true; // true
true || false; // true
false || true ;// true
'Gato' || 'Cao'; // 'Gato' - retorna o primeiro valor true que encontrar
(5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); //true

//Exemplo

var condicional = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional) 
//Retorna 10, pois foi o promeiro valor true q ele encontrou , 5 - 5 = 0 e false
// e 10 - 2 = 8, mas ja havia uma sentenca verdadeira primeiro

//Switch case
//Switch e uma forma de fazer uma verficacao de um valor com varias sentencas
//dependendo do caso, pode ser uma alternativa melhor aos else if aninhados

let corFavorita = 'Verde';

//Dentro do Switch, colocamos a variavel que queremos comparar com 
//os casos (case)

switch (corFavorita) {
  case 'Azul':
    console.log('Bela cor, mas prefiro outras');
    break;
  case 'Vermelho': 
    console.log('Cor muito forte, nao gosto muito');
    break;
  case 'Verde':
    console.log('Minha cor favorita, muito massa!');
  default:
    console.log('Nenhuma cor alem dessas sao bonitas');
    break;
}

//A palavra break e utilizada para encerrar a procura assim que a sentenca
//for correspondida
//O default e acionado caso nenhuma das sentencas sejam validas