


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let note = document.querySelector('.note');
let imballo1 = document.querySelector('#imballo1-summary');
let imballo2 = document.querySelector('#imballo2-summary');
let imballo3 = document.querySelector('#imballo3-summary');
let imballo4 = document.querySelector('#imballo4-summary');
let imballo5 = document.querySelector('#imballo5-summary');
let imballo6 = document.querySelector('#imballo6-summary');
let imballo7 = document.querySelector('#imballo7-summary');
let imballo8 = document.querySelector('#imballo8-summary');

let btnInvioRichiestaImballi = document.querySelector('.btnInvioRichiestaImballi');

class Imballi {
    constructor(regione,
        provincia,
        comune,
        indirizzo,
        indirizzoDue,
        cap,
        note,
        imballo1,
        imballo2,
        imballo3,
        imballo4,
        imballo5,
        imballo6,
        imballo7,
        imballo8,
        azienda_id) {

        (this.regione = regione),
            (this.provincia = provincia),
            (this.comune = comune),
            (this.indirizzo = indirizzo),
            (this.indirizzoDue = indirizzoDue),
            (this.cap = cap),
            (this.note = note),
            (this.imballo1 = imballo1),
            (this.imballo2 = imballo2),
            (this.imballo3 = imballo3),
            (this.imballo4 = imballo4),
            (this.imballo5 = imballo5),
            (this.imballo6 = imballo6),
            (this.imballo7 = imballo7),
            (this.imballo8 = imballo8),
            (this.azienda_id = azienda_id)
    }
}


function recuperaId() {
    
    let accessToken = localStorage.getItem('accessToken');
    

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {


            inviaRichiesta(data);
            console.log(data);

        });


}



function inviaRichiesta(dati) {

    let azienda_id = dati.id;


    let nuovaRichiestaImballi = new Imballi(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        indirizzoDue.value,
        cap.value,
        note.value,
        imballo1.textContent,
        imballo2.textContent,
        imballo3.textContent,
        imballo4.textContent,
        imballo5.textContent,
        imballo6.textContent,
        imballo7.textContent,
        imballo8.textContent,
        azienda_id
    );



    console.log(nuovaRichiestaImballi);


    fetch(`http://127.0.0.1:8080/api/consegnaImballi/inserisciConsegna/${azienda_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaImballi),

    })

    window.location.href = 'inviataConSuccesso.html';


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

        recuperaId();

    } else {
        
        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}


btnInvioRichiestaImballi.addEventListener('click', checkCampi);

cap.addEventListener('keyup', controllaValiditaCampi);
