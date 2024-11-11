
let email = document.querySelector('.email');
let btnInvio = document.querySelector('.btn-invio');


function inviaMail() {

    event.preventDefault();
    
    let username = email.value;
    
  fetch(`http://127.0.0.1:8080/api/azienda/recupera-password?username=${username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(username),
  })

}

btnInvio.addEventListener('click', inviaMail);