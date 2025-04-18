
let email = document.querySelector('.email');
let btnInvio = document.querySelector('.btn-invio');
let errore = document.querySelector('.errore');

const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function inviaMail() {


    event.preventDefault();
    let apiUrl = fetch(window.MY_APP_API_URL);

    let username = email.value;
    
  fetch(`https://127.0.0.1/api/azienda/recupera-password?username=${username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(username),
  })
  
    if (username.match(regexEMAIL)) {
        errore.innerHTML = '';
        window.location.href = 'recuperaPassword.html';
        localStorage.setItem('emailRecupera', username);

      } else {
          errore.innerHTML = 'email non valida';

      }
    

  
}

btnInvio.addEventListener('click', inviaMail);


function emailCheck() {

    if (!email.value.match(regexEMAIL)) {
      let emailErr = 'email non valida';
      errore.innerHTML = emailErr;
      console.log('true');
  
    } else {
      errore.innerHTML = '';
      console.log('false');
    }
  
  }


  email.addEventListener('keyup', emailCheck);