


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


let btnInvioRichiestaDeposito = document.querySelector('.btnInvioRichiestaDeposito');

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


function inviaRichiesta() {

    let azienda_id = localStorage.getItem('idUtente');
    console.log(azienda_id);


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
        mobilio.value,
        pedane.value,
        altro.value,
        azienda_id
    );



    console.log(nuovaRichiestaDeposito);


    fetch(`${azienda_id}`, { //Inserire qui la rotta
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaDeposito),

    })

    location.reload();


}


new Date();
let dat = new Date();

//--------------------------------------//

let ggMin = dat.getDate() + 1;
let mmMin = (dat.getMonth() + 1);
let aaMin = dat.getFullYear();

let dataMinInizio = aaMin + "-" + mmMin + "-" + ggMin;
console.log(dataMinInizio);

//--------------------------------------//

let ggMax = dat.getDate() + 1;
let mmMax = (dat.getMonth() + 1);
let aaMax = dat.getFullYear() + 1;
let dataMaxInizio = aaMax + "-" + mmMax + "-" + ggMax;

console.log(dataMaxInizio);

//--------------------------------------//

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
        cap.value.match(regexCap)
    ) {

        blankCamp.innerHTML = '';

        inviaRichiesta();

    } else {
        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}


btnInvioRichiestaDeposito.addEventListener('click', checkCampi);

cap.addEventListener('keyup', capCheck);
mq.addEventListener('keyup', mqCheck);
document.addEventListener('input', inizioCheck)