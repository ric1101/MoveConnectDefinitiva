
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


function tokenizzami() {

    let accessToken = localStorage.getItem('accessToken');


    fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaDatiRecensione(data.id);

            console.log(data.id);


        });


}
tokenizzami();


function recuperaDatiRecensione(id) {

    let idRel = localStorage.getItem('idRecensione');

    fetch(`https://127.0.0.1/api/propostaImballi/relazioneImballiPerId/${idRel}`)
        .then((res) => res.json())
        .then((data) => {

            riempiDatiRecensione(data, id);
            console.log(data);


        });

}


function riempiDatiRecensione(dati, id) {

    idProponente.innerHTML = dati.aziendaProponente.id;
    idAccettata.innerHTML = dati.aziendaAccettata.id;
    idRec.innerHTML = dati.id;

    if (id == dati.aziendaAccettata.id) {

        nomeAziendaDaRecensire.innerHTML = dati.aziendaProponente.nomeAzienda;
        nomeAziendaDaRecensireDesc.innerHTML = dati.aziendaProponente.nomeAzienda;

    } else if (id == dati.aziendaProponente.id) {

        nomeAziendaDaRecensire.innerHTML = dati.aziendaAccettata.nomeAzienda;
        nomeAziendaDaRecensireDesc.innerHTML = dati.aziendaAccettata.nomeAzienda;

    }

}

let btnInvioRecensione = document.querySelector('.btnInvioRecensione');


function recuperaToken() {

    event.preventDefault();


    let accessToken = localStorage.getItem('accessToken');


    fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            stelleInserite(data.id);

            console.log(data.id);


        });


}


function stelleInserite(idAziendaAccesso) {

    console.log('ci entra yes');


    let scelta = 0;
    let idRel = localStorage.getItem('idRecensione');

    fetch(`https://127.0.0.1/api/propostaImballi/relazioneImballiPerId/${idRel}`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);

            if (idAziendaAccesso == data.aziendaAccettata.id) {

                scelta = 1


            } else if (idAziendaAccesso == data.aziendaProponente.id) {

                scelta = 2

            }

            if (controlloStelle.classList.contains('one')) {
                erroreRec.classList.add('d-none');
                valutazione = 1;
                inviaRecensione(scelta);

            } else if (controlloStelle.classList.contains('two')) {
                erroreRec.classList.add('d-none');
                valutazione = 2;
                inviaRecensione(scelta);

            } else if (controlloStelle.classList.contains('three')) {
                erroreRec.classList.add('d-none');
                valutazione = 3;
                inviaRecensione(scelta);

            } else if (controlloStelle.classList.contains('four')) {
                erroreRec.classList.add('d-none');
                valutazione = 4;
                inviaRecensione(scelta);

            } else if (controlloStelle.classList.contains('five')) {
                erroreRec.classList.add('d-none');
                valutazione = 5;
                inviaRecensione(scelta);

            } else {

                erroreRec.classList.remove('d-none');

            }

        });


}


function inviaRecensione(choose) {

    class Recensione {
        constructor(relazioneId, relazioneAziendaRichiedenteId, relazioneAziendaAccettataId, valutazione, commento, stato) {
            (this.relazioneId = relazioneId),
                (this.relazioneAziendaRichiedenteId = relazioneAziendaRichiedenteId),
                (this.relazioneAziendaAccettataId = relazioneAziendaAccettataId),
                (this.valutazione = valutazione),
                (this.commento = commento),
                (this.stato = stato)
        }
    }


    console.log(idRec.textContent);
    console.log(idProponente.textContent);
    console.log(idAccettata.textContent);
    console.log(valutazione);
    console.log(commento.value);

    let idRecNumber = Number(idRec.textContent)
    console.log(idRecNumber);
    let stato = '';


    if (choose == 1) {

        stato = 'PROPONENTE';

    } else {

        stato = 'RICHIEDENTE';

    }

    console.log(stato);


    let newRecensione = new Recensione(
        idRec.textContent,
        idProponente.textContent,
        idAccettata.textContent,
        valutazione,
        commento.value,
        stato,
        null

    );



    if (choose == 1) {


        fetch(`https://127.0.0.1/api/propostaImballi/recensitaRelazioneImballiProponente/${idRecNumber}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

            }),

        })



    } else {


        fetch(`https://127.0.0.1/api/propostaImballi/recensitaRelazioneImballiRichiedente/${idRecNumber}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

            }),

        })

    }


    fetch(`https://127.0.0.1/api/propostaImballi/recensioneImballi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecensione),

    })

    console.log(newRecensione);



    window.location.href = 'recensioneInviata.html';


}
btnInvioRecensione.addEventListener('click', recuperaToken);