


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let note = document.querySelector('.note');
let imballo1 = document.querySelector('.imballi1');
let imballo2 = document.querySelector('.imballi2');
let imballo3 = document.querySelector('.imballi3');
let imballo4 = document.querySelector('.imballi4');
let imballo5 = document.querySelector('.imballi5');
let imballo6 = document.querySelector('.imballi6');
let imballo7 = document.querySelector('.imballi7');
let imballo8 = document.querySelector('.imballi8');

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
    

    fetch(`http://localhost:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {


            inviaRichiesta(data);
            console.log(data);

        });


}



function inviaRichiesta(dati) {

    let azienda_id = dati.id;
    console.log(imballo1.value);
    console.log(imballo2.value);
    console.log(imballo3.value);
    console.log(imballo4.value);
    console.log(imballo5.value);
    console.log(imballo6.value);
    console.log(imballo7.value);
    console.log(imballo8.value);
    
    

    let nuovaRichiestaImballi = new Imballi(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        indirizzoDue.value,
        cap.value,
        note.value,
        imballo1.value,
        imballo2.value,
        imballo3.value,
        imballo4.value,
        imballo5.value,
        imballo6.value,
        imballo7.value,
        imballo8.value,
        azienda_id
    );



    console.log(nuovaRichiestaImballi);


    fetch(`http://localhost:8080/api/consegnaImballi/inserisciConsegna/${azienda_id}`, {
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

        recuperaId();

    } else {
        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}


btnInvioRichiestaImballi.addEventListener('click', checkCampi);

cap.addEventListener('keyup', controllaValiditaCampi);
