
//Funcoes podem ou n retornar um valor, se n for definido o "return", a funcao
//retorna udefined no console.

 function imc(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
 }

 imc(80, 1.76); // retorna o imc
 console.log(imc(80, 1.76)); //retorna o imc e undefined

 //Valores retornados
 //Um funcao pode retornar qualquer tipo de dado e ate outras funcoes

 function terceiraIdade(idade){
   if(typeof idade !== 'number'){
     return 'informe sua idade!';
   } else if(idade >= 60){
     return true;
   } else {
     return false;
   }
 }

 //E importante ressaltar que nao e boa pratica retornar varios valores em uma 
 //funcao

 //Escopo de funcao
 //Variaveis e funcoes definidas dentro de um bloco {}, nao sao visivies
 //fora dele

 function precisoVisitar(paisesVisitados){
   let totalPaises = 193;
   return `Ainda faltam ${totalPaises - paisesVisitados} para viajar`
 }
 //console.log(totalPaises); 
 //retorna um erro, totalPaises foi definido dentro da
 //funcao, ela so e reconhecida dentro do escopo da funcao 

 //Se uma variavel e delcarada fora de uma funcao, ela pode ser utilizada dentro
 //de uma funcao ex: 

 let totalDePaises = 193;
 function faltaVisitar(paisesVisitados){
  return `Fata visitar ${totalDePaises - paisesVisitados} paises`;
 }

 console.log(faltaVisitar(50));

 //Escopo lexico
 //Funcoes conseguem acessar variaveis que foram criadas no contexto pai

 let profissao = 'Programador';

 function dados(){
   let nome = 'Fulano';
   let idade = 34;
   function outrosDados(){
     let endereco = 'Ceara';
     let idade = 35;
     return `${nome}, ${idade}, ${endereco}, ${profissao}`;
   }
   return outrosDados();
 }

 console.log(dados()); // retorna Fulano, 35, Ceara, Programador
 //console.log(outrosDados()); // retorna um erro (outrosDados is not defined)
 //o escopo de outrosDados() esta dentro de dados(), fora dele ela n e
 //reconhecida

 //Hoisting
 //O javascript coloca as funcoes padrao no inicio da memoria, assim e possivel
 //chamar uma funcao antes dela ser delcarada, isso nao se aplica a expressoes

 // se temos uma funcao que calcula o imc, onde e feita primero sua chamada, e 
 //deois sua declaracao, ela vai funcionar normalmente

calcImc(85, 1.76);

 function calcImc(peso, altura){
   const imc = peso / (altura ** 2);
   console.log(imc);
 }

