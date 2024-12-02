


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let note = document.querySelector('.note');
let operatore = document.querySelector('.facchini');
let autista = document.querySelector('.autisti');
let montatore = document.querySelector('.montatori');
let falegname = document.querySelector('.falegnami');
let facchini = document.querySelector('#facchino-count');
let autisti = document.querySelector('#autista-count');
let montatori = document.querySelector('#montatore-count');
let falegnami = document.querySelector('#falegname-count');

let btnInvioRichiestaImballi = document.querySelector('.btnInvioRichiestaPersonale');


let idPersonale = localStorage.getItem('modificaPersonale');

fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/personale/${idPersonale}`)
    .then((res) => res.json())
    .then((data) => {


        ripopolaRichiestaPersonale(data);


    });


function ripopolaRichiestaPersonale(dati) {

    let opzioneRegione = document.querySelector('.opzioneRegione');
    let opzioneProvincia = document.querySelector('.opzioneProvincia');
    let opzioneComune = document.querySelector('.opzioneComune');


    opzioneRegione.innerHTML = 'Precedente: ' + dati.regionePartenza;
    opzioneProvincia.innerHTML = 'Precedente: ' + dati.provinciaPartenza;
    opzioneComune.innerHTML = 'Precedente: ' + dati.comunePartenza;
    indirizzo.value = dati.indirizzo;
    indirizzoDue.value = dati.indirizzoDue;
    cap.value = dati.cap;
    note.value = dati.note;
    operatore.textContent = dati.operatore;
    autista.textContent = dati.autista;
    montatore.textContent = dati.montatore;
    falegname.textContent = dati.falegname;
    facchini.textContent = dati.operatore;
    autisti.textContent = dati.autista;
    montatori.textContent = dati.montatore;
    falegnami.textContent = dati.falegname;
    

}


class Personale {
    constructor(regione,
        provincia,
        comune,
        indirizzo,
        indirizzoDue,
        cap,
        note,
        autista,
        falegname,
        montatore,
        operatore,
        azienda_id) {

        (this.regione = regione),
            (this.provincia = provincia),
            (this.comune = comune),
            (this.indirizzo = indirizzo),
            (this.indirizzoDue = indirizzoDue),
            (this.cap = cap),
            (this.note = note),
            (this.autista = autista),
            (this.falegname = falegname),
            (this.montatore = montatore),
            (this.operatore = operatore),
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


    let nuovaRichiestaPersonale = new Personale(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        indirizzoDue.value,
        cap.value,
        note.value,
        autista.textContent,
        falegname.textContent,
        montatore.textContent,
        operatore.textContent,
        azienda_id
    );



    console.log(nuovaRichiestaPersonale);


    fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/modificapersonale/${idPersonale}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaPersonale),

    })

    window.location.href = 'user.html';


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


btnInvioRichiestaPersonale.addEventListener('click', checkCampi);

cap.addEventListener('keyup', controllaValiditaCampi);
