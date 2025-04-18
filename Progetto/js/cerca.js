/* -------------------------------------------------------------------------- */
/*                   Funzione per cercare aziende per nome                    */
/* -------------------------------------------------------------------------- */

function tokenizzami() {

    let accessToken = localStorage.getItem('accessToken');


    fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            cercaAzienda(data.nomeAzienda);
            console.log(data.id);


        });


}



async function cercaAzienda(nomeAziendaNostra) {
    let nomeAzienda = document.getElementById("searchInput").value;

    let v = true;


    if (nomeAzienda.length < 2) {
        document.getElementById("ricerca").innerHTML = "";
        return;
    }

    try {
        let response = await fetch(`https://127.0.0.1/api/azienda/search?nomeAzienda=${encodeURIComponent(nomeAzienda)}`);
        let aziende = await response.json();

        let resultsList = document.getElementById("ricerca");
        resultsList.innerHTML = "";

        aziende.forEach(azienda => {
            console.log(azienda.nomeAzienda);
            console.log(nomeAziendaNostra);
            if (azienda.nomeAzienda === nomeAziendaNostra) {
                v = false;
            } else {
                v = true;
            }
            if (v) {
                let li = document.createElement("li");
                let link = document.createElement("a");

                link.textContent = azienda.nomeAzienda;
                link.href = `paginaUtente.html?nomeAzienda=${azienda.nomeAzienda}`; // Passa l'ID nell'URL
                link.style.textDecoration = "none";
                link.style.color = "#FAAD06";

                li.appendChild(link);
                resultsList.appendChild(li);
            }
        });

    } catch (error) {
        console.error("Errore nella ricerca:", error);
    }
}

/* -------------------------------------------------------------------------- */
/*         Recupera automaticamente i dati dell'azienda all'avvio            */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {

    let accessToken = localStorage.getItem('accessToken');


    fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {



            setParam(data.nomeAzienda, data.id);

            console.log(data.id);


        });


});

/* -------------------------------------------------------------------------- */
/*                 Recupera e mostra i dati dell'azienda cercata              */
/* -------------------------------------------------------------------------- */
function setParam(nomeAziendaDue, id) {
    console.log('ii');

    let params = new URLSearchParams(window.location.search);
    let nomeAzienda = params.get("nomeAzienda");

    let link = window.location.href;
    console.log(link);

    let parseLink = String(link);
    console.log(parseLink);


    if (parseLink.includes('http://127.0.0.1:5501/Progetto/paginaUtente.html?nomeAzienda=')) {

        console.log('cc');


        if (nomeAzienda === nomeAziendaDue) {
            window.location.href = "user.html";
        } else {

            loadAziendaByNome(nomeAzienda, id); // Carica i dati dell'azienda
        }

    } else {

        return;
    }

}




async function loadAziendaByNome(nomeAzienda, id) {
    try {
        let response = await fetch(`https://127.0.0.1/api/azienda/searchNomeAzienda?nomeAzienda=${nomeAzienda}`);
        if (!response.ok) throw new Error("Errore nel recupero dei dati dell'azienda");

        let data = await response.json();
        // console.log(data.id);

        recensioniAzienda(data, id, data.id); // Popola la UI con i dati
        // Recupera il logo


        console.log("Dati azienda:", data);
    } catch (error) {
        console.error("Errore:", error);
    }
}


async function recensioniAzienda(dati, idAziendaMittente, idAziendaDestinataria) {

    await fetch(`https://127.0.0.1/api/azienda/recensioneImballiFinaleAme/${idAziendaDestinataria}`)
        .then((res) => res.json())
        .then((data) => {

            calcolaPartner(data, dati, idAziendaMittente, idAziendaDestinataria);

        });



}


async function calcolaPartner(recensioni, dati, idAziendaMittente, idAziendaDestinataria) {

    await fetch(`https://127.0.0.1/api/amicizia/counterPartner/${idAziendaDestinataria}`)
        .then((res) => res.json())
        .then((data) => {



            iMieiDatiUtente(recensioni, dati, idAziendaMittente, idAziendaDestinataria, data);

        });



}


