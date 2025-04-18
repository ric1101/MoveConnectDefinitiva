

let btnInvio = document.querySelector('.btn-invio');
let btnRigenera = document.querySelector(".rigenera");
let codice = document.querySelector('.codice');
let username = localStorage.getItem('emailUtente');
let errore = document.querySelector('.errore');



class Verifica {
  constructor(username, codice) {
    (this.username = username),
      (this.codice = codice)

  }
}

class Rigenera {
  constructor(username) {
    (this.username = username)
  }
}


function fetchInvio() {

  event.preventDefault();

  let nuovoUtente = new Verifica(username, codice.value);
  console.log(username, codice.value);


  fetch(`https://127.0.0.1/api/azienda/verify-azienda?username=${username}&verificationCode=${codice.value}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovoUtente),
  })
  .then((response) => {
    if (response.ok) {

      window.location.href = 'login.html';
      // console.log('codice giusto');

    } else {

      errore.innerHTML = 'codice errato o scaduto';
    }
  })



}

function rigenera(){
  event.preventDefault();
  let rigenera = new Rigenera(username);
  console.log(username);

  fetch(`https://127.0.0.1/api/azienda/rigenera-codice?username=${username}`,{ 
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rigenera),
  })
  .then((response) => {
    if (response.ok) {

      window.location.href = 'codice.html';
      // console.log('codice giusto');

    } else {

      errore.innerHTML = 'codice errato o scaduto';
    }
  })



}

btnRigenera.addEventListener('click', rigenera);
btnInvio.addEventListener('click', fetchInvio);
