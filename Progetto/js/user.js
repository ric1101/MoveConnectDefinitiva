


let colonnaInfo = document.querySelector('.colonnaInfo');

function userView() {
    let idUtente = localStorage.getItem('idUtente');
    const URLT = `http://localhost:8080/api/azienda/azienda/${idUtente}`;

    fetch(URLT)
        .then((res) => res.json())
        .then((data) => {

            iMieiDati(data);
            console.log(data);

        });

}
userView()

function iMieiDati(dati) {

    let visualizzaDati = `<div class="row gutters-sm">
                <div class="col-lg-4 col-md-5 col-sm-12 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center mt-4">
                            <div class="containerLogoImg">
                                <img src="${dati.logo}" alt="UserImg">
                            </div>
                                <div class="row mt-4 mb-3">
                                    <h2 class="col-md-12">${dati.nomeAzienda}</h2> 
                                        
                                </div>


                            </div>
                            <div class="row mt-4 mb-3 p-4 rowElenco">
                                <a class="p-2 dati">
                                    <h5>I miei dato</h5>
                                </a>
                                <a class="p-2 feed">
                                    <h5>Feedback</h5>
                                </a>
                                <a class="p-2 richieste">
                                    <h5>Visualizza richieste</h5>
                                </a>
                                <a class="p-2 messaggi">
                                    <h5>Messaggi</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7 col-sm-12 ">
                    <div class="card mb-3">
                        <div class="card-body destra">
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Nome Azienda</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.nomeAzienda}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Partita IVA</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.pIva}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email Aziendale</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.emailAziendale}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Indirizzo</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.indirizzo}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Numero Aziendale</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.numeroTelefonicoAziendale}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Nome</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.nomeDipendente}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Cognome</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.cognomeDipendente}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Data di nascita</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.dataNascita}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Numero Dipendente</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.numeroTelefono}
                                </div>
                            </div>
                            <hr>
                            <div class="row rowDati">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    ${dati.email}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>`;

    colonnaInfo.innerHTML = visualizzaDati;


    let dato = document.querySelector('.dati');
    let feed = document.querySelector('.feed');
    let richieste = document.querySelector('.richieste');
    let messaggi = document.querySelector('.messaggi');

}




dato.addEventListener('click', iMieiDati);



function feedback() {

    let destra = document.querySelector('.destra');

    let feedbackVisualizza = `<div class="card-body">
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
                                            <li class="">
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

    destra.innerHTML = feedbackVisualizza;

}

feed.addEventListener('click', feedback);

function leMieRichieste() {

    let visualizzaRichieste = `<div class="card-body destra">
    <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            <hr>
                            <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            <hr>
                            <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            <hr>
                            <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            <hr>
                            <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            <hr>
                            <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            <hr>
                            <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            <hr>
                            <div class="row rowRichieste">
                                <div class="col-sm-4">
                                    <h6 class="mb-0"> <i class="fa-solid fa-envelope"></i> Richiesta nr. #<span class="numeroRichiesta">2345637</span></h6>
                                </div>
                                <div class="col-sm-6 testo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus, dignissimos nisi fugit, error saepe iusto enim expedita possimus sed vero quam! Eius blanditiis deserunt fugit! Quaerat repellendus ipsum, quae officia nisi autem laboriosam eligendi delectus
                                    </p>
                                </div>

                            </div>
                            </div>

                            `;

    colonnaInfo.innerHTML = visualizzaRichieste;

}

// richieste.addEventListener('click', leMieRichieste);



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

// messaggi.addEventListener('click', iMieiMessaggi);


