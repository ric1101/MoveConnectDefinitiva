userView();


let nessunaCorrispondenzaProposta = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Proposte!</p>
</div>`;

let nessunaCorrispondenzaRelazione = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Servizi!</p>
</div>`;


let nessunaCorrispondenzaImballiEmessi = `
    <div class="card-body destra mb-4" style="padding: 80px !important; background-color: white;">
        <div class="row rowRichieste">
            <div class="container">
                

                    

        <div>

            <div class="row d-flex justify-content-center">
                
                <div class="col-md-8 d-flex justify-content-center">
                    <p class="text-center">Non hai ancora emesso nessuna richiesta Imballi!</p>
                </div>
                
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 d-flex justify-content-center">
                    <a class="btn btn-primary" href="imballi.html">Inserisci richiesta Imballi</a>
                </div>
            </div>

        </div>

                    

            </div>

        </div>

    </div>`;


let nessunaCorrispondenzaCaricoEmessi = `
    <div class="card-body destra mb-4" style="padding: 80px !important; background-color: white;">
        <div class="row rowRichieste">
            <div class="container">
                

                    

        <div>

            <div class="row d-flex justify-content-center">
                
                <div class="col-md-8 d-flex justify-content-center">
                    <p class="text-center">Non hai ancora emesso nessuna richiesta Groupage!</p>
                </div>
                
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 d-flex justify-content-center">
                    <a class="btn btn-primary" href="richiestaTrasporto.html">Inserisci richiesta Groupage</a>
                </div>
            </div>

        </div>

                    

            </div>

        </div>

    </div>`;


let nessunaCorrispondenzaScalaEmessi = `
    <div class="card-body destra mb-4" style="padding: 80px !important; background-color: white;">
        <div class="row rowRichieste">
            <div class="container">
                

                    

        <div>

            <div class="row d-flex justify-content-center">
                
                <div class="col-md-8 d-flex justify-content-center">
                    <p class="text-center">Non hai ancora emesso nessuna richiesta Scala Elevatore!</p>
                </div>
                
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 d-flex justify-content-center">
                    <a class="btn btn-primary" href="scala-elevatore.html">Inserisci richiesta Scala Elevatore</a>
                </div>
            </div>

        </div>

                    

            </div>

        </div>

    </div>`;


let nessunaCorrispondenzaPersonaleEmessi = `
    <div class="card-body destra mb-4" style="padding: 80px !important; background-color: white;">
        <div class="row rowRichieste">
            <div class="container">
                

                    

        <div>

            <div class="row d-flex justify-content-center">
                
                <div class="col-md-8 d-flex justify-content-center">
                    <p class="text-center">Non hai ancora emesso nessuna richiesta Personale!</p>
                </div>
                
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 d-flex justify-content-center">
                    <a class="btn btn-primary" href="personale.html">Inserisci richiesta Personale</a>
                </div>
            </div>

        </div>

                    

            </div>

        </div>

    </div>`;


let nessunaCorrispondenzaDepositoEmessi = `
    <div class="card-body destra mb-4" style="padding: 80px !important; background-color: white;">
        <div class="row rowRichieste">
            <div class="container">
                

                    

        <div>

            <div class="row d-flex justify-content-center">
                
                <div class="col-md-8 d-flex justify-content-center">
                    <p class="text-center">Non hai ancora emesso nessuna richiesta Deposito!</p>
                </div>
                
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 d-flex justify-content-center">
                    <a class="btn btn-primary" href="deposito-magazzino.html">Inserisci richiesta Deposito</a>
                </div>
            </div>

        </div>

                    

            </div>

        </div>

    </div>`;


let nessunaCorrispondenzaTratteEmessi = `
    <div class="card-body destra mb-4" style="padding: 80px !important; background-color: white;">
        <div class="row rowRichieste">
            <div class="container">
                

                    

        <div>

            <div class="row d-flex justify-content-center">
                
                <div class="col-md-8 d-flex justify-content-center">
                    <p class="text-center">Non hai ancora emesso nessuna richiesta Tratte!</p>
                </div>
                
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 d-flex justify-content-center">
                    <a class="btn btn-primary" href="insertTratte.html">Inserisci richiesta Tratte</a>
                </div>
            </div>

        </div>

                    

        </div>

    </div>

</div>`;

let dato = document.querySelector('.dati');
let logo = document.querySelector('.logo');
let feed = document.querySelector('.feed');
let accessToken = localStorage.getItem('accessToken');

// richieste emesse in *uscita*
let richiesteOccSuoloPubUscita = document.querySelector('.richiesteOccSuoloPubUscita');
let richiesteTrasportoUscita = document.querySelector('.richiesteTrasportoUscita');
let richiesteScalaElevatoreUscita = document.querySelector('.richiesteScalaElevatoreUscita');
let richiesteConsegnaImballiUscita = document.querySelector('.richiesteConsegnaImballiUscita');
let richiestePersonaleSpecUscita = document.querySelector('.richiestePersonaleSpecUscita');
let richiesteDepositoMagazzinoUscita = document.querySelector('.richiesteDepositoMagazzinoUscita');
let richiesteTrattaUscita = document.querySelector('.richiesteTrattaUscita');

// proposte ricevute
let richiesteOccSuoloPubInteresse = document.querySelector('.richiesteOccSuoloPubInteresse');
let richiesteTrasportoInteresse = document.querySelector('.richiesteTrasportoInteresse');
let richiesteScalaElevatoreInteresse = document.querySelector('.richiesteScalaElevatoreInteresse');
let richiesteConsegnaImballiInteresse = document.querySelector('.richiesteConsegnaImballiInteresse');
let richiestePersonaleSpecInteresse = document.querySelector('.richiestePersonaleSpecInteresse');
let richiesteDepositoMagazzinoInteresse = document.querySelector('.richiesteDepositoMagazzinoInteresse');
let richiesteTrattaInteresse = document.querySelector('.richiesteTrattaInteresse');

// relazioni create in *uscita*
let richiesteOccSuoloPubRelazione = document.querySelector('.richiesteOccSuoloPubRelazione');
let richiesteTrasportoRelazione = document.querySelector('.richiesteTrasportoRelazione');
let richiesteScalaElevatoreRelazione = document.querySelector('.richiesteScalaElevatoreRelazione');
let richiesteConsegnaImballiRelazione = document.querySelector('.richiesteConsegnaImballiRelazione');
let richiestePersonaleSpecRelazione = document.querySelector('.richiestePersonaleSpecRelazione');
let richiesteDepositoMagazzinoRelazione = document.querySelector('.richiesteDepositoMagazzinoRelazione');
let richiesteTrattaRelazione = document.querySelector('.richiesteTrattaRelazione');

// proposte inviate
let richiesteOccSuoloPubInteresseEntrata = document.querySelector('.richiesteOccSuoloPubInteresseEntrata');
let richiesteTrasportoInteresseEntrata = document.querySelector('.richiesteTrasportoInteresseEntrata');
let richiesteScalaElevatoreInteresseEntrata = document.querySelector('.richiesteScalaElevatoreInteresseEntrata');
let richiesteConsegnaImballiInteresseEntrata = document.querySelector('.richiesteConsegnaImballiInteresseEntrata');
let richiestePersonaleSpecInteresseEntrata = document.querySelector('.richiestePersonaleSpecInteresseEntrata');
let richiesteDepositoMagazzinoInteresseEntrata = document.querySelector('.richiesteDepositoMagazzinoInteresseEntrata');
let richiesteTrattaInteresseEntrata = document.querySelector('.richiesteTrattaInteresseEntrata');

//relazioni create in *entrata*
let richiesteOccSuoloPubRelazioneEntrata = document.querySelector('.richiesteOccSuoloPubRelazioneEntrata');
let richiesteTrasportoRelazioneEntrata = document.querySelector('.richiesteTrasportoRelazioneEntrata');
let richiesteScalaElevatoreRelazioneEntrata = document.querySelector('.richiesteScalaElevatoreRelazioneEntrata');
let richiesteConsegnaImballiRelazioneEntrata = document.querySelector('.richiesteConsegnaImballiRelazioneEntrata');
let richiestePersonaleSpecRelazioneEntrata = document.querySelector('.richiestePersonaleSpecRelazioneEntrata');
let richiesteDepositoMagazzinoRelazioneEntrata = document.querySelector('.richiesteDepositoMagazzinoRelazioneEntrata');
let richiesteTrattaRelazioneEntrata = document.querySelector('.richiesteTrattaRelazioneEntrata');

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


/* -------------------------------------------------------------------------- */
/*                            visualizzazione logo                            */
/* -------------------------------------------------------------------------- */

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


/* -------------------------------------------------------------------------- */
/*                                 i miei dati                                */
/* -------------------------------------------------------------------------- */



