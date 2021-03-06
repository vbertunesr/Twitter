var postado = document.getElementById('postado');
var botao = document.getElementById('sendButton');
var textarea = document.getElementById('message');

function tweet(event){
  event.preventDefault();
  var minhaDiv = document.createElement('div');
  postado.prepend(minhaDiv);
  minhaDiv.setAttribute('class', 'tweet');
  minhaDiv.className='styleColor';
  var newText = document.createElement('p');  
  newText.textContent = textarea.value + " " + moment().format('lll');
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
function mudaCor(){
  var contador = document.getElementById('limiteTexto');
  if(textarea.value.length > 120 && textarea.value.length < 130){
    contador.style.color = "green";
  } else if (textarea.value.length > 130 && textarea.value.length < 140){
    contador.style.color = "purple";
  }
 }
 setInterval(mudaCor, 1);
