
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

    fetch(`http://127.0.0.1:8080/api/trasporto/relazioneTrasportoPerId/${idRel}`)
        .then((res) => res.json())
        .then((data) => {

            riempiDatiRecensione(data);
            console.log(data);

        });

}

recuperaDatiRecensione();


function riempiDatiRecensione(dati) {


    idProponente.innerHTML = dati.aziendaRichiedente.id;
    idAccettata.innerHTML = dati.aziendaAccettata.id;
    idRec.innerHTML = dati.id;
    nomeAziendaDaRecensire.innerHTML = dati.aziendaAccettata.nomeAzienda;
    nomeAziendaDaRecensireDesc.innerHTML = dati.aziendaAccettata.nomeAzienda;


}



let btnInvioRecensione = document.querySelector('.btnInvioRecensione');






function recuperaToken() {

    event.preventDefault();


    let accessToken = localStorage.getItem('accessToken');


    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
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
    
    fetch(`http://127.0.0.1:8080/api/trasporto/relazioneTrasportoPerId/${idRel}`)
    .then((res) => res.json())
    .then((data) => {
        
        riempiDatiRecensione(data);
        console.log(data);
        
    });
    
    
    if (idAziendaAccesso == dati.aziendaAccettata.id) {
        
        scelta = 1
        
        
    } else if (idAziendaAccesso == dati.aziendaRichiedente.id) {
        
        scelta = 2
        
    }
    
    event.preventDefault();
    
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



}


function inviaRecensione(choose) {
    
    class Recensione {
        constructor(relazioneTrasportoId, relazioneAziendaRichiedenteTrasportoId, relazioneAziendaAccettataTrasportoId, valutazione, commentoAziendaRichiedente, commentoAziendaAccettata) {
            (this.relazioneTrasportoId = relazioneTrasportoId),
                (this.relazioneAziendaRichiedenteTrasportoId = relazioneAziendaRichiedenteTrasportoId),
                (this.relazioneAziendaAccettataTrasportoId = relazioneAziendaAccettataTrasportoId),
                (this.valutazione = valutazione),
                (this.commentoAziendaRichiedente = commentoAziendaRichiedente),
                (this.commentoAziendaAccettata = commentoAziendaAccettata)
        }
    }

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


    if (choose == 1) {


        fetch(`http://127.0.0.1:8080/api/trasporto/recensitaRelazioneTrasportoProponente/${idAccettata}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

            }),

        })



    } else {


        fetch(`http://127.0.0.1:8080/api/trasporto/recensitaRelazioneTrasportoRichiedente/${idProponente}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

            }),

        })

    }


    fetch(`http://127.0.0.1:8080/api/trasporto/recensioneTrasporto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecensione),

    })


    // window.location.href = 'recensioneInviata.html';

}
btnInvioRecensione.addEventListener('click', recuperaToken);