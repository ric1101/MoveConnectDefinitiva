userView();
let nessunaCorrispondenzaProposta = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Proposte!</p>
</div>`;

let nessunaCorrispondenzaRelazione = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Servizi!</p>
</div>`;

let nessunaCorrispondenzaImballiEmessi = `
    <div class="card-body destra mb-5" style="padding: 80px !important">
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

let dato = document.querySelector('.dati');
let logo = document.querySelector('.logo');
let feed = document.querySelector('.feed');
let accessToken = localStorage.getItem('accessToken');

let richiesteOccSuoloPubUscita = document.querySelector('.richiesteOccSuoloPubUscita');
let richiesteTrasportoUscita = document.querySelector('.richiesteTrasportoUscita');
let richiesteScalaElevatoreUscita = document.querySelector('.richiesteScalaElevatoreUscita');
let richiesteConsegnaImballiUscita = document.querySelector('.richiesteConsegnaImballiUscita');
let richiestePersonaleSpecUscita = document.querySelector('.richiestePersonaleSpecUscita');
let richiesteDepositoMagazzinoUscita = document.querySelector('.richiesteDepositoMagazzinoUscita');
let richiesteTrattaUscita = document.querySelector('.richiesteTrattaUscita');

let richiesteOccSuoloPubInteresse = document.querySelector('.richiesteOccSuoloPubInteresse');
let richiesteTrasportoInteresse = document.querySelector('.richiesteTrasportoInteresse');
let richiesteScalaElevatoreInteresse = document.querySelector('.richiesteScalaElevatoreInteresse');
let richiesteConsegnaImballiInteresse = document.querySelector('.richiesteConsegnaImballiInteresse');
let richiestePersonaleSpecInteresse = document.querySelector('.richiestePersonaleSpecInteresse');
let richiesteDepositoMagazzinoInteresse = document.querySelector('.richiesteDepositoMagazzinoInteresse');
let richiesteTrattaInteresse = document.querySelector('.richiesteTrattaInteresse');

let richiesteOccSuoloPubRelazione = document.querySelector('.richiesteOccSuoloPubRelazione');
let richiesteTrasportoRelazione = document.querySelector('.richiesteTrasportoRelazione');
let richiesteScalaElevatoreRelazione = document.querySelector('.richiesteScalaElevatoreRelazione');
let richiesteConsegnaImballiRelazione = document.querySelector('.richiesteConsegnaImballiRelazione');
let richiestePersonaleSpecRelazione = document.querySelector('.richiestePersonaleSpecRelazione');
let richiesteDepositoMagazzinoRelazione = document.querySelector('.richiesteDepositoMagazzinoRelazione');
let richiesteTrattaRelazione = document.querySelector('.richiesteTrattaRelazione');

let richiesteOccSuoloPubEntrata = document.querySelector('.richiesteOccSuoloPubEntrata');
let richiesteTrasportoEntrata = document.querySelector('.richiesteTrasportoEntrata');
let richiesteScalaElevatoreEntrata = document.querySelector('.richiesteScalaElevatoreEntrata');
let richiesteConsegnaImballiEntrata = document.querySelector('.richiesteConsegnaImballiEntrata');
let richiestePersonaleSpecEntrata = document.querySelector('.richiestePersonaleSpecEntrata');
let richiesteDepositoMagazzinoEntrata = document.querySelector('.richiesteDepositoMagazzinoEntrata');
let richiesteTrattaEntrata = document.querySelector('.richiesteTrattaEntrata');

let messaggi = document.querySelector('.messaggi');
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

    let visualizzaDati = `<div class="card-body destra">
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



