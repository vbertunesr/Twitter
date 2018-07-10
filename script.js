var postado = document.getElementById('postado');
var botao = document.getElementById('sendButton');
var textarea = document.getElementById('message');

function tweet(event){
  event.preventDefault();
  var minhaDiv = document.createElement('div');
  postado.prepend(minhaDiv);
  minhaDiv.setAttribute('class', 'tweet');
  var newText = document.createElement('p');  
  newText.textContent = textarea.value + moment().format('lll');
  minhaDiv.appendChild(newText);

  textarea.value = "";
}
botao.addEventListener("click",tweet);

function desativaBotao(){
  var limite = 140;
  var limiteTexto = document.querySelector('#message').value.length;
  var caracteres = limite - limiteTexto;
  if(caracteres > 0){ 
    document.getElementById('limiteTexto').innerHTML = caracteres;
    document.getElementById('sendButton').disabled = false;
  }else{
    document.getElementById('limiteTexto').innerHTML = caracteres;
    document.getElementById('sendButton').disabled = true;
  }
}
