let navbarHTML = document.querySelector(".navbarMain");

navbar();

function navbar() {
    let navBarFinale = `<nav class="navbar navbar-expand-xxl navbar-fixed-top" style="background-color: #1B2023;">
    <div class="container-fluid">
        <!-- Logo -->
        <a class="navbar-brand fs-4" href="index.html"><img class="logo" src="../Progetto/imgs/img.png" alt=""></a>
        <!-- Bottoni -->
        <button class="navbar-toggler shadow-0 border-0 hamburger" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
            data-bs-theme="dark">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- SideBar -->
        <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <!-- SideBar Header -->
            <div class="offcanvas-header text-black border-bottom"
                style="background-color: #1B2023;border-bottom: solid 0.3rem #FAAD06 !important;">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img class="logo" src="../Progetto/imgs/img2.png"
                        alt=""></h5>
                <div class="icon ms-auto">
                    <i class="fa-regular fa-circle-xmark closed" style="color: #ffffff; font-size: 30px" closed
                        data-bs-dismiss="offcanvas" aria-label="Close"></i>
                </div>
            </div>
            <!--Sidebar Body  -->
            <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                    <li class="nav-item dropdown mx-2 inserisci d-none" id="menu-products">
                        <a class="nav-link dropdown-toggle button1 text-white" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Inserisci servizio
                        </a>
                        <ul class="dropdown-menu drop1">
                            <li><a class="dropdown-item d-none" href="occSuoloPub.html">Occupazione solo pubblico</a></li>
                            <li><a class="dropdown-item" href="richiestaTrasporto.html">Inserisci Groupage</a></li>
                            <li><a class="dropdown-item" href="scala-elevatore.html">Scala elevatore</a></li>
                            <li><a class="dropdown-item" href="imballi.html">Consegna imballi</a></li>
                            <li><a class="dropdown-item" href="personale.html">Personale spec.</a></li>
                            <li><a class="dropdown-item" href="deposito-magazzino.html">Deposito magazzino m2</a></li>
                            <li><a class="dropdown-item" href="insertTratte.html">Inserisci tratta</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown visualizza mx-2 d-none" id="menu-products">
                        <a class="nav-link dropdown-toggle button1 text-white" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Visualizza richieste
                        </a>
                        <ul class="dropdown-menu drop2">
                            <li><a class="dropdown-item d-none" href="suoloPubVisualizza.html">Occupazione solo pubblico</a></li>
                            <li><a class="dropdown-item" href="trasportoVisualizza.html">Groupage</a></li>
                            <li><a class="dropdown-item" href="elevatoreVisualizza.html">Scala elevatore</a></li>
                            <li><a class="dropdown-item" href="imballaggiVisualizza.html">Consegna imballi</a></li>
                            <li><a class="dropdown-item" href="personale-specVisualizza.html">Personale spec.</a></li>
                            <li><a class="dropdown-item" href="magazzinoVisualizza.html">Deposito magazzino m2</a></li>
                            <li><a class="dropdown-item" href="tratteVisualizza.html">Tratte</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link button1 mx-2 text-white abb d-none" href="abbonamenti.html">Subscribe</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link button1 mx-2 text-white partners d-none" href="partners.html">Partners</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link button1 mx-2 text-white blogs d-none" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link button1 mx-2 text-white cercaAziende d-none" href="cerca.html"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </li>
                </ul>
                

                <!-- Login/Signup -->
                <div class="d-flex flex-column flex-lg-row justify-content-end align-items-center gap-3">
               
                <div class"icona" onclick="toggleNotifi()">
                <a class="text-white text-decoration-none notifica box"><i class="fa-solid fa-bell grossi bella"></i><span class="top-1 start-99 translate-middle badge rounded-pill bg-danger"
                id="numeroNotifiche"></span></a>

                </div>

                    <div class="notifi-box d-none" id="box">
                    <h2> Notifiche <span class="notiSpan"></span></h2>

                    <div class="notifi-item">

                    </div>

                </div>
                
                
                <a href="user.html" class="text-white text-decoration-none user d-none"><i class="fa-regular fa-circle-user grossi"></i></a>
                <a href="login.html" class="text-white text-decoration-none login"><i
                class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;Login </a>
                <a href="index.html" class="text-white text-decoration-none logout d-none"><i
                class="fa-solid fa-arrow-right-from-bracket grossi"></i></a>
                <a href="registrati.html" class="text-black text-decoration-none px-3 py-1 rounded-4 signup"
                style="background-color: #FAAD06; ">Sign Up&nbsp; <i class="fa-solid fa-pen"></i></a>
                
                </div>

            </div>
        </div>
    </div>
</nav>`;

    navbarHTML.innerHTML = navBarFinale;
}