function iMieiDati(dati) {

    let visualizzaDati = `<div class="card-body destra mb-4" style="background-color: white">
                            <div class="row rowDati d-flex justify-content-center">
                            <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4 style="font-size: 2rem;"><i class="fa-solid fa-address-card" ></i> I miei dati</h4>
                            </div>
                            </div>
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



/* -------------------------------------------------------------------------- */
/*                                  feedback                                  */
/* -------------------------------------------------------------------------- */


function getTokenFeed() {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            feedback(data.id);

            console.log(data.id);


        });

}



function feedback(id) {



    fetch(`http://127.0.0.1:8080/api/azienda/recensioneImballiFinalePerUtente/${id}`)
        .then((res) => res.json())
        .then((data) => {




            
            
            
            let destra = document.querySelector('.destra');


            let feedbackVisualizza = `<div class="card-body destra mb-4" style="background-color: white">
                    <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card-body">
                                        <h4 class="card-title">Recensioni</h4>
                                        <h5 class="card-subtitle">Riepilogo</h5>
                                        <h2 class="font-medium mt-5 mb-0">Totali <br>${data.totaleRecensioni}</h2>
                                        
                                        

                                    </div>
                                    <div class="card-body media">
                                        <div class="row" style="display: flex; align-items: center;">
                                            <h6>Media</h6>
                                            <h1 style="font-size: 50px;">${data.media} <span style="color: #FFAA00; font-size: 40px;">★</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-8 border-left">
                                    <div class="card-body">
                                        <ul class="list-style-none">
                                            <li>
                                                <div class="d-flex align-items-center">
                                                    
                                                    <div class="ml-2 p-1">
                                                        <h5 class="mb-0 d-flex"><span style="color: #FFAA00; font-size: 40px;">★★★★★&nbsp;</span> <span class="align-self-center">&nbsp;Recensioni 5 stelle</span></h5>
                                                        <span class="text-muted">${data.percentuali.stelle5} Recensioni</span>
                                                    </div>
                                                </div>
                                                <hr>
                                                
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">
                                                    
                                                    <div class="ml-2 p-1">
                                                        <h5 class="mb-0 d-flex"><span style="color: #FFAA00; font-size: 40px;">★★★★&nbsp;</span> <span class="align-self-center">&nbsp;Recensioni 4 stelle</span></h5>
                                                        <span class="text-muted">${data.percentuali.stelle4} Recensioni</span>
                                                    </div>
                                                </div>
                                                <hr>

                                                    
                                            </li>
                                            <li class="mt-2 mb-2">
                                                <div class="d-flex align-items-center">
                                                    
                                                    <div class="ml-2 p-1">
                                                        <h5 class="mb-0 d-flex"><span style="color: #FFAA00; font-size: 40px;">★★★&nbsp;</span> <span class="align-self-center">&nbsp;Recensioni 3 stelle</span></h5>
                                                        <span class="text-muted">${data.percentuali.stelle3} Recensioni</span>
                                                    </div>
                                                </div>
                                                <hr>

                                                    
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">

                                                    
                                                    <div class="ml-2 p-1">
                                                        <h5 class="mb-0 d-flex"><span style="color: #FFAA00; font-size: 40px;">★★&nbsp;</span> <span class="align-self-center">&nbsp;Recensioni 2 stelle</span></h5>
                                                        <span class="text-muted">${data.percentuali.stelle2} Recensioni</span>
                                                    </div>
                                                </div>
                                                <hr>
                                                
                                                    
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">
                                                    
                                                    <div class="ml-2 p-1">
                                                        <h5 class="mb-0 d-flex"><span style="color: #FFAA00; font-size: 40px;">★&nbsp;</span> <span class="align-self-center">&nbsp;Recensioni 1 stella</span></h5>
                                                        <span class="text-muted">${data.percentuali.stelle1} Recensioni</span>
                                                    </div>
                                                </div>
                                                <hr>

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


        });

}



if (feed) {

    feed.addEventListener('click', getTokenFeed);
}



/* -------------------------------------------------------------------------- */
/*                              caricamento logo                              */
/* -------------------------------------------------------------------------- */



function caricaLogo() {

    let destra = document.querySelector('.destra');

    console.log('ciao');


    let caricaLogoVisualizza = `<div class="card-body destra mb-4" style="background-color: white">
    <div class="container">
    <div class="row">
    <div class="col-lg-12">
                        <div class="card">
                        <div class="row">
                                            <h2 class="p-3">Carica il logo</h2>
                                        </div>
                            <div class="row d-flex justify-content-center">
                                <div class="col-sm-12 col-lg-12">
                                    <div class="">
                                        <div class="mb-3">
                                        
                                            <div class="profile-picture">
                                                  <h1 class="upload-icon">
                                                    <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                                                  </h1>
                                                  <form id="uploadLogoForm">
                                                  <input
                                                    class="file-uploader"
                                                    type="file"
                                                    onchange="upload()"
                                                    accept="image/*"/>
                                                    </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-end pt-3">
                            <div class="col-md-7">
                            <p class="text-black">Non deve superare 1MB di dimensione.</p>
                            </div>
                            <div class="col-md-3">
                            <p class="result"> </p>
                            </div>
                            
                            <div class="col-md-2">
                            <button class="btn btn-success bottonozzo inviaIlLogo mx-2">Carica</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `;

    colonnaInfo.innerHTML = caricaLogoVisualizza;



}



function fetchInviaImmagine() {


    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            inviaImmagine(data.id);

            console.log(data);


        });

}



async function inviaImmagine(id) {

    let fileUploader = document.querySelector('.file-uploader').files[0];
    let result = document.querySelector('.result');

    const formData = new FormData();
    formData.append("id", id);
    formData.append("logo", fileUploader);
    console.log(formData);

    result.classList.remove('text-danger');
    result.classList.remove('text-success');
    result.classList.add('text-primary');
    result.innerHTML = 'stiamo caricando il tuo logo!';

    try {
        const response = await fetch(`http://127.0.0.1:8080/api/azienda/uploadlogo/${id}`, {
            method: "POST",
            body: formData,

        });
        if (response.ok) {

            result.classList.remove('text-primary');
            result.classList.remove('text-danger');
            result.classList.add('text-success');
            result.innerHTML = "Logo caricato con successo!";
            setTimeout(() => {

                location.reload();

            }, 1000);

        } else {
            result.classList.remove('text-primary');
            result.classList.remove('text-success');
            result.classList.add('text-danger');
            result.innerHTML = "Logo non caricato!";

        }
    } catch (error) {
        console.error("Errore:", error);
        alert("Errore durante il caricamento.");
    }

}


if (logo) {

    logo.addEventListener('click', caricaLogo);
}


document.addEventListener('click', () => {
    console.log('fattot');
    let btn = document.querySelector('.inviaIlLogo');


    if (btn) {
        console.log('fatto');

        btn.addEventListener('click', fetchInviaImmagine);
    }

})





function upload() {

    const fileUploadInput = document.querySelector('.file-uploader');

    /// Validations ///

    if (!fileUploadInput.value) {
        return;
    }

    // using index [0] to take the first file from the array
    const image = fileUploadInput.files[0];

    // check if the file selected is not an image file
    if (!image.type.includes('image')) {
        return alert('Only images are allowed!');
    }

    // check if size (in bytes) exceeds 10 MB
    if (image.size > 10_000_000) {
        return alert('Maximum upload size is 10MB!');
    }

    /// Display the image on the screen ///

    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);

    fileReader.onload = (fileReaderEvent) => {
        const profilePicture = document.querySelector('.profile-picture');
        profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
    }

    // upload image to the server or the cloud
}



/* ------------------------- Richieste uscita ------------------------- */


/* -------------------------------------------------------------------------- */
/*                            suolo pubblico uscita                           */
/* -------------------------------------------------------------------------- */


// function visualizzaRichiesteOccSuoloPubUscita(suolo) {


//     colonnaInfo.innerHTML = '';

//     suolo.richiestaSuoloPubblico.forEach(element => {


//         let visualizzaRichieste = `
//     <div class="card-body destra mb-4" style="background-color: white">
//         <div class="row rowRichieste">
//             <div class="container">
//                 <div class="row">

//                     <div class="col-lg-12 col-xl-12">

//                         <div class="row p-3">
//                             <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
//                                 <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Suolo Pubblico numero: #${element.id}</h4>
//                             </div>



//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Regione</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.regione}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.paese}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Città</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.citta}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Indirizzo</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.indirizzo}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Cap</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.cap}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">MQ</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.mq}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Cartelli</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.cartelli}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Chiusura Strada</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.chiusuraStrada}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Inizio</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.inizio}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Fine</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.fine}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Note</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.note}&nbsp;
//                                 </div>
//                             </div>
//                             <hr>

//                           </div>

//                         </div>

//                     </div>
//                         <div class="row">
//                             <div class="col-lg-12 mt-5 d-flex justify-content-end">
//                                 <button class="btn btn-danger mx-2" onclick="deleteSuolo(${element.id})">Elimina</button>
//                                 <button class="btn btn-primary mx-2" onclick="putSuolo(${element.id})">Modifica</button>
//                             </div>
//                         </div>


//             </div>

//         </div>

//     </div>`;


//         colonnaInfo.innerHTML += visualizzaRichieste;

//     });

// }


// async function fetchSuoloPubUscita() {


//     let accessToken = localStorage.getItem('accessToken');


//     await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
//         .then((res) => res.json())
//         .then((data) => {

//             visualizzaRichiesteOccSuoloPubUscita(data);

//             console.log(data);


//         });

// }


// if (richiesteOccSuoloPubUscita) {

//     richiesteOccSuoloPubUscita.addEventListener('click', fetchSuoloPubUscita);
// }



// function deleteSuolo(id) {

//     fetch(`http://127.0.0.1:8080/api/richiesta/eliminaRichiesta/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         }//,
//         // body: JSON.stringify(),
//     })

//     fetchSuoloPubUscita();

// }


// function putSuolo(id) {



// }


/* -------------------------------------------------------------------------- */
/*                                carico uscita                               */
/* -------------------------------------------------------------------------- */


function visualizzaRichiesteCaricoUscita(carico) {
    let net = false;
    let net1 = false;

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';

    console.log(carico);

    if (carico.length == 0) {

        colonnaInfo.innerHTML = nessunaCorrispondenzaCaricoEmessi;

    } else {



        carico.forEach(element => {
            console.log(element.stato);


            if (element.stato == 'APERTA') {


                visualizzaRichieste = `
                <div class="card-body destra mb-4" style="background-color: white">
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
                                                <h6 class="mb-0" style="font-size: 18px;">Nazione Partenza</h6>
                                            </div>
                                            <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                            ${element.paesePartenza}
                                            </div>
                                        </div>
                                        <hr>
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
                                                <h6 class="mb-0" style="font-size: 18px;">Città Partenza</h6>
                                            </div>
                                            <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                            ${element.cittaPartenza}
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
                                                <h6 class="mb-0" style="font-size: 18px;">Tipo Di Merce</h6>
                                            </div>
                                            <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                            ${element.tipoDiVeicolo}
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row rowDati">
                                            <div class="col-sm-5">
                                                <h6 class="mb-0" style="font-size: 18px;">Nazione Arrivo</h6>
                                            </div>
                                            <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                            ${element.paeseArrivo}
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
                                                <h6 class="mb-0" style="font-size: 18px;">Città Arrivo</h6>
                                            </div>
                                            <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                            ${element.cittaArrivo}
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
                                            <button class="btn btn-danger mx-2" onclick="deleteCarico(${element.id})">Elimina</button>
                                            <button class="btn btn-primary mx-2" onclick="putCarico(${element.id})">Modifica</button>
                                        </div>
                                    </div>
                            
            
                        </div>
            
                    </div>
            
                </div>`;


                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }

                colonnaInfo.innerHTML += visualizzaRichieste;

            } if (element.stato == 'INTERESSATA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paesePartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cittaPartenza}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Tipo Di Merce</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.tipoDiVeicolo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paeseArrivo}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Città Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cittaArrivo}
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
                                <button class="btn btn-danger mx-2" onclick="deleteCaricoProposte(${element.id})">Elimina</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;

                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }
                colonnaInfo.innerHTML += visualizzaRichieste;

            } else {

                if (net) {

                } else {
                    net1 = true;
                    colonnaInfo.innerHTML = nessunaCorrispondenzaCaricoEmessi;
                }

            }

        });

    }

}





async function fetchIdCaricoUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            fetchCaricoUscita(data.id);
            console.log(data);


        });

}


