//Exercicio 1

copa = [1959, 1962,, 1970, 1994, 2002 ];

//Exercicio 2

copa.forEach(function(ano){  
    console.log(`O brasil ganhou a copa de ${ano}`); 
});

console.log('***---***---***---***')

//Exercicio 3 

let frutas = ['Banana', 'Maca', 'Pera', 'Uva', 'Melancia'];

for (let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if (frutas[i] === 'Pera')
    break;
}

console.log('***---***---***---***')

//Exercicio 4

let ultimaFruta = frutas[frutas.length -1];