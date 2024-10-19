


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


function inviaRichiesta() {

    let azienda_id = localStorage.getItem('idUtente');
    console.log(azienda_id);


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

    // console.log(regionePartenza.value,);
    // console.log(provinciaPartenza.value,);
    // console.log(comunePartenza.value,);
    // console.log(indirizzoPartenza.value,);
    // console.log(indirizzoDuePartenza.value,);
    // console.log(capPartenza.value,);
    // console.log(mq.value,);
    // console.log(veicolo.value,);
    // console.log(regioneArrivo.value,);
    // console.log(provinciaArrivo.value,);
    // console.log(comuneArrivo.value,);
    // console.log(indirizzoArrivo.value,);
    // console.log(indirizzoDueArrivo.value,);
    // console.log(capArrivo.value,);
    // console.log(carico.value,);
    // console.log(scarico.value,);
    // console.log(note.value);

    console.log(nuovaRichiestaTrasporto);





    fetch(`http://localhost:8080/api/azienda/nuovaRichiestaTrasporto/${azienda_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaTrasporto),

    })

    location.reload();




}


let invalidCapPartenza = document.querySelector('.invalidCapPartenza');
let invalidCapArrivo = document.querySelector('.invalidCapArrivo');
let invalidMq = document.querySelector('.invalidMq');
let invalidCarico = document.querySelector('.invalidCarico');
let invalidScarico = document.querySelector('.invalidScarico');
let blankCamp = document.querySelector('.blankCamp');


new Date();
let dat = new Date();


let ggMin = dat.getDate() + 1;
let mmMin = (dat.getMonth() + 1);
let aaMin = dat.getFullYear();

let ggMax = dat.getDate() + 1;
let mmMax = (dat.getMonth() + 1);
let aaMax = dat.getFullYear() +1;

let dataMin= aaMin  + "-" + mmMin + "-" + ggMin ;
let dataMax= aaMax + "-" + mmMax + "-" + ggMax;

console.log(dataMin);
console.log(dataMax);


carico.setAttribute('min', dataMin)
carico.setAttribute('max', dataMax)
scarico.setAttribute('min', dataMin)
scarico.setAttribute('max', dataMax)




let regexCap = /^[0-9]{5}$/;
let regexMq = /^[1-9][0-9]?$/;


function controllaValiditaCampi() {


    if (!capPartenza.value.match(regexCap)) {
        invalidCapPartenza.innerHTML = 'cap non valido';
    } else {
        invalidCapPartenza.innerHTML = '';
    }

    if (!capArrivo.value.match(regexCap)) {
        invalidCapArrivo.innerHTML = 'cap non valido';
    } else {
        invalidCapArrivo.innerHTML = '';
    }

    if (!mq.value.match(regexMq)) {
        invalidMq.innerHTML = 'mq non validi';
    } else {
        invalidMq.innerHTML = '';
    }

    // if (!carico.value.match(regexDate)) {
    //     invalidCarico.innerHTML = 'data non valida';
    // } else {
    //     invalidCarico.innerHTML = '';
    // }

    // if (!scarico.value.match(regexDate)) {
    //     invalidScarico.innerHTML = 'data non valida';
    // } else {
    //     invalidScarico.innerHTML = '';
    // }




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
        scarico.value.trim() != "") {

        blankCamp.innerHTML = '';

        inviaRichiesta();

    } else {
        blankCamp.innerHTML = 'ci sono dei campi vuoti';
    }


}



btnInvioRichiestaTrasporto.addEventListener('click', checkCampi);

document.addEventListener('keyup', controllaValiditaCampi);


