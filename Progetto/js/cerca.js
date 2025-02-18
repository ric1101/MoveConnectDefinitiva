/* -------------------------------------------------------------------------- */
/*                   Funzione per cercare aziende per nome                    */
/* -------------------------------------------------------------------------- */

function tokenizzami() {

    let accessToken = localStorage.getItem('accessToken');


    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
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
        let response = await fetch(`http://localhost:8080/api/azienda/search?nomeAzienda=${encodeURIComponent(nomeAzienda)}`);
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


    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
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
            window.location.href = "pagina404.html";
        } else {

            loadAziendaByNome(nomeAzienda, id); // Carica i dati dell'azienda
        }

    } else {

        return;
    }

}

async function loadAziendaByNome(nomeAzienda, id) {
    try {
        let response = await fetch(`http://127.0.0.1:8080/api/azienda/searchNomeAzienda?nomeAzienda=${nomeAzienda}`);
        if (!response.ok) throw new Error("Errore nel recupero dei dati dell'azienda");

        let data = await response.json();
        // console.log(data.id);

        // iMieiDatiUtente(data, id, data.id); // Popola la UI con i dati
        // fetchImg(data.id); // Recupera il logo
        

        console.log("Dati azienda:", data);
    } catch (error) {
        console.error("Errore:", error);
    }
}

/* -------------------------------------------------------------------------- */
/*                         Recupero del logo aziendale                        */
/* -------------------------------------------------------------------------- */
function fetchImg(idAzienda) {
    let imgAzienda = document.querySelector('.imgAzienda');

    fetch(`http://127.0.0.1:8080/api/azienda/logo/${idAzienda}`)
        .then(response => {
            if (!response.ok) throw new Error("Errore nel recupero del logo");
            return response.blob();
        })
        .then(blob => {
            const logoUrl = URL.createObjectURL(blob);
            imgAzienda.setAttribute('src', logoUrl);
        })
        .catch(error => {
            console.error("Errore nel caricamento del logo:", error);
            imgAzienda.setAttribute('src', './img/default-logo.png'); // Logo di default
        });
}

