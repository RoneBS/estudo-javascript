//Document Object Model (DOM)

//E uma interface que representa documentos HTML e XML atraves de objetos
//Com ela e possivel manipular a estrututa, estilo e conteudo destes documentos.

console.log(window);
//window e o objeto global do browser
//poissui diferentes metodos e propriedades

window.innerHeight; // retorna a altura do browser;

//Inspecionando o window, e possivel ver todos o metodos e atributos q ele contem
//Por exemplo, e possivel ver o endereco da pagina html que esta sendo utilizada
//com o metodo location e o atributo href

const localizacao = window.location.href;
console.log(localizacao);

//A arvore de hierarquia do dom segue uma representacao semelhante a esta:

 /*                              Window
                  |----------------|---------------|
               Location         Document          ...
                                   |
                                 <html>
                     |-------------|-------------|
                  <head>                       <body>
            |-------|-------|            |-------|-------|
          <meta>         <title>       <h1>          <section>
                                                         |
                                                       <h2>
                                                         |
                                                        <p>                   */

//Window e Document sao os principais elementos do DOM, boa parte da manipulacao
//e feita atraved dos seu metodos e propriedades.

window.alert('Popup de alerta');
alert('Mensagem de alerta') // abreviacao, n necessita da palavra window

document.querySelector('h1'); //Seleciona o primeiro elemento h1 da pagina de cima
//para baixo, ignora o restante dos elementos apos selecionar o primeiro
document.body; // retorna o conteudo de body

//O fato do window ser o objeto global, n torna necessario usar a palavra window
//antes dos metodos e propriedades q pertencem a ele.

//O query selector permite acessar a tag para que ela possa ser manipulada

const titulo = document.querySelector('h1');

//Ao utilizar uma propriedade, o conteudo de h1 pode ser mudado

titulo.innerText = 'Novo titulo';

//innerText permite acessar o texto da propriedade, assim ele pode ser modificado
//ou apagado

//Conferindo o browser, o texto de h1 foi modificado