let bottone = document.querySelector(".hamburger");
let chiusura = document.querySelector(".closed");
let dropdown1 = document.querySelector(".drop1");
let dropdown2 = document.querySelector(".drop2");
let item = document.querySelector(".notifi-item");

bottone.addEventListener("click", function () {
    dropdown1.classList.add("show");
    dropdown2.classList.add("show");

    let back = document.querySelector(".offcanvas-backdrop");

    back.addEventListener("click", function () {
        dropdown1.classList.remove("show");
        dropdown2.classList.remove("show");
    });
});

chiusura.addEventListener("click", function () {
    dropdown1.classList.remove("show");
    dropdown2.classList.remove("show");
});

let user = document.querySelector(".user");
let logout = document.querySelector(".logout");
let login = document.querySelector(".login");
let notifica = document.querySelector(".bella");
let signup = document.querySelector(".signup");
let inserisci = document.querySelector(".inserisci");
let visualizza = document.querySelector(".visualizza");
let abb = document.querySelector(".abb");
let partners = document.querySelector(".partners");
let blogs = document.querySelector(".blogs");
let multiRegione = document.querySelector(".multiRegione");
// let ricerca = document.querySelector('.ricerca');
let cercaAziende = document.querySelector(".cercaAziende");

document.addEventListener("DOMContentLoaded", () => {
    // Nascondi la navbar in base all'accessToken immediatamente
    let accessToken = localStorage.getItem("accessToken");

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            

                if (data.abbonamento == null) {

                    window.location.href = 'abbonamentiRegistrato.html';
                    mostraNavbarAbbonamento();

                } else if (data.abbonamento == 'base') {

                    mostraNavbarLoggata();

                } else {

                    mostraNavbarLoggata();

                }

                // checkToken();
            

        })
        .catch((error) => {
            console.log(error);

            localStorage.removeItem("accessToken");
            mostraNavbarNonLoggata();
            // window.location.href = 'index.html';
        });


});

function mostraNavbarLoggata() {
    user.classList.remove("d-none");
    notifica.classList.remove("d-none");
    signup.classList.add("d-none");
    logout.classList.remove("d-none");
    inserisci.classList.remove("d-none");
    visualizza.classList.remove("d-none");
    login.classList.add("d-none");
    partners.classList.remove("d-none");
    blogs.classList.remove("d-none");
    // ricerca.classList.remove('d-none');
    cercaAziende.classList.remove("d-none");
    if (multiRegione != null) {
        multiRegione.classList.remove("d-none");
    }
    item.classList.add("d-none");
}


function mostraNavbarAbbonamento() {
    user.classList.add("d-none");
    notifica.classList.remove("d-none");
    signup.classList.add("d-none");
    logout.classList.add("d-none");
    inserisci.classList.add("d-none");
    visualizza.classList.add("d-none");
    login.classList.add("d-none");
    partners.classList.remove("d-none");
    blogs.classList.remove("d-none");
    // ricerca.classList.remove('d-none');
    cercaAziende.classList.add("d-none");
    if (multiRegione != null) {
        multiRegione.classList.remove("d-none");
    }
    item.classList.add("d-none");
}

function mostraNavbarNonLoggata() {
    console.log(weww);
    
    user.classList.add("d-none");
    notifica.classList.add("d-none");
    signup.classList.remove("d-none");
    logout.classList.add("d-none");
    inserisci.classList.add("d-none");
    visualizza.classList.add("d-none");
    login.classList.remove("d-none");
    abb.classList.remove("d-none");
    partners.classList.remove("d-none");
    blogs.classList.remove("d-none");
    if (multiRegione != null) {
        multiRegione.classList.add("d-none");
    }
}

// function checkToken() {
//     let accessToken = localStorage.getItem("accessToken");

//     fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);

//             if (data.abbonamento == null) {

