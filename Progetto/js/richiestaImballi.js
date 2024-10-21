


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let note = document.querySelector('.note');
let imballi1 = document.querySelector('.imballi1');
let imballi2 = document.querySelector('.imballi2');
let imballi3 = document.querySelector('.imballi3');
let imballi4 = document.querySelector('.imballi4');

let btnInvioRichiestaImballi = document.querySelector('.btnInvioRichiestaImballi');

class Imballi {
    constructor(regione,
        provincia,
        comune,
        indirizzo,
        indirizzoDue,
        cap,
        note,
        imballi1,
        imballi2,
        imballi3,
        imballi4,
        azienda_id) {

        (this.regione = regione),
            (this.provincia = provincia),
            (this.comune = comune),
            (this.indirizzo = indirizzo),
            (this.indirizzoDue = indirizzoDue),
            (this.cap = cap),
            (this.note = note),
            (this.imballi1 = imballi1),
            (this.imballi2 = imballi2),
            (this.imballi3 = imballi3),
            (this.imballi4 = imballi4),
            (this.azienda_id = azienda_id)
    }
}


function inviaRichiesta() {

    let azienda_id = localStorage.getItem('idUtente');
    console.log(azienda_id);


    let nuovaRichiestaImballi = new Imballi(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        indirizzoDue.value,
        cap.value,
        note.value,
        imballi1.value,
        imballi2.value,
        imballi3.value,
        imballi4.value,
        azienda_id
    );



    console.log(nuovaRichiestaImballi);


    fetch(`${azienda_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaImballi),

    })

    location.reload();


}


let invalidCap = document.querySelector('.invalidCap');
let blankCamp = document.querySelector('.blankCamp');


let regexCap = /^[0-9]{5}$/;


function controllaValiditaCampi() {


    if (!cap.value.match(regexCap)) {
        invalidCap.innerHTML = 'cap non valido';
    } else {
        invalidCap.innerHTML = '';
    }

}



function checkCampi() {

    event.preventDefault();
    if (regione.value.trim() != "" &&
        provincia.value.trim() != "" &&
        comune.value.trim() != "" &&
        indirizzo.value.trim() != "" &&
        cap.value.trim() != "" &&
        cap.value.match(regexCap)
    ) {

        blankCamp.innerHTML = '';

        inviaRichiesta();

    } else {
        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}



btnInvioRichiestaImballi.addEventListener('click', checkCampi);


document.addEventListener('input', controllaValiditaCampi);
