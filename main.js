//Envio do formulário
//document.selecionarIdElemento('idElemento').
document.getElementById('formulario').
//adicionarEvento('type que está no HTML'), function(invente o nome da funcao) {
addEventListener('submit', function(evento){
  //nomdaFuncao que inventou.nomeDoEvento JS();
  evento.preventDefault();


  const campoA = parseFloat(document.getElementById('campoA').value);
  const campoB = parseFloat(document.getElementById('campoB').value);
  const msgDiv = document.getElementById('msg');

  if (campoB > campoA) {
    msgDiv.textContent = "Formulário válido. O valor do campo B é maior que o valor do campo A.";
    msgDiv.className = "message mensagemPositiva";
  } else {
    msgDiv.textContent = "Formulário inválido. O  valor do campo A deve ser menor que o valor do campo B.";
    msgDiv.className = "message mensagemNegativa";
  }
});