
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

    event.preventDefault();

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
                errore.innerHTML = '';
                fetchInvioNuovaPassword();
            }else{

                errore.innerHTML = 'codice errato o scaduto';
            }
        })



}




function cambiaPassword() {
    
    
    if (newPassword.value === newPasswordConferma.value) {
        console.log(newPassword);
        
        verificaCodice();
        
    } else {

        errore.innerHTML = 'le password non corrispondono';

    }

    
}

btnInvio.addEventListener('click', cambiaPassword);



function fetchInvioNuovaPassword() {
    

    fetch(`http://localhost:8080/api/azienda/set-password?username=${username}&newPassword=${newPassword.value}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(newPassword.value),
    })
    
    window.location.href = 'passwordCambiata.html';

}