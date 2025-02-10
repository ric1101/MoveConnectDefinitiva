/* -------------------------------------------------------------------------- */
/*                   Funzione per cercare aziende per nome                    */
/* -------------------------------------------------------------------------- */
async function cercaAzienda() {
    let nomeAzienda = document.getElementById("searchInput").value;
    
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
            let li = document.createElement("li");
            let link = document.createElement("a");
        
            link.textContent = azienda.nomeAzienda;
            link.href = `paginaUtente.html?id=${azienda.id}`; // Passa l'ID nell'URL
            link.style.textDecoration = "none";
            link.style.color = "#FAAD06";
        
            li.appendChild(link);
            resultsList.appendChild(li);
        });

    } catch (error) {
        console.error("Errore nella ricerca:", error);
    }
}

/* -------------------------------------------------------------------------- */
/*         Recupera automaticamente i dati dell'azienda all'avvio            */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(window.location.search);
    let idAzienda = params.get("id");

    if (idAzienda) {
        loadAziendaById(idAzienda); // Carica i dati dell'azienda
    }
});

/* -------------------------------------------------------------------------- */
/*                 Recupera e mostra i dati dell'azienda cercata              */
/* -------------------------------------------------------------------------- */
async function loadAziendaById(idAzienda) {
    try {
        let response = await fetch(`http://127.0.0.1:8080/api/azienda/aziendaPerID/${idAzienda}`);
        if (!response.ok) throw new Error("Errore nel recupero dei dati dell'azienda");

        let data = await response.json();
        iMieiDatiUtente(data); // Popola la UI con i dati
        fetchImg(data.id); // Recupera il logo

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
function iMieiDatiUtente(dati) {
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

                        <div class="col-lg-5 col-sm-12 col-md-4 p-4">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12 col-lg-12 col-xl-12 col-sm-6 d-flex justify-content-end p-1">
                                    <a class="btn btn-primary me-1 tastiNormali" onclick="sendEmail('${dati.emailAziendale}')">
    <i class="fa-regular fa-envelope"></i> Messaggia
</a>
                                    <a class="btn btn-primary tastiNormali"><i class="fa-solid fa-user-plus"></i>
                                        Aggiungi</a>

                                </div>
                                <div class="row nomiAzEsteso">
                                    <h4>${dati.nomeAzienda}</h4>
                                    <p>${dati.votiRecensione}</p>
                                </div>
                                <div class="row">
                                    <a class="btn btn-primary tastiParticolari m-1"><i
                                            class="fa-regular fa-envelope"></i> Messaggia</a>

                                </div>
                                <div class="row">
                                    <a class="btn btn-primary tastiParticolari m-1"><i
                                            class="fa-solid fa-user-plus"></i> Aggiungi</a>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div class="row p-3 d-flex justify-content-center">
                <div class="col-md-4">
                    <div class="row card p-4 mb-3">
                        <a class="btn btn-warning p-2 m-1">Visualizza Recensioni</a>
                        <a class="btn btn-warning p-2 m-1">Visualizza Richieste</a>
                        <a class="btn btn-warning p-2 m-1">Partners</a>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row card mb-3 rowers">
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
                </div>
            </div>

            <div class="row p-3 d-flex justify-content-center">
                <div class="col-md-4">
                    <div class="row card p-4 mb-3">
                        <a class="btn btn-success p-2 m-1">Verifica Azienda</a>
                        <a class="btn btn-danger p-2 m-1">Segnala</a>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row card mb-3 rowers">
                        <div class="card-body">
                            <h4 class="text-success">Info verificate ✔</h4>
                            <div class="mb-2">
                                <strong>Email Verificata:</strong> <span class="text-success">✔</span>
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
        </div>`;

    container.innerHTML = visualizzaIDati;

    
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
// const searchInput = document.getElementById('searchInput');
// const resultsList = document.getElementById('resultsList');

// searchInput.addEventListener('input', async (event) => {
//     const query = event.target.value.trim();

//     if (query.length > 0) {
//         try {
//             // Fetch results from the backend
//             const response = await fetch(`http://localhost:8080/api/azienda/nomeAzienda?nomeAzienda=${query}`);
//             const results = await response.json();

//             // Filter results dynamically based on the query
//             const filteredResults = results.filter(result => {
//                 // Ensure result.name exists and filter by the starting characters
//                 return result.name && result.name.toLowerCase().startsWith(query.toLowerCase());
//             });

//             // Clear previous results
//             resultsList.innerHTML = '';

//             // Display filtered results
//             if (filteredResults.length > 0) {
//                 filteredResults.forEach(result => {
//                     const li = document.createElement('li');
//                     li.textContent = result.name;
//                     resultsList.appendChild(li);
//                 });
//             } else {
//                 // If no results match, display "No matches found"
//                 resultsList.innerHTML = '<li>No matches found</li>';
//             }

//         } catch (error) {
//             console.error('Error fetching data:', error);
//             resultsList.innerHTML = '<li>Error occurred while fetching data</li>';
//         }
//     } else {
//         // Clear results when the input is empty
//         resultsList.innerHTML = '';
//     }
// });