async function fetchCaricoUscita(id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tutteLeConsegneConAziendaTrasportoId/${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCaricoUscita(data);

            console.log(data);


        });

}



if (richiesteTrasportoUscita) {

    richiesteTrasportoUscita.addEventListener('click', fetchIdCaricoUscita);
}




async function deleteCarico(id) {

    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchIdCaricoUscita();

}


async function deleteCaricoProposte(id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })


    await fetch(`http://127.0.0.1:8080/api/trasporto/eliminaProposte/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchIdCaricoUscita();

}


function putCarico(id) {


    localStorage.setItem('modificaCarico', id);

    window.location.href = 'modificaTrasporto.html';


}



/* -------------------------------------------------------------------------- */
/*                           scala elevatore uscita                           */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteScalaElevatoreUscita(scala) {
    let net = false;
    let net1 = false;

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';


    if (scala.length == 0) {

        colonnaInfo.innerHTML = nessunaCorrispondenzaScalaEmessi;

    } else {


        scala.forEach(element => {


            console.log(element.stato);


            if (element.stato == 'APERTA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paese}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.citta}
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
                                <button class="btn btn-danger mx-2" onclick="deleteScala(${element.id})">Elimina</button>
                                <button class="btn btn-primary mx-2" onclick="putScala(${element.id})">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }

                colonnaInfo.innerHTML += visualizzaRichieste;

            } if (element.stato == 'INTERESSATA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paese}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.citta}
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
                                <button class="btn btn-danger mx-2" onclick="deleteScalaProposte(${element.id})">Elimina</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }
                colonnaInfo.innerHTML += visualizzaRichieste;

            } else {

                if (net) {

                } else {
                    net1 = true;
                    colonnaInfo.innerHTML = nessunaCorrispondenzaScalaEmessi;
                }

            }

        });

    }

}


async function fetchScalaElevatoreIdUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            fetchScalaElevatoreUscita(data.id);
            console.log(data);


        });

}


async function fetchScalaElevatoreUscita(id) {



    await fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeConsegneConAziendaScalaId/${id}`)
        .then((res) => res.json())
        .then((data) => {


            visualizzaRichiesteScalaElevatoreUscita(data);
            console.log(data);


        });

}


if (richiesteScalaElevatoreUscita) {

    richiesteScalaElevatoreUscita.addEventListener('click', fetchScalaElevatoreIdUscita);
}



async function deleteScala(id) {

    await fetch(`http://127.0.0.1:8080/api/scalaElevatore/eliminaScala/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchScalaElevatoreIdUscita();

}


async function deleteScalaProposte(id) {

    await fetch(`http://127.0.0.1:8080/api/scalaElevatore/eliminaScala/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    await fetch(`http://127.0.0.1:8080/api/scala/eliminaProposte/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchScalaElevatoreIdUscita();

}



function putScala(id) {


    localStorage.setItem('modificaScala', id);

    window.location.href = 'modificaScala.html';


}



/* -------------------------------------------------------------------------- */
/*                           consegna imballi uscita                          */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteConsegnaImballiUscita(imballi) {
    let net = false;
    let net1 = false;

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';

    console.log(imballi);

    if (imballi.length == 0) {

        colonnaInfo.innerHTML = nessunaCorrispondenzaImballiEmessi;

    } else {



        imballi.forEach(element => {

            console.log(element.stato);


            if (element.stato == 'APERTA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paese}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.citta}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.arrivo}
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
                                <button class="btn btn-danger mx-2" onclick="deleteImballi(${element.id})">Elimina</button>
                                <button class="btn btn-primary mx-2" onclick="putImballi(${element.id})">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }

                colonnaInfo.innerHTML += visualizzaRichieste;

            } if (element.stato == 'INTERESSATA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paese}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.citta}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.arrivo}
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
                                <button class="btn btn-danger mx-2" onclick="deleteImballiProposte(${element.id})">Elimina</button>
                            </div>
                        </div>
                
            </div>

        </div>

    </div>`;

                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }
                colonnaInfo.innerHTML += visualizzaRichieste;

            } else {

                if (net) {

                } else {
                    net1 = true;
                    colonnaInfo.innerHTML = nessunaCorrispondenzaImballiEmessi;
                }

            }

        });

    }

}


async function fetchConsegnaImballiIdUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            fetchConsegnaImballiUscita(data.id);
            console.log(data);


        });

}


async function fetchConsegnaImballiUscita(id) {



    await fetch(`http://127.0.0.1:8080/api/consegnaImballi/tutteLeConsegneConAziendaId/${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteConsegnaImballiUscita(data);

            console.log(data);


        });

}



if (richiesteConsegnaImballiUscita) {

    richiesteConsegnaImballiUscita.addEventListener('click', fetchConsegnaImballiIdUscita);
}



async function deleteImballi(id) {

    await fetch(`http://127.0.0.1:8080/api/consegnaImballi/eliminaconsegna/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchConsegnaImballiIdUscita();

}


async function deleteImballiProposte(id) {


    await fetch(`http://127.0.0.1:8080/api/propostaImballi/eliminaProposte/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })


    await fetch(`http://127.0.0.1:8080/api/consegnaImballi/eliminaconsegna/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchConsegnaImballiIdUscita();

}


function putImballi(id) {

    localStorage.setItem('modificaImballi', id);

    window.location.href = 'modificaImballi.html';


}



/* -------------------------------------------------------------------------- */
/*                       personale specializzato uscita                       */
/* -------------------------------------------------------------------------- */



function visualizzaRichiestePersonaleSpecializzatoUscita(personale) {
    let net = false;
    let net1 = false;

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';


    if (personale.length == 0) {

        colonnaInfo.innerHTML = nessunaCorrispondenzaPersonaleEmessi;

    } else {



        personale.forEach(element => {

            console.log(element.stato);


            if (element.stato == 'APERTA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paese}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.citta}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Data Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.arrivo}
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
                                <button class="btn btn-danger mx-2" onclick="deletePersonale(${element.id})">Elimina</button>
                                <button class="btn btn-primary mx-2" onclick="putPersonale(${element.id})">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;


                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }

                colonnaInfo.innerHTML += visualizzaRichieste;

            } if (element.stato == 'INTERESSATA') {


                visualizzaRichieste = `
            <div class="card-body destra mb-4" style="background-color: white">
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
                                            <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                        </div>
                                        <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                        ${element.paese}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row rowDati">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                        </div>
                                        <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                        ${element.citta}
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
                                            <h6 class="mb-0" style="font-size: 18px;">Data Arrivo</h6>
                                            </div>
                                            <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                            ${element.arrivo}
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
                                        <button class="btn btn-danger mx-2" onclick="deletePersonaleProposte(${element.id})">Elimina</button>
                                    </div>
                                </div>
                        
        
                    </div>
        
                </div>
        
            </div>`;

                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }
                colonnaInfo.innerHTML += visualizzaRichieste;

            } else {

                if (net) {

                } else {
                    net1 = true;
                    colonnaInfo.innerHTML = nessunaCorrispondenzaPersonaleEmessi;
                }

            }


        });

    }

}


async function fetchRichiestePersonaleSpecializzatoIdUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            fetchRichiestePersonaleSpecializzatoUscita(data.id);
            console.log(data);


        });

}


async function fetchRichiestePersonaleSpecializzatoUscita(id) {



    await fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/tutteLeConsegneConAziendaPersonaleId/${id}`)
        .then((res) => res.json())
        .then((data) => {


            visualizzaRichiestePersonaleSpecializzatoUscita(data);
            console.log(data);


        });

}



if (richiestePersonaleSpecUscita) {

    richiestePersonaleSpecUscita.addEventListener('click', fetchRichiestePersonaleSpecializzatoIdUscita);
}


async function deletePersonale(id) {

    await fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchRichiestePersonaleSpecializzatoIdUscita();

}


async function deletePersonaleProposte(id) {

    await fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    await fetch(`http://127.0.0.1:8080/api/personale/eliminaProposte/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchRichiestePersonaleSpecializzatoIdUscita();

}


function putPersonale(id) {


    localStorage.setItem('modificaPersonale', id);

    window.location.href = 'modificaPersonale.html';


}



/* -------------------------------------------------------------------------- */
/*                          deposito magazzino uscita                         */
/* -------------------------------------------------------------------------- */


function visualizzaRichiesteDepositoMagazzinoUscita(deposito) {
    let net = false;
    let net1 = false;

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';


    if (deposito.length == 0) {

        colonnaInfo.innerHTML = nessunaCorrispondenzaDepositoEmessi;

    } else {


        deposito.forEach(element => {


            console.log(element.stato);


            if (element.stato == 'APERTA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Deposito Magazzino numero: #${element.id}</h4>
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paese}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.citta}
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
                                ${element.indirizzoDue}
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
                                <button class="btn btn-danger mx-2" onclick="deleteMagazzino(${element.id})">Elimina</button>
                                <button class="btn btn-primary mx-2" onclick="putMagazzino(${element.id})">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;

                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }

                colonnaInfo.innerHTML += visualizzaRichieste;

            } if (element.stato == 'INTERESSATA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Deposito Magazzino numero: #${element.id}</h4>
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paese}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.citta}
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
                                ${element.indirizzoDue}
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
                                <button class="btn btn-danger mx-2" onclick="deleteMagazzinoProposte(${element.id})">Elimina</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;

                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }
                colonnaInfo.innerHTML += visualizzaRichieste;

            } else {

                if (net) {

                } else {
                    net1 = true;
                    colonnaInfo.innerHTML = nessunaCorrispondenzaDepositoEmessi;
                }

            }

        });

    }

}


async function fetchRichiesteDepositoMagazzinoIdUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            fetchRichiesteDepositoMagazzinoUscita(data.id);
            console.log(data);


        });

}


async function fetchRichiesteDepositoMagazzinoUscita(id) {



    await fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tutteLeConsegneConAziendaMagazzinoId/${id}`)
        .then((res) => res.json())
        .then((data) => {


            visualizzaRichiesteDepositoMagazzinoUscita(data);
            console.log(data);


        });

}



if (richiesteDepositoMagazzinoUscita) {

    richiesteDepositoMagazzinoUscita.addEventListener('click', fetchRichiesteDepositoMagazzinoIdUscita);
}




async function deleteMagazzino(id) {

    await fetch(`http://127.0.0.1:8080/api/depositoMagazzino/eliminaMagazzino/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchRichiesteDepositoMagazzinoIdUscita();

}


async function deleteMagazzinoProposte(id) {

    await fetch(`http://127.0.0.1:8080/api/depositoMagazzino/eliminaMagazzino/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    await fetch(`http://127.0.0.1:8080/api/propostaMagazzino/eliminaProposte/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchRichiesteDepositoMagazzinoIdUscita();

}


function putMagazzino(id) {

    localStorage.setItem('modificaMagazzino', id);

    window.location.href = 'modificaMagazzino.html';



}


/* -------------------------------------------------------------------------- */
/*                                tratte uscita                               */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteTratteUscita(tratte) {
    let net = false;
    let net1 = false;

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';

    console.log(tratte);

    if (tratte.length == 0) {

        colonnaInfo.innerHTML = nessunaCorrispondenzaTratteEmessi;

    } else {



        tratte.forEach(element => {

            console.log(element.stato);


            if (element.stato == 'APERTA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Tratta numero: #${element.id}</h4>
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paesePartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cittaPartenza}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paeseArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Città Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cittaArrivo}
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
                                <button class="btn btn-danger mx-2" onclick="deleteTratta(${element.id})">Elimina</button>
                                <button class="btn btn-primary mx-2" onclick="putTratta(${element.id})">Modifica</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;

                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }

                colonnaInfo.innerHTML += visualizzaRichieste;

            } if (element.stato == 'INTERESSATA') {


                visualizzaRichieste = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Richiesta Tratta numero: #${element.id}</h4>
                            </div>
                            

                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paesePartenza}
                                </div>
                            </div>
                            <hr>
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
                                    <h6 class="mb-0" style="font-size: 18px;">Città Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cittaPartenza}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Nazione Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.paeseArrivo}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Città Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.cittaArrivo}
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
                                <button class="btn btn-danger mx-2" onclick="deleteTrattaProposte(${element.id})">Elimina</button>
                            </div>
                        </div>
                

            </div>

        </div>

    </div>`;

                net = true;
                if (net1) {
                    colonnaInfo.innerHTML = '';
                }
                colonnaInfo.innerHTML += visualizzaRichieste;

            } else {

                if (net) {

                } else {
                    net1 = true;
                    colonnaInfo.innerHTML = nessunaCorrispondenzaTratteEmessi;
                }

            }

        });

    }

}


async function fetchTratteIdUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            fetchTratteUscita(data.id);

            console.log(data);


        });

}


async function fetchTratteUscita(id) {



    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLeConsegneConAziendaTrattaId/${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteTratteUscita(data);

            console.log(data);


        });

}


if (richiesteTrattaUscita) {

    richiesteTrattaUscita.addEventListener('click', fetchTratteIdUscita);
}



async function deleteTratta(id) {

    await fetch(`http://127.0.0.1:8080/api/tratta/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchTratteIdUscita();

}


async function deleteTrattaProposte(id) {


    await fetch(`http://127.0.0.1:8080/api/tratta/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })


    await fetch(`http://127.0.0.1:8080/api/trattazza/eliminaProposte/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchTratteIdUscita();

}


function putTratta(id) {

    localStorage.setItem('modificaTratta', id);

    window.location.href = 'modificaTratta.html';




}






/* ------------------------ Richieste interesse ----------------------- */


/* -------------------------------------------------------------------------- */
/*                              carico interesse                              */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteCaricoInteresse(carico) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    if (carico.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        carico.forEach(element => {


            if (element.stato == 'Pendente') {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaCarico(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaCarico(${element.id}, ${element.consegnaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkCarico px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiestaTrasportoProposta.html" target="_blank" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();


            } else if (element.stato == 'IN ATTESA') {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaCarico(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkCarico px-2 mx-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiestaTrasportoProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();


            }

        });
    }

}

function ascoltoCarico() {

    let linkCarico = document.querySelectorAll('.linkCarico');

    linkCarico.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            console.log(idElement);

            localStorage.setItem('data-evento-id', idElement);
        })
    });


}

function eliminaPropostaCarico(id) {

    fetch(`http://127.0.0.1:8080/api/trasporto/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchCaricoInteresse();

}

function accettaPropostaCarico(idR, consegnaCaricoId) {


    let cid = consegnaCaricoId;

    fetch(`http://127.0.0.1:8080/api/trasporto/inCorsoRichiestaTrasporto/${cid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": cid
        })

    })

    let id = idR;

    fetch(`http://127.0.0.1:8080/api/trasporto/inAttesaRichiesta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        })


    })

    fetchCaricoInteresse();


}




async function fetchCaricoInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteCarico(data.id);

            console.log(data.id);


        });

}

function recuperaProposteCarico(id) {

    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiedente?aziendaRichiedente=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCaricoInteresse(data);


        });

}



if (richiesteTrasportoInteresse) {

    richiesteTrasportoInteresse.addEventListener('click', fetchCaricoInteresse);
}




/* -------------------------------------------------------------------------- */
/*                               scala interesse                              */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteScalaInteresse(scala) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(scala);

    if (scala.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        scala.forEach(element => {


            if (element.stato == 'Pendente') {



                visualizzaRichieste = `<tr>
        <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
        <td class="text-center">${element.consegnaDTO.id}</td>
        <td class="text-center">${element.stato}</td>
        <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaScala(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaScala(${element.id}, ${element.consegnaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkScala px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteScalaElevatoreProposta.html" target="_blank">INFO</a></td>
        </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaScala(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkScala px-2 mx-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteScalaElevatoreProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            }

        });

    }

}


