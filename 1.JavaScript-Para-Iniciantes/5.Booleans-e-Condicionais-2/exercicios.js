//Exercicio 1
let minhaIdade = 34;
let parentIdade = 39;

if(minhaIdade > parentIdade){
  console.log('E maior');
} else if(minhaIdade === parentIdade){
  console.log('E igual')
} else {
  console.log('E menor')
}

//Exercicio 2
console.log('retorna 3')
let expressao = (5 - 2) && (5 - ' ') && (5 - 2);

//Exercicio 3

let nome = 'Meu Nome';// True
let idade = 34; // True
let possuiDoutorado = false; // False
let empregoFuturo; // False
let dinheiroNaConta = 0; // False
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
// Exercicio 4

let brasil = 207;
let china = 1340;

let totalComp =  brasil >= china;

if (totalComp) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('Brasil tem menos habitantes')
}
