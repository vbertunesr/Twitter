var postado = document.getElementById('postado');
var botao = document.getElementById('sendButton');
var textarea = document.getElementById('message');

function tweet(event){
  event.preventDefault();
  var minhaDiv = document.createElement('div');
  postado.prepend(minhaDiv);
  minhaDiv.setAttribute('class', 'tweet');
  var newText = document.createElement('p');  
  newText.textContent = textarea.value;
  minhaDiv.appendChild(newText);

  textarea.value = "";
}
botao.addEventListener("click",tweet);


