


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

let btnInvioRichiestaImballi = document.querySelector('.btnInvioRichiestaImballi');

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


    fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            inviaRichiesta(data);
            console.log(data);

        });


}



function inviaRichiesta(dati) {

    let azienda_id = dati.id;

    if (dati.abbonamento == 'base' || dati.abbonamento == 'plus') {


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


        fetch(`https://127.0.0.1/api/consegnaImballi/inserisciConsegna/${azienda_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuovaRichiestaImballi),

        })

        window.location.href = 'inviataConSuccessoImballi.html';

    } else {

        window.location.href = 'abbonamentiRegistrato.html';

    }

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
