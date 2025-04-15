
let modal = document.querySelector('.modal');
let username = localStorage.getItem('emailRecupera');
let newPassword = document.querySelector('.newPassword');
let newPasswordConferma = document.querySelector('.newPasswordConferma');
let codiceVerificaRecuperoPassword = document.querySelector('.codice');
let btnInvio = document.querySelector('.btn-invio');
let btnPassRecupera = document.querySelector(".rigeneraCodice");
let errore = document.querySelector('.errore');
let showPassword1 = document.querySelector("#showPassword1");
let showPassword2 = document.querySelector("#showPassword2");

let listaErrori1 = document.querySelector('#listaErrori1');
let erroreLunghezzaMin1 = document.querySelector('.erroreLunghezzaMin1');
let erroreLunghezzaMax1 = document.querySelector('.erroreLunghezzaMax1');
let erroreMaiuscola1 = document.querySelector('.erroreMaiuscola1');
let erroreMinuscola1 = document.querySelector('.erroreMinuscola1');
let erroreCarattereSpec1 = document.querySelector('.erroreCarattereSpec1');
let erroreNumero1 = document.querySelector('.erroreNumero1');

let listaErrori2 = document.querySelector('#listaErrori2');
let erroreLunghezzaMin2 = document.querySelector('.erroreLunghezzaMin2');
let erroreLunghezzaMax2 = document.querySelector('.erroreLunghezzaMax2');
let erroreMaiuscola2 = document.querySelector('.erroreMaiuscola2');
let erroreMinuscola2 = document.querySelector('.erroreMinuscola2');
let erroreCarattereSpec2 = document.querySelector('.erroreCarattereSpec2');
let erroreNumero2 = document.querySelector('.erroreNumero2');

class Azienda {
    constructor(username, codiceVerificaRecuperoPassword) {
        (this.username = username),
            (this.codiceVerificaRecuperoPassword = codiceVerificaRecuperoPassword)

    }
}

function verificaCodice() {
    let apiUrl = fetch(window.MY_APP_API_URL);// dentro ogni funzione


    console.log('ciao12');


    let nuovaAzienda = new Azienda(username, codiceVerificaRecuperoPassword.value);
    console.log(nuovaAzienda);

    fetch(`${apiUrl}/api/azienda/verifyCodePassChange`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaAzienda),

    })
        .then((response) => {
            if (response.ok) {
                errore.innerHTML = '';
                fetchInvioNuovaPassword();
            } else {

                errore.innerHTML = 'codice errato o scaduto';
            }
        })



}

class Rigenera {
    constructor(username) {
        (this.username = username)
    }
}

function rigenera(){
    event.preventDefault();
    let rigenera = new Rigenera(username);
    console.log(username);
  
    fetch(`${apiUrl}/api/azienda/rigenera-password?username=${username}`,{ 
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rigenera),
    })
    .then((response) => {
      if (response.ok) {
  
        window.location.href = 'recuperaPassword.html';
        // console.log('codice giusto');
  
      } else {
  
        errore.innerHTML = 'codice errato o scaduto';
      }
    })
  
  
  
  }
  
  btnPassRecupera.addEventListener('click', rigenera);


function toShowPassword1() {
    if (newPassword.type === "text") {
        newPassword.type = "password";
    } else {
        newPassword.type = "text";
    }
}
showPassword1.addEventListener("click", toShowPassword1);



function toShowPassword2() {
    if (newPasswordConferma.type === "text") {
        newPasswordConferma.type = "password";
    } else {
        newPasswordConferma.type = "text";
    }
}
showPassword2.addEventListener("click", toShowPassword2);


function cambiaPassword() {

    event.preventDefault();


    if (newPassword.value === newPasswordConferma.value && newPassword.value.match(regexPASSWORD)) {
        console.log(newPassword);

        verificaCodice();

    } else {

        if (newPassword.value.match(regexPASSWORD)) {

            errore.innerHTML = 'le password non corrispondono';

        } else {
            errore.innerHTML = 'la password non è valida';
        }



    }


}

btnInvio.addEventListener('click', cambiaPassword);



