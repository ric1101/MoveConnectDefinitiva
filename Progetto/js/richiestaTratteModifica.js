
let regionePartenza = document.querySelector('.regionePartenza');
let provinciaPartenza = document.querySelector('.provinciaPartenza');
let comunePartenza = document.querySelector('.comunePartenza');
let indirizzoPartenza = document.querySelector('.indirizzoPartenza');
let indirizzoDuePartenza = document.querySelector('.indirizzoDuePartenza');
let capPartenza = document.querySelector('.capPartenza');
let dataPartenza = document.querySelector('.partenza');
let tipoDiVeicolo = document.querySelector('.tipoDiVeicolo');


let regioneArrivo = document.querySelector('.regioneArrivo');
let provinciaArrivo = document.querySelector('.provinciaArrivo');
let comuneArrivo = document.querySelector('.comuneArrivo');
let indirizzoArrivo = document.querySelector('.indirizzoArrivo');
let indirizzoDueArrivo = document.querySelector('.indirizzoDueArrivo');
let capArrivo = document.querySelector('.capArrivo');
let dataArrivo = document.querySelector('.arrivo');

let note = document.querySelector('.note');

let btnInvioRichiestaTratte = document.querySelector('.btnInvioRichiestaTratte');


let idTratta = localStorage.getItem('modificaTratta');

fetch(`http://127.0.0.1:8080/api/tratta/tratte/${idTratta}`)
    .then((res) => res.json())
    .then((data) => {


        ripopolaRichiestaTratte(data);


    });


function ripopolaRichiestaTratte(dati) {

    let opzioneRegione = document.querySelector('.opzioneRegione');
    let opzioneProvincia = document.querySelector('.opzioneProvincia');
    let opzioneComune = document.querySelector('.opzioneComune');
    let opzioneRegione2 = document.querySelector('.opzioneRegione2');
    let opzioneProvincia2 = document.querySelector('.opzioneProvincia2');
    let opzioneComune2 = document.querySelector('.opzioneComune2');


    opzioneRegione.innerHTML = 'Precedente: ' + dati.regionePartenza;
    opzioneProvincia.innerHTML = 'Precedente: ' + dati.provinciaPartenza;
    opzioneComune.innerHTML = 'Precedente: ' + dati.comunePartenza;
    opzioneRegione2.innerHTML = 'Precedente: ' + dati.regioneArrivo;
    opzioneProvincia2.innerHTML = 'Precedente: ' + dati.provinciaArrivo;
    opzioneComune2.innerHTML = 'Precedente: ' + dati.comuneArrivo;
    indirizzoPartenza.value = dati.indirizzoPartenza;
    indirizzoDuePartenza.value = dati.indirizzoDuePartenza;
    capPartenza.value = dati.capPartenza;
    dataPartenza.value = dati.dataPartenza;
    tipoDiVeicolo.value = dati.tipoDiVeicolo;
    indirizzoArrivo.value = dati.indirizzoArrivo;
    indirizzoDueArrivo.value = dati.indirizzoDueArrivo;
    capArrivo.value = dati.capArrivo;
    dataArrivo.value = dati.dataArrivo;
    note.value = dati.note;

}