function ascoltoScala() {

    let linkScala = document.querySelectorAll('.linkScala');

    linkScala.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}

function eliminaPropostaScala(id) {

    fetch(`http://127.0.0.1:8080/api/scala/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchScalaInteresse();

}

function accettaPropostaScala(idR, scalaId) {


    let cid = scalaId;

    fetch(`http://127.0.0.1:8080/api/scala/inCorsoRichiestaScala/${cid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": cid
        })


    })

    let id = idR;

    fetch(`http://127.0.0.1:8080/api/scala/inAttesaRichiesta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        })

    })

    fetchScalaInteresse();

}





async function fetchScalaInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteScala(data.id);

            console.log(data.id);


        });

}


function recuperaProposteScala(id) {

    fetch(`http://127.0.0.1:8080/api/scala/byAziendaRichiedente?aziendaRichiedente=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteScalaInteresse(data);


        });

}



if (richiesteScalaElevatoreInteresse) {

    richiesteScalaElevatoreInteresse.addEventListener('click', fetchScalaInteresse);
}





/* -------------------------------------------------------------------------- */
/*                              imballi interesse                             */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteImballiInteresse(imballo) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(imballo);

    if (imballo.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        imballo.forEach(element => {


            if (element.stato == 'Pendente') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaImballi(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaImballi(${element.id}, ${element.consegnaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkImballi px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteImballiProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaImballi(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkImballi px-2 mx-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteImballiProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            }

        });

    }
}

function ascoltoImballi() {

    let linkImballi = document.querySelectorAll('.linkImballi');

    linkImballi.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}

function eliminaPropostaImballi(id) {

    fetch(`http://127.0.0.1:8080/api/propostaImballi/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchImballiInteresse();

}

function accettaPropostaImballi(idR, consegnaImballiId, /*consegnaImballiAziendaId, propostaAccettataId*/) {


    let cid = consegnaImballiId;

    fetch(`http://127.0.0.1:8080/api/propostaImballi/inCorsoRichiestaImballi/${consegnaImballiId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": cid
        })

    })

    let id = idR;


    fetch(`http://127.0.0.1:8080/api/propostaImballi/inAttesaProposta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        })

    })


    fetchImballiInteresse();

}







async function fetchImballiInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteImballi(data.id);

            console.log(data.id);


        });


}


function recuperaProposteImballi(id) {

    fetch(`http://127.0.0.1:8080/api/propostaImballi/byAziendaRichiedente?aziendaRichiedente=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteImballiInteresse(data);


        });

}



if (richiesteConsegnaImballiInteresse) {

    richiesteConsegnaImballiInteresse.addEventListener('click', fetchImballiInteresse);
}




/* -------------------------------------------------------------------------- */
/*                              personale interesse                           */
/* -------------------------------------------------------------------------- */




function visualizzaRichiestePersonaleInteresse(personale) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(personale);

    if (personale.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        personale.forEach(element => {

            if (element.stato == 'Pendente') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.personaleDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaPersonale(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaPersonale(${element.id}, ${element.personaleDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkPersonale px-2" data-evento-id="${element.personaleDTO.id}" href="./infoRichiestaPersonaleProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();

            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.personaleDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaPersonale(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkPersonale px-2 mx-2" data-evento-id="${element.personaleDTO.id}" href="./infoRichiestaPersonaleProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();

            }

        });

    }
}

function ascoltoPersonale() {

    let linkPersonale = document.querySelectorAll('.linkPersonale');

    linkPersonale.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}

function eliminaPropostaPersonale(id) {

    fetch(`http://127.0.0.1:8080/api/personale/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchImballiPersonale();

}

function accettaPropostaPersonale(idR, consegnaPersonaleId) {


    let cid = consegnaPersonaleId;

    fetch(`http://127.0.0.1:8080/api/personale/inCorsoRichiestaPersonale/${cid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": cid
        })

    })


    let id = idR;

    fetch(`http://127.0.0.1:8080/api/personale/inAttesaRichiesta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        })

    })


    fetchPersonaleInteresse();

}



async function fetchPersonaleInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaPropostePersonale(data.id);

            console.log(data.id);


        });


}


function recuperaPropostePersonale(id) {

    fetch(`http://127.0.0.1:8080/api/personale/byAziendaPersonaleRichiedente?aziendaRichiedentePersonale=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiestePersonaleInteresse(data);


        });

}



if (richiestePersonaleSpecInteresse) {

    richiestePersonaleSpecInteresse.addEventListener('click', fetchPersonaleInteresse);
}