function feedback() {

    let destra = document.querySelector('.destra');

    console.log('ciao');


    let feedbackVisualizza = `<div class="card-body destra">
    <div class="container">
    <div class="row">
    <div class="col-lg-12">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card-body">
                                        <h4 class="card-title">Recensioni</h4>
                                        <h5 class="card-subtitle">Riepilogo</h5>
                                        <h2 class="font-medium mt-5 mb-0">25426</h2>
                                        <span class="text-muted">Questo mese ci sono 346 nuove
                                            recensioni </span>
                                        <div class="image-box mt-4 mb-4">
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Simmons"><img
                                                    src="../Progetto/imgs/4.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Fitz"><img
                                                    src="../Progetto/imgs/3.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Phil"><img
                                                    src="../Progetto/imgs/2.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                            <a href="#" class="mr-2" data-toggle="tooltip"
                                                data-placement="top" title=""
                                                data-original-title="Melinda"><img
                                                    src="../Progetto/imgs/1.png" class="rounded-circle"
                                                    width="45" alt="user"></a>
                                        </div>

                                    </div>
                                    <div class="media">
                                        <div class="row" style="display: flex; align-items: center;">
                                            <h6>Media</h6>
                                            <h1 style="font-size: 50px;">4.5<i
                                                    class="fa-solid fa-star display-5"
                                                    style="color: #FFD43B;"></i></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-8 border-left">
                                    <div class="card-body">
                                        <ul class="list-style-none">
                                            <li>
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 5 stelle</h5>
                                                        <span class="text-muted">25547 Recensioni</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success"
                                                        role="progressbar" style="width: 40%"
                                                        aria-valuenow="47" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 4 stelle</h5>
                                                        <span class="text-muted">5547 Reviews</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-orange"
                                                        role="progressbar" style="width: 30%"
                                                        aria-valuenow="33" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2 mb-2">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 3 stelle</h5>
                                                        <span class="text-muted">547 Reviews</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-info" role="progressbar"
                                                        style="width: 10%" aria-valuenow="20"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">

                                                    <i class="fa-solid fa-star display-5"
                                                        style="color: #FFD43B;"></i><i
                                                        class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 2 stelle</h5>
                                                        <span class="text-muted">25547 Recensioni</span>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success"
                                                        role="progressbar" style="width: 5%"
                                                        aria-valuenow="47" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </li>
                                            <li class="mt-2">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-star display-5 "
                                                        style="color: #FFD43B;"></i>
                                                    <div class="ml-2 p-3">
                                                        <h5 class="mb-0">Recensioni 1 stella</h5>
                                                        <span class="text-muted">25547 Recensioni</span>
                                                    </div>
                                                </div>
                                                <div class="progress mb-4">
                                                    <div class="progress-bar bg-success"
                                                        role="progressbar" style="width: 5%"
                                                        aria-valuenow="47" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
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

}



if (feed) {

    feed.addEventListener('click', feedback);
}




/* -------------------------------------------------------------------------- */
/*                               i miei messaggi                              */
/* -------------------------------------------------------------------------- */



function iMieiMessaggi() {

    let visualizzaMessaggi = `<div class="card-body destra1">
    <section style="background-color: #1B2023">
    <div class="container py-5">
  
      <div class="row">
                            
        <div class="col-md-12 col-lg-12 col-xl-12">
  
          <ul class="list-unstyled">
            <li class="d-flex justify-content-between mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60">
              <div class="card">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Brad Pitt</p>
                  <p class="text-muted small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <div class="card w-100">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium.
                  </p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
            </li>
            <li class="d-flex justify-content-between mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60">
              <div class="card">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Brad Pitt</p>
                  <p class="text-muted small mb-0"><i class="far fa-clock"></i> 10 mins ago</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div data-mdb-input-init class="form-outline">
                <textarea class="form-control bg-body-tertiary" id="textAreaExample2" rows="4"></textarea>
              </div>
            </li>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-info btn-rounded float-end">Send</button>
          </ul>
  
        </div>
  
      </div>
  
    </div>
  </section>
  </div>`;

    colonnaInfo.innerHTML = visualizzaMessaggi;

}

if (messaggi) {

    messaggi.addEventListener('click', iMieiMessaggi);
}





/* -------------------------------------------------------------------------- */
/*                              caricamento logo                              */
/* -------------------------------------------------------------------------- */



function caricaLogo() {

    let destra = document.querySelector('.destra');

    console.log('ciao');


    let caricaLogoVisualizza = `<div class="card-body destra">
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



/* ------------------------- Richieste tutte uscita ------------------------- */


/* -------------------------------------------------------------------------- */
/*                            suolo pubblico uscita                           */
/* -------------------------------------------------------------------------- */


// function visualizzaRichiesteOccSuoloPubUscita(suolo) {


//     colonnaInfo.innerHTML = '';

//     suolo.richiestaSuoloPubblico.forEach(element => {


//         let visualizzaRichieste = `
//     <div class="card-body destra mb-4">
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
//                                     <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.provincia}
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row rowDati">
//                                 <div class="col-sm-5">
//                                     <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
//                                 </div>
//                                 <div class="col-sm-7 text-secondary" style="font-size: 18px;">
//                                 ${element.comune}
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

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';

    carico.richiesteTrasporti.forEach(element => {


        if (element.stato == 'APERTA') {

            visualizzaRichieste = `
    <div class="card-body destra mb-4">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comunePartenza}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Regione Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.regioneArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comuneArrivo}
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

            colonnaInfo.innerHTML += visualizzaRichieste;

        }


    });

}


async function fetchCaricoUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCaricoUscita(data);

            console.log(data);


        });

}



if (richiesteTrasportoUscita) {

    richiesteTrasportoUscita.addEventListener('click', fetchCaricoUscita);
}




function deleteCarico(id) {

    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchCaricoUscita();

}


function putCarico(id) {


    localStorage.setItem('modificaCarico', id);

    window.location.href = 'modificaTrasporto.html';


}



/* -------------------------------------------------------------------------- */
/*                           scala elevatore uscita                           */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteScalaElevatoreUscita(scala) {


    colonnaInfo.innerHTML = '';

    scala.scalaElevatore.forEach(element => {

        if (element.stato == 'APERTA') {


            let visualizzaRichieste = `
    <div class="card-body destra mb-4">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
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


            colonnaInfo.innerHTML += visualizzaRichieste;

        }
    });

}


