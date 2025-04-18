


let regione = document.querySelector('.regione');
let paese = document.querySelector('.paese');
let citta = document.querySelector('.citta');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let mq = document.querySelector('.mq');
let inizio = document.querySelector('.inizio');
let fine = document.querySelector('.fine');
let note = document.querySelector('.note');
let mobilio = document.querySelector('.mobilio');
let pedane = document.querySelector('.pedane');
let altro = document.querySelector('.altro');


let btnInvioRichiestaDeposito = document.querySelector('.btnInvioRichiestaDeposito');

class Deposito {
    constructor(regione,
        paese,
        citta,
        indirizzo,
        indirizzoDue,
        cap,
        mq,
        inizio,
        fine,
        note,
        mobilio,
        pedane,
        altro,
        azienda_id) {

        (this.regione = regione),
            (this.paese = paese),
            (this.citta = citta),
            (this.indirizzo = indirizzo),
            (this.indirizzoDue = indirizzoDue),
            (this.cap = cap),
            (this.mq = mq),
            (this.inizio = inizio),
            (this.fine = fine),
            (this.note = note),
            (this.mobilio = mobilio),
            (this.pedane = pedane),
            (this.altro = altro),
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


        let nuovaRichiestaDeposito = new Deposito(
            regione.value,
            paese.value,
            citta.value,
            indirizzo.value,
            indirizzoDue.value,
            cap.value,
            mq.value,
            inizio.value,
            fine.value,
            note.value,
            mobilio.textContent,
            pedane.textContent,
            altro.textContent,
            azienda_id
        );



        console.log(nuovaRichiestaDeposito);


        fetch(`https://127.0.0.1/api/depositoMagazzino/inserisciMagazzino/${azienda_id}`, { //Inserire qui la rotta
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuovaRichiestaDeposito),

        })

        window.location.href = 'inviataConSuccessoDeposito.html';

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

inizio.setAttribute('min', dataMinInizio);
inizio.setAttribute('max', dataMaxInizio);




let invalidInizio = document.querySelector('.invalidInizio');
let invalidFine = document.querySelector('.invalidFine');
let invalidMq = document.querySelector('.invalidMq');
let blankCamp = document.querySelector('.blankCamp');


let regexMq = /^[1-9][0-9]?$/;


function mqCheck() {

    if (!mq.value.match(regexMq)) {
        invalidMq.innerHTML = 'mq non validi';
    } else {
        invalidMq.innerHTML = '';
    }
}

function inizioCheck() {

    if (inizio.value != '') {

        console.log('hello');
        fine.removeAttribute('disabled');
        fine.setAttribute('min', inizio.value)
        fine.setAttribute('max', dataMaxInizio)

    } else {
        console.log('ciao');

    }

}



function checkCampi() {

    event.preventDefault();
    if (regione.value.trim() != "" &&
        paese.value.trim() != "" &&
        citta.value.trim() != "" &&
        indirizzo.value.trim() != "" &&
        cap.value.trim() != "" &&
        mq.value.trim() != "" &&
        mq.value.match(regexMq) &&
        inizio.value.trim() != '' &&
        fine.value.trim() != ''
    ) {

        blankCamp.innerHTML = '';

        recuperaId();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}
btnInvioRichiestaDeposito.addEventListener('click', checkCampi);

mq.addEventListener('keyup', mqCheck);
document.addEventListener('input', inizioCheck);
