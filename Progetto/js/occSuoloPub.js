


let regione = document.querySelector('.regione');
let provincia = document.querySelector('.provincia');
let comune = document.querySelector('.comune');
let indirizzo = document.querySelector('.indirizzo');
let cap = document.querySelector('.cap');
let mq = document.querySelector('.mq');
let inizio = document.querySelector('.inizio');
let fine = document.querySelector('.fine');
let flexCheck1 = document.querySelector('#flexCheck1');
let flexCheck2 = document.querySelector('#flexCheck2');
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
        flexCheck1,
        flexCheck2,
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
            (this.flexCheck1 = flexCheck1),
            (this.flexCheck2 = flexCheck2),
            (this.note = note),
            (this.azienda_id = azienda_id)
    }
}


function inviaRichiesta() {

    let azienda_id = localStorage.getItem('idUtente');
    console.log(azienda_id);


    let nuovaRichiestaOccSuoloPub = new OccSuoloPub(
        regione.value,
        provincia.value,
        comune.value,
        indirizzo.value,
        cap.value,
        mq.value,
        inizio.value,
        fine.value,
        flexCheck1.value,
        flexCheck2.value,
        note.value,
        azienda_id
    );



    console.log(nuovaRichiestaOccSuoloPub);


    fetch(`http://localhost:8080/api/azienda/nuovaRichiestaSuolo/${azienda_id}`, {
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

    console.log(mq.value);
    

    
        console.log(regione.value.trim() != "");
        console.log(provincia.value.trim() != "");
        console.log(comune.value.trim() != "");
        console.log(indirizzo.value.trim() != "");
        console.log(cap.value.trim() != "" );
        console.log(cap.value.match(regexCap));
        console.log(mq.value.trim() != "");
        console.log(mq.value.match(regexCap));
        console.log(inizio.value.trim() != "");
        console.log(fine.value.trim() != "");

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

        inviaRichiesta();

    } else {

        blankCamp.innerHTML = 'riempi i campi mancanti o incompleti!';
    }


}
btnInvioRichiestaOccSuoloPub.addEventListener('click', checkCampi);

cap.addEventListener('keyup', capCheck);
mq.addEventListener('keyup', mqCheck);
document.addEventListener('input', inizioCheck)
