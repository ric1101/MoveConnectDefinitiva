

let colonnaInfo = document.querySelector('.colonnaInfo');
let dataEventoId = localStorage.getItem('data-evento-id');
console.log(dataEventoId);


fetch(`http://127.0.0.1:8080/api/depositoMagazzino/magazzino/${dataEventoId}`)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        fetchImg(data, data.aziendaDTO.id);

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
    
    
                depositoInfo(dati, img, data.id)
    
    
            });
    }



function depositoInfo(dati, img, id) {
    

    let visualizzaInfo = `
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
                    <div class="card mb-4 text-center rowes">
                        <div class="card-body col-lg-6 flex-column justify-content-center">
                            <div class="containerLogoImg">
                                    <img src="${img}" alt="UserImg" class="imgAzienda">
                                </div>
                            <h2 class="my-3 fw-bold">${dati.aziendaDTO.nomeAzienda}</h2>
                        </div>
                         <div class="card-body col-lg-6">
                            <h5 class="fw-bold mt-3">Numero Telefono: </h5>
                            <p>${dati.aziendaDTO.numeroTelefono}</p>
                            <h5 class="fw-bold">Email Aziendale: </h5>
                            <p>${dati.aziendaDTO.emailAziendale}</p>
                            <h5 class="fw-bold">P. Iva: </h5>
                            <p>${dati.aziendaDTO.piva}</p>
                            <h5 class="fw-bold">Indirizzo: </h5>
                            <p>${dati.aziendaDTO.indirizzo + ', ' + dati.aziendaDTO.comune + ', ' + dati.aziendaDTO.cap }</p>
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
                                        <p class="mb-0 fw-bold">MQ</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.mq}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Inizio</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.inizio}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Fine</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.fine}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Mobilio</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.mobilio}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Pedane</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.pedane}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Altro</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.altro}</p>
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
                    <div class="col-md-2 align-self-center text-center"><button class="btn btn-primary p-3" onclick="interessamentoDeposito(${dati.id}, ${id}, '${dati.aziendaDTO.email}' , ${dati.aziendaDTO.id}) ">Interessato</button></div>
                    <div class="col-md-2"</div>
                </div>
                `;

                colonnaInfo.innerHTML = visualizzaInfo;


}





function interessamentoDeposito(richiestaId, aziendaIdAccesso, emailAziendale, idAzienda) {

    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/modificaMagazzinoIdRichiesta/${richiestaId}/${aziendaIdAccesso}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({

        }),
    })

    let idRichiedente = aziendaIdAccesso;
    let idRichiesta = richiestaId;
    let idAziendaEmittente = idAzienda;

    class PropostaDeposito {
        constructor(aziendaIdProponenteMagazzino, depositoMagazzinoId, aziendaRichiedente) {
            (this.aziendaIdProponenteMagazzino = aziendaIdProponenteMagazzino),
            (this.depositoMagazzinoId = depositoMagazzinoId),
            (this.aziendaRichiedente = aziendaRichiedente)

        }
    }

    let newPropostaDeposito = new PropostaDeposito(idRichiedente, idRichiesta, idAziendaEmittente);

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/interessataPropostaMagazzino`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(newPropostaDeposito),
    })

    const subject= "Richiesta Moveconnect";
    const body= " Salve ho visto la richiesta sul portale Moveconnect e sarei interessato ";
    const MailToLink= `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href=MailToLink;
    window.location.href = 'interesseMostrato.html';


}