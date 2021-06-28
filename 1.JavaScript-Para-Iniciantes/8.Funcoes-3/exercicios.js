//Exercicio 1

function isTruthy(value) {
  return !!value
}

console.log(isTruthy(1));

//Exercicio 2
function calcPerimetro(lado) {
  return lado * 4;
}

console.log(calcPerimetro(5));

//Exercicio 3

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('John', 'Doe'));

//Exercicio 4

function numeroPar(num) {
  if (num % 2 === 0) {
    console.log(`${num} e par`);
  } else {
    console.log(`${num} e impar`);
  }
}

numeroPar(10);

//Exerrcicio 5

function retornaTipo(valor) {
  return typeof valor;
}

console.log(retornaTipo('teste'));

//Exercicio 6
const item = nomeCompleto('John', 'Doe');

addEventListener('click', () => {
  console.log(item);
});

//Exercicio 7

//Corrija o erro abaixo
let totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Ja visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));