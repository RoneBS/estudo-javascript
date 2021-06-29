//Arrays e Loops
//Array e uma estrutura de dados que connsegue ter varios valores, esses valores
//sao guardados em espacos na memoria, de forrma mais grosseira, um arrray e
//uma variavel com varios valores dentro dela, podendo ser do mesmo tipo, ou
//misturadas (string, number e etc).
//Os arrays terem tipos de dados misturados e algo que n e suportado por todas
//as linnguagens de programacao, e e uma pratica que deve ser planejada

let consoles = ['Xbox series s/x', 'PS5', 'Switch'];

//Os arrays usam colchetes para colocar os dados, que devem ser separados
//por virgula

//Esses valores dentro do array podem ser acessados por uma numeracao dentro 
//de colchetes. Esses numeros representam a posicao que esles estao no array,
//que inicia sua contagem a partir de 0.
//['Xbox series s/x', 'PS5', 'Switch']
//(       0,            1,       2   )

//Para acessar estes valores, basta o nome do array e o numero da posicao
//que se deseja ter o valor

consoles[0]; // Xbox series s/x
consoles[1]; // PS5

//Metodos e propiedades de um array
//eles possuem metodos que podem ser utilizados para dar mais poder a estrutura

consoles.pop() // remove o ultimo item do array e o retorna
consoles.push('3DS'); // Adiciona o novo item no final do array
consoles.length // mostra o tamanho do array (3)

//Existem outros metodos como map, filter e reduce q ue serao abordados mais
//adiante

//For Loop

//Esse laco de repeticao e utilizado para fazer varias vezes uim processo
//ou iterar um array sua sintaxe e da seguinnte forma

for (let numero = 0; numero < 10; numero++){
  console.log(numero);
}

//Ele e formado de 3 partes 
//a primeira (let numero = 0;) define uma variavel e se atribui um valor
//a ela.

//A segunda parte (numero < 10;) e feita uma validacao, neste caso, ele fara o
//loop enquanto numero for menor do que 10.

//Por ultimo (numero++), a variavel numero adicionara +1 a ela sempre que um 
//ciclo do laco acontece, quando numero for igual a 10, o laco para e finaliza.

///Este loop vai repetir 10 vezes a impressao de console.log(numero).
///A variavel numero sera atualizada em +1 e mostrada no console, neste caso
//ela sera mostrada assim:

0
1
2
3
4
5
6
7
8
9

//While Loop
///Semelhante ao for loop, o while loop verifica se a conndicao e verdadeira
//e executa o loop

let i = 0;
while(i < 10){
  console.log(i);
  i++;
}

//Este laco vai retornnar de 0 a 9 assim como o for.
//o while precisa ter a variavel que vai contar o numero de repeticoes iniciada
//fora do laco, nao e poossivel declarar nnem atribuir valor dentro do parenteses
//Se este contador nao for inncrementado, ou mesmo se ele nao existir, um laco 
//infinito pode ocorrer e vausar alguns transtornos com a maquina.

//O while por sua vez pode fazer repeticoes que tem um numero indeterminado
//podendo ser encerrado quando determinada condicao for alcansada