function fetchInvioNuovaPassword() {


    fetch(`${apiUrl}/api/azienda/set-password?username=${username}&newPassword=${newPassword.value}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(newPassword.value),
    })

    window.location.href = 'passwordCambiata.html';

}


const regexPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

const regexPasswordMaiuscola = /(?=.*[A-Z])/;
const regexPasswordMinuscola = /(?=.*[a-z])/;
const regexPasswordSpeciale = /(?=.*[@$!%*?&])/;
const regexPasswordNumeri = /(?=.*\d)/;


function passwordCheck1() {


    if (newPassword.value.length <= 8) {

        let lunghezzaMin1 = `<li> Minimo 8 caratteri </li>`;
        erroreLunghezzaMin1.innerHTML = lunghezzaMin1;
    } else {
        erroreLunghezzaMin1.innerHTML = "";

    }

    if (newPassword.value.length > 15) {
        let lunghezzaMax1 = `<li> Massimo 15 caratteri</li>`;
        erroreLunghezzaMax1.innerHTML = lunghezzaMax1;
    } else {
        erroreLunghezzaMax1.innerHTML = "";
    }

    if (!newPassword.value.match(regexPasswordMaiuscola)) {
        let maiuscolo1 = `<li>Almeno un carattere in maiuscolo</li>`
        erroreMaiuscola1.innerHTML = maiuscolo1;

    } else {
        erroreMaiuscola1.innerHTML = "";
    }

    if (!newPassword.value.match(regexPasswordMinuscola)) {
        let minuscolo1 = `<li>Almeno un carattere in minuscolo</li>`;
        erroreMinuscola1.innerHTML = minuscolo1;
    } else {
        erroreMinuscola1.innerHTML = "";
    }

    if (!newPassword.value.match(regexPasswordSpeciale)) {
        let carattereSpeciale1 = `<li>Almeno un carattere speciale(@$!%*?&)</li>`;
        erroreCarattereSpec1.innerHTML = carattereSpeciale1;
    } else {
        erroreCarattereSpec1.innerHTML = "";
    }


    if (!newPassword.value.match(regexPasswordNumeri)) {
        let numero1 = `<li>Almeno un numero</li>`;
        erroreNumero1.innerHTML = numero1;
    } else {
        erroreNumero1.innerHTML = "";
    }

}

function passwordCheck2() {


    if (newPasswordConferma.value.length <= 8) {

        let lunghezzaMin2 = `<li> Minimo 8 caratteri </li>`;
        erroreLunghezzaMin2.innerHTML = lunghezzaMin2;
    } else {
        erroreLunghezzaMin2.innerHTML = "";

    }

    if (newPasswordConferma.value.length > 15) {
        let lunghezzaMax2 = `<li> Massimo 15 caratteri</li>`;
        erroreLunghezzaMax2.innerHTML = lunghezzaMax2;
    } else {
        erroreLunghezzaMax2.innerHTML = "";
    }

    if (!newPasswordConferma.value.match(regexPasswordMaiuscola)) {
        let maiuscolo2 = `<li>Almeno un carattere in maiuscolo</li>`
        erroreMaiuscola2.innerHTML = maiuscolo2;

    } else {
        erroreMaiuscola2.innerHTML = "";
    }

    if (!newPasswordConferma.value.match(regexPasswordMinuscola)) {
        let minuscolo2 = `<li>Almeno un carattere in minuscolo</li>`;
        erroreMinuscola2.innerHTML = minuscolo2;
    } else {
        erroreMinuscola2.innerHTML = "";
    }

    if (!newPasswordConferma.value.match(regexPasswordSpeciale)) {
        let carattereSpeciale2 = `<li>Almeno un carattere speciale(@$!%*?&)</li>`;
        erroreCarattereSpec2.innerHTML = carattereSpeciale2;
    } else {
        erroreCarattereSpec2.innerHTML = "";
    }


    if (!newPasswordConferma.value.match(regexPasswordNumeri)) {
        let numero2 = `<li>Almeno un numero</li>`;
        erroreNumero2.innerHTML = numero2;
    } else {
        erroreNumero2.innerHTML = "";
    }

}

newPassword.addEventListener('keyup', passwordCheck1);
newPasswordConferma.addEventListener('keyup', passwordCheck2);



let remainingTime = 300; // 5 minuti in secondi

        function updateTimer() {
            if (remainingTime > 0) {
                document.getElementById("timer").textContent = remainingTime;
                remainingTime--;
            } else {
                clearInterval(timerInterval);
                document.getElementById("timer").textContent = "Tempo scaduto!";
                window.location.href = 'index.html';
            }
        }

        // Aggiorna il timer ogni secondo
        let timerInterval = setInterval(updateTimer, 1000);

        // Esegui la prima visualizzazione
        updateTimer();