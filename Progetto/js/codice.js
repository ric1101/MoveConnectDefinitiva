

let btnInvio = document.querySelector('.btn-invio');
let codice = document.querySelector('.codice');
let username = localStorage.getItem('emailUtente');
let errore = document.querySelector('.errore');


class Verifica {
  constructor(username, codice) {
    (this.username = username),
      (this.codice = codice)

  }
}


function fetchInvio() {

  event.preventDefault();

  let nuovoUtente = new Verifica(username, codice.value);
  console.log(username, codice.value);


  fetch(`http://127.0.0.1:8080/api/azienda/verify-azienda?username=${username}&verificationCode=${codice.value}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovoUtente),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = 'login.html';

      } else {

        errore.innerHTML = 'codice errato o scaduto';
      }
    })



}

btnInvio.addEventListener('click', fetchInvio);