class Tratte {
    constructor(regionePartenza,
        provinciaPartenza,
        comunePartenza,
        indirizzoPartenza,
        indirizzoDuePartenza,
        capPartenza,
        dataPartenza,
        tipoDiVeicolo,
        regioneArrivo,
        provinciaArrivo,
        comuneArrivo,
        indirizzoArrivo,
        indirizzoDueArrivo,
        capArrivo,
        dataArrivo,
        note,
        azienda_id) {

        (this.regionePartenza = regionePartenza),
            (this.provinciaPartenza = provinciaPartenza),
            (this.comunePartenza = comunePartenza),
            (this.indirizzoPartenza = indirizzoPartenza),
            (this.indirizzoDuePartenza = indirizzoDuePartenza),
            (this.capPartenza = capPartenza),
            (this.dataPartenza = dataPartenza),
            (this.tipoDiVeicolo = tipoDiVeicolo),
            (this.regioneArrivo = regioneArrivo),
            (this.provinciaArrivo = provinciaArrivo),
            (this.comuneArrivo = comuneArrivo),
            (this.indirizzoArrivo = indirizzoArrivo),
            (this.indirizzoDueArrivo = indirizzoDueArrivo),
            (this.capArrivo = capArrivo),
            (this.dataArrivo = dataArrivo),
            (this.note = note),
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


    let nuovaRichiestaTratte = new Tratte(
        regionePartenza.value,
        provinciaPartenza.value,
        comunePartenza.value,
        indirizzoPartenza.value,
        indirizzoDuePartenza.value,
        capPartenza.value,
        dataPartenza.value,
        tipoDiVeicolo.value,
        regioneArrivo.value,
        provinciaArrivo.value,
        comuneArrivo.value,
        indirizzoArrivo.value,
        indirizzoDueArrivo.value,
        capArrivo.value,
        dataArrivo.value,
        note.value,
        azienda_id
    );


    console.log(nuovaRichiestaTratte);



    fetch(`http://127.0.0.1:8080/api/tratta/modificaTratta/${idTratta}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaTratte),

    })

    window.location.href = 'user.html';




}


let invalidCapPartenza = document.querySelector('.invalidCapPartenza');
let invalidCapArrivo = document.querySelector('.invalidCapArrivo');
let invalidMq = document.querySelector('.invalidMq');
let invalidArrivo = document.querySelector('.invalidArrivo');
let invalidPartenza = document.querySelector('.invalidPartenza');
let blankCamp = document.querySelector('.blankCamp');


new Date();
let dat = new Date();

function padToTwoDigits(number) {
    return number.toString().padStart(2, '0');
}

let ggMin = padToTwoDigits(dat.getDate() + 1);
let mmMin = padToTwoDigits(dat.getMonth() + 1);
let aaMin = dat.getFullYear();
let dataMinPartenza = `${aaMin}-${mmMin}-${ggMin}`;

let ggMax = padToTwoDigits(dat.getDate() + 1);
let mmMax = padToTwoDigits(dat.getMonth() + 1);
let aaMax = dat.getFullYear() + 1;
let dataMaxPartenza = `${aaMax}-${mmMax}-${ggMax}`;

console.log(dataMinPartenza);
console.log(dataMaxPartenza);

dataPartenza.setAttribute('min', dataMinPartenza);
dataPartenza.setAttribute('max', dataMaxPartenza);


let regexCap = /^[0-9]{5}$/;
let regexMq = /^[1-9][0-9]?$/;


function capPartenzaCheck() {


    if (!capPartenza.value.match(regexCap)) {
        invalidCapPartenza.innerHTML = 'cap non valido';
    } else {
        invalidCapPartenza.innerHTML = '';
    }
}

function capArrivoCheck() {

    if (!capArrivo.value.match(regexCap)) {
        invalidCapArrivo.innerHTML = 'cap non valido';
    } else {
        invalidCapArrivo.innerHTML = '';
    }

}



function partenzaCheck() {


    if (dataPartenza.value != '') {

        console.log('hello');
        dataArrivo.removeAttribute('disabled');
        dataArrivo.setAttribute('min', dataPartenza.value)
        dataArrivo.setAttribute('max', dataMaxPartenza)

    } else {
        console.log('ciao');

    }

}






function checkCampi() {

    event.preventDefault();
    if (regionePartenza.value.trim() != "" &&
        provinciaPartenza.value.trim() != "" &&
        comunePartenza.value.trim() != "" &&
        indirizzoPartenza.value.trim() != "" &&
        capPartenza.value.trim() != "" &&
        tipoDiVeicolo.value.trim() != "" &&
        regioneArrivo.value.trim() != "" &&
        provinciaArrivo.value.trim() != "" &&
        comuneArrivo.value.trim() != "" &&
        indirizzoArrivo.value.trim() != "" &&
        capArrivo.value.trim() != "" &&
        dataPartenza.value.trim() != "" &&
        dataArrivo.value.trim() != "" &&
        capArrivo.value.match(regexCap) &&
        capPartenza.value.match(regexCap)
    ) {

        blankCamp.innerHTML = '';

        recuperaId();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';

    }


}



btnInvioRichiestaTratte.addEventListener('click', checkCampi);


capPartenza.addEventListener('keyup', capPartenzaCheck);
capArrivo.addEventListener('keyup', capArrivoCheck)
document.addEventListener('input', partenzaCheck)
