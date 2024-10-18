


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

// function controllaValiditaCampi() {
    
//controlli da fare qua dentro
//capPartenza
//capArrivo
//mq
//carico
//scarico



// }



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

        // controllaValiditaCampi();
        inviaRichiesta();

    }


}



btnInvioRichiestaTrasporto.addEventListener('click', checkCampi);