async function fetchScalaElevatoreUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiesteScalaElevatoreUscita(data);


        });

}



if (richiesteScalaElevatoreUscita) {

    richiesteScalaElevatoreUscita.addEventListener('click', fetchScalaElevatoreUscita);
}



function deleteScala(id) {

    fetch(`http://127.0.0.1:8080/api/scalaElevatore/eliminaScala/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }//,
        // body: JSON.stringify(),
    })

    fetchScalaElevatoreUscita();

}


function putScala(id) {

    localStorage.setItem('modificaScala', id);

    window.location.href = 'modificaScala.html';

}



/* -------------------------------------------------------------------------- */
/*                           consegna imballi uscita                          */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteConsegnaImballiUscita(imballi) {


    colonnaInfo.innerHTML = '';

    console.log(imballi);
    
    if (imballi.consegnaImballi.length == 0) {

        colonnaInfo.innerHTML = nessunaCorrispondenzaImballiEmessi;

    } else {



        imballi.consegnaImballi.forEach(element => {

            if (element.stato == 'APERTA') {


                let visualizzaRichieste = `
    <div class="card-body destra mb-4">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
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


                colonnaInfo.innerHTML += visualizzaRichieste;

            }

        });

    }

}


async function fetchConsegnaImballiUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiesteConsegnaImballiUscita(data);


        });

}



if (richiesteConsegnaImballiUscita) {

    richiesteConsegnaImballiUscita.addEventListener('click', fetchConsegnaImballiUscita);
}



async function deleteImballi(id) {

    await fetch(`http://127.0.0.1:8080/api/consegnaImballi/eliminaconsegna/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }//,
        // body: JSON.stringify(),
    })

    
    fetchConsegnaImballiUscita();

}



function putImballi(id) {

    localStorage.setItem('modificaImballi', id);

    window.location.href = 'modificaImballi.html';


}



/* -------------------------------------------------------------------------- */
/*                       personale specializzato uscita                       */
/* -------------------------------------------------------------------------- */



function visualizzaRichiestePersonaleSpecializzatoUscita(personale) {


    colonnaInfo.innerHTML = '';

    personale.personaleSpecializzato.forEach(element => {

        if (element.stato == 'APERTA') {


            let visualizzaRichieste = `
    <div class="card-body destra mb-4">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
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


            colonnaInfo.innerHTML += visualizzaRichieste;
        }
    });

}


async function fetchRichiestePersonaleSpecializzatoUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiestePersonaleSpecializzatoUscita(data);


        });

}



if (richiestePersonaleSpecUscita) {

    richiestePersonaleSpecUscita.addEventListener('click', fetchRichiestePersonaleSpecializzatoUscita);
}


function deletePersonale(id) {

    fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }//,
        // body: JSON.stringify(),
    })

    fetchRichiestePersonaleSpecializzatoUscita();

}


function putPersonale(id) {


    localStorage.setItem('modificaPersonale', id);

    window.location.href = 'modificaPersonale.html';


}



/* -------------------------------------------------------------------------- */
/*                          deposito magazzino uscita                         */
/* -------------------------------------------------------------------------- */


function visualizzaRichiesteDepositoMagazzinoUscita(deposito) {


    colonnaInfo.innerHTML = '';



    if (deposito.length != 0) {

        deposito.depositoMagazzino.forEach(element => {

            if (element.stato == 'APERTA') {


                let visualizzaRichieste = `
    <div class="card-body destra mb-4">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provincia}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comune}
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


                colonnaInfo.innerHTML += visualizzaRichieste;
            }

        });

    } else {
        visualizzaRichieste = `
    <div class="card-body destra mb-4">
        <div class="row rowRichieste">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-xl-12">

                        <div class="row p-3">
                            <div class="text-center p-3 mb-3" style="border-bottom: solid 2px black">
                                <h4><i class="fa-solid fa-paper-plane"></i> Nessuna richiesta</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        colonnaInfo.innerHTML += visualizzaRichieste;
    }

}


async function fetchRichiesteDepositoMagazzinoUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {


            console.log(data);
            visualizzaRichiesteDepositoMagazzinoUscita(data);


        });

}



if (richiesteDepositoMagazzinoUscita) {

    richiesteDepositoMagazzinoUscita.addEventListener('click', fetchRichiesteDepositoMagazzinoUscita);
}




function deleteMagazzino(id) {

    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/eliminaMagazzino/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }//,
        // body: JSON.stringify(),
    })

    fetchRichiesteDepositoMagazzinoUscita();

}