/* -------------------------------------------------------------------------- */
/*                              tratte interesse                              */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteTratteInteresse(tratta) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(tratta);

    if (tratta.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        tratta.forEach(element => {


            if (element.stato == 'Pendente') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaTratte(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaTratte(${element.id}, ${element.consegnaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkTratte px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteTratteProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaTratte(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkTratte px-2 mx-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteTratteProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();

            }

        });

    }
}



function ascoltoTratte() {

    let linkTratte = document.querySelectorAll('.linkTratte');

    linkTratte.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}


function eliminaPropostaTratte(id) {

    fetch(`http://127.0.0.1:8080/api/trattazza/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchTratteInteresse();

}


function accettaPropostaTratte(idR, tratteId) {


    let cid = tratteId;

    fetch(`http://127.0.0.1:8080/api/trattazza/inCorsoRichiestaImballi/${cid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": cid
        })

    })

    let id = idR;

    fetch(`http://127.0.0.1:8080/api/trattazza/inAttesaRichiesta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        })

    })

    fetchTratteInteresse();


}



async function fetchTratteInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteTratte(data.id);

            console.log(data.id);


        });


}


function recuperaProposteTratte(id) {

    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiedente?aziendaRichiedente=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteTratteInteresse(data);


        });

}



if (richiesteTrattaInteresse) {

    richiesteTrattaInteresse.addEventListener('click', fetchTratteInteresse);
}


/* -------------------------------------------------------------------------- */
/*                              deposito interesse                           */
/* -------------------------------------------------------------------------- */

function visualizzaRichiesteDepositoInteresse(deposito) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(deposito);

    if (deposito.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        deposito.forEach(element => {


            if (element.stato == 'Pendente') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center">${element.magazzinoDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaDeposito(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaDeposito(${element.id}, ${element.magazzinoDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkDeposito px-2" data-evento-id="${element.magazzinoDTO.id}" href="./infoRichiesteDepositoProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();

            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center">${element.magazzinoDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaPropostaDeposito(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkDeposito px-2 mx-2" data-evento-id="${element.magazzinoDTO.id}" href="./infoRichiesteDepositoProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();

            }

        });

    }
}

function ascoltoDeposito() {

    let linkDeposito = document.querySelectorAll('.linkDeposito');

    linkDeposito.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}

function eliminaPropostaDeposito(id) {

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchDepositoInteresse();

}

function accettaPropostaDeposito(idR, consegnaDepositoId) {


    let cid = consegnaDepositoId;

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/inCorsoRichiestaMagazzino/${cid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": cid
        })


    })

    let id = idR;

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/inAttesaRichiesta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        })


    })


    fetchDepositoInteresse();


}



async function fetchDepositoInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteDeposito(data.id);

            console.log(data.id);


        });


}


function recuperaProposteDeposito(id) {

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/byAziendaMagazzinoRichiesta?aziendaRichiedente=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteDepositoInteresse(data);


        });

}



if (richiesteDepositoMagazzinoInteresse) {

    richiesteDepositoMagazzinoInteresse.addEventListener('click', fetchDepositoInteresse);
}



/* ----------------------------- Richieste relazione ------------------------ */


/* -------------------------------------------------------------------------- */
/*                              imballi relazione                             */
/* -------------------------------------------------------------------------- */




function visualizzaRichiesteImballiRelazione(imballo) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Proponente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Consegna</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(imballo);

    if (imballo == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        imballo.forEach(element => {

            if (element.stato == 'IN CORSO') {

                let oggi = new Date();

                function padToTwoDigits(number) {
                    return number.toString().padStart(2, '0');
                }

                let giorno = padToTwoDigits(oggi.getDate());
                let mese = padToTwoDigits(oggi.getMonth() + 1);
                let anno = oggi.getFullYear();

                let today = `${giorno}/${mese}/${anno}`;

                console.log(today);

                if (today < element.consegnaDTO.consegna) {


                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoImballi();

                } else {


                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-danger px-1 bottoniAnnulla" data-id-annulla="${element.id}" onclick="annullaRelazioneImballi(${element.id}, ${element.consegnaDTO.id})">Annulla <i class="fa-solid fa-xmark"></i></a></td>
            </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoImballi();


                }


            } else if (element.statoRichiedente == 'ANNULLATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciImballi(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();

            } else if (element.statoRichiedente == 'RECENSITA') {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td class="text-center" style="vertical-align: middle !important;"></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            } else if (element.stato == 'COMPLETATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciImballi(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            } else {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td class="text-center" style="vertical-align: middle !important;"></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            }

        });

    }

}



async function fetchImballiRelazione() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneImballi(data.id);

            console.log(data.id);


        });


}


async function annullaRelazioneImballi(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/propostaImballi/annullataEBastaRelazioneImballiProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/propostaImballi/annullataRelazioneImballiRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })


    await fetch(`http://127.0.0.1:8080/api/consegnaImballi/imballiAperta/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})
    })

    recensisciImballi(id);

}





function recuperaRelazioneImballi(id) {


    fetch(`http://127.0.0.1:8080/api/propostaImballi/byAziendaRelazioneRichiedente?consegnaImballiAziendaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteImballiRelazione(data);


        });

}



if (richiesteConsegnaImballiRelazione) {

    richiesteConsegnaImballiRelazione.addEventListener('click', fetchImballiRelazione);
}



function recensisciImballi(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneImballi.html';

}



/* -------------------------------------------------------------------------- */
/*                              personale relazione                           */
/* -------------------------------------------------------------------------- */


function visualizzaRichiestePersonaleRelazione(personale) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Proponente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Consegna</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(personale);

    if (personale == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        personale.forEach(element => {

            if (element.stato == 'IN CORSO') {

                let oggi = new Date();

                function padToTwoDigits(number) {
                    return number.toString().padStart(2, '0');
                }

                let giorno = padToTwoDigits(oggi.getDate());
                let mese = padToTwoDigits(oggi.getMonth() + 1);
                let anno = oggi.getFullYear();

                let today = `${giorno}/${mese}/${anno}`;

                console.log(today);

                if (today < element.personaleDTO.arrivo) {


                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoPersonale();


                } else {

                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-danger px-1 bottoniAnnulla" data-id-annulla="${element.id}" onclick="annullaRelazionePersonale(${element.id}, ${element.personaleDTO.id})">Annulla <i class="fa-solid fa-xmark"></i></a></td>
            </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoPersonale();


                }



            } else if (element.statoRichiedente == 'ANNULLATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciPersonale(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();

            } else if (element.statoRichiedente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td class="text-center" style="vertical-align: middle !important;"></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();


            } else if (element.stato == 'COMPLETATA' && element.statoRichiedente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciPersonale(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();


            } else {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td class="text-center" style="vertical-align: middle !important;"></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();



            }

        });

    }

}



async function fetchPersonaleRelazione() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazionePersonale(data.id);

            console.log(data.id);


        });


}


async function annullaRelazionePersonale(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/personale/annullataRelazionePersonaleProponenteEBasta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/personale/annullataRelazionePersonaleRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/personaleAperta/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})
    })

    recensisciPersonale(id);

}



function recuperaRelazionePersonale(id) {


    fetch(`http://127.0.0.1:8080/api/personale/byAziendaPersonaleRelazioneRichiedente?personaleSpecializzatoAziendaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiestePersonaleRelazione(data);


        });

}



if (richiestePersonaleSpecRelazione) {

    richiestePersonaleSpecRelazione.addEventListener('click', fetchPersonaleRelazione);
}



function recensisciPersonale(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensionePersonale.html';

}





/* -------------------------------------------------------------------------- */
/*                              tratta relazione                              */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteTratteRelazione(tratta) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Proponente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Arrivo</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(tratta);

    if (tratta == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        tratta.forEach(element => {

            if (element.stato == 'IN CORSO') {


                let oggi = new Date();

                function padToTwoDigits(number) {
                    return number.toString().padStart(2, '0');
                }

                let giorno = padToTwoDigits(oggi.getDate());
                let mese = padToTwoDigits(oggi.getMonth() + 1);
                let anno = oggi.getFullYear();

                let today = `${giorno}/${mese}/${anno}`;

                console.log(today);

                if (today < element.consegnaDTO.dataArrivo) {


                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoTratte();


                } else {


                    visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-danger px-1 bottoniAnnulla" data-id-annulla="${element.id}" onclick="annullaRelazioneTratte(${element.id}, ${element.consegnaDTO.id})">Annulla <i class="fa-solid fa-xmark"></i></a></td>
                    </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoTratte();


                }



            } else if (element.statoRichiedente == 'ANNULLATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciTratte(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            } else if (element.statoRichiedente == 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            } else if (element.stato == 'COMPLETATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciTratte(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            } else {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciTratte(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            }

        });

    }

}



async function fetchTratteRelazione() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneTratte(data.id);

            console.log(data.id);


        });


}


async function annullaRelazioneTratte(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/trattazza/annullataRelazioneTrattaProponenteEBasta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/trattazza/annullataRelazioneTrattaRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/tratta/trattaAperta/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})
    })

    recensisciTratte(id);

}



function recuperaRelazioneTratte(id) {


    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRelazioneRichiedente?depositoMTrattaAziendaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteTratteRelazione(data);


        });

}



if (richiesteTrattaRelazione) {

    richiesteTrattaRelazione.addEventListener('click', fetchTratteRelazione);
}



function recensisciTratte(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneTratte.html';

}






/* -------------------------------------------------------------------------- */
/*                              deposito relazione                            */
/* -------------------------------------------------------------------------- */

function visualizzaRichiesteDepositoRelazione(deposito) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Proponente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Data Fine</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(deposito);

    if (deposito == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        deposito.forEach(element => {

            if (element.stato == 'IN CORSO') {


                let oggi = new Date();

                function padToTwoDigits(number) {
                    return number.toString().padStart(2, '0');
                }

                let giorno = padToTwoDigits(oggi.getDate());
                let mese = padToTwoDigits(oggi.getMonth() + 1);
                let anno = oggi.getFullYear();

                let today = `${giorno}/${mese}/${anno}`;

                console.log(today);

                if (today < element.magazzinoDTO.dataFine) {


                    visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                    </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoDeposito();


                } else {


                    visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-danger px-1 bottoniAnnulla" data-id-annulla="${element.id}" onclick="annullaRelazioneDeposito(${element.id}, ${element.magazzinoDTO.id})">Annulla <i class="fa-solid fa-xmark"></i></a></td>
                    </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoDeposito();


                }


            } else if (element.statoRichiedente == 'ANNULLATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciDeposito(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();

            } else if (element.statoRichiedente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td class="text-center" style="vertical-align: middle !important;"></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();


            } else if (element.stato == 'COMPLETATA' && element.statoRichiedente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciDeposito(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();

            } else {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciDeposito(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();


            }

        });

    }

}



async function fetchDepositoRelazione() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneDeposito(data.id);

            console.log(data.id);


        });


}


async function annullaRelazioneDeposito(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/propostaMagazzino/annullataRelazioneMagazzinoProponenteEBasta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/propostaMagazzino/annullataRelazioneMagazzinoRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/depositoMagazzino/depositoAperta/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})
    })

    recensisciDeposito(id);

}



function recuperaRelazioneDeposito(id) {


    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/byAziendaMagazzinoRelazioneRichiedente?depositoMagazzinoAziendaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteDepositoRelazione(data);


        });

}



if (richiesteDepositoMagazzinoRelazione) {

    richiesteDepositoMagazzinoRelazione.addEventListener('click', fetchDepositoRelazione);
}



