

let colonnaInfo = document.querySelector('.colonnaInfo');
let dataEventoId = localStorage.getItem('data-evento-id');
console.log(dataEventoId);


fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/richiestaId/${dataEventoId}`)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        fetchImg(data, data.azienda.id);

    });


    function fetchImg(dati, id) {

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
                

                recuperaToken(dati, logoUrl);
            })
            .catch((error) => {
                console.error("Errore nel caricamento del logo:", error);
                imgAzienda.setAttribute(
                    'src',
                    './img/default-logo.png'
                );
            });
    }

    
    function recuperaToken(dati, img) {

        let accessToken = localStorage.getItem('accessToken');
    
        fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
    
    
                trasportoInfo(dati, img, data.id)
    
    
            });
    }
    



function trasportoInfo(dati, img, id) {
    

    let visualizzaInfo = `
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
                    <div class="card mb-4 text-center rowes">
                        <div class="card-body col-lg-6 flex-column justify-content-center">
                            <div class="containerLogoImg">
                                    <img src="${img}" alt="" class="imgAzienda">
                                </div>
                            <h2 class="my-3 fw-bold">${dati.azienda.nomeAzienda}</h2>
                        </div>
                         <div class="card-body col-lg-6">
                            <h5 class="fw-bold mt-3">Numero Telefono: </h5>
                            <p>${dati.azienda.numeroTelefono}</p>
                            <h5 class="fw-bold">Email Aziendale: </h5>
                            <p>${dati.azienda.emailAziendale}</p>
                            <h5 class="fw-bold">P. Iva: </h5>
                            <p>${dati.azienda.piva}</p>
                            <h5 class="fw-bold">Indirizzo: </h5>
                            <p>${dati.azienda.indirizzo + ', ' + dati.azienda.comune + ', ' + dati.azienda.cap }</p>
                        </div>
                    </div>
                       
                </div>
                
                <div class="col-lg-2"></div>
                <div class="row">
                <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row p-2 ">
                                    <div class=" col-sm-6">
                                        <p class="mb-0 fw-bold">#ID richiesta</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.id}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Regione Partenza</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.regionePartenza}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Provincia Partenza</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.provinciaPartenza}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Comune Partenza</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.comunePartenza}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Indirizzo Partenza</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.indirizzoPartenza}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Indirizzo Due Partenza</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.indirizzoDuePartenza}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Cap Partenza</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.capPartenza}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">M3</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.mq}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Tipologia Merce</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.tipoDiVeicolo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Regione Arrivo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.regioneArrivo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Provincia Arrivo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.provinciaArrivo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Comune Arrivo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.comuneArrivo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Indirizzo Arrivo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.indirizzoArrivo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Indirizzo Due Arrivo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.indirizzoDueArrivo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Cap Arrivo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.capArrivo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Carico</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.carico}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Scarico</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.scarico}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                </div>
                <div class="row">
                 <div class="col-md-2"></div>
                    <div class="col-md-6">
                        <div class="card mb-4 mb-md-0">
                            <div class="card-body">
                                <div class="row flex-column p-2 ">
                                    <div class="col-sm-12 p-3">
                                        <p class="mb-0 fw-bold">Note</p>
                                    </div>
                                    <div class="col-sm-12 p-3">
                                        <p class="text-muted mb-0">${dati.note}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 align-self-center text-center"><button class="btn btn-primary p-3" onclick="interessamentoTrasporto(${dati.id}, ${id})">Interessato</button></div>
                    <div class="col-md-2"</div>
                </div>`;

                colonnaInfo.innerHTML = visualizzaInfo;


}




function interessamentoTrasporto(richiestaId, aziendaId) {

    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/modificapTrasportoIdRichiesta/${richiestaId}/${aziendaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    })

    window.location.href = 'trasportoVisualizza.html';


}