


let regionePartenza = document.querySelector('.regionePartenza');
let provinciaPartenza = document.querySelector('.provinciaPartenza');
let comunePartenza = document.querySelector('.comunePartenza');
let indirizzoPartenza = document.querySelector('.indirizzoPartenza');
let indirizzoDuePartenza = document.querySelector('.indirizzoDuePartenza');
let capPartenza = document.querySelector('.capPartenza');
let mq = document.querySelector('.mq');
let tipoDiVeicolo = document.querySelector('.tipoDiVeicolo');


let regioneArrivo = document.querySelector('.regioneArrivo');
let provinciaArrivo = document.querySelector('.provinciaArrivo');
let comuneArrivo = document.querySelector('.comuneArrivo');
let indirizzoArrivo = document.querySelector('.indirizzoArrivo');
let indirizzoDueArrivo = document.querySelector('.indirizzoDueArrivo');
let capArrivo = document.querySelector('.capArrivo');


let carico = document.querySelector('.carico');
let scarico = document.querySelector('.scarico');
let note = document.querySelector('.note');

let btnInvioRichiestaTrasporto = document.querySelector('.btnInvioRichiestaTrasporto');

class Trasporto {
    constructor(regionePartenza,
        provinciaPartenza,
        comunePartenza,
        indirizzoPartenza,
        indirizzoDuePartenza,
        capPartenza,
        mq,
        tipoDiVeicolo,
        regioneArrivo,
        provinciaArrivo,
        comuneArrivo,
        indirizzoArrivo,
        indirizzoDueArrivo,
        capArrivo,
        carico,
        scarico,
        note,
        azienda_id) {

        (this.regionePartenza = regionePartenza),
            (this.provinciaPartenza = provinciaPartenza),
            (this.comunePartenza = comunePartenza),
            (this.indirizzoPartenza = indirizzoPartenza),
            (this.indirizzoDuePartenza = indirizzoDuePartenza),
            (this.capPartenza = capPartenza),
            (this.mq = mq),
            (this.tipoDiVeicolo = tipoDiVeicolo),
            (this.regioneArrivo = regioneArrivo),
            (this.provinciaArrivo = provinciaArrivo),
            (this.comuneArrivo = comuneArrivo),
            (this.indirizzoArrivo = indirizzoArrivo),
            (this.indirizzoDueArrivo = indirizzoDueArrivo),
            (this.capArrivo = capArrivo),
            (this.carico = carico),
            (this.scarico = scarico),
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


    let nuovaRichiestaTrasporto = new Trasporto(
        regionePartenza.value,
        provinciaPartenza.value,
        comunePartenza.value,
        indirizzoPartenza.value,
        indirizzoDuePartenza.value,
        capPartenza.value,
        mq.value,
        tipoDiVeicolo.value,
        regioneArrivo.value,
        provinciaArrivo.value,
        comuneArrivo.value,
        indirizzoArrivo.value,
        indirizzoDueArrivo.value,
        capArrivo.value,
        carico.value,
        scarico.value,
        note.value,
        azienda_id
    );


    console.log(nuovaRichiestaTrasporto);





    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/aggiungiRichiestaTrasporto/${azienda_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaTrasporto),

    })

    window.location.href = 'inviataConSuccessoGroupage.html';





}


let invalidCapPartenza = document.querySelector('.invalidCapPartenza');
let invalidCapArrivo = document.querySelector('.invalidCapArrivo');
let invalidMq = document.querySelector('.invalidMq');
let invalidCarico = document.querySelector('.invalidCarico');
let invalidScarico = document.querySelector('.invalidScarico');
let blankCamp = document.querySelector('.blankCamp');


new Date();
let dat = new Date();

function padToTwoDigits(number) {
    return number.toString().padStart(2, '0');
}

//--------------------------------------//

let ggMin = padToTwoDigits(dat.getDate() + 1);
let mmMin = padToTwoDigits(dat.getMonth() + 1);
let aaMin = dat.getFullYear();

let dataMinCarico = `${aaMin}-${mmMin}-${ggMin}`;
console.log(dataMinCarico);

//--------------------------------------//

let ggMax = padToTwoDigits(dat.getDate() + 1);
let mmMax = padToTwoDigits(dat.getMonth() + 1);
let aaMax = dat.getFullYear() + 1;
let dataMaxCarico = `${aaMax}-${mmMax}-${ggMax}`;

console.log(dataMaxCarico);

//--------------------------------------//

carico.setAttribute('min', dataMinCarico)
carico.setAttribute('max', dataMaxCarico)
// scarico.setAttribute('min', dataMin)
// scarico.setAttribute('max', dataMax)



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

function mqCheck() {


    if (!mq.value.match(regexMq)) {
        invalidMq.innerHTML = 'mq non validi';
    } else {
        invalidMq.innerHTML = '';
    }
}


function caricoCheck() {


    if (carico.value != '') {

        console.log('hello');
        scarico.removeAttribute('disabled');
        scarico.setAttribute('min', carico.value)
        scarico.setAttribute('max', dataMaxCarico)

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
        mq.value.trim() != "" &&
        tipoDiVeicolo.value.trim() != "" &&
        regioneArrivo.value.trim() != "" &&
        provinciaArrivo.value.trim() != "" &&
        comuneArrivo.value.trim() != "" &&
        indirizzoArrivo.value.trim() != "" &&
        capArrivo.value.trim() != "" &&
        carico.value.trim() != "" &&
        scarico.value.trim() != "" &&
        mq.value.match(regexMq) &&
        capArrivo.value.match(regexCap) &&
        capPartenza.value.match(regexCap)
    ) {

        blankCamp.innerHTML = '';

        recuperaId();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';

    }


}



btnInvioRichiestaTrasporto.addEventListener('click', checkCampi);


capPartenza.addEventListener('keyup', capPartenzaCheck);
capArrivo.addEventListener('keyup', capArrivoCheck)
mq.addEventListener('keyup', mqCheck)
document.addEventListener('input', caricoCheck)