/* -------------------------------------------------------------------------- */
/*                         Recupero del logo aziendale                        */
/* -------------------------------------------------------------------------- */
function fetchImg(idAzienda) {
    let imgAzienda = document.querySelector('.imgAzienda');

    console.log(imgAzienda);


    fetch(`https://127.0.0.1/api/azienda/logo/${idAzienda}`)
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

/* -------------------------------------------------------------------------- */
/*                 Genera la UI con i dati dell'azienda cercata               */
/* -------------------------------------------------------------------------- */

async function iMieiDatiUtente(recensioni, dati, idAziendaMittente, idAziendaDestinataria, amici) {
    let container = document.querySelector(".container");


    await fetch(`https://127.0.0.1/api/amicizia/amicizie/${idAziendaMittente}/${idAziendaDestinataria}`)
        .then((res) => {
            if (res.status === 404) {


                let visualizzaIDati = `<div class="row d-flex justify-content-center colonnaInfo">

            <div class="col-lg-1"></div>
            <div class="col-lg-10">
                <div class="card mb-4 text-center rowes utente">
                    <div class="card-body col-lg-6 flex-column justify-content-center px-4 pt-4">
                        <div class="containerLogoImg" style="margin-top: 0px !important;">
                            <img src="" class="imgAzienda">
                        </div>
                        <h2 class="my-4 fw-bold">${dati.nomeAzienda}</h2>
                    </div>
                    <div class="card-body col-lg-6 px-4 pt-2">
                        <div class="row">
                            <div class="col-md-12 p-2 mt-3 box">
                                <a class="btn btn-primary ms-3 me-3 mt-3" onclick="sendEmail('${dati.emailAziendale}')"><i class="fa-regular fa-envelope"></i>
                                    Messaggia</a>
                                <a class="btn btn-primary me-3 mt-3 agg" onclick="inviaAmicizia(${idAziendaMittente}, ${idAziendaDestinataria})"><i class="fa-solid fa-user-plus"></i>
                                    Aggiungi</a>
                            </div>
                            <div class="row">
                                <div class="col-md-12 p-2">
                                     <a class="btn btn-warning ms-4" onclick="mostraAmici(${idAziendaDestinataria})">Visualizza Partners</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 p-2">
                            <h3 class="m-0" style="font-size: larger; font-weight: bold; margin-bottom: 10px;">Partners commerciali</h3> <h1 class="m-1"><a class="visualizzaAmici" style="font-weight: bold; cursor:pointer;"  onclick="mostraAmici(${idAziendaDestinataria})">${amici} <i class="fa-solid fa-user-group" style="font-size: 25px; color: black;"></i></a></h1>
                                <h3 class="m-0" style="font-size: larger; font-weight: bold;">Media Recensioni </h3>
                                <h1 class="m-1" style="font-weight: bold;">${recensioni.media} <span style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="row contenitorePartner" id="partnerVisualizza"></div>
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">
                    <div class="row card mb-3 p-3 flex-row align-items-center">
                        <div class="col-md-4 pt-2">
                            <li class="nav-item dropdown visualizzaUser btnBarra" id="menu-products">
                                <a class="nav-link dropdown-toggle visualizzaRichiesteAll" role="button"
                                    aria-expanded="false">
                                    Visualizza richieste
                                </a>
                                <ul class="dropdown-menu drop3">
                                    <li><a class="dropdown-item d-none" href="suoloPubVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Occupazione solo pubblico</a>
                                    </li>
                                    <li><a class="dropdown-item" href="trasportoVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Groupage</a></li>
                                    <li><a class="dropdown-item" href="elevatoreVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Scala elevatore</a></li>
                                    <li><a class="dropdown-item" href="imballaggiVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Consegna imballi</a></li>
                                    <li><a class="dropdown-item" href="personale-specVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Personale spec.</a></li>
                                    <li><a class="dropdown-item" href="magazzinoVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Deposito</a></li>
                                    <li><a class="dropdown-item" href="tratteVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Tratte</a></li>
                                </ul>
                            </li>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center pt-2">
                            <a class="btn btn-warning btnBarra" href="#recensioniTutte">Visualizza Recensioni</a>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center pt-2">
                            <a class="btn btn-success btnBarra">Verifica Azienda</a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center pt-2">
                            <a class="btn btn-danger btnBarra" onclick="segnala(${dati.id}, '${dati.username}', '${dati.nomeAzienda}')">Segnala</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </div>



            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-5">
                    <div class="row card first">
                        <div class="card-body">
                            <h4 class="text-success">Info</h4>
                            <div class="mb-2">
                                <strong>Numero Aziendale:</strong> <span>${dati.numeroTelefonicoAziendale}</span>
                            </div>
                            <div class="mb-2">
                                <strong>Email:</strong> <span>${dati.emailAziendale}</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA:</strong> <span>${dati.piva}</span>
                            </div>
                            <div class="mb-2">
                                <strong>Indirizzo:</strong> <span>${dati.indirizzo}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="row card second">
                        <div class="card-body">
                            <h4 class="text-success">Info verificate ✔</h4>
                            <div class="mb-2">
                                <strong>Email Verificata:</strong> ${dati.username}<span
                                    class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>Numero di Telefono Verificato:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA Verificata:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2"></div>
                            <strong>Indirizzo:</strong><span>Via Esempio 1, Milano </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </div>

            <div class="row mt-3" id="recensioniTutte">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">


                    <div class="bg-white rounded p-4 mb-4 card graph-star-rating">
                        <div class="mb-4">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row p-2">
                                        <div class="col-md-6">
                                            <h5 class="mb-0 mb-4 text-success">Valutazione e Recensioni</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end align-items-center">
                                            <h3 style="font-size: larger; font-weight: bold; margin: 0;">Media Recensioni
                                                &nbsp;</h3>
                                            <h1 style="font-weight: bold;">${recensioni.media} <span class="spannetto" style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                            </h1>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="graph-star-rating-body">
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle5}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle5}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle4}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle4}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle3}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle3}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle2}%" aria-valuemax="5" aria-valuemin="0" aria-valuenow="5"
                                            role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle2}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle1}%" aria-valuemax="5" aria-valuemin="0" aria-valuenow="5"
                                            role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle1}%</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-1"></div>

                <div class="inserisciRecensioni">
                    
                </div>

            </div>
            

            </div>`;


                container.innerHTML = visualizzaIDati;
                fetchImg(idAziendaDestinataria); // Replace 'container' with the actual ID of the parent element in your HTML

                throw new Error('404 Not Found');
                // Stop further execution if 404


            } else if (!res.ok) {
                // If the response status is not ok (i.e., not 2xx), handle other errors here
                console.error('Error:', res.statusText);
                throw new Error(res.statusText);  // Throw the error to stop further processing
            }

            return res.json();  // Only parse JSON if the status is not 404
        })

        .then((data) => {
            console.log('Received data:', data);



            if (data.stato === "ACCETTATA") {


                let visualizzaIDati = `<div class="row d-flex justify-content-center colonnaInfo">

            <div class="col-lg-1"></div>
            <div class="col-lg-10">
                <div class="card mb-4 text-center rowes utente">
                    <div class="card-body col-lg-6 flex-column justify-content-center px-4 pt-4">
                        <div class="containerLogoImg" style="margin-top: 0px !important;">
                            <img src="" alt="UserImg" class="imgAzienda">
                        </div>
                        <h2 class="my-2 fw-bold">${dati.nomeAzienda}</h2>
                    </div>
                    <div class="card-body col-lg-6 px-4 pt-2">
                        <div class="row">
                            <div class="col-md-12 p-2 mt-3 box">
                                <a class="btn btn-primary ms-3 me-3 mt-3" onclick="sendEmail('${dati.emailAziendale}')"><i class="fa-regular fa-envelope"></i> Messaggia</a>
                                <a class="btn btn-primary me-3 mt-3 agg" onclick="annullaRichiestaAmicizia(${idAziendaMittente}, ${idAziendaDestinataria})"><i class="fa-solid fa-user-minus"></i> Rimuovi</a>
                            </div>
                            <div class="row">
                                <div class="col-md-12 p-2">
                                     <a class="btn btn-warning ms-4" onclick="mostraAmici(${idAziendaDestinataria})" >Visualizza Partners</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 p-2 mt-3">
                            <h3 class="m-0" style="font-size: larger; font-weight: bold; margin-bottom: 10px;">Partners commerciali</h3> <h1 class="m-1"><a class="visualizzaAmici" style="font-weight: bold; cursor:pointer;"  onclick="mostraAmici(${idAziendaDestinataria})">${amici} <i class="fa-solid fa-user-group" style="font-size: 25px; color: black;"></i></a></h1>
                                <h3 style="font-size: larger; font-weight: bold;">Media Recensioni</h3>
                                <h1 style="font-weight: bold;">${recensioni.media} <span style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
                <div class="row contenitorePartner" id="partnerVisualizza"></div>
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">
                    <div class="row card mb-3 p-3 flex-row align-items-center">
                        <div class="col-md-4 pt-2">
                            <li class="nav-item dropdown visualizzaUser btnBarra" id="menu-products">
                                <a class="nav-link dropdown-toggle visualizzaRichiesteAll" role="button"
                                    aria-expanded="false">
                                    Visualizza richieste
                                </a>
                                <ul class="dropdown-menu drop3">
                                    <li><a class="dropdown-item d-none" href="suoloPubVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Occupazione solo pubblico</a>
                                    </li>
                                    <li><a class="dropdown-item" href="trasportoVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Groupage</a></li>
                                    <li><a class="dropdown-item" href="elevatoreVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Scala elevatore</a></li>
                                    <li><a class="dropdown-item" href="imballaggiVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Consegna imballi</a></li>
                                    <li><a class="dropdown-item" href="personale-specVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Personale spec.</a></li>
                                    <li><a class="dropdown-item" href="magazzinoVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Deposito</a></li>
                                    <li><a class="dropdown-item" href="tratteVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Tratte</a></li>
                                </ul>
                            </li>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center pt-2">
                            <a class="btn btn-warning btnBarra" href="#recensioniTutte">Visualizza Recensioni</a>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center pt-2">
                            <a class="btn btn-success btnBarra">Verifica Azienda</a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center pt-2">
                            <a class="btn btn-danger btnBarra" onclick="segnala(${dati.id}, '${dati.username}', '${dati.nomeAzienda}')">Segnala</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </div>



            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-5">
                    <div class="row card first">
                        <div class="card-body">
                            <h4 class="text-success">Info</h4>
                            <div class="mb-2">
                                <strong>Numero Aziendale:</strong> <span>${dati.numeroTelefonicoAziendale}</span>
                            </div>
                            <div class="mb-2">
                                <strong>Email:</strong> <span>${dati.emailAziendale}</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA:</strong> <span>${dati.piva}</span>
                            </div>
                            <div class="mb-2">
                                <strong>Indirizzo:</strong> <span>${dati.indirizzo}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="row card second">
                        <div class="card-body">
                            <h4 class="text-success">Info verificate ✔</h4>
                            <div class="mb-2">
                                <strong>Email Verificata:</strong> ${dati.username}<span
                                    class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>Numero di Telefono Verificato:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA Verificata:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2"></div>
                            <strong>Indirizzo:</strong><span>Via Esempio 1, Milano </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </div>

            <div class="row mt-3" id="recensioniTutte">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">


                    <div class="bg-white rounded p-4 mb-4 card graph-star-rating">
                        <div class="mb-4">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row p-2">
                                        <div class="col-md-6">
                                            <h5 class="mb-0 mb-4 text-success">Valutazione e Recensioni</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end align-items-center">
                                            <h3 style="font-size: larger; font-weight: bold;">Media Recensioni
                                                &nbsp;</h3>
                                            <h1 style="font-weight: bold;">${recensioni.media} <span class="spannetto" style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                            </h1>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="graph-star-rating-body">
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle5}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle5}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle4}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle4}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle3}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle3}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle2}%" aria-valuemax="5" aria-valuemin="0" aria-valuenow="5"
                                            role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle2}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle1}%" aria-valuemax="5" aria-valuemin="0" aria-valuenow="5"
                                            role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle1}%</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-1"></div>

                <div class="inserisciRecensioni">
                    
                </div>

            </div>
            

            </div>`;

                container.innerHTML = visualizzaIDati;
                fetchImg(idAziendaDestinataria);

            } else if (data.stato === "PENDENTE") {


                let visualizzaIDati = `<div class="row d-flex justify-content-center colonnaInfo">

            <div class="col-lg-1"></div>
            <div class="col-lg-10">
                <div class="card mb-4 text-center rowes utente">
                    <div class="card-body col-lg-6 flex-column justify-content-center px-4 pt-4">
                        <div class="containerLogoImg" style="margin-top: 0px !important;">
                            <img src="" alt="UserImg" class="imgAzienda">
                        </div>
                        <h2 class="my-2 fw-bold">${dati.nomeAzienda}</h2>
                    </div>
                    <div class="card-body col-lg-6 px-4 pt-2">
                        <div class="row">
                            <div class="col-md-12 p-2 mt-3 box">
                                <a class="btn btn-primary ms-3 me-3 mt-3" onclick="sendEmail('${dati.emailAziendale}')"><i class="fa-regular fa-envelope"></i>
                                    Messaggia</a>
                                <a class="btn btn-danger me-3 mt-3 agg" onclick="annullaRichiestaAmicizia(${idAziendaMittente}, ${idAziendaDestinataria})"><i class="fa-solid fa-user-xmark"></i> Annulla</a>
                            </div>
                            <div class="row">
                                <div class="col-md-12 p-2">
                                     <a class="btn btn-warning ms-4" onclick="mostraAmici(${idAziendaDestinataria})" >Visualizza Partners</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 p-2 mt-3">
                            <h3 class="m-0" style="font-size: larger; font-weight: bold; margin-bottom: 10px;">Partners commerciali</h3> <h1 class="m-1"><a class="visualizzaAmici" style="font-weight: bold; cursor:pointer;"  onclick="mostraAmici(${idAziendaDestinataria})">${amici} <i class="fa-solid fa-user-group" style="font-size: 25px; color: black;"></i></a></h1>
                                <h3 style="font-size: larger; font-weight: bold;">Media Recensioni</h3>
                                <h1 style="font-weight: bold;">${recensioni.media} <span style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
                <div class="row contenitorePartner" id="partnerVisualizza"></div>
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">
                    <div class="row card mb-3 p-3 flex-row align-items-center">
                        <div class="col-md-4 pt-2">
                            <li class="nav-item dropdown visualizzaUser btnBarra" id="menu-products">
                                <a class="nav-link dropdown-toggle visualizzaRichiesteAll" role="button"
                                    aria-expanded="false">
                                    Visualizza richieste
                                </a>
                                <ul class="dropdown-menu drop3">
                                    <li><a class="dropdown-item d-none" href="suoloPubVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Occupazione solo pubblico</a>
                                    </li>
                                    <li><a class="dropdown-item" href="trasportoVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Groupage</a></li>
                                    <li><a class="dropdown-item" href="elevatoreVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Scala elevatore</a></li>
                                    <li><a class="dropdown-item" href="imballaggiVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Consegna imballi</a></li>
                                    <li><a class="dropdown-item" href="personale-specVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Personale spec.</a></li>
                                    <li><a class="dropdown-item" href="magazzinoVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Deposito</a></li>
                                    <li><a class="dropdown-item" href="tratteVisualizzaUtente.html"
                                            onclick="inviaLocalId(${dati.id})">Tratte</a></li>
                                </ul>
                            </li>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center pt-2">
                            <a class="btn btn-warning btnBarra" href="#recensioniTutte">Visualizza Recensioni</a>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center pt-2">
                            <a class="btn btn-success btnBarra">Verifica Azienda</a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center pt-2">
                            <a class="btn btn-danger btnBarra" onclick="segnala(${dati.id}, '${dati.username}', '${dati.nomeAzienda}')">Segnala</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </div>



            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-5">
                    <div class="row card first">
                        <div class="card-body">
                            <h4 class="text-success">Info</h4>
                            <div class="mb-2">
                                <strong>Numero Aziendale:</strong> <span>${dati.numeroTelefonicoAziendale}</span>
                            </div>
                            <div class="mb-2">
                                <strong>Email:</strong> <span>${dati.emailAziendale}</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA:</strong> <span>${dati.piva}</span>
                            </div>
                            <div class="mb-2">
                                <strong>Indirizzo:</strong> <span>${dati.indirizzo}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="row card second">
                        <div class="card-body">
                            <h4 class="text-success">Info verificate ✔</h4>
                            <div class="mb-2">
                                <strong>Email Verificata:</strong> ${dati.username}<span
                                    class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>Numero di Telefono Verificato:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA Verificata:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2"></div>
                            <strong>Indirizzo:</strong><span>Via Esempio 1, Milano </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </div>

            <div class="row mt-3" id="recensioniTutte">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">


                    <div class="bg-white rounded p-4 mb-4 card graph-star-rating">
                        <div class="mb-4">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row p-2">
                                        <div class="col-md-6">
                                            <h5 class="mb-0 mb-4 text-success">Valutazione e Recensioni</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end align-items-center">
                                            <h3 style="font-size: larger; font-weight: bold;">Media Recensioni
                                                &nbsp;</h3>
                                            <h1 style="font-weight: bold;">${recensioni.media} <span class="spannetto" style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                            </h1>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="graph-star-rating-body">
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle5}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle5}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle4}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle4}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle3}%" aria-valuemax="5" aria-valuemin="0"
                                            aria-valuenow="5" role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle3}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle2}%" aria-valuemax="5" aria-valuemin="0" aria-valuenow="5"
                                            role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle2}%</div>
                            </div>
                            <div class="rating-list">
                                <div class="rating-list-left text-black"><span
                                        style="color: yellow; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">★</span>
                                </div>
                                <div class="rating-list-center">
                                    <div class="progress">
                                        <div style="width: ${recensioni.percentuali.stelle1}%" aria-valuemax="5" aria-valuemin="0" aria-valuenow="5"
                                            role="progressbar" class="progress-bar bg-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-list-right text-black">${recensioni.percentuali.stelle1}%</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-1"></div>

                <div class="inserisciRecensioni">
                    
                </div>

            </div>
            

            </div>`;

                container.innerHTML = visualizzaIDati;
                fetchImg(idAziendaDestinataria);
            }


        })
        .catch((error) => {
        });

    let containerRecensioni = document.querySelector('.inserisciRecensioni');

    if (recensioni.recensioni.length !== 0) {


        containerRecensioni.innerHTML = `
        <div class="d-flex justify-content-center m-3">
            <h2>Recensioni Globali</h2>
        </div>`;

        recensioni.recensioni.forEach((element, index) => {


            let recensioneScritta = `
                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="card review col-lg-10">
                            <div class="row d-flex">
                                <div class="d-flex flex-row poli">
                                    <div class="col-md-8 col-sm-8 col-8">
                                        <a style="color:#FAAD06;" href="/Progetto/paginaUtente.html?nomeAzienda=${element.nomeAzienda}"><h4 class="mt-2 mb-0 titolino">${element.nomeAzienda}</h4></a>
                                        <div class="d-flex">
                                            <p class="text-left widete m-0" style="display: flex; align-items: center;"><span class="text-muted">${element.valutazione} </span>
                                                <div class="containerStelle-${index}" style="padding-left: 10px;"></div>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-4 d-flex justify-content-end">
                                        <div class="ml-auto">
                                            <p class="text-muted mt-2">${element.data_recensione}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row text-left">
                                <p class="content">${element.commento}</p>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>`;

            containerRecensioni.innerHTML += recensioneScritta;

            let containerStelle = document.querySelector(`.containerStelle-${index}`);

            let stelleHTML = '';

            for (let i = 1; i <= 5; i++) {
                if (i <= element.valutazione) {
                    stelleHTML += `<span class="fa fa-star star-active ml-3"></span>`;
                } else {
                    stelleHTML += `<span class="fa fa-star star-inactive"></span>`;
                }
            }

            containerStelle.innerHTML = stelleHTML;
        });

    }




    // Seleziona l'elemento che attiva il dropdown
    const menuProducts = document.getElementById('menu-products');
    const dropdownMenu = menuProducts.querySelector('.drop3');

    // Aggiungi l'evento hover per i dispositivi desktop
    menuProducts.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block'; // Mostra il menu
    });

    menuProducts.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none'; // Nasconde il menu quando il mouse esce
    });

    // Aggiungi gli eventi touchstart per dispositivi mobili
    menuProducts.addEventListener('touchstart', function (event) {
        // Impedisci che il tocco venga propagato per evitare conflitti
        event.stopPropagation();

        // Se il menu è visibile, lo nascondiamo, altrimenti lo mostriamo
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Aggiungi un evento di uscita dal menu (per dispositivi mobili)
    document.addEventListener('touchstart', function (event) {
        // Se l'utente tocca fuori dal menu, nascondilo
        if (!menuProducts.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

}


let siNo = false;

function mostraAmici(id) {

    let inserisciRecensioni = document.querySelector('.contenitorePartner');

    if (siNo == false) {

        siNo = true;

        inserisciRecensioni.innerHTML = '';

        let containerAmici = `<div class="col-lg-1"></div>
            <div class="col-lg-10 card mb-4">
                <div class="row d-flex justify-content-center p-3 containerTitolo">
                    
                    
                    

                </div>
            </div>
            <div class="col-lg-1"></div>`;

        inserisciRecensioni.innerHTML += containerAmici;

        let containerTitolo = document.querySelector('.containerTitolo');

        console.log(containerTitolo);


        let titoloPartner = `<div class="d-flex justify-content-center">
                        <h3>Partners</h3>
                    </div>`;


        containerTitolo.innerHTML += titoloPartner;

        console.log();


        fetch(`https://127.0.0.1/api/amicizia/counterPartnerTotale/${id}`)
            .then((res) => res.json())
            .then((data) => {


                data.forEach((element, index) => {
                    console.log(element);
                    console.log(element.id);


                    fetch(`https://127.0.0.1/api/azienda/logo/${element.id}`)
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Errore nel recupero del logo");
                            }
                            return response.blob();
                        })
                        .then((blob) => {
                            const logoUrl = URL.createObjectURL(blob);
                            console.log(logoUrl);

                            let amicoSingolo = `<div class="col-md-2">
                                                <div class="containerLogoImg2">
                                                    <a href="/Progetto/paginaUtente.html?nomeAzienda=${element.nomeAzienda}"><img src="${logoUrl}" alt="" class='partner-${index}'></a>
                                                </div>
                                            <a href="/Progetto/paginaUtente.html?nomeAzienda=${element.nomeAzienda}"><h5 class="text-black text-center">${element.nomeAzienda}</h5></a>
                                            </div>`;

                            containerTitolo.innerHTML += amicoSingolo;
                        })
                        .catch((error) => {
                            console.error("Errore nel caricamento del logo:", error);

                        })



                });
            });

    } else {

        inserisciRecensioni.innerHTML = '';
        siNo = false;

    }
}


function segnala(id, username, nomeAzienda) {

    fetch(`https://127.0.0.1/api/azienda/segnalaAzienda/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "nomeAzienda": nomeAzienda
        }),
    })
    console.log("wewe");

    window.location.href = 'segnalazioneInviata.html';

}


function inviaLocalId(id) {

    let aziendaIdLocale = id;

    localStorage.setItem('iDLocalAzienda', aziendaIdLocale);

}

let bottoneAmicizia = document.querySelector(".amicizia");


function inviaAmicizia(idAzienda1, idAzienda2) {
    let id1 = idAzienda1;
    let id2 = idAzienda2;



    fetch(`https://127.0.0.1/api/amicizia/richiestaAmicizia/${idAzienda1}/${idAzienda2}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

            "idAzienda1": id1,
            "idAzienda2": id2


        })
    })

    window.location.reload();

}

