//Tudo no javascript e objeto, strings, numeros, booleans, objetos possuem 
//propriedades e metodos, portanto, sao objetos

let nome = 'John'

nome.length; // 4
nome.charAt(1); // 'o'
nome.replace('n', 'nny'); // 'Johnny'
nome; // 'John'

//Uma string herda propriedades e metodos do construtor String()
//Entao uma string pode usar os metodos contidos no objeto String
//Vale ressaltar que os metodos nao alteram a variavel

//Os numeros tambem possuem propriedades e metodos erdados do objeto Number()

let altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // arredonda o valor para 2

//Por um breve momento o numero e envolvido em um objeto (coercao), tendo acesso
//assim as suas propriedades e metodos
//Isso quer dizer que o valor da variavel (numero), vai estar brevemente sob 
//influencia deste objeto e sofrer as alteracoes que ele proporciona (objeto).

//As funcoes tambem passam pelo mesmo processo

function areaQuadrado(lado) {
  return lado * lado
}

areaQuadrado.toString();
/*"function areaQuadrado(lado) {
  return lado * lado
}"*/

//Acima mostra o efeito que o metodo toString causa na funcao durante o periodo
//que ela esta sendo influenciada por este metodo, tornando o conteudo da funcao
//em uma string

areaQuadrado.length; // 1

//O length informa quantos argumentos podem ser passasos, consequentimente
//indicando o numedo de parametros que a funcao possui

//O efeito dos objetos tambem se esntendem ao DOM (abordado no capitulo a seguir)

//<a className="btn">Clique</a>

let btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function(){
  console.log('Clicou');
});

//Praticamente todos os efeitos com javascript, utilizam propriedades e metodos
//do objetos do DOM

