


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let note = document.querySelector('.note');
let facchini = document.querySelector('.facchini');
let autisti = document.querySelector('.autisti');
let montatori = document.querySelector('.montatori');
let falegnami = document.querySelector('.falegnami');

let btnInvioRichiestaImballi = document.querySelector('.btnInvioRichiestaPersonale');

class Personale {
    constructor(regione,
        provincia,
        comune,
        indirizzo,
        indirizzoDue,
        cap,
        note,
        facchini,
        autisti,
        montatori,
        falegnami,
        azienda_id) {

        (this.regione = regione),
            (this.provincia = provincia),
            (this.comune = comune),
            (this.indirizzo = indirizzo),
            (this.indirizzoDue = indirizzoDue),
            (this.cap = cap),
            (this.note = note),
            (this.facchini = facchini),
            (this.autisti = autisti),
            (this.montatori = montatori),
            (this.falegnami = falegnami),
            (this.azienda_id = azienda_id)
    }
}


function inviaRichiesta() {

    let azienda_id = localStorage.getItem('idUtente');
    console.log(azienda_id);


    let nuovaRichiestaPersonale = new Personale(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        indirizzoDue.value,
        cap.value,
        note.value,
        facchini.value,
        autisti.value,
        montatori.value,
        falegnami.value,
        azienda_id
    );



    console.log(nuovaRichiestaPersonale);


    fetch(`http://127.0.0.1:8080/api/azienda/personale/${azienda_id}`, {  //Inserire qui la rotta
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaPersonale),

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
btnInvioRichiestaPersonale.addEventListener('click', checkCampi);

cap.addEventListener('keyup', controllaValiditaCampi);
