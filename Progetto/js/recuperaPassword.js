

let username = localStorage.getItem('emailRecupera');
let newPassword = document.querySelector('.newPassword');
let newPasswordConferma = document.querySelector('.newPasswordConferma');
let codice = document.querySelector('.codice');
let btnInvio = document.querySelector('.btn-invio');
let errore = document.querySelector('.errore');

class Azienda {
    constructor(username, codice) {
        (this.username = username),
            (this.codice = codice)

    }
}

function verificaCodice() {

    let nuovaAzienda = new Azienda(username, codice.value);
    console.log(username, codice.value);



    fetch(`http://127.0.0.1:8080/api/azienda/verifyCodePassChange/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaAzienda),

    })
        .then((response) => {
            if (response.ok) {
                cambiaPassword();
            }
            errore.innerHTML = 'codice errato o scaduto';
        })



}

btnInvio.addEventListener('click', verificaCodice);



function cambiaPassword() {


    if (newPassword.value === newPasswordConferma.value) {

        fetch(`http://127.0.0.1:8080/api/azienda/verify-pass-change?username=${username}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPassword),
        })

    }

}