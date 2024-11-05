

let colonnaInfo = document.querySelector('.colonnaInfo');
let dataEventoId = localStorage.getItem('data-evento-id');
console.log(dataEventoId);


fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/personale/${dataEventoId}`)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        personaleInfo(data);

    });

function personaleInfo(dati) {
    

    let visualizzaInfo = `
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
                    <div class="card mb-4 text-center rowes">
                        <div class="card-body col-lg-6 flex-column justify-content-center">
                            <div class="containerLogoImg">
                                    <img src="${dati.azienda.logo}" alt="UserImg" class="imgAzienda">
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
                                        <p class="mb-0 fw-bold">Regione</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.regione}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Provincia</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.provincia}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Comune</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.comune}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Indirizzo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.indirizzo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Cap</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.cap}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Operatori</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.operatore}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Autisti</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.autista}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Montatori</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.montatore}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Falegnami</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.falegname}</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                </div>
                <div class="row">
                 <div class="col-md-3"></div>
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
                    <div class="col-md-3"></div>
                </div>`;

                colonnaInfo.innerHTML = visualizzaInfo;


}






