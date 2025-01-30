


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let indirizzoDue = document.querySelector('.indirizzoDue');
let cap = document.querySelector('.cap');
let tipoDiScala = document.querySelector('.tipoDiScala');
let pesoMassimo = document.querySelector('.pesoMassimo');
let inizio = document.querySelector('.inizio');
let fine = document.querySelector('.fine');
let note = document.querySelector('.note');

let btnInvioRichiestaScalaElevatore = document.querySelector('.btnInvioRichiestaScalaElevatore');

class ScalaElevatore {
    constructor(regione,
        provincia,
        comune,
        indirizzo,
        indirizzoDue,
        cap,
        tipoDiScala,
        pesoMassimo,
        inizio,
        fine,
        note,
        azienda_id) {

        (this.regione = regione),
            (this.provincia = provincia),
            (this.comune = comune),
            (this.indirizzo = indirizzo),
            (this.indirizzoDue = indirizzoDue),
            (this.cap = cap),
            (this.tipoDiScala = tipoDiScala),
            (this.pesoMassimo = pesoMassimo),
            (this.inizio = inizio),
            (this.fine = fine),
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


    let nuovaRichiestaScalaElevatore = new ScalaElevatore(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        indirizzoDue.value,
        cap.value,
        tipoDiScala.value,
        pesoMassimo.value,
        inizio.value,
        fine.value,
        note.value,
        azienda_id
    );



    console.log(nuovaRichiestaScalaElevatore);


    fetch(`http://127.0.0.1:8080/api/scalaElevatore/inserisciScala/${azienda_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaScalaElevatore),

    })

    window.location.href = 'inviataConSuccessoScala.html';


}


let invalidCap = document.querySelector('.invalidCap');
let invalidInizio = document.querySelector('.invalidInizio');
let invalidFine = document.querySelector('.invalidFine');
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

let dataMinInizio = `${aaMin}-${mmMin}-${ggMin}`;
console.log(dataMinInizio);

//--------------------------------------//

let ggMax = padToTwoDigits(dat.getDate() + 1);
let mmMax = padToTwoDigits(dat.getMonth() + 1);
let aaMax = dat.getFullYear() + 1;
let dataMaxInizio = `${aaMax}-${mmMax}-${ggMax}`;

console.log(dataMaxInizio);

//--------------------------------------//

inizio.setAttribute('min', dataMinInizio);
inizio.setAttribute('max', dataMaxInizio);


let regexCap = /^[0-9]{5}$/;


function capCheck() {


    if (!cap.value.match(regexCap)) {
        invalidCap.innerHTML = 'cap non valido';
    } else {
        invalidCap.innerHTML = '';
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
        tipoDiScala.value.trim() != "" &&
        pesoMassimo.value.trim() != "" &&
        inizio.value.trim() != "" &&
        fine.value.trim() != "" &&
        cap.value.match(regexCap)
    ) {

        blankCamp.innerHTML = '';

        recuperaId();

    } else {
        
        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}



btnInvioRichiestaScalaElevatore.addEventListener('click', checkCampi);

cap.addEventListener('keyup', capCheck);
document.addEventListener('input', inizioCheck)