

let colonnaInfo = document.querySelector('.colonnaInfo');
let dataEventoId = localStorage.getItem('data-evento-id');
console.log(dataEventoId);


fetch(`http://127.0.0.1:8080/api/richiestaSuoloPubblico/richiestaSuolo/${dataEventoId}`)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        suoloInfo(data);

    });

function suoloInfo(dati) {
    

    let visualizzaInfo = `
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
                    <div class="card mb-4 flex-row">
                        <div class="card-body col-lg-6 d-flex flex-column justify-content-center">
                            <div class="containerLogoImg">
                                    <img src="${dati.azienda.logo}" alt="UserImg" class="imgAzienda">
                                </div>
                            <h5 class="my-3">${dati.azienda.nomeAzienda}</h5>
                        </div>
                         <div class="col-lg-6">
                            <h5>numero telefono: </h5>
                        </div>
                    </div>
                       
                </div>
                
                <div class="col-lg-2"></div>
                <div class="row">
                <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row p-2 mx-5">
                                    <div class=" col-sm-6">
                                        <p class="mb-0">#</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.id}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Regione</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.regione}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Provincia</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.provincia}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Comune</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.comune}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Indirizzo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.indirizzo}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Cap</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.cap}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Mq</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.mq}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Inizio</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.inizio}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Fine</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.fine}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Chiusura Strada</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.chiusuraStrada}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Cartelli</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.cartelli}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 mx-5">
                                    <div class="col-sm-6">
                                        <p class="mb-0">Note</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.note}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                </div>`;

                colonnaInfo.innerHTML = visualizzaInfo;


}






