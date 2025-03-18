


let regione = document.querySelector('.regione');
let paese = document.querySelector('.paese');
let citta = document.querySelector('.citta');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let note = document.querySelector('.note');
let arrivo = document.querySelector('.arrivo');
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


    regione.value = dati.regione;
    paese.value = dati.paese;
    citta.value = dati.citta;
    indirizzo.value = dati.indirizzo;
    indirizzoDue.value = dati.indirizzoDue;
    cap.value = dati.cap;
    note.value = dati.note;
    arrivo.value = dati.arrivo;
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
        paese,
        citta,
        indirizzo,
        indirizzoDue,
        cap,
        note,
        autista,
        falegname,
        montatore,
        operatore,
        arrivo,
        azienda_id) {

        (this.regione = regione),
            (this.paese = paese),
            (this.citta = citta),
            (this.indirizzo = indirizzo),
            (this.indirizzoDue = indirizzoDue),
            (this.cap = cap),
            (this.note = note),
            (this.autista = autista),
            (this.falegname = falegname),
            (this.montatore = montatore),
            (this.operatore = operatore),
            (this.arrivo = arrivo),
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
        paese.value,
        citta.value,
        indirizzo.value,
        indirizzoDue.value,
        cap.value,
        note.value,
        autista.textContent,
        falegname.textContent,
        montatore.textContent,
        operatore.textContent,
        arrivo.value,
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



new Date();
let dat = new Date();

//--------------------------------------//

function padToTwoDigits(number) {
    return number.toString().padStart(2, '0');
}

let ggMin = padToTwoDigits(dat.getDate() + 1);
let mmMin = padToTwoDigits(dat.getMonth() + 1);
let aaMin = dat.getFullYear();
let dataMinInizio = `${aaMin}-${mmMin}-${ggMin}`;

let ggMax = padToTwoDigits(dat.getDate() + 1);
let mmMax = padToTwoDigits(dat.getMonth() + 1);
let aaMax = dat.getFullYear() + 1;
let dataMaxInizio = `${aaMax}-${mmMax}-${ggMax}`;

console.log(dataMinInizio);
console.log(dataMaxInizio);

arrivo.setAttribute('min', dataMinInizio);
arrivo.setAttribute('max', dataMaxInizio);



let blankCamp = document.querySelector('.blankCamp');



function checkCampi() {

    event.preventDefault();
    if (regione.value.trim() != "" &&
        paese.value.trim() != "" &&
        citta.value.trim() != "" &&
        indirizzo.value.trim() != "" &&
        cap.value.trim() != "" &&
        arrivo.value.trim() != ""
    ) {

        blankCamp.innerHTML = '';

        recuperaId();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}


btnInvioRichiestaPersonale.addEventListener('click', checkCampi);
