//Comentarios
//Utilizado para explicar as linhas de codigo sem interferir no seu funcionamento

//Os comentarios podem ser usa com com duas barras (//), em seguida deste par
//de barras, o conteudo sera um comentario

//Se o texto for muito longo pode se utilizar um outro formato: /* */.
//este formato permite comentar varias linhas, semm que seja necessario adicionar
//as duas barras em cada linha.

/*
comentario
com varias linhas
de codigo
*/

//Ressaltando que se um trecho de codigo for comentado, ele nao vai mais
//funcionar

//Operadores de atribuicao

//Sao formas abreviadas de atribuir determminador valor a uma variavel
//abaixo uma lista com formas que podem ser utilizadas:

let x = 5
let y = 10
x += y // x = x + y (15)
x -= y // x = x - y (-5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (976525)

//Operador ternario
//Este operador e uma abreviacao das condicionais if e else

let idade = 34;
let podeDirigir = (idade >= 18) ? 'Pode dirigir' : 'Nao pode dirigir';
console.log(podeDirigir);

//O operador funnciona da seguinte forma:
//Sao 3 etapas, a primeira e definida a condicao - (idade >= 18)
//A Segunda e o valor verdadeiro - ? 'Pode dirigir'
//Por ultimo o valor falso - : 'Nao pode dirigir'

//Pode ser entendido da seguinte maneira - (condicao) ? true : false

//Este operador deve estar atribuido a uma variavel neste caso

//Pode ser usado operadores logicos junto ao ternario

let habilitado = true;
let estaBebendo = false;

let levaOCarro = (habilitado && estaBebendo) ? 'Nao pode levar o carro' : 'Pode levar o carro';

console.log(levaOCarro);

//Um ponto interessante ao if e esle e que, nao e necessario usar chave
//caso o retorno possua somente uma linha

let eGraduado = true;
if (eGraduado) console.log('Possui graduacao')
else console.log('Nao possui graduacao')

//Tambem pode ser escrido desta outra forma

if(eGraduado)
  console.log('Possui graduacao');
else 
  console.log('Nao possui graduacao');

//Apesar de estar pulando uma linha, o retorno continua tendo somente uma linha

