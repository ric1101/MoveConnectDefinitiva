


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let cap = document.querySelector('.cap');
let mq = document.querySelector('.mq');
let inizio = document.querySelector('.inizio');
let fine = document.querySelector('.fine');
let note = document.querySelector('.note');
let mobilio = document.querySelector('.mobilio');
let pedane = document.querySelector('.pedane');
let altro = document.querySelector('.altro');
let mobilioo = document.querySelector('#autista-count');
let pedanee = document.querySelector('#montatore-count');
let altroo = document.querySelector('#falegname-count');


let btnInvioRichiestaDeposito = document.querySelector('.btnInvioRichiestaDeposito');



let idMagazzino = localStorage.getItem('modificaMagazzino');

fetch(`http://127.0.0.1:8080/api/depositoMagazzino/magazzino/${idMagazzino}`)
    .then((res) => res.json())
    .then((data) => {


        ripopolaRichiestaMagazzino(data);


    });


function ripopolaRichiestaMagazzino(dati) {

    let opzioneRegione = document.querySelector('.opzioneRegione');
    let opzioneProvincia = document.querySelector('.opzioneProvincia');
    let opzioneComune = document.querySelector('.opzioneComune');


    opzioneRegione.innerHTML = 'Precedente: ' + dati.regione;
    opzioneProvincia.innerHTML = 'Precedente: ' + dati.provincia;
    opzioneComune.innerHTML = 'Precedente: ' + dati.comune;
    indirizzo.value = dati.indirizzo;
    cap.value = dati.cap;
    mq.value = dati.mq;
    inizio.value = dati.inizio;
    fine.value = dati.fine;
    note.value = dati.note;
    mobilio.textContent = dati.mobilio;
    pedane.textContent = dati.pedane;
    altro.textContent = dati.altro;
    mobilioo.textContent = dati.mobilio;
    pedanee.textContent = dati.pedane;
    altroo.textContent = dati.altro;

}



class Deposito {
    constructor(regione,
        provincia,
        comune,
        indirizzo,
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
            (this.provincia = provincia),
            (this.comune = comune),
            (this.indirizzo = indirizzo),
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
    

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {


            inviaRichiesta(data);
            console.log(data);


        });


}



function inviaRichiesta(dati) {

    let azienda_id = dati.id;


    let nuovaRichiestaDeposito = new Deposito(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
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


    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/modificaMagazzino/${idMagazzino}`, { //Inserire qui la rotta
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaDeposito),

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

inizio.setAttribute('min', dataMinInizio);
inizio.setAttribute('max', dataMaxInizio);




let invalidInizio = document.querySelector('.invalidInizio');
let invalidFine = document.querySelector('.invalidFine');
let invalidCap = document.querySelector('.invalidCap');
let invalidMq = document.querySelector('.invalidMq');
let blankCamp = document.querySelector('.blankCamp');


let regexCap = /^[0-9]{5}$/;
let regexMq = /^[1-9][0-9]?$/;


function capCheck() {


    if (!cap.value.match(regexCap)) {
        invalidCap.innerHTML = 'cap non valido';
    } else {
        invalidCap.innerHTML = '';
    }

}


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
        provincia.value.trim() != "" &&
        comune.value.trim() != "" &&
        indirizzo.value.trim() != "" &&
        cap.value.trim() != "" &&
        cap.value.match(regexCap) &&
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

cap.addEventListener('keyup', capCheck);
mq.addEventListener('keyup', mqCheck);
document.addEventListener('input', inizioCheck)