function putMagazzino(id) {

    localStorage.setItem('modificaMagazzino', id);

    window.location.href = 'modificaMagazzino.html';



}


/* -------------------------------------------------------------------------- */
/*                                tratte uscita                               */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteTratteUscita(tratte) {


    colonnaInfo.innerHTML = '';

    tratte.tratta.forEach(element => {

        if (element.stato == 'APERTA') {


            let visualizzaRichieste = `
    <div class="card-body destra mb-4">
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
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaPartenza}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Partenza</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comunePartenza}
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
                                    <h6 class="mb-0" style="font-size: 18px;">Provincia Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.provinciaArrivo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-5">
                                    <h6 class="mb-0" style="font-size: 18px;">Comune Arrivo</h6>
                                </div>
                                <div class="col-sm-7 text-secondary" style="font-size: 18px;">
                                ${element.comuneArrivo}
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


            colonnaInfo.innerHTML += visualizzaRichieste;
        }
    });

}


async function fetchTratteUscita() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteTratteUscita(data);

            console.log(data);


        });

}



if (richiesteTrattaUscita) {

    richiesteTrattaUscita.addEventListener('click', fetchTratteUscita);
}



function deleteTratta(id) {

    fetch(`http://127.0.0.1:8080/api/tratta/eliminaRichiesta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }//,
        // body: JSON.stringify(),
    })

    fetchTratteUscita();

}



function putTratta(id) {

    localStorage.setItem('modificaTratta', id);

    window.location.href = 'modificaTratta.html';




}






/* ------------------------ Richieste tutte interesse ----------------------- */


/* -------------------------------------------------------------------------- */
/*                              carico interesse                              */
/* -------------------------------------------------------------------------- */



function visualizzaRichiesteCaricoInteresse(carico) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4">
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
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    carico.richiesteTrasporti.forEach(element => {


        if (element.stato == 'INTERESSATA') {


            visualizzaRichieste = `<tr>
            <td class="text-center nomeAz"></td>
            <td class="text-center">${element.id}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkTrasporto px-2" data-evento-id="${element.id}" href="./infoRichiesteTrasportoProposta.html">INFO</a></td>
            </tr>`;

            body.innerHTML += visualizzaRichieste;


            // ottieniNomeAzienda(element.id_azienda_richiedente);

        }

    });

}


async function fetchCaricoInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteCaricoInteresse(data);

            console.log(data);


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
    <div class="card-body destra mb-4">
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
                                <th class="text-center">Gestisci</th>
                            </tr>
                        </thead>
                        <tbody class="bodyTabella">
                                

                        </tbody>
                    </table>
                </div>`;

    colonnaInfo.innerHTML = visualizzaTabella;

    let body = document.querySelector('.bodyTabella');

    scala.scalaElevatore.forEach(element => {


        if (element.stato == 'INTERESSATA') {



            visualizzaRichieste = `<tr>
            <td class="text-center nomeAz"></td>
            <td class="text-center">${element.id}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" data-function=""><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" data-function=""><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkScala px-2" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatoreProposta.html">INFO</a></td>
            </tr>`;

            body.innerHTML += visualizzaRichieste;


            // ottieniNomeAzienda(element.id_azienda_richiedente);

        }

    });

}



async function fetchScalaInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteScalaInteresse(data);

            console.log(data);


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
    <div class="card-body destra mb-4">
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


            visualizzaRichieste = `<tr>
            <td class="text-center nomeAz">${element.aziendaDTO.nomeAzienda}</td>
            <td class="text-center">${element.consegnaDTO.id}</td>
            <td class="text-center" data-eventoid="1"><a class="btn btn-danger px-3" onclick="eliminaProposta(${element.id})"><i class="fa-solid fa-xmark"></i></a><a class="btn btn-success px-3 mx-2" onclick="accettaProposta(${element.id}, ${element.consegnaDTO.id}, ${element.aziendaRichiedenteDTO.id}, ${element.aziendaDTO.id})"><i class="fa-solid fa-check"></i></a><a class="btn btn-dark linkImballi px-2" data-evento-id="${element.consegnaDTO.id}" href="./infoRichiesteImballiProposta.html">INFO</a></td>
            </tr>`;

            body.innerHTML += visualizzaRichieste;
            ascoltoImballi()



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

function eliminaProposta(id) {

    fetch(`http://127.0.0.1:8080/api/propostaImballi/eliminaProposta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchImballiInteresse();

}

