

let accessToken = localStorage.getItem('accessToken');
let container = document.querySelector(".container");





async function userView() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {



            fetchImg(data.id);
            nomeAzienda.innerHTML = data.nomeAzienda;
            iMieiDati(data);

            iMieiDatiUtente(data);
            fetchImg(data.id);
            // nomeAzienda.innerHTML = data.nomeAzienda;


            console.log(data);


        });

}




/* -------------------------------------------------------------------------- */
/*                            visualizzazione logo                            */
/* -------------------------------------------------------------------------- */


function fetchImg(id) {

    let imgAzienda = document.querySelector('.imgAzienda');

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
}    


/* -------------------------------------------------------------------------- */
/*                                 i miei dati                                */
/* -------------------------------------------------------------------------- */

function iMieiDatiUtente(dati){
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
                                    <a class="btn btn-primary me-1 tastiNormali"><i class="fa-regular fa-envelope"></i>
                                        Messaggia</a>
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
                                <strong>Numero Aziendale:</strong> <span>123456789</span>
                            </div>
                            <div class="mb-2">
                                <strong>Email:</strong> <span>email@esempio.com</span>
                            </div>
                            <div class="mb-2">
                                <strong>P.IVA:</strong> <span>12345678901</span>
                            </div>
                            <div class="mb-2">
                                <strong>Indirizzo:</strong> <span>Via Esempio 1, Milano</span>
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
        </div>`

        container.innerHTML = visualizzaIDati;
}

userView();

