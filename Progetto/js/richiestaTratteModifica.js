

let regionePartenza = document.querySelector('.regionePartenza');
let paesePartenza = document.querySelector('.paesePartenza');
let cittaPartenza = document.querySelector('.cittaPartenza');
let indirizzoPartenza = document.querySelector('.indirizzoPartenza');
let indirizzoDuePartenza = document.querySelector('.indirizzoDuePartenza');
let capPartenza = document.querySelector('.capPartenza');
let dataPartenza = document.querySelector('.partenza');
let tipoDiVeicolo = document.querySelector('.tipoDiVeicolo');

let regioneArrivo = document.querySelector('.regioneArrivo');
let paeseArrivo = document.querySelector('.paeseArrivo');
let cittaArrivo = document.querySelector('.cittaArrivo');
let indirizzoArrivo = document.querySelector('.indirizzoArrivo');
let indirizzoDueArrivo = document.querySelector('.indirizzoDueArrivo');
let capArrivo = document.querySelector('.capArrivo');
let dataArrivo = document.querySelector('.arrivo');

let note = document.querySelector('.note');

let btnInvioRichiestaTratte = document.querySelector('.btnInvioRichiestaTratte');


let idTratta = localStorage.getItem('modificaTratta');

fetch(`${apiUrl}/api/tratta/tratte/${idTratta}`)
    .then((res) => res.json())
    .then((data) => {


        ripopolaRichiestaTratte(data);


    });


function ripopolaRichiestaTratte(dati) {


    regionePartenza.value = dati.regionePartenza;
    paesePartenza.value = dati.paesePartenza;
    cittaPartenza.value = dati.cittaPartenza;
    regioneArrivo.value = dati.regioneArrivo;
    paeseArrivo.value = dati.paeseArrivo;
    cittaArrivo.value = dati.cittaArrivo;
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
        paesePartenza,
        cittaPartenza,
        indirizzoPartenza,
        indirizzoDuePartenza,
        capPartenza,
        dataPartenza,
        tipoDiVeicolo,
        regioneArrivo,
        paeseArrivo,
        cittaArrivo,
        indirizzoArrivo,
        indirizzoDueArrivo,
        capArrivo,
        dataArrivo,
        note,
        azienda_id) {

        (this.regionePartenza = regionePartenza),
            (this.paesePartenza = paesePartenza),
            (this.cittaPartenza = cittaPartenza),
            (this.indirizzoPartenza = indirizzoPartenza),
            (this.indirizzoDuePartenza = indirizzoDuePartenza),
            (this.capPartenza = capPartenza),
            (this.dataPartenza = dataPartenza),
            (this.tipoDiVeicolo = tipoDiVeicolo),
            (this.regioneArrivo = regioneArrivo),
            (this.paeseArrivo = paeseArrivo),
            (this.cittaArrivo = cittaArrivo),
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


    fetch(`${apiUrl}/api/azienda/fromToken?token=${accessToken}`)
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
        paesePartenza.value,
        cittaPartenza.value,
        indirizzoPartenza.value,
        indirizzoDuePartenza.value,
        capPartenza.value,
        dataPartenza.value,
        tipoDiVeicolo.value,
        regioneArrivo.value,
        paeseArrivo.value,
        cittaArrivo.value,
        indirizzoArrivo.value,
        indirizzoDueArrivo.value,
        capArrivo.value,
        dataArrivo.value,
        note.value,
        azienda_id
    );


    console.log(nuovaRichiestaTratte);



    fetch(`${apiUrl}/api/tratta/modificaTratta/${idTratta}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaTratte),

    })

    window.location.href = 'user.html';


}


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




function partenzaCheck() {


    if (dataPartenza.value != '') {

        console.log('hello');
        dataArrivo.removeAttribute('disabled');
        dataArrivo.setAttribute('min', dataPartenza.value);
        dataArrivo.setAttribute('max', dataMaxPartenza);

    } else {
        console.log('ciao');

    }

}




function checkCampi() {

    event.preventDefault();
    if (regionePartenza.value.trim() != "" &&
        paesePartenza.value.trim() != "" &&
        cittaPartenza.value.trim() != "" &&
        indirizzoPartenza.value.trim() != "" &&
        capPartenza.value.trim() != "" &&
        tipoDiVeicolo.value.trim() != "" &&
        regioneArrivo.value.trim() != "" &&
        paeseArrivo.value.trim() != "" &&
        cittaArrivo.value.trim() != "" &&
        indirizzoArrivo.value.trim() != "" &&
        capArrivo.value.trim() != "" &&
        dataPartenza.value.trim() != "" &&
        dataArrivo.value.trim() != ""
    ) {

        blankCamp.innerHTML = '';

        recuperaId();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';

    }


}



btnInvioRichiestaTratte.addEventListener('click', checkCampi);


document.addEventListener('input', partenzaCheck);