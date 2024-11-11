
let modal = document.querySelector('.modal');
let username = localStorage.getItem('emailRecupera');
let newPassword = document.querySelector('.newPassword');
let newPasswordConferma = document.querySelector('.newPasswordConferma');
let codiceVerificaRecuperoPassword = document.querySelector('.codice');
let btnInvio = document.querySelector('.btn-invio');
let errore = document.querySelector('.errore');

class Azienda {
    constructor(username, codiceVerificaRecuperoPassword) {
        (this.username = username),
            (this.codiceVerificaRecuperoPassword = codiceVerificaRecuperoPassword)

    }
}

function verificaCodice() {

    
    let nuovaAzienda = new Azienda(username, codiceVerificaRecuperoPassword.value);
    console.log(nuovaAzienda);



    fetch(`http://localhost:8080/api/azienda/verifyCodePassChange`, {
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
    event.preventDefault();

    if (newPassword.value === newPasswordConferma.value) {

        fetch(`http://127.0.0.1:8080/api/azienda/set-password?username=${username}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPassword),
        })

        modal.classList.remove('d-none');
        modal.classList.add('d-block');


    }

}