//                 window.location.href = abbonamentiRegistrato.html;
//                 mostraNavbarAbbonamento();
//                 richiesteRicevute(data.id);
//                 mostraNotifiche(data.id);

//             } else if (data.abbonamento == 'base') {

//                 mostraNavbarLoggata();
//                 richiesteRicevute(data.id);
//                 mostraNotifiche(data.id);

//             } else {

//                 mostraNavbarLoggata();
//                 richiesteRicevute(data.id);
//                 mostraNotifiche(data.id);

//             }


//         })
//         .catch((error) => {
//             console.log(error);

//             localStorage.removeItem("accessToken");
//             mostraNavbarNonLoggata();
//             // window.location.href = 'index.html';
//         });
// }

function logOut() {
    localStorage.removeItem("accessToken");
    mostraNavbarNonLoggata();
}

logout.addEventListener("click", logOut);

let box = document.getElementById("box");
let notifyBox = document.querySelector(".notifi-box");
let down = false;

function toggleNotifi() {
    if (down) {
        notifyBox.classList.add('d-none');
        box.style.height = "0px";
        box.style.opacity = 0;
        down = false;
    } else {
        notifyBox.classList.remove('d-none');
        box.style.height = "510px";
        box.style.opacity = 1;
        down = true;
    }
}

let boxes = document.querySelector(".notifi-box");

function mostraNotifiche(id) {


    fetch(`http://127.0.0.1:8080/api/amicizia/counterPartnerArrivate/${id}`)
        .then((res) => res.json())
        .then((data) => {

            let notiSpan = document.querySelector('.notiSpan');
            let numeroNotifiche = document.querySelector('#numeroNotifiche');

            notiSpan.innerHTML = data;
            numeroNotifiche.innerHTML = data;

        })
}

function richiesteRicevute(id) {
    fetch(`http://127.0.0.1:8080/api/amicizia/amicizieRicevute?idAzienda2=${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log('Received data:', data); // Log the raw data

            // Check if the data is an array and process it accordingly
            if (Array.isArray(data)) {
                data.forEach(item => {
                    if (item.azienda1 && item.azienda1.id) {
                        visualizzaRichiesteRicevute(item, [item.azienda1], [item.azienda2]);  // Passing array to visualizzaRichiesteRicevute
                        console.log(item);
                        console.log(item.azienda1.id);
                    } else {
                        console.log("azienda1 is undefined for this item");
                    }
                });
            } else {
                console.error('Data is not an array:', data); // Log an error if it's not an array
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}





function visualizzaRichiesteRicevute(item, data, dataMio) {
    console.log(item);
    let i = 0;


    // Check if data is an array before using .forEach

    let visualizzaRichieste = '';
    console.log(item);

    // Loop through each element of data to display requests
    [item].forEach(element => {
        console.log(element);

        if (element.stato == "PENDENTE") {
            visualizzaRichieste += `   
        <div class="notifi-item">
             <i class="fa-solid fa-user-plus amicomio"></i>
            <div class="text">
                <h4>${element.azienda1.nomeAzienda}</h4>
                <p>${element.azienda1.username}</p>
                <a class="btn btn-success" onclick="accettaAmicizia(${data[i].id} , ${dataMio[i].id})">Accetta</a>
                <a class="btn btn-danger" onclick="rifiutaAmicizia(${data[i].id} , ${dataMio[i].id})">Rifiuta</a>
            </div>
        </div>`;
            console.log(data[i].id);
            console.log(dataMio[i].id);
            i++;
        } else {




        }
    });


    // Assuming boxes is a container for notifications
    boxes.innerHTML += visualizzaRichieste;



}



function accettaAmicizia(dataId1, dataId2) {
    console.log("BELLAAAA" + dataId1);
    console.log("BELLAAAA2" + dataId2);


    fetch(`http://127.0.0.1:8080/api/amicizia/accettataAmicizia/${dataId1}/${dataId2}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "idAzienda1": dataId1,
            "idAzienda2": dataId2
        }),
    })
    window.location.reload();

}


function rifiutaAmicizia(idAzienda1, idAzienda2) {

    fetch(`http://127.0.0.1:8080/api/amicizia/amiciziaRifiutata/${idAzienda1}/${idAzienda2}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    window.location.reload();

}


