//Exercicio 1

let dados = 'teste';
dados.toUpperCase();
dados.charAt();
dados.slice(0, 1);

//Exercicio 2

let valores = document.querySelector('.btn');
// addEventListener()
// apendChild
// id
// innerHTML
// innerText

//Exercicio 3
function myFunction() {
  /* Pegar o campo do texto */
  let copyText = document.getElementById("myInput");

  /* Selecionar o campo do texto */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* Para dispositivos moveis */

  /* Copiar o texto dentro o input */
  document.execCommand("copy");

  /* Alerta informando que o texto foi copiado */
  alert("Copied the text: " + copyText.value);
  console.log(copyText)
}
