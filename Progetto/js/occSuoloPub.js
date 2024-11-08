


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let cap = document.querySelector('.cap');
let mq = document.querySelector('.mq');
let inizio = document.querySelector('.inizio');
let fine = document.querySelector('.fine');
let chiusuraStrada = document.querySelector('#flexCheck1');
let cartelli = document.querySelector('#flexCheck2');
let note = document.querySelector('.note');


let btnInvioRichiestaOccSuoloPub = document.querySelector('.btnInvioRichiestaOccSuoloPub');


class OccSuoloPub {
    constructor(regione,
        provincia,
        comune,
        indirizzo,
        cap,
        mq,
        inizio,
        fine,
        chiusuraStrada,
        cartelli,
        note,
        azienda_id) {

        (this.regione = regione),
            (this.provincia = provincia),
            (this.comune = comune),
            (this.indirizzo = indirizzo),
            (this.cap = cap),
            (this.mq = mq),
            (this.inizio = inizio),
            (this.fine = fine),
            (this.chiusuraStrada = chiusuraStrada),
            (this.cartelli = cartelli),
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



    let nuovaRichiestaOccSuoloPub = new OccSuoloPub(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        cap.value,
        mq.value,
        inizio.value,
        fine.value,
        chiusuraStrada.value,
        cartelli.value,
        note.value,
        azienda_id
    );


    console.log(nuovaRichiestaOccSuoloPub);


    fetch(`http://127.0.0.1:8080/api/richiesta/inserisciRichiestaSuolo/${azienda_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaRichiestaOccSuoloPub),

    })

    location.reload();


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
        inizio.value.trim() != "" &&
        fine.value.trim() != ""
    ) {

        blankCamp.innerHTML = '';

        recuperaId();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}
btnInvioRichiestaOccSuoloPub.addEventListener('click', checkCampi);

cap.addEventListener('keyup', capCheck);
mq.addEventListener('keyup', mqCheck);
document.addEventListener('input', inizioCheck)


chiusuraStrada.addEventListener('change', () => {

    if (chiusuraStrada.checked) {

        chiusuraStrada.setAttribute('value', 'si');
        console.log(chiusuraStrada);
        
    } else {

        chiusuraStrada.setAttribute('value', 'no');
        console.log(chiusuraStrada);

    }
})


cartelli.addEventListener('change', () => {

    if (cartelli.checked) {

        cartelli.setAttribute('value', 'si');
        console.log(cartelli);
        
    } else {

        cartelli.setAttribute('value', 'no');
        console.log(cartelli);

    }
})