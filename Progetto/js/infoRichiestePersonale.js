

let colonnaInfo = document.querySelector('.colonnaInfo');
let dataEventoId = localStorage.getItem('data-evento-id');
console.log(dataEventoId);


fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/personale/${dataEventoId}`)
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


            personaleInfo(dati, img, data.id, data.abbonamento)


        });
}




function personaleInfo(dati, img, id, abb) {


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
                            <p>${dati.aziendaDTO.indirizzo + ', ' + dati.aziendaDTO.citta + ', ' + dati.aziendaDTO.cap}</p>
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
                                        <p class="mb-0 fw-bold">Nazione</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.paese}</p>
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
                                        <p class="mb-0 fw-bold">Città</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.citta}</p>
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
                                        <p class="mb-0 fw-bold">Indirizzo Due</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.indirizzoDue}</p>
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
                                <hr>
                                <div class="row p-2 ">
                                    <div class="col-sm-6">
                                        <p class="mb-0 fw-bold">Data Arrivo</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted mb-0">${dati.arrivo}</p>
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
                    <div class="col-md-2 align-self-center text-center"><button class="btn btn-primary p-3" onclick="interessamentoPersonale(${dati.id}, ${id}, '${dati.aziendaDTO.emailAziendale}', ${dati.aziendaDTO.id}, '${abb}')">Interessato</button></div>
                    <div class="col-md-2"</div>
                </div>`;

    colonnaInfo.innerHTML = visualizzaInfo;


}



function interessamentoPersonale(richiestaId, aziendaIdAccesso, emailAziendale, idAzienda, abb) {

    if (abb == 'base' || abb == 'plus') {

        fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/modificapersonaleIdRichiesta/${richiestaId}/${aziendaIdAccesso}`, {
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
        class PropostaPersonale {
            constructor(aziendaIdProponentePersonale, personaleId, aziendaRichiedentePersonale) {
                (this.aziendaIdProponentePersonale = aziendaIdProponentePersonale),
                    (this.personaleId = personaleId),
                    (this.aziendaRichiedentePersonale = aziendaRichiedentePersonale)

            }
        }

        let newPropostaPersonale = new PropostaPersonale(idRichiedente, idRichiesta, idAziendaEmittente);

        fetch(`http://127.0.0.1:8080/api/personale/interessataPropostaPersonale`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPropostaPersonale),
        })

        const subject = "Richiesta Moveconnect";
        const body = "Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
        const MailToLink = `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = MailToLink;

        window.location.href = 'interesseMostrato.html';

    } else {

        window.location.href = 'abbonamentiRegistrato.html';


    }

}


