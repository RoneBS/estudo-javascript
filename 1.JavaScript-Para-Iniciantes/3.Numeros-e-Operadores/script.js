//Numeros 
//Numeros de qualquer formato podem ser  descrito em uma variavel

let idade = 28;
let gols = 1000;
const pi = 3.14;
let exp = 2e10; //exponencial = quatidade de zeros apos o 'e' = 20000000000

console.log(exp) // vai imprimir o valor = 20000000000

//Operadores aritmeticos

let soma = 100 + 50; // 150;
let subtracao = 100 - 50; // 50 
let multiplicacao = 100 * 2; // 200
let divisao = 100 / 2; // 50
let expoente = 2 ** 4; // 16
let modulo = 14 % 5; // 4, tambem conhecido como mode, mostra o resto da divisao
 
//Operacoes que podem render resultados inesperados

let somaStr = '100' + 50; // 10050
let subtracaoStr = '100' - 50; // 50 - a subtracao consegue 'converter' a string
let multiplicacaoStr = 'Comprei 10'/ 2 // Nan (Not a  Number) caractere quando
//feita alguma operacao aritmetica com numero, retorna NaN

//Para verificar se uma variavel e NaN, se usa a funcao isNaN()

console.log(isNaN(multiplicacaoStr));

//Ordem dos operadores aritmeticos

//Em ume expressao, o primeiro conteudo a ser processado, e o que esta entre
//parenteses, em seguida a potencia, depois a divisao, multiplicacao, adicao,
//e por ultimo a subtracao

let total1 = 20 + 5 * 2; // 30 - 5 * 2 = 10 + 20 = 30
let total2 = (20 + 5) * 2; // 50 - (20 + 5) = 25 * 2 = 50
let total3 = 20 / 2 * 5; // 50  - 20 / 2 = 10 * 5 = 50
let total4 = 10 + 10 * 2 + 20 / 2; // 40 - 20 / 2 = 10 | 10 * 2 = 20
// 10 + 20 = 30 + 10 = 40


//Operadores aritmeticos unarios
//Estes operadores dependem apenas de um numero para funcionar

//Incremento
let incremento = 5;
console.log(incremento++) // 5
console.log(incremento) // 6

//Incremento imediato
let incrementoImd = 8
console.log(++incrementoImd);

//Decremento
let decremento = 5;
console.log(decremento--) // 5
console.log(decremento) // 4

//Decremento imediato
let decrementoImd = 10;
console.log(--decrementoImd)

//Operadores que transformam string em numero

let frase = 'Isto e uma frase';
+frase; // retorna NaN pois nao se trata de um numero em forma de string
-frase; // retorna NaN pois nao se trata de um numero em forma de string

let idadeN = '34';
+idadeN // 34 (convertido em numero)
-idadeN // -34 (convertido em numero negativo)

//Podemos fazer uma operacao aritmetica direto convertendo a string para 
//obter um numero

console.log(+idadeN + 5);