


let regionePartenza = document.querySelector('.regionePartenza');
let provinciaPartenza = document.querySelector('.provinciaPartenza');
let comunePartenza = document.querySelector('.comunePartenza');
let indirizzoPartenza = document.querySelector('.indirizzoPartenza');
let indirizzoDuePartenza = document.querySelector('.indirizzoDuePartenza');
let capPartenza = document.querySelector('.capPartenza');
let partenza = document.querySelector('.partenza');
let tipoDiVeicolo = document.querySelector('.tipoDiVeicolo');


let regioneArrivo = document.querySelector('.regioneArrivo');
let provinciaArrivo = document.querySelector('.provinciaArrivo');
let comuneArrivo = document.querySelector('.comuneArrivo');
let indirizzoArrivo = document.querySelector('.indirizzoArrivo');
let indirizzoDueArrivo = document.querySelector('.indirizzoDueArrivo');
let capArrivo = document.querySelector('.capArrivo');
let arrivo = document.querySelector('.arrivo');

let note = document.querySelector('.note');

let btnInvioRichiestaTratte = document.querySelector('.btnInvioRichiestaTratte');

class Tratte {
    constructor(regionePartenza,
        provinciaPartenza,
        comunePartenza,
        indirizzoPartenza,
        indirizzoDuePartenza,
        capPartenza,
        partenza,
        tipoDiVeicolo,
        regioneArrivo,
        provinciaArrivo,
        comuneArrivo,
        indirizzoArrivo,
        indirizzoDueArrivo,
        capArrivo,
        arrivo,
        note,
        azienda_id) {

        (this.regionePartenza = regionePartenza),
            (this.provinciaPartenza = provinciaPartenza),
            (this.comunePartenza = comunePartenza),
            (this.indirizzoPartenza = indirizzoPartenza),
            (this.indirizzoDuePartenza = indirizzoDuePartenza),
            (this.capPartenza = capPartenza),
            (this.partenza = partenza),
            (this.tipoDiVeicolo = tipoDiVeicolo),
            (this.regioneArrivo = regioneArrivo),
            (this.provinciaArrivo = provinciaArrivo),
            (this.comuneArrivo = comuneArrivo),
            (this.indirizzoArrivo = indirizzoArrivo),
            (this.indirizzoDueArrivo = indirizzoDueArrivo),
            (this.capArrivo = capArrivo),
            (this.arrivo = arrivo),
            (this.note = note),
            (this.azienda_id = azienda_id)
    }
}


function inviaRichiesta() {

    let azienda_id = localStorage.getItem('idUtente');
    console.log(azienda_id);


    let nuovaRichiestaTratte = new Tratte(
        regionePartenza.value,
        provinciaPartenza.value,
        comunePartenza.value,
        indirizzoPartenza.value,
        indirizzoDuePartenza.value,
        capPartenza.value,
        partenza.value,
        tipoDiVeicolo.value,
        regioneArrivo.value,
        provinciaArrivo.value,
        comuneArrivo.value,
        indirizzoArrivo.value,
        indirizzoDueArrivo.value,
        capArrivo.value,
        arrivo.value,
        note.value,
        azienda_id
    );


    console.log(nuovaRichiestaTratte);





    fetch(`http://localhost:8080/api/azienda/nuovaRichiestaTrasporto/${azienda_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaTratte),

    })

    location.reload();




}


let invalidCapPartenza = document.querySelector('.invalidCapPartenza');
let invalidCapArrivo = document.querySelector('.invalidCapArrivo');
let invalidMq = document.querySelector('.invalidMq');
let invalidArrivo = document.querySelector('.invalidArrivo');
let invalidPartenza = document.querySelector('.invalidPartenza');
let blankCamp = document.querySelector('.blankCamp');


new Date();
let dat = new Date();

//--------------------------------------//

let ggMin = dat.getDate() + 1;
let mmMin = (dat.getMonth() + 1);
let aaMin = dat.getFullYear();

let dataMinPartenza = aaMin + "-" + mmMin + "-" + ggMin;
console.log(dataMinPartenza);

//--------------------------------------//

let ggMax = dat.getDate() + 1;
let mmMax = (dat.getMonth() + 1);
let aaMax = dat.getFullYear() + 1;
let dataMaxPartenza = aaMax + "-" + mmMax + "-" + ggMax;

console.log(dataMaxPartenza);

//--------------------------------------//

partenza.setAttribute('min', dataMinPartenza)
partenza.setAttribute('max', dataMaxPartenza)
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



function partenzaCheck() {


    if (partenza.value != '') {

        console.log('hello');
        arrivo.removeAttribute('disabled');
        arrivo.setAttribute('min', partenza.value)
        arrivo.setAttribute('max', dataMaxPartenza)

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
        partenza.value.trim() != "" &&
        arrivo.value.trim() != "" &&
        capArrivo.value.match(regexCap) &&
        capPartenza.value.match(regexCap)
    ) {

        blankCamp.innerHTML = '';

        inviaRichiesta();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';

    }


}



btnInvioRichiestaTratte.addEventListener('click', checkCampi);


capPartenza.addEventListener('keyup', capPartenzaCheck);
capArrivo.addEventListener('keyup', capArrivoCheck)
document.addEventListener('input', partenzaCheck)
