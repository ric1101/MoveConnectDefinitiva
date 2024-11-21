userView();


let dato = document.querySelector('.dati');
let feed = document.querySelector('.feed');
let richiesteOccSuoloPub = document.querySelector('.richiesteOccSuoloPub');
let richiesteTrasporto = document.querySelector('.richiesteTrasporto');
let richiesteScalaElevatore = document.querySelector('.richiesteScalaElevatore');
let richiesteConsegnaImballi = document.querySelector('.richiesteConsegnaImballi');
let richiestePersonaleSpec = document.querySelector('.richiestePersonaleSpec');
let richiesteDepositoMagazzino = document.querySelector('.richiesteDepositoMagazzino');
let richiesteTratta = document.querySelector('.richiesteTratta');
let messaggi = document.querySelector('.messaggi');
let nomeAzienda = document.querySelector('.nomeAzienda');
let colonnaInfo = document.querySelector('.colonnaInfo');





async function userView() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            fetchImg(data.id);
            nomeAzienda.innerHTML = data.nomeAzienda;
            iMieiDati(data);

            console.log(data);



        });

}


function fetchImg(id) {

    let imgAzienda = document.querySelector('.imgAzienda');

    fetch(`http://127.0.0.1:8080/api/azienda/logo/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Errore nel recupero del logo");
            }
            return response.blob();
        })
        .then((blob) => {
            const logoUrl = URL.createObjectURL(blob);
            imgAzienda.setAttribute('src', logoUrl);
        })
        .catch((error) => {
            console.error("Errore nel caricamento del logo:", error);
            imgAzienda.setAttribute(
                'src',
                './img/default-logo.png'
            );
        });
}



function iMieiDati(dati) {

    let visualizzaDati = `<div class="card-body destra">
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Nome Azienda</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.nomeAzienda}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Partita IVA</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.piva}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Email Aziendale</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.emailAziendale}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.indirizzo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Numero Aziendale</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.numeroTelefonicoAziendale}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Nome</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.nomeDipendente}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cognome</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.cognomeDipendente}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Numero Dipendente</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.numeroTelefono}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Email</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                    ${dati.username}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>`;


    colonnaInfo.innerHTML = visualizzaDati;

}




document.addEventListener("DOMContentLoaded", function () {

    if (dato) {
        console.log('ciao');

        dato.addEventListener('click', userView);
    }
});




function feedback() {

    let destra = document.querySelector('.destra');

    console.log('ciao');


    let feedbackVisualizza = `<div class="card-body destra">
    <div class="container">
    <div class="row">
    <div class="col-lg-12">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card-body">
                                        <h4 class="card-title">Recensioni</h4>
                                        <h5 class="card-subtitle">Riepilogo</h5>
                                        <h2 class="font-medium mt-5 mb-0">25426</h2>
                                        <span class="text-muted">Questo mese ci sono 346 nuove
                                            recensioni </span>
                                        <div class="image-box mt-4 mb-4">
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Simmons"><img
                                                    src="../Progetto/imgs/4.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Fitz"><img
                                                    src="../Progetto/imgs/3.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Phil"><img
                                                    src="../Progetto/imgs/2.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Melinda"><img
                                                    src="../Progetto/imgs/1.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                        </div>

                                    </div>
                                    <div class="media">
                                        <div class="row" style="display: flex; align-items: center;">
                                            <h6>Media</h6>
                                            <h1 style="font-size: 50px;">4.5<i
                                                    class="fa-solid fa-star display-5"
                                                    style="color: #FFD43B;"></i></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-8 border-left">
                                    <div class="card-body">
                                        <ul class="list-style-none">
                                            <li>
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 5 stelle</h5>
                                                        <span class="text-muted">25547 Recensioni</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success"
                                                        role="progressbar" style="width: 40%"
                                                        aria-valuenow="47" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 4 stelle</h5>
                                                        <span class="text-muted">5547 Reviews</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-orange"
                                                        role="progressbar" style="width: 30%"
                                                        aria-valuenow="33" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2 mb-2">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 3 stelle</h5>
                                                        <span class="text-muted">547 Reviews</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-info" role="progressbar"
                                                        style="width: 10%" aria-valuenow="20"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">

                                                    <i class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 2 stelle</h5>
                                                        <span class="text-muted">25547 Recensioni</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success"
                                                        role="progressbar" style="width: 5%"
                                                        aria-valuenow="47" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 1 stella</h5>
                                                        <span class="text-muted">25547 Recensioni</span>
                                                    </div>
                                                </div>
                                                <div class="progress mb-4">
                                                    <div class="progress-bar bg-success"
                                                        role="progressbar" style="width: 5%"
                                                        aria-valuenow="47" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `;

    colonnaInfo.innerHTML = feedbackVisualizza;

}



if (feed) {

    feed.addEventListener('click', feedback);
}


function visualizzaRichiesteOccSuoloPub(suolo) {


    colonnaInfo.innerHTML = '';

    suolo.richiestaSuoloPubblico.forEach(element => {


        let visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Suolo Pubblico numero: #${element.id}</h4>
                            </div>
                            


                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regione}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cap}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">MQ</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.mq}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cartelli</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cartelli}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Chiusura Strada</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.chiusuraStrada}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Inizio</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.inizio}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Fine</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.fine}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Note</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.note}&nbsp;
                                </div>
                            </div>
                            <hr>
                                
                          </div>

                        </div>

                    </div>
                        <div class="row">
                            <div class="col-lg-12 mt-5 d-flex justify-content-end">
                                <button class="btn btn-danger mx-2">Chiudi</button>
                                <button class="btn btn-primary mx-2">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


        colonnaInfo.innerHTML += visualizzaRichieste;

    });

}


async function fetchSuoloPub() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteOccSuoloPub(data);

            console.log(data);


        });

}



if (richiesteOccSuoloPub) {

    richiesteOccSuoloPub.addEventListener('click', fetchSuoloPub);
}







function visualizzaRichiesteCarico(suolo) {


    colonnaInfo.innerHTML = '';

    suolo.richiesteTrasporti.forEach(element => {


        let visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Carico numero: #${element.id}</h4>
                            </div>
                            


                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regionePartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comunePartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Due Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoDuePartenza}&nbsp;
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.capPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">M3</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.mq}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Tipo Di Veicolo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.tipoDiVeicolo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regioneArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comuneArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">IndirizzoDueArrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoDueArrivo}&nbsp;
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.capArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Carico</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.carico}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Scarico</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.scarico}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Note</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.note}&nbsp;
                                </div>
                            </div>
                            <hr>
                            
                                
                          </div>

                        </div>

                    </div>
                        <div class="row">
                            <div class="col-lg-12 mt-5 d-flex justify-content-end">
                                <button class="btn btn-danger mx-2">Chiudi</button>
                                <button class="btn btn-primary mx-2">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


        colonnaInfo.innerHTML += visualizzaRichieste;

    });

}


async function fetchCarico() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCarico(data);

            console.log(data);


        });

}



if (richiesteTrasporto) {

    richiesteTrasporto.addEventListener('click', fetchCarico);
}





function visualizzaRichiesteScalaElevatore(suolo) {


    colonnaInfo.innerHTML = '';

    suolo.scalaElevatore.forEach(element => {


        let visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Scala Elevatore numero: #${element.id}</h4>
                            </div>
                            


                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regione}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Due</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoDue}&nbsp;
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cap}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Tipo Di Scala</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.tipoDiScala}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Peso Massimo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.pesoMassimo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Inizio</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.inizio}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Fine</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.fine}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Note</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.note}&nbsp;
                                </div>
                            </div>
                            <hr>
                                
                          </div>

                        </div>

                    </div>
                        <div class="row">
                            <div class="col-lg-12 mt-5 d-flex justify-content-end">
                                <button class="btn btn-danger mx-2">Chiudi</button>
                                <button class="btn btn-primary mx-2">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


        colonnaInfo.innerHTML += visualizzaRichieste;

    });

}


async function fetchScalaElevatore() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiesteScalaElevatore(data);


        });

}



if (richiesteScalaElevatore) {

    richiesteScalaElevatore.addEventListener('click', fetchScalaElevatore);
}




function visualizzaRichiesteConsegnaImballi(suolo) {


    colonnaInfo.innerHTML = '';

    suolo.consegnaImballi.forEach(element => {


        let visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Consegna Imballi numero: #${element.id}</h4>
                            </div>
                            


                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regione}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Due</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoDue}&nbsp;
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cap}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 1</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo1}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 2</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo2}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 3</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo3}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 4</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo4}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 5</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo5}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 6</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo6}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 7</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo7}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Imballo 8</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.imballo8}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Note</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.note}&nbsp;
                                </div>
                            </div>
                            <hr>
                                
                          </div>

                        </div>

                    </div>
                        <div class="row">
                            <div class="col-lg-12 mt-5 d-flex justify-content-end">
                                <button class="btn btn-danger mx-2">Chiudi</button>
                                <button class="btn btn-primary mx-2">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


        colonnaInfo.innerHTML += visualizzaRichieste;

    });

}


async function fetchConsegnaImballi() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiesteConsegnaImballi(data);


        });

}



if (richiesteConsegnaImballi) {

    richiesteConsegnaImballi.addEventListener('click', fetchConsegnaImballi);
}









function visualizzaRichiestePersonaleSpecializzato(suolo) {


    colonnaInfo.innerHTML = '';

    suolo.personaleSpecializzato.forEach(element => {


        let visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Personale Specializzato numero: #${element.id}</h4>
                            </div>
                            


                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regione}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Due</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoDue}&nbsp;
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cap}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Operatori</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.operatore}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Autisti</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.autista}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Montatori</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.montatore}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Falegnami</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.falegname}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Note</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.note}&nbsp;
                                </div>
                            </div>
                            <hr>
                                
                          </div>

                        </div>

                    </div>
                        <div class="row">
                            <div class="col-lg-12 mt-5 d-flex justify-content-end">
                                <button class="btn btn-danger mx-2">Chiudi</button>
                                <button class="btn btn-primary mx-2">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


        colonnaInfo.innerHTML += visualizzaRichieste;

    });

}


async function fetchRichiestePersonaleSpecializzato() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiestePersonaleSpecializzato(data);


        });

}



if (richiestePersonaleSpec) {

    richiestePersonaleSpec.addEventListener('click', fetchRichiestePersonaleSpecializzato);
}










function visualizzaRichiesteDepositoMagazzino(suolo) {


    colonnaInfo.innerHTML = '';

    suolo.depositoMagazzino.forEach(element => {


        let visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Personale Specializzato numero: #${element.id}</h4>
                            </div>
                            


                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regione}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cap}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">MQ</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.mq}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Inizio</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.inizio}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Fine</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.fine}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Mobilio</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.mobilio}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Pedane</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.pedane}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Altro</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.altro}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Note</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.note}&nbsp;
                                </div>
                            </div>
                            <hr>
                                
                          </div>

                        </div>

                    </div>
                        <div class="row">
                            <div class="col-lg-12 mt-5 d-flex justify-content-end">
                                <button class="btn btn-danger mx-2">Chiudi</button>
                                <button class="btn btn-primary mx-2">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


        colonnaInfo.innerHTML += visualizzaRichieste;

    });

}


async function fetchRichiesteDepositoMagazzino() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiesteDepositoMagazzino(data);


        });

}



if (richiesteDepositoMagazzino) {

    richiesteDepositoMagazzino.addEventListener('click', fetchRichiesteDepositoMagazzino);
}









function visualizzaRichiesteTratte(suolo) {


    colonnaInfo.innerHTML = '';

    suolo.tratta.forEach(element => {


        let visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Carico numero: #${element.id}</h4>
                            </div>
                            


                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regionePartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comunePartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Due Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoDuePartenza}&nbsp;
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.capPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.dataPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Tipo Di Veicolo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.tipoDiVeicolo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Regione Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regioneArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comuneArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Indirizzo Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">IndirizzoDueArrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.indirizzoDueArrivo}&nbsp;
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Cap Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.capArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.dataArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Note</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.note}&nbsp;
                                </div>
                            </div>
                            <hr>
                            
                                
                          </div>

                        </div>

                    </div>
                        <div class="row">
                            <div class="col-lg-12 mt-5 d-flex justify-content-end">
                                <button class="btn btn-danger mx-2">Chiudi</button>
                                <button class="btn btn-primary mx-2">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


        colonnaInfo.innerHTML += visualizzaRichieste;

    });

}


async function fetchTratte() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteTratte(data);

            console.log(data);


        });

}



if (richiesteTratta) {

    richiesteTratta.addEventListener('click', fetchTratte);
}
























function iMieiMessaggi() {

    let visualizzaMessaggi = `<div class="card-body destra1">
    <section style="background-color: #1B2023">
    <div class="container py-5">
  
      <div class="row">
                            
        <div class="col-md-12 col-lg-12 col-xl-12">
  
          <ul class="list-unstyled">
            <li class="d-flex justify-content-between mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60">
              <div class="card">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Brad Pitt</p>
                  <p class="text-muted small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <div class="card w-100">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium.
                  </p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
            </li>
            <li class="d-flex justify-content-between mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60">
              <div class="card">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Brad Pitt</p>
                  <p class="text-muted small mb-0"><i class="far fa-clock"></i> 10 mins ago</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div data-mdb-input-init class="form-outline">
                <textarea class="form-control bg-body-tertiary" id="textAreaExample2" rows="4"></textarea>
              </div>
            </li>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-info btn-rounded float-end">Send</button>
          </ul>
  
        </div>
  
      </div>
  
    </div>
  </section>
  </div>`;

    colonnaInfo.innerHTML = visualizzaMessaggi;

}

if (messaggi) {

    messaggi.addEventListener('click', iMieiMessaggi);
}


