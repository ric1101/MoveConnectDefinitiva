
let commento = document.querySelector('.commento');
let nomeAziendaDaRecensire = document.querySelector('.nomeAziendaDaRecensire');
let idRec = document.querySelector('.idRec');
let nomeAziendaDaRecensireDesc = document.querySelector('.nomeAziendaDaRecensireDesc');
let idProponente = document.querySelector('.idProponente');
let idAccettata = document.querySelector('.idAccettata');
let controlloStelle = document.querySelector('.controlloStelle');
let erroreRec = document.querySelector('.erroreRec');
let valutazione = 0;

// To access the stars
let stars =
    document.getElementsByClassName("star");
let output =
    document.getElementById("output");

// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}


function recuperaDatiRecensione() {

    let idRel = localStorage.getItem('idRecensione');

    fetch(`http://127.0.0.1:8080/api/scala/relazioneImballiPerId/${idRel}`)
        .then((res) => res.json())
        .then((data) => {

            riempiDatiRecensione(data);
            console.log(data);


        });

}
recuperaDatiRecensione()


function riempiDatiRecensione(dati) {


    idProponente.innerHTML = dati.aziendaProponente.id;
    idAccettata.innerHTML = dati.aziendaRichiedente.id;
    idRec.innerHTML = dati.id;
    nomeAziendaDaRecensire.innerHTML = dati.aziendaRichiedente.nomeAzienda;
    nomeAziendaDaRecensireDesc.innerHTML = dati.aziendaRichiedente.nomeAzienda;


}

let btnInvioRecensione = document.querySelector('.btnInvioRecensione');

class Recensione {
    constructor(relazioneScalaId, relazioneAziendaRichiedenteScalaId, relazioneAziendaAccettataScalaId, valutazione, commentoAziendaRichiedente, commentoAziendaAccettata) {
        (this.relazioneScalaId = relazioneScalaId),
            (this.relazioneAziendaRichiedenteScalaId = relazioneAziendaRichiedenteScalaId),
            (this.relazioneAziendaAccettataScalaId = relazioneAziendaAccettataScalaId),
            (this.valutazione = valutazione),
            (this.commentoAziendaRichiedente = commentoAziendaRichiedente),
            (this.commentoAziendaAccettata = commentoAziendaAccettata)
    }
}


function stelleInserite() {

    event.preventDefault();

    if (controlloStelle.classList.contains('one')) {
        erroreRec.classList.add('d-none');
        valutazione = 1;
        inviaRecensione()

    } else if (controlloStelle.classList.contains('two')) {
        erroreRec.classList.add('d-none');
        valutazione = 2;
        inviaRecensione()

    } else if (controlloStelle.classList.contains('three')) {
        erroreRec.classList.add('d-none');
        valutazione = 3;
        inviaRecensione()

    } else if (controlloStelle.classList.contains('four')) {
        erroreRec.classList.add('d-none');
        valutazione = 4;
        inviaRecensione()

    } else if (controlloStelle.classList.contains('five')) {
        erroreRec.classList.add('d-none');
        valutazione = 5;
        inviaRecensione()

    } else {

        erroreRec.classList.remove('d-none');

    }

}


function inviaRecensione() {

    console.log(idRec.textContent);
    console.log(idProponente.textContent);
    console.log(idAccettata.textContent);
    console.log(valutazione);
    console.log(commento.value);
    

    let newRecensione = new Recensione(
        idRec.textContent,
        idProponente.textContent,
        idAccettata.textContent,
        valutazione,
        commento.value,
        null

    );


    fetch(`http://127.0.0.1:8080/api/scala/recensioneScala`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecensione),

    })

    
    let idRel = localStorage.getItem('idRecensione');

    fetch(`http://127.0.0.1:8080/api/scala/recensitaRelazioneImballi/${idRel}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),

    })

    window.location.href = 'recensioneInviata.html';


}
btnInvioRecensione.addEventListener('click', stelleInserite);