function accettaProposta(idR, consegnaImballiId, consegnaImballiAziendaId, propostaAccettataId) {

    let id = idR;

    fetch(`http://127.0.0.1:8080/api/propostaImballi/accettaRichiestaImballi/${idR}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

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


    let consegnaImballiID = consegnaImballiId;
    let consegnaImballiAziendaID = consegnaImballiAziendaId;
    let propostaAccettataID = propostaAccettataId;

    class Relazione {
        constructor(consegnaImballiId, consegnaImballiAziendaId, propostaAccettataId) {
            (this.consegnaImballiId = consegnaImballiId),
                (this.consegnaImballiAziendaId = consegnaImballiAziendaId),
                (this.propostaAccettataId = propostaAccettataId)

        }
    }

    let newRelazione = new Relazione(consegnaImballiID, consegnaImballiAziendaID, propostaAccettataID);

    fetch(`http://127.0.0.1:8080/api/propostaImballi/relazioneImballi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRelazione)
    })

    fetch(`http://127.0.0.1:8080/api/propostaImballi/eliminaProposte/${consegnaImballiId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    fetchImballiInteresse();


}


async function fetchImballiInteresse() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaProposte(data.id);

            console.log(data.id);


        });


}


function recuperaProposte(id) {

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
/*                              imballi relazione                             */
/* -------------------------------------------------------------------------- */




function visualizzaRichiesteImballiRelazione(imballo) {

    colonnaInfo.innerHTML = '';
    let visualizzaTabella = '';
    let visualizzaRichieste = '';


    visualizzaTabella = `
    <div class="card-body destra mb-4">
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
                                <th class="text-center" style="vertical-align: middle !important;">Data Inizio</th>
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


                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.dataInizio}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td class="text-center bottoneRecensione" data-eventoid="1"><a class="btn btn-success px-1 bottoniEvadi" style="margin-bottom:5px;" data-id-evadi="${element.id}" onclick="evadiRelazione(${element.id})">Evadi <i class="fa-solid fa-check"></i></a><a class="btn btn-danger px-1 bottoniAnnulla" data-id-annulla="${element.id}" onclick="annullaRelazione(${element.id})">Annulla <i class="fa-solid fa-xmark"></i></a>
            </td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;
                ascoltoImballi()

            } else {

                visualizzaRichieste = `<tr>
            <td class="text-center nomeAz" style="vertical-align: middle !important;">${element.aziendaAccettataDTO.nomeAzienda}</td>
            <td class="text-center" style="vertical-align: middle !important;"><a href="./infoRichiesteImballiProposta.html" class="linkImballi" data-evento-id="${element.consegnaDTO.id}"> ${element.consegnaDTO.id}</a></td>
            <td class="text-center" style="vertical-align: middle !important;">${element.dataInizio}</td>
            <td class="text-center" style="vertical-align: middle !important;">${element.stato}</td>
            <td class="text-center" style="vertical-align: middle !important;"></td>
            </tr>`;

                body.innerHTML += visualizzaRichieste;

            }



        });

    }

}



async function fetchImballiRelazione() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            recuperaRelazione(data.id);

            console.log(data.id);


        });


}


function annullaRelazione(id) {


    fetch(`http://127.0.0.1:8080/api/propostaImballi/annullataRelazioneImballi/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    recensisci(id);

}


function evadiRelazione(id) {


    fetch(`http://127.0.0.1:8080/api/propostaImballi/evasaRelazioneImballi/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })

    recensisci(id);

}


function recuperaRelazione(id) {


    fetch(`http://127.0.0.1:8080/api/propostaImballi/byAziendaRelazioneRichiedente?consegnaImballiAziendaId=${id}`)
        .then((res) => res.json())
        .then((data) => {

            visualizzaRichiesteImballiRelazione(data);


        });

}



if (richiesteConsegnaImballiRelazione) {

    richiesteConsegnaImballiRelazione.addEventListener('click', fetchImballiRelazione);
}



function recensisci(id) {


    let idRecensione = id;
    localStorage.setItem('idRecensione', idRecensione);

    window.location.href = 'recensione.html';

}


//vedere bene deposito if