function recensisciDeposito(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneDeposito.html';

}




/* -------------------------------------------------------------------------- */
/*                              scala relazione                               */
/* -------------------------------------------------------------------------- */

function visualizzaRichiesteScalaRelazione(scala) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Proponente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Data Fine</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(scala);

    if (scala == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        scala.forEach(element => {

            if (element.stato == 'IN CORSO') {

                let oggi = new Date();

                function padToTwoDigits(number) {
                    return number.toString().padStart(2, '0');
                }

                let giorno = padToTwoDigits(oggi.getDate());
                let mese = padToTwoDigits(oggi.getMonth() + 1);
                let anno = oggi.getFullYear();

                let today = `${giorno}/${mese}/${anno}`;

                console.log(today);

                if (today < element.consegnaDTO.fine) {


                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoScala();



                } else {

                    visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-danger px-1 bottoniAnnulla" data-id-annulla="${element.id}" onclick="annullaRelazioneScala(${element.id}, ${element.consegnaDTO.id})">Annulla <i class="fa-solid fa-xmark"></i></a></td>
                    </tr>`;

                    body.innerHTML += visualizzaRichieste;
                    ascoltoScala();

                }


            } else if (element.statoRichiedente == 'ANNULLATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciScala(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();

            } else if (element.statoRichiedente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            } else if (element.stato == 'COMPLETATA' && element.statoRichiedente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciScala(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            } else {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            }

        });

    }

}



async function fetchScalaRelazione() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneScala(data.id);

            console.log(data.id);


        });


}


async function annullaRelazioneScala(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/scala/annullataRelazioneScalaRichiedenteEBasta/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/scala/annullataRelazioneScalaRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/scalaElevatore/scalaAperta/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})
    })

    recensisciScala(id);

}




function recuperaRelazioneScala(id) {


    fetch(`http://127.0.0.1:8080/api/scala/byAziendaRelazioneRichiedente?scalaElevatoreAziendaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteScalaRelazione(data);


        });

}



if (richiesteScalaElevatoreRelazione) {

    richiesteScalaElevatoreRelazione.addEventListener('click', fetchScalaRelazione);
}



function recensisciScala(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneScala.html';

}






/* -------------------------------------------------------------------------- */
/*                              carico relazione                              */
/* -------------------------------------------------------------------------- */




function visualizzaRichiesteCaricoRelazione(carico) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Proponente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Scarico</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(carico);

    if (carico == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        carico.forEach(element => {

            if (element.stato == 'IN CORSO') {


                let oggi = new Date();

                function padToTwoDigits(number) {
                    return number.toString().padStart(2, '0');
                }

                let giorno = padToTwoDigits(oggi.getDate());
                let mese = padToTwoDigits(oggi.getMonth() + 1);
                let anno = oggi.getFullYear();

                let today = `${giorno}/${mese}/${anno}`;

                console.log(today);
                console.log(element.consegnaDTO.scarico);


                if (today < element.consegnaDTO.scarico) {


                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                    body.innerHTML += visualizzaRichieste;
                    ascoltoCarico();



                } else {


                    visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-danger px-1 bottoniAnnulla" data-id-annulla="${element.id}" onclick="annullaRelazioneCarico(${element.id}, ${element.consegnaDTO.id})">Annulla <i class="fa-solid fa-xmark"></i></a></td>
            </tr>`;


                    body.innerHTML += visualizzaRichieste;
                    ascoltoCarico();

                }


            } else if (element.statoRichiedente == 'ANNULLATA' && element.statoRichiedente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciCarico(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();


            } else if (element.statoRichiedente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();

            } else if (element.stato == 'COMPLETATA' && element.statoRichiedente != 'RECENSITA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciCarico(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();

            } else {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();


            }

        });

    }

}



async function fetchCaricoRelazione() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneCarico(data.id);

            console.log(data.id);


        });


}


async function annullaRelazioneCarico(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/trasporto/annullataEBastaRelazioneTrasportoProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/trasporto/annullataRelazioneTrasportoRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/trasportoAperta/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})
    })


    recensisciCarico(id);

}



function recuperaRelazioneCarico(id) {


    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRelazioneRichiedente?trasportoAziendaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCaricoRelazione(data);


        });

}



if (richiesteTrasportoRelazione) {

    richiesteTrasportoRelazione.addEventListener('click', fetchCaricoRelazione);
}



function recensisciCarico(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneCarico.html';

}





/* ------------------------ Richieste entrata interesse ----------------------- */

/* -------------------------------------------------------------------------- */
/*                              imballi interesse entrata                     */
/* -------------------------------------------------------------------------- */


function visualizzaRichiesteImballiInteresseEntrata(imballo) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(imballo);

    if (imballo.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        imballo.forEach(element => {


            if (element.stato == 'Pendente') {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaImballiInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkImballi px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteImballiProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi()



            } else if (element.stato == 'IN ATTESA') {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaImballiInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaImballiInteresseEntrata(${element.id}, ${element.consegnaDTO.id}, ${element.aziendaRichiedenteDTO.id}, ${element.aziendaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkImballi px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteImballiProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi()


            }


        });

    }

}



function eliminaPropostaImballiInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/propostaImballi/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchImballiInteresseEntrata();

}



function accettaPropostaImballiInteresseEntrata(idR, consegnaImballiId, consegnaImballiAziendaId, propostaAccettataId) {


    let consegnaImballiID = consegnaImballiId;
    let consegnaImballiAziendaID = consegnaImballiAziendaId;
    let propostaAccettataID = propostaAccettataId;

    let cid = consegnaImballiId;
    let id = idR;

    class RelazioneImballi {
        constructor(consegnaImballiId, consegnaImballiAziendaId, propostaAccettataId) {
            (this.consegnaImballiId = consegnaImballiId),
                (this.consegnaImballiAziendaId = consegnaImballiAziendaId),
                (this.propostaAccettataId = propostaAccettataId)

        }
    }

    let newRelazioneImballi = new RelazioneImballi(consegnaImballiID, consegnaImballiAziendaID, propostaAccettataID);

    fetch(`http://127.0.0.1:8080/api/propostaImballi/relazioneImballi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRelazioneImballi)
    })


    fetch(`http://127.0.0.1:8080/api/propostaImballi/eliminaProposte/${cid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })


    fetchImballiInteresseEntrata();

}




async function fetchImballiInteresseEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteImballiInteresseEntrata(data.id);

            console.log(data.id);


        });

}


function recuperaProposteImballiInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/propostaImballi/byAziendaPropostaProponenteInUscita?azienda=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteImballiInteresseEntrata(data);


        });

}


if (richiesteConsegnaImballiInteresseEntrata) {

    richiesteConsegnaImballiInteresseEntrata.addEventListener('click', fetchImballiInteresseEntrata);
}




/* -------------------------------------------------------------------------- */
/*                              personale interesse entrata                   */
/* -------------------------------------------------------------------------- */




function visualizzaRichiestePersonaleInteresseEntrata(personale) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(personale);

    if (personale.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        personale.forEach(element => {


            if (element.stato == 'Pendente') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.personaleDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaPersonaleInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkPersonale px-2" data-evento-id="${element.personaleDTO.id}" href="./infoRichiestaPersonaleProposta.html" target="_blank">INFO</a></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();


            } else if (element.stato == 'IN ATTESA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.personaleDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaPersonaleInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaPersonaleInteresseEntrata(${element.id}, ${element.personaleDTO.id}, ${element.aziendaRichiedenteDTO.id}, ${element.aziendaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkPersonale px-2" data-evento-id="${element.personaleDTO.id}" href="./infoRichiestaPersonaleProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();


            }

        });

    }

}



function eliminaPropostaPersonaleInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/personale/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchPersonaleInteresseEntrata();

}


function accettaPropostaPersonaleInteresseEntrata(idR, consegnaPersonaleId, consegnaPersonaleAziendaId, propostaAccettataId) {

    let consegnaPersonaleID = consegnaPersonaleId;
    let consegnaPersonaleAziendaID = consegnaPersonaleAziendaId;
    let propostaAccettataID = propostaAccettataId;

    let cid = consegnaPersonaleId;
    let id = idR;

    class RelazionePersonale {
        constructor(personaleSpecializzatoId, personaleSpecializzatoAziendaId, propostaAccettataPersonaleId) {
            (this.personaleSpecializzatoId = personaleSpecializzatoId),
                (this.personaleSpecializzatoAziendaId = personaleSpecializzatoAziendaId),
                (this.propostaAccettataPersonaleId = propostaAccettataPersonaleId)

        }
    }

    let newRelazionePersonale = new RelazionePersonale(consegnaPersonaleID, consegnaPersonaleAziendaID, propostaAccettataID);

    fetch(`http://127.0.0.1:8080/api/personale/relazionePersonale`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRelazionePersonale)
    })

    fetch(`http://127.0.0.1:8080/api/personale/eliminaProposte/${cid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchPersonaleInteresseEntrata();

}



async function fetchPersonaleInteresseEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaPropostePersonaleInteresseEntrata(data.id);

            console.log(data.id);


        });

}


function recuperaPropostePersonaleInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/personale/byAziendaPersonaleUscita?aziendaIdProponentePersonale=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiestePersonaleInteresseEntrata(data);


        });

}


if (richiestePersonaleSpecInteresseEntrata) {

    richiestePersonaleSpecInteresseEntrata.addEventListener('click', fetchPersonaleInteresseEntrata);
}




/* -------------------------------------------------------------------------- */
/*                              deposito interesse entrata                    */
/* -------------------------------------------------------------------------- */




function visualizzaRichiesteDepositoInteresseEntrata(deposito) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(deposito);

    if (deposito.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        deposito.forEach(element => {


            if (element.stato == 'Pendente') {


                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
                <td class="text-center">${element.magazzinoDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaDepositoInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkDeposito px-2" data-evento-id="${element.magazzinoDTO.id}" href="./infoRichiesteDepositoProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();


            } else if (element.stato == 'IN ATTESA') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.magazzinoDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaDepositoInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaDepositoInteresseEntrata(${element.id}, ${element.magazzinoDTO.id}, ${element.aziendaRichiedenteDTO.id}, ${element.aziendaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkDeposito px-2" data-evento-id="${element.magazzinoDTO.id}" href="./infoRichiesteDepositoProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();


            }

        });

    }

}



function eliminaPropostaDepositoInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchDepositoInteresseEntrata();

}


function accettaPropostaDepositoInteresseEntrata(idR, consegnaDepositoId, consegnaDepositoAziendaId, propostaAccettataId) {

    let depositoID = consegnaDepositoId;
    let depositoAziendaID = consegnaDepositoAziendaId;
    let propostaAccettataID = propostaAccettataId;

    let cid = consegnaDepositoId;
    let id = idR;

    class RelazioneDeposito {
        constructor(magazzinoId, depositoMagazzinoAziendaId, propostaAccettataIdMagazzino) {
            (this.magazzinoId = magazzinoId),
                (this.depositoMagazzinoAziendaId = depositoMagazzinoAziendaId),
                (this.propostaAccettataIdMagazzino = propostaAccettataIdMagazzino)

        }
    }

    let newRelazioneDeposito = new RelazioneDeposito(depositoID, depositoAziendaID, propostaAccettataID);

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/relazioneMagazzino`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRelazioneDeposito)
    })

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/eliminaProposte/${cid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchDepositoInteresseEntrata();

}


async function fetchDepositoInteresseEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteDepositoInteresseEntrata(data.id);

            console.log(data.id);


        });

}


function recuperaProposteDepositoInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/byAziendaPropostaProponenteInUscitaMagazzino?aziendaIdProponenteMagazzino=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteDepositoInteresseEntrata(data);


        });

}


if (richiesteDepositoMagazzinoInteresseEntrata) {

    richiesteDepositoMagazzinoInteresseEntrata.addEventListener('click', fetchDepositoInteresseEntrata);
}




/* -------------------------------------------------------------------------- */
/*                              tratta interesse entrata                      */
/* -------------------------------------------------------------------------- */




function visualizzaRichiesteTrattaInteresseEntrata(tratta) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(tratta);

    if (tratta.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        tratta.forEach(element => {

            if (element.stato == 'Pendente') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.consegnaDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaTrattaInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkTratte px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteTratteProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();

            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.consegnaDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaTrattaInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaTrattaInteresseEntrata(${element.id}, ${element.consegnaDTO.id}, ${element.aziendaRichiedenteDTO.id}, ${element.aziendaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkTratte px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteTratteProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();

            }

        });

    }

}



function eliminaPropostaTrattaInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/trattazza/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchTrattaInteresseEntrata();

}



function accettaPropostaTrattaInteresseEntrata(idR, tratteId, tratteAziendaId, propostaAccettataId) {

    let tratteID = tratteId;
    let tratteAziendaID = tratteAziendaId;
    let propostaAccettataID = propostaAccettataId;

    let cid = tratteId;
    let id = idR;

    class RelazioneTratte {
        constructor(trattaId, depositoMTrattaAziendaId, propostaAccettataIdTratta) {
            (this.trattaId = trattaId),
                (this.depositoMTrattaAziendaId = depositoMTrattaAziendaId),
                (this.propostaAccettataIdTratta = propostaAccettataIdTratta)

        }
    }


    let newRelazioneTratte = new RelazioneTratte(tratteID, tratteAziendaID, propostaAccettataID);

    fetch(`http://127.0.0.1:8080/api/trattazza/relazioneTratta`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRelazioneTratte)
    })

    fetch(`http://127.0.0.1:8080/api/trattazza/eliminaProposte/${cid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchTrattaInteresseEntrata();

}


async function fetchTrattaInteresseEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteTrattaInteresseEntrata(data.id);

            console.log(data.id);


        });

}


function recuperaProposteTrattaInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaProponenteTrattaInUscita?AziendaIdProponenteTratta=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteTrattaInteresseEntrata(data);


        });

}


if (richiesteTrattaInteresseEntrata) {

    richiesteTrattaInteresseEntrata.addEventListener('click', fetchTrattaInteresseEntrata);
}




/* -------------------------------------------------------------------------- */
/*                              carico interesse entrata                      */
/* -------------------------------------------------------------------------- */


function visualizzaRichiesteCaricoInteresseEntrata(carico) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(carico);

    if (carico.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        carico.forEach(element => {


            if (element.stato == 'Pendente') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.consegnaDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaCaricoInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkCarico px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiestaTrasportoProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();

            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.consegnaDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaCaricoInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaCaricoInteresseEntrata(${element.id}, ${element.consegnaDTO.id}, ${element.aziendaRichiedenteDTO.id}, ${element.aziendaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkCarico px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiestaTrasportoProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();

            }

        });

    }

}



function eliminaPropostaCaricoInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/trasporto/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchCaricoInteresseEntrata();

}

function accettaPropostaCaricoInteresseEntrata(idR, consegnaCaricoId, consegnaCaricoAziendaId, propostaAccettataId) {

    let consegnaCaricoID = consegnaCaricoId;
    let consegnaCaricoAziendaID = consegnaCaricoAziendaId;
    let propostaAccettataID = propostaAccettataId;

    let cid = consegnaCaricoId;
    let id = idR;

    class RelazioneCarico {
        constructor(trasportoId, trasportoAziendaId, propostaAccettataTrasportoId) {
            (this.trasportoId = trasportoId),
                (this.trasportoAziendaId = trasportoAziendaId),
                (this.propostaAccettataTrasportoId = propostaAccettataTrasportoId)

        }
    }

    let newRelazione = new RelazioneCarico(consegnaCaricoID, consegnaCaricoAziendaID, propostaAccettataID);

    fetch(`http://127.0.0.1:8080/api/trasporto/relazioneTrasporto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRelazione)
    })

    fetch(`http://127.0.0.1:8080/api/trasporto/eliminaProposte/${cid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchCaricoInteresseEntrata();

}




async function fetchCaricoInteresseEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteCaricoInteresseEntrata(data.id);

            console.log(data.id);


        });

}


function recuperaProposteCaricoInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaProponenteInUscita?aziendaIdProponenteTrasporto=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCaricoInteresseEntrata(data);


        });

}


if (richiesteTrasportoInteresseEntrata) {

    richiesteTrasportoInteresseEntrata.addEventListener('click', fetchCaricoInteresseEntrata);
}



/* -------------------------------------------------------------------------- */
/*                              scala interesse entrata                       */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteScalaInteresseEntrata(scala) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center">Azienda Richiedente</th>
                                <th class="text-center">Richiesta numero #ID</th>
                                <th class="text-center">Stato</th>
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(scala);

    if (scala.length == 0) {

        body.innerHTML = nessunaCorrispondenzaProposta;

    } else {

        scala.forEach(element => {


            if (element.stato == 'Pendente') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
            <td class="text-center">${element.consegnaDTO.id}</td>
            <td class="text-center">${element.stato}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaScalaInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-dark linkScala px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteScalaElevatoreProposta.html" target="_blank">INFO</a></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            } else if (element.stato == 'IN ATTESA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz">${element.aziendaRichiedenteDTO.nomeAzienda}</td>
                <td class="text-center">${element.consegnaDTO.id}</td>
                <td class="text-center">${element.stato}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3 mx-2" onclick="eliminaPropostaScalaInteresseEntrata(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaPropostaScalaInteresseEntrata(${element.id}, ${element.consegnaDTO.id}, ${element.aziendaRichiedenteDTO.id}, ${element.aziendaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkScala px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteScalaElevatoreProposta.html" target="_blank">INFO</a></td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            }

        });

    }

}


function eliminaPropostaScalaInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/scala/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchScalaInteresseEntrata();

}



function accettaPropostaScalaInteresseEntrata(idR, scalaId, scalaAziendaId, propostaAccettataId) {


    let scalaID = scalaId;
    let scalaAziendaID = scalaAziendaId;
    let propostaAccettataID = propostaAccettataId;

    let cid = scalaId;
    let id = idR;

    class RelazioneScala {
        constructor(scalaElevatoreId, scalaElevatoreAziendaId, propostaAccettataScalaId) {
            (this.scalaElevatoreId = scalaElevatoreId),
                (this.scalaElevatoreAziendaId = scalaElevatoreAziendaId),
                (this.propostaAccettataScalaId = propostaAccettataScalaId)

        }
    }

    let newRelazione = new RelazioneScala(scalaID, scalaAziendaID, propostaAccettataID);

    fetch(`http://127.0.0.1:8080/api/scala/relazioneScala`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRelazione)
    })

    fetch(`http://127.0.0.1:8080/api/scala/eliminaProposte/${cid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })


    fetchScalaInteresseEntrata();

}




async function fetchScalaInteresseEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposteScalaInteresseEntrata(data.id);

            console.log(data.id);


        });

}


function recuperaProposteScalaInteresseEntrata(id) {

    fetch(`http://127.0.0.1:8080/api/scala/byAziendaPropostaScalaInUscita?aziendaIdProponenteScala=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteScalaInteresseEntrata(data);


        });

}


if (richiesteScalaElevatoreInteresseEntrata) {

    richiesteScalaElevatoreInteresseEntrata.addEventListener('click', fetchScalaInteresseEntrata);
}




/* ------------------------- Richieste relazione entrata--------------------- */


/* -------------------------------------------------------------------------- */
/*                              carico relazione entrata                      */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteCaricoRelazioneEntrata(carico) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Richiedente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Scarico</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(carico);

    if (carico == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        carico.forEach(element => {

            if (element.stato == 'IN CORSO') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-success px-1 bottoniEvadi" style="margin-bottom:5px;" data-id-evadi="${element.id}" onclick="evadiRelazioneCaricoEntrata(${element.id}, ${element.consegnaDTO.id})">Evadi <i class="fa-solid fa-check"></i></a></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();


            } else if (element.statoProponente == 'EVASA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciCarico(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();

            } else if (element.stato == 'ANNULLATA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciCarico(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();


            } else if (element.statoProponente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                    </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();


            } else {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestaTrasportoProposta.html" target="_blank" class="linkCarico" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.scarico}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoCarico();

            }

        });

    }

}


async function fetchCaricoRelazioneEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneCaricoEntrata(data.id);

            console.log(data.id);


        });

}



