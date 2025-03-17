


let regione = document.querySelector('.regione');
let paese = document.querySelector('.paese');
let citta = document.querySelector('.citta');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let note = document.querySelector('.note');
let arrivo = document.querySelector('.arrivo');
let imballo1 = document.querySelector('#imballo1-summary');
let imballo2 = document.querySelector('#imballo2-summary');
let imballo3 = document.querySelector('#imballo3-summary');
let imballo4 = document.querySelector('#imballo4-summary');
let imballo5 = document.querySelector('#imballo5-summary');
let imballo6 = document.querySelector('#imballo6-summary');
let imballo7 = document.querySelector('#imballo7-summary');
let imballo8 = document.querySelector('#imballo8-summary');
let imballi1 = document.querySelector('.imballi1');
let imballi2 = document.querySelector('.imballi2');
let imballi3 = document.querySelector('.imballi3');
let imballi4 = document.querySelector('.imballi4');
let imballi5 = document.querySelector('.imballi5');
let imballi6 = document.querySelector('.imballi6');
let imballi7 = document.querySelector('.imballi7');
let imballi8 = document.querySelector('.imballi8');

let btnInvioRichiestaImballi = document.querySelector('.btnInvioRichiestaImballi');


let idImballi = localStorage.getItem('modificaImballi');

fetch(`http://127.0.0.1:8080/api/consegnaImballi/consegnas/${idImballi}`)
    .then((res) => res.json())
    .then((data) => {


        ripopolaRichiestaImballi(data);
        console.log(data);
        

    });


function ripopolaRichiestaImballi(dati) {


    regione.value = dati.regione;
    paese.value = dati.paese;
    citta.value = dati.citta;
    indirizzo.value = dati.indirizzo;
    indirizzoDue.value = dati.indirizzoDue;
    cap.value = dati.cap;
    note.value = dati.note;
    arrivo.textContent = dati.arrivo;
    console.log(dati.arrivo);
    imballo1.textContent = dati.imballo1;
    imballo2.textContent = dati.imballo2;
    imballo3.textContent = dati.imballo3;
    imballo4.textContent = dati.imballo4;
    imballo5.textContent = dati.imballo5;
    imballo6.textContent = dati.imballo6;
    imballo7.textContent = dati.imballo7;
    imballo8.textContent = dati.imballo8;
    imballi1.textContent = dati.imballo1;
    imballi2.textContent = dati.imballo2;
    imballi3.textContent = dati.imballo3;
    imballi4.textContent = dati.imballo4;
    imballi5.textContent = dati.imballo5;
    imballi6.textContent = dati.imballo6;
    imballi7.textContent = dati.imballo7;
    imballi8.textContent = dati.imballo8;

}



class Imballi {
    constructor(regione,
        paese,
        citta,
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
        arrivo,
        azienda_id) {

        (this.regione = regione),
            (this.paese = paese),
            (this.citta = citta),
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


    let nuovaRichiestaImballi = new Imballi(
        regione.value,
        paese.value,
        citta.value,
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
        arrivo.value,
        azienda_id
    );



    console.log(nuovaRichiestaImballi);


    fetch(`http://127.0.0.1:8080/api/consegnaImballi/modificaConsegna/${idImballi}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaImballi),

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


btnInvioRichiestaImballi.addEventListener('click', checkCampi);