function annullaRichiestaAmicizia(idAzienda1, idAzienda2) {
    let id1 = idAzienda1;
    let id2 = idAzienda2;



    fetch(`https://127.0.0.1/api/amicizia/amiciziaRifiutata/${idAzienda1}/${idAzienda2}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    window.location.reload();

}

let piuRecensioni = document.querySelector(".piuRecensioni");

function piuRecensite(){
    
     fetch(`https://127.0.0.1/api/azienda/top5-recensioni`)
    .then((res) => res.json())
    .then((data) => {

        showRecensite(data);
        

    });
}

function showRecensite(data){

    let i = 1;
     data.forEach(element => {
        let recensioni =    
        `<p style="color: white";>#${i} <a style="color:#FAAD06;" href="/Progetto/paginaUtente.html?nomeAzienda=${element.nomeAzienda}" target="_blank">${element.nomeAzienda} <a/> <span> (${element.total_recensioni}) </span></p>`;
            i++;
            piuRecensioni.innerHTML += recensioni;
     });





}

piuRecensite();

function miglioriRecensite(){
    
    fetch(`https://127.0.0.1/api/azienda/top-azienda`)
   .then((res) => res.json())
   .then((data) => {

       showMiglioriRecensite(data);
       

   });
}

let miglioriRecensioni = document.querySelector(".miglioriRecensite");

function showMiglioriRecensite(data){

    let i = 1;
     data.forEach(element => {
        let recensioni =    
        `<p style="color: white";>#${i} <a style="color:#FAAD06;" href="/Progetto/paginaUtente.html?nomeAzienda=${element.nomeAzienda}" target="_blank">${element.nomeAzienda} <a/> <span>(${element.avg_valutazione}⭐) </span></p>`;
            i++;
            miglioriRecensioni.innerHTML += recensioni;
     });

}
miglioriRecensite();



function sendEmail(email) {
    if (!email) {
        alert("Email non disponibile!");
        return;
    }

    const subject = "Ho visto il tuo profilo da Moveconnect";
    const body = "Salve, ho visto il profilo sulla piattaforma Moveconnect e credo potremmo instaurare una partnership strategica per ottimizzare le nostre risorse";
    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailToLink;
}





