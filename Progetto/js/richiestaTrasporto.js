


let regioniPartenza = document.querySelector('.regioniPartenza');
let provincePartenza = document.querySelector('.provincePartenza');
let comuniPartenza = document.querySelector('.comuniPartenza');
let indirizzoPartenza = document.querySelector('#indirizzoPartenza');
let indirizzoDuePartenza = document.querySelector('#indirizzoDuePartenza');
let capPartenza = document.querySelector('#capPartenza');
let mq = document.querySelector('#mq');
let veicolo = document.querySelector('#veicolo');


let regioniArrivo = document.querySelector('.regioniArrivo');
let provinceArrivo = document.querySelector('.provinceArrivo');
let comuniArrivo = document.querySelector('.comuniArrivo');
let indirizzoArrivo = document.querySelector('#indirizzoArrivo');
let indirizzoDueArrivo = document.querySelector('#indirizzoDueArrivo');
let capArrivo = document.querySelector('#capArrivo');


let carico = document.querySelector('#carico');
let scarico = document.querySelector('#scarico');
let note = document.querySelector('#note');

let btnInvioRichiestaTrasporto = document.querySelector('#btnInvioRichiestaTrasporto');

class Trasporto {
    constructor(regioniPartenza,
        provincePartenza,
        comuniPartenza,
        indirizzoPartenza,
        indirizzoDuePartenza,
        capPartenza,
        mq,
        veicolo,
        regioniArrivo,
        provinceArrivo,
        comuniArrivo,
        indirizzoArrivo,
        indirizzoDueArrivo,
        capArrivo,
        carico,
        scarico,
        note) {

        (this.regioniPartenza = regioniPartenza),
            (this.provincePartenza = provincePartenza),
            (this.comuniPartenza = comuniPartenza),
            (this.indirizzoPartenza = indirizzoPartenza),
            (this.indirizzoDuePartenza = indirizzoDuePartenza),
            (this.capPartenza = capPartenza),
            (this.mq = mq),
            (this.veicolo = veicolo),
            (this.regioniArrivo = regioniArrivo),
            (this.provinceArrivo = provinceArrivo),
            (this.comuniArrivo = comuniArrivo),
            (this.indirizzoArrivo = indirizzoArrivo),
            (this.indirizzoDueArrivo = indirizzoDueArrivo),
            (this.capArrivo = capArrivo),
            (this.carico = carico),
            (this.scarico = scarico),
            (this.note = note)
    }
}


function inviaRichiesta() {

    let nuovaRichiestaTrasporto = new Trasporto(
        regioniPartenza.value,
        provincePartenza.value,
        comuniPartenza.value,
        indirizzoPartenza.value,
        indirizzoDuePartenza.value,
        capPartenza.value,
        mq.value,
        veicolo.value,
        regioniArrivo.value,
        provinceArrivo.value,
        comuniArrivo.value,
        indirizzoArrivo.value,
        indirizzoDueArrivo.value,
        capArrivo.value,
        carico.value,
        scarico.value,
        note.value
    );

    
    let idAzienda = localStorage.getItem('idUtente');
    console.log(idAzienda);


    fetch(`http://localhost:8080/api/richiesta/nuovaRichiestaTrasporto/${idAzienda}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaTrasporto),

    })


}


function checkCampi() {
    
    if(
    regioniPartenza.value.trim() != "" &&
    provincePartenza.value.trim() != "" &&
    comuniPartenza.value.trim() != "" &&
    indirizzoPartenza.value.trim() != "" &&
    indirizzoDuePartenza.value.trim() != "" &&
    capPartenza.value.trim() != "" &&
    mq.value.trim() != "" &&
    veicolo.value.trim() != "" &&
    regioniArrivo.value.trim() != "" &&
    provinceArrivo.value.trim() != "" &&
    comuniArrivo.value.trim() != "" &&
    indirizzoArrivo.value.trim() != "" &&
    indirizzoDueArrivo.value.trim() != "" &&
    capArrivo.value.trim() != "" &&
    carico.value.trim() != "" &&
    scarico.value.trim() != "" &&
    note.value
    ){ }



}


btnInvioRichiestaTrasporto.addEventListener('click', checkCampi);