async function evadiRelazioneCaricoEntrata(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/trasporto/completatoRelazioneTrasportoRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/modificapTrasportoIdEvasa/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})

    })

    await fetch(`http://127.0.0.1:8080/api/trasporto/evasaRelazioneTrasportoProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)

    })



    recensisciCaricoEntrata(id);

}


function recuperaRelazioneCaricoEntrata(id) {


    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRelazioneInUscita?propostaAccettataTrasportoId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCaricoRelazioneEntrata(data);


        });

}



if (richiesteTrasportoRelazioneEntrata) {

    richiesteTrasportoRelazioneEntrata.addEventListener('click', fetchCaricoRelazioneEntrata);
}



function recensisciCaricoEntrata(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneCarico.html';

}



/* -------------------------------------------------------------------------- */
/*                              scala relazione entrata                       */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteScalaRelazioneEntrata(scala) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Richiedente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Data Fine</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(scala);

    if (scala == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        scala.forEach(element => {

            if (element.stato == 'IN CORSO') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-success px-1 bottoniEvadi" style="margin-bottom:5px;" data-id-evadi="${element.id}" onclick="evadiRelazioneScalaEntrata(${element.id}, ${element.consegnaDTO.id})">Evadi <i class="fa-solid fa-check"></i></a></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            } else if (element.statoProponente == 'EVASA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciScalaEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();

            } else if (element.stato == 'ANNULLATA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciScalaEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            } else if (element.statoProponente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                    </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoScala();


            } else {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteScalaElevatoreProposta.html" target="_blank" class="linkScala" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoScala();

            }

        });

    }

}


async function fetchScalaRelazioneEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneScalaEntrata(data.id);

            console.log(data.id);


        });

}



async function evadiRelazioneScalaEntrata(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/scala/completatoRelazioneScalaRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })


    await fetch(`http://127.0.0.1:8080/api/scalaElevatore/modificaScalaIdEvasa/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})

    })

    await fetch(`http://127.0.0.1:8080/api/scala/evasaRelazioneScalaProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)

    })


    recensisciScalaEntrata(id);

}


function recuperaRelazioneScalaEntrata(id) {


    fetch(`http://127.0.0.1:8080/api/scala/byAziendaRelazioneScalaInUscita?propostaAccettataScalaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteScalaRelazioneEntrata(data);


        });

}



if (richiesteScalaElevatoreRelazioneEntrata) {

    richiesteScalaElevatoreRelazioneEntrata.addEventListener('click', fetchScalaRelazioneEntrata);
}



function recensisciScalaEntrata(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneScala.html';

}




/* -------------------------------------------------------------------------- */
/*                              deposito relazione entrata                    */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteDepositoRelazioneEntrata(deposito) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Richiedente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Data Fine</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(deposito);

    if (deposito == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        deposito.forEach(element => {

            if (element.stato == 'IN CORSO') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-success px-1 bottoniEvadi" style="margin-bottom:5px;" data-id-evadi="${element.id}" onclick="evadiRelazioneDepositoEntrata(${element.id}, ${element.magazzinoDTO.id})">Evadi <i class="fa-solid fa-check"></i></a></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();


            } else if (element.statoProponente == 'EVASA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciDepositoEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();

            } else if (element.stato == 'ANNULLATA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciDepositoEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();


            } else if (element.statoProponente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                    </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();


            } else {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteDepositoProposta.html" target="_blank" class="linkDeposito" data-evento-id="${element.magazzinoDTO.id}"> ${element.magazzinoDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.magazzinoDTO.fine}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoDeposito();

            }

        });

    }

}


async function fetchDepositoRelazioneEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneDepositoEntrata(data.id);

            console.log(data.id);


        });

}



async function evadiRelazioneDepositoEntrata(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/propostaMagazzino/completatoRelazioneMagazzinoRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })


    await fetch(`http://127.0.0.1:8080/api/depositoMagazzino/modificaMagazzinoIdEvasa/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})

    })

    await fetch(`http://127.0.0.1:8080/api/propostaMagazzino/evasaRelazioneMagazzinoProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)

    })



    recensisciDepositoEntrata(id);

}


function recuperaRelazioneDepositoEntrata(id) {


    fetch(`http://127.0.0.1:8080/api/propostaMagazzino/relazioniPerId?propostaAccettataIdMagazzino=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteDepositoRelazioneEntrata(data);


        });

}



if (richiesteDepositoMagazzinoRelazioneEntrata) {

    richiesteDepositoMagazzinoRelazioneEntrata.addEventListener('click', fetchDepositoRelazioneEntrata);
}



function recensisciDepositoEntrata(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneDeposito.html';

}




/* -------------------------------------------------------------------------- */
/*                              tratta relazione entrata                      */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteTratteRelazioneEntrata(tratta) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Richiedente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Arrivo</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(tratta);

    if (tratta == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        tratta.forEach(element => {

            if (element.stato == 'IN CORSO') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-success px-1 bottoniEvadi" style="margin-bottom:5px;" data-id-evadi="${element.id}" onclick="evadiRelazioneTratteEntrata(${element.id}, ${element.consegnaDTO.id})">Evadi <i class="fa-solid fa-check"></i></a></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            } else if (element.statoProponente == 'EVASA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciTratteEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();

            } else if (element.stato == 'ANNULLATA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciTratteEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            } else if (element.statoProponente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                    </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();


            } else {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteTratteProposta.html" target="_blank" class="linkTratte" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.dataArrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoTratte();

            }

        });

    }

}


async function fetchTratteRelazioneEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneTratteEntrata(data.id);

            console.log(data.id);


        });

}



async function evadiRelazioneTratteEntrata(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/trattazza/completatoRelazioneTrattaRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })


    await fetch(`http://127.0.0.1:8080/api/tratta/modificaTrattaIdEvasa/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})

    })

    await fetch(`http://127.0.0.1:8080/api/trattazza/evasaRelazioneTrattaProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)

    })



    recensisciTratteEntrata(id);

}


function recuperaRelazioneTratteEntrata(id) {


    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRelazioneTrattaInUscita?propostaAccettataIdTratta=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteTratteRelazioneEntrata(data);


        });

}



if (richiesteTrattaRelazioneEntrata) {

    richiesteTrattaRelazioneEntrata.addEventListener('click', fetchTratteRelazioneEntrata);
}



function recensisciTratteEntrata(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneTratte.html';

}




/* -------------------------------------------------------------------------- */
/*                              personale relazione entrata                   */
/* -------------------------------------------------------------------------- */



function visualizzaRichiestePersonaleRelazioneEntrata(personale) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Richiedente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Consegna</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(personale);

    if (personale == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        personale.forEach(element => {

            if (element.stato == 'IN CORSO') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-success px-1 bottoniEvadi" style="margin-bottom:5px;" data-id-evadi="${element.id}" onclick="evadiRelazionePersonaleEntrata(${element.id}, ${element.personaleDTO.id})">Evadi <i class="fa-solid fa-check"></i></a></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();


            } else if (element.statoProponente == 'EVASA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciPersonaleEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();

            } else if (element.stato == 'ANNULLATA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciPersonaleEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();


            } else if (element.statoProponente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                    </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();


            } else {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiestePersonaleProposta.html" target="_blank" class="linkPersonale" data-evento-id="${element.personaleDTO.id}"> ${element.personaleDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.personaleDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoPersonale();

            }

        });

    }

}


async function fetchPersonaleRelazioneEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazionePersonaleEntrata(data.id);

            console.log(data.id);


        });

}



async function evadiRelazionePersonaleEntrata(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/personale/completatoRelazionePersonaleRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })


    await fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/modificapersonaleIdEvasa/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})

    })

    await fetch(`http://127.0.0.1:8080/api/personale/evasaRelazionePersonaleProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)

    })



    recensisciPersonaleEntrata(id);

}


function recuperaRelazionePersonaleEntrata(id) {


    fetch(`http://127.0.0.1:8080/api/personale/byAziendaRelazioneUscita?propostaAccettataPersonaleId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiestePersonaleRelazioneEntrata(data);


        });

}



if (richiestePersonaleSpecRelazioneEntrata) {

    richiestePersonaleSpecRelazioneEntrata.addEventListener('click', fetchPersonaleRelazioneEntrata);
}



function recensisciPersonaleEntrata(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensionePersonale.html';

}



/* -------------------------------------------------------------------------- */
/*                              imballi relazione entrata                     */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteImballiRelazioneEntrata(imballi) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4" style="background-color: white">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">                        

                            <div class="row rowData">
                            <div class="table-responsive tabellozza">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="text-uppercase">
                            <tr class="ligth ligth-data">
                                <th class="text-center" style="vertical-align: middle !important;">Azienda Richiedente</th>
                                <th class="text-center" style="vertical-align: middle !important;">Richiesta numero #ID</th>
                                <th class="text-center" style="vertical-align: middle !important;">Consegna</th>
                                <th class="text-center" style="vertical-align: middle !important;">Stato</th>
                                <th class="text-center" style="vertical-align: middle !important;">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    console.log(imballi);

    if (imballi == 0) {

        body.innerHTML = nessunaCorrispondenzaRelazione;

    } else {

        imballi.forEach(element => {

            if (element.stato == 'IN CORSO') {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-success px-1 bottoniEvadi" style="margin-bottom:5px;" data-id-evadi="${element.id}" onclick="evadiRelazioneImballiEntrata(${element.id}, ${element.consegnaDTO.id})">Evadi <i class="fa-solid fa-check"></i></a></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            } else if (element.statoProponente == 'EVASA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciImballiEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();

            } else if (element.stato == 'ANNULLATA' && element.statoProponente != 'RECENSITA') {

                visualizzaRichieste = `<tr>
                <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
                <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-dark px-1 btnRecensisci" data-id-rec="${element.id}" onclick="recensisciImballiEntrata(${element.id})">Recensisci <i class="fa-solid fa-star"></i></a>
                </td>
                </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            } else if (element.statoProponente == 'RECENSITA') {

                visualizzaRichieste = `<tr>
                    <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
                    <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
                    <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
                    <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
                    </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();


            } else {


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" target="_blank" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.consegnaDTO.arrivo}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td style="vertical-align: middle !important;" class="text-center bottoneRecensione" data-eventoid="1"></td>
            </tr>`;


                body.innerHTML += visualizzaRichieste;
                ascoltoImballi();

            }

        });

    }

}


async function fetchImballiRelazioneEntrata() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazioneImballiEntrata(data.id);

            console.log(data.id);


        });

}



async function evadiRelazioneImballiEntrata(id, richiestaId) {


    await fetch(`http://127.0.0.1:8080/api/propostaImballi/completatoRelazioneImballiRichiedente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })


    await fetch(`http://127.0.0.1:8080/api/consegnaImballi/modificaImballiIdEvasa/${richiestaId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})

    })

    await fetch(`http://127.0.0.1:8080/api/propostaImballi/evasaRelazioneImballiProponente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)

    })



    recensisciImballiEntrata(id);

}


function recuperaRelazioneImballiEntrata(id) {


    fetch(`http://127.0.0.1:8080/api/propostaImballi/relazioniPerId?propostaAccettataId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteImballiRelazioneEntrata(data);


        });

}



if (richiesteConsegnaImballiRelazioneEntrata) {

    richiesteConsegnaImballiRelazioneEntrata.addEventListener('click', fetchImballiRelazioneEntrata);
}



function recensisciImballiEntrata(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensioneImballi.html';

}
