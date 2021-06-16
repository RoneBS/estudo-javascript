//Boolean
//existem dois valores booleanos true ou false

let possuiGraduacao = true;
let possuiDoutorado = false;

//Condicionais if e else
//Verificar se uma expressao e verdaderira com if, caso contrario o else
//sera ativado

if(possuiGraduacao) {
  console.log('Possui graduacao');
} else {
  console.log('Nao possui graduacao');
}
// retorna Possui graduacao e nao executa o else
//O valor dentro do parentese sempre sera avaliado em false ou true

//Condicionais else if
//Caso a condicao contida no if nao for verdadeira, o else if sera testado

if(possuiDoutorado) {
  console.log('Possui graduacao e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduacao, mas nao possui doutorado');
} else {
  console.log('Nao possui graduacao');
}

//retorna "Possui graduacao, mas nao possui doutorado"

//VArios esle if podem ser utilizados com valores a serem comparados
//embora nao seja uma boa pratica por nao ser performatico

//Truthy e Falsy
//Existem valores que retornam true e outros retornam false quando verificamos 
//em uma espressao booleana.

// Falsy
// if(false)
// if(0)
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

//As expressoes acima, todas sao Falsy, o restante sera truthy

//Exemplo de falsy

let nome = '';

if(nome) {
  console.log(nome);
} else {
  console.log('Nome nao existe');
}

//Ele retorna nao existe, pois a string vazia indica falsy, como visto nas
//nas expressoes acima, que sao 'falsas'

//Truthy

// if(true)
// if(1)
// if(' ')
// if('Meu nome')
// if(-5)
// if({})

//exemplo de Truthy

nome = 'Meu nome';

if(nome) {
  console.log(nome);
} else {
  console.log('Nome nao existe');
}


//Operador de negacao
//O operador '!' nega um estado, se for !true, se torna falso, se for !false
//se torna true

// if(!true) // false
// if(!1) //false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

// o operador !! verifica se uma expressao e Truthy or Falsy

//Usando o operador !, negando uma variavel que e true

if(!possuiGraduacao) {
  console.log(possuiGraduacao)
} else {
  console.log('Nao possui graduacao');
}

//Retorna "nao possui graduacao" pois '!' tornou possuiGraduacao um valor falso

//Operadores de comparacao
//Vao sempre retornar um valor booleano
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a
// == igual a
// === igual a (verifica valor e tipo)
// != diferente de
// !== diferente de (verifica valor e tipo)

// 10 > 5; // true
// 5 > 10; // false
// 20 < 10; // false
// 10 <= 10; // true
// 10 >= 11; // false
// 10 == '10' = // true
// 10 == 10 // true
// 10 === '10' // false, um tem tipo number e outro string
// 10 === 10 // true, valores e tipos iguais
// 10 != 15 // true
// 10 != '10' // false
// 10 !== '10' // true, um tem tipo number e o outro string

//Exemplos

console.log('dez e maior que cinco? ',10 > 5);
console.log('vinte e menor que dez? ',20 < 10);
console.log('dez e menor ou igual a dez? ', 10 <= 10);
console.log('dez e maior ou igual a onze? ',10 >= 11);
console.log('dez e igual a dez? ',10 == 10);
console.log('dez e igual a "dez"? ',10 == '10');
console.log('dez e estritamente igual a dez? ',10 === 10);
console.log('dez e estritamente igual a "dez"? ',10 === '10');
console.log('dez e diferente de quinze? ',10 != 15);
console.log('dez e diferente de dez? ',10 != 10);
console.log('dez e diferente de "dez"? ',10 != '10');
console.log('dez e estritamente diferente de "dez"? ',10 !== '10');