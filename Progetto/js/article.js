let articoloIntero = document.querySelector('.articoloIntero');

const URLD = 'rotta che recupera l id della tabella';
const URLB = '';


fetch(URLD)
    .then((res) => res.json())
    .then((data) => {

        popolaArticoliDesign(data);
        console.log(data);

    });

fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        articolo(data);
        console.log(data);

    });


function articolo(dati) {

    dati.forEach(element => {

    let art = `<div class="row p-2">

                <div class="col-md-2 p-2">

                </div>

                <div class="col-md-8 p-2">
                    <h1 class="fw-bold">${element.title}</h1>
                    <p>${element.desc}</p>
                </div>

                <div class="col-md-2 d-flex justify-content-end">
                    <h6 class="mt-3" >${element.data}</h6>
                </div>

            </div>

            <div class="row p-2">
                <div class="col-md-1"></div>
                <div class="col-md-2 p-2 imgPexels" style="background-color: #1B2023;">
                    <div class="row" >
                        <img src="/Progetto/imgs/img22.png" alt="" style="width: 100%; height: 100%;">
                    </div>
                    <div class="row" style="height: 20px;"></div>
                    <div class="row footer-social-icon d-flex justify-content-center">
                        <div class="row p-3">
                            <a href="#"><i class="fab fa-facebook-f facebook-bg"></i> Facebook</a>
                        </div>
                        <div class="row p-3">
                            <a href="#"><i class="fab fa-twitter twitter-bg"></i> Twitter</a>

                        </div>
                        <div class="row p-3">
                            <a href="#"><i class="fab fa-instagram instagram-bg"></i> Instagram</a>

                        </div>
                        <div class="row p-3">
                            <a href="#"><i class="fa-brands fa-tiktok tiktok-bg"></i> TikTok</a>

                        </div>
                        
                    </div>
                    
                </div>
                <div class="col-md-8">
                    <img src="${element.img}" alt=""
                        style="width: 100%; height: 100%;">
                </div>
                <div class="col-md-1"></div>
            </div>
            <div class="row p-2">
                <div class="col-md-1"></div>
                <div class="col-md-2 p-2">
                    <div class="row">

                    </div>

                </div>
                <div class="col-md-8 p-2">
                    <p align="justify">
                      ${element.testo}  
                    </p>
                    <div class="row ">
                        <div class="col-md-12 d-flex justify-content-end p-3">
                            <h5>${element.writer}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row">
                <div class="col-md-12 d-flex justify-content-end">

                </div>
            </div>`;

            articoloIntero.innerHTML = art;


    }
)}