/* -------------------------------------------------------------------------- */
/*                 Genera la UI con i dati dell'azienda cercata               */
/* -------------------------------------------------------------------------- */
async function iMieiDatiUtente(dati, idAziendaMittente, idAziendaDestinataria) {
    let container = document.querySelector(".container");

    let visualizzaIDati = `     <div class="row d-flex justify-content-center">
            <div class="col-lg-12 mb-3">
                <div class="card" style="background-color: #ece4d485;">
                    <div class="row p-4">

                        <div class="col-md-8 col-sm-12 col-lg-7 col-xl-7 d-flex align-items-center cont1">
                            <div class="containerLogoImg">
                                <img src="" alt="" class="imgAzienda">
                            </div>
                            <div class="nomiAz p-3">
                                <div class="row">
                                    <h4>${dati.nomeAzienda}</h4>

                                </div>
                                <div class="row">
                                    <p>Recensioni: ${dati.votiRecensione}</p>

                                </div>
                            </div>

                        </div>
                        <div class="">
                                    <a class="btn btn-primary me-1 tastiNormali" onclick="sendEmail('${dati.emailAziendale}')"><i class="fa-regular fa-envelope"></i> Messaggia</a>
                                </div>

                                <div class="">
                                    <a class="btn btn-primary tastiNormali"><i class="fa-solid fa-user-plus"></i>Aggiungi</a>
                                </div>



                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-12 col-sm-6 d-flex justify-content-end p-1">
                                <div class="">
                                    <a class="btn btn-warning tastiNormali">Visualizza Partners</a>
                                </div>

                            </div>
                                <div class="row">
                                    <a class="btn btn-primary tastiParticolari m-1"><i
                                            class="fa-solid fa-user-plus"></i> <p>Aggiungi</p></a>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div class="row p-3 d-flex justify-content-center" style="margin-left: 0.550rem;">
                <div class="col-md-6 col-lg-5">
                    <div class="row card mb-3 req">
                    <li class="nav-item dropdown visualizzaUser mb-2 p-0" id="menu-products">
                        <a class="nav-link dropdown-toggle visualizzaRichiesteAll" href="#" role="button"
                             aria-expanded="false">
                            Visualizza richieste
                        </a>
                        <ul class="dropdown-menu drop3">
                            <li><a class="dropdown-item d-none" href="suoloPubVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Occupazione solo pubblico</a></li>
                            <li><a class="dropdown-item" href="trasportoVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Groupage</a></li>
                            <li><a class="dropdown-item" href="elevatoreVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Scala elevatore</a></li>
                            <li><a class="dropdown-item" href="imballaggiVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Consegna imballi</a></li>
                            <li><a class="dropdown-item" href="personale-specVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Personale spec.</a></li>
                            <li><a class="dropdown-item" href="magazzinoVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Deposito</a></li>
                            <li><a class="dropdown-item" href="tratteVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Tratte</a></li>
                        </ul>
                    </li>
                        <a class="btn btn-warning ">Partners</a>
                    </div>
                <div class="row"></div>



                <div class="col-md-12">
                    <div class="row card mb-3 veri">
                        <a class="btn btn-success p-2 mb-2">Verifica Azienda</a>
                        <a class="btn btn-danger p-2">Segnala</a>
                    </div>
                </div>
                

                </div>
                <div class="col-md-6 col-lg-7 capitana">
                    <div class="row rowers">

                    <div class="col-12 card mb-3 rowers">
                        <div class="card-body">
                            <h4 class="text-success align-center">Info</h4>
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

                    <div class="row card mb-3 rowers">
                        <div class="card-body">
                            <h4 class="text-success">Info verificate ✔</h4>
                            <div class="mb-2">
                                <strong>Email Verificata:</strong> ${dati.username}<span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>Numero di Telefono Verificato:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA Verificata:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2"></div>
                            <strong>Indirizzo:</strong><span>Via Esempio 1, Milano</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

            
        </div>`;

    container.innerHTML = visualizzaIDati;

     await fetch(`http://127.0.0.1:8080/api/amicizia/amicizie/${idAziendaMittente}/${idAziendaDestinataria}`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
        

        if(data.stato != "PENDENTE"){
            

    let visualizzaIDati = `     <div class="row d-flex justify-content-center">
            <div class="col-lg-12 mb-3">
                <div class="card" style="background-color: #ece4d485;">
                    <div class="row p-4">

                        <div class="col-md-8 col-sm-12 col-lg-7 col-xl-7 d-flex align-items-center cont1">
                            <div class="containerLogoImg">
                                <img src="" alt="" class="imgAzienda">
                            </div>
                            <div class="nomiAz p-3">
                                <div class="row">
                                    <h4>${dati.nomeAzienda}</h4>

                                </div>
                                <div class="row">
                                    <p>Recensioni: ${dati.votiRecensione}</p>

                                </div>
                            </div>

                        </div>

                        <div class="col-lg-5 col-sm-12 col-md-4 p-4">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12 col-lg-12 col-xl-12 col-sm-6 d-flex justify-content-end p-1">
                                    <a class="btn btn-primary me-1 tastiNormali" onclick="sendEmail('${dati.emailAziendale}')">
                            <i class="fa-regular fa-envelope"></i> Messaggia
                                    </a>
                                    <a class="btn btn-primary tastiNormali amicizia" onclick="inviaAmicizia(${idAziendaMittente}, ${idAziendaDestinataria})"><i class="fa-solid fa-user-plus "></i>
                                        Aggiungi</a>

                                </div>
                                <div class="row nomiAzEsteso">
                                    <h4>${dati.nomeAzienda}</h4>
                                    <p>${dati.votiRecensione}</p>
                                </div>
                                <div class="row">
                                    <a class="btn btn-primary tastiParticolari m-1"><i
                                            class="fa-regular fa-envelope"></i> <p>Messaggia</p></a>

                                </div>
                                <div class="row">
                                    <a class="btn btn-primary tastiParticolari m-1"><i
                                            class="fa-solid fa-user-plus"></i> <p>Aggiungi</p></a>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div class="row p-3 d-flex justify-content-center" style="margin-left: 0.550rem;">
                <div class="col-md-6 col-lg-5">
                    <div class="row card mb-3 req">
                    <li class="nav-item dropdown visualizzaUser mb-2 p-0" id="menu-products">
                        <a class="nav-link dropdown-toggle visualizzaRichiesteAll" href="#" role="button"
                             aria-expanded="false">
                            Visualizza richieste
                        </a>
                        <ul class="dropdown-menu drop3">
                            <li><a class="dropdown-item d-none" href="suoloPubVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Occupazione solo pubblico</a></li>
                            <li><a class="dropdown-item" href="trasportoVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Groupage</a></li>
                            <li><a class="dropdown-item" href="elevatoreVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Scala elevatore</a></li>
                            <li><a class="dropdown-item" href="imballaggiVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Consegna imballi</a></li>
                            <li><a class="dropdown-item" href="personale-specVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Personale spec.</a></li>
                            <li><a class="dropdown-item" href="magazzinoVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Deposito</a></li>
                            <li><a class="dropdown-item" href="tratteVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Tratte</a></li>
                        </ul>
                    </li>
                        <a class="btn btn-warning ">Partners</a>
                    </div>
                <div class="row"></div>



                <div class="col-md-12">
                    <div class="row card mb-3 veri">
                        <a class="btn btn-success p-2 mb-2">Verifica Azienda</a>
                        <a class="btn btn-danger p-2">Segnala</a>
                    </div>
                </div>
                

                </div>
                <div class="col-md-6 col-lg-7 capitana">
                    <div class="row rowers">

                    <div class="col-12 card mb-3 rowers">
                        <div class="card-body">
                            <h4 class="text-success align-center">Info</h4>
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

                    <div class="row card mb-3 rowers">
                        <div class="card-body">
                            <h4 class="text-success">Info verificate ✔</h4>
                            <div class="mb-2">
                                <strong>Email Verificata:</strong> ${dati.username}<span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>Numero di Telefono Verificato:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA Verificata:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2"></div>
                            <strong>Indirizzo:</strong><span>Via Esempio 1, Milano</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

            
        </div>`;

    container.innerHTML = visualizzaIDati;
}else if(data.stato == "PENDENTE"){
    let visualizzaIDati = `     <div class="row d-flex justify-content-center">
            <div class="col-lg-12 mb-3">
                <div class="card" style="background-color: #ece4d485;">
                    <div class="row p-4">

                        <div class="col-md-8 col-sm-12 col-lg-7 col-xl-7 d-flex align-items-center cont1">
                            <div class="containerLogoImg">
                                <img src="" alt="" class="imgAzienda">
                            </div>
                            <div class="nomiAz p-3">
                                <div class="row">
                                    <h4>${dati.nomeAzienda}</h4>

                                </div>
                                <div class="row">
                                    <p>Recensioni: ${dati.votiRecensione}</p>

                                </div>
                            </div>

                        </div>

                        <div class="col-lg-5 col-sm-12 col-md-4 p-4">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12 col-lg-12 col-xl-12 col-sm-6 d-flex justify-content-end p-1">
                                    <a class="btn btn-primary me-1 tastiNormali" onclick="sendEmail('${dati.emailAziendale}')">
                            <i class="fa-regular fa-envelope"></i> Messaggia
                                    </a>
                                    <a class="btn btn-danger tastiNormali amicizia" onclick="annullaRichiestaAmicizia(${idAziendaMittente}, ${idAziendaDestinataria})"><i class="fa-solid fa-user-xmark"></i>
                                        Annulla</a>

                                </div>
                                <div class="row nomiAzEsteso">
                                    <h4>${dati.nomeAzienda}</h4>
                                    <p>${dati.votiRecensione}</p>
                                </div>
                                <div class="row">
                                    <a class="btn btn-primary tastiParticolari m-1"><i
                                            class="fa-regular fa-envelope"></i> <p>Messaggia</p></a>

                                </div>
                                <div class="row">
                                    <a class="btn btn-primary tastiParticolari m-1"><i
                                            class="fa-solid fa-user-plus"></i> <p>Aggiungi</p></a>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div class="row p-3 d-flex justify-content-center" style="margin-left: 0.550rem;">
                <div class="col-md-6 col-lg-5">
                    <div class="row card mb-3 req">
                    <li class="nav-item dropdown visualizzaUser mb-2 p-0" id="menu-products">
                        <a class="nav-link dropdown-toggle visualizzaRichiesteAll" href="#" role="button"
                             aria-expanded="false">
                            Visualizza richieste
                        </a>
                        <ul class="dropdown-menu drop3">
                            <li><a class="dropdown-item d-none" href="suoloPubVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Occupazione solo pubblico</a></li>
                            <li><a class="dropdown-item" href="trasportoVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Groupage</a></li>
                            <li><a class="dropdown-item" href="elevatoreVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Scala elevatore</a></li>
                            <li><a class="dropdown-item" href="imballaggiVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Consegna imballi</a></li>
                            <li><a class="dropdown-item" href="personale-specVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Personale spec.</a></li>
                            <li><a class="dropdown-item" href="magazzinoVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Deposito</a></li>
                            <li><a class="dropdown-item" href="tratteVisualizzaUtente.html" onclick="inviaLocalId(${dati.id})">Tratte</a></li>
                        </ul>
                    </li>
                        <a class="btn btn-warning ">Partners</a>
                    </div>
                <div class="row"></div>



                <div class="col-md-12">
                    <div class="row card mb-3 veri">
                        <a class="btn btn-success p-2 mb-2">Verifica Azienda</a>
                        <a class="btn btn-danger p-2">Segnala</a>
                    </div>
                </div>
                

                </div>
                <div class="col-md-6 col-lg-7 capitana">
                    <div class="row rowers">

                    <div class="col-12 card mb-3 rowers">
                        <div class="card-body">
                            <h4 class="text-success align-center">Info</h4>
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

                    <div class="row card mb-3 rowers">
                        <div class="card-body">
                            <h4 class="text-success">Info verificate ✔</h4>
                            <div class="mb-2">
                                <strong>Email Verificata:</strong> ${dati.username}<span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>Numero di Telefono Verificato:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA Verificata:</strong> <span class="text-success">✔</span>
                            </div>
                            <div class="mb-2"></div>
                            <strong>Indirizzo:</strong><span>Via Esempio 1, Milano</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

            
        </div>`;

    container.innerHTML = visualizzaIDati;
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

});


}


function inviaLocalId(id) {

    let aziendaIdLocale = id;

    localStorage.setItem('iDLocalAzienda', aziendaIdLocale);

}

let bottoneAmicizia = document.querySelector(".amicizia");

function inviaAmicizia(idAzienda1, idAzienda2){
    let id1 = idAzienda1;
    let id2 = idAzienda2;
    


    fetch(`http://127.0.0.1:8080/api/amicizia/richiestaAmicizia/${idAzienda1}/${idAzienda2}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            
                "idAzienda1" : id1,
                "idAzienda2" : id2
              
            
        })
    })

    window.location.reload();

}

function annullaRichiestaAmicizia(idAzienda1, idAzienda2){
    let id1 = idAzienda1;
    let id2 = idAzienda2;
    


    fetch(`http://127.0.0.1:8080/api/amicizia/amiciziaRifiutata/${idAzienda1}/${idAzienda2}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    window.location.reload();

}



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



