let navbarHTML = document.querySelector(".navbarMain");

function navbar() {
    let navBarFinale = `<nav class="navbar navbar-expand-xxl" style="background-color: #1B2023;">
    <div class="container-fluid">
    <!-- Logo -->
    <a class="navbar-brand fs-4" href="index.html"><img class="logo" src="../Progetto/imgs/img.png" alt=""></a>
    <!-- Bottoni -->
    <button class="navbar-toggler shadow-0 border-0 hamburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" data-bs-theme="dark">
    <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- SideBar -->
    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <!-- SideBar Header -->
    <div class="offcanvas-header text-black border-bottom" style="background-color: #1B2023;border-bottom: solid 0.3rem coral !important;">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img class="logo" src="../Progetto/imgs/img2.png" alt=""></h5>
    <div class="icon ms-auto">
<i class="fa-regular fa-circle-xmark closed" style="color: #ffffff; font-size: 30px" closed data-bs-dismiss="offcanvas" aria-label="Close"></i></div>
    </div>
    <!--Sidebar Body  -->
    <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
    <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
    <li class="nav-item dropdown mx-5" id="menu-products">
    <a class="nav-link dropdown-toggle button1 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Inserisci servizio
    </a>
    <ul class="dropdown-menu drop1">
    <li><a class="dropdown-item" href="./occSuoloPub.html">Occupazione solo pubblico</a></li>
    <li><a class="dropdown-item" href="./richiestaTrasporto.html">Richiesta trasporto</a></li>
    <li><a class="dropdown-item" href="./scala-elevatore.html">Scala elevatore</a></li>
    <li><a class="dropdown-item" href="./imballi.html">Consegna imballi</a></li>
    <li><a class="dropdown-item" href="./personale.html">Richiesta personale spec.</a></li>
    <li><a class="dropdown-item" href="./deposito-magazzino.html">Deposito magazzimo m2</a></li>
    <li><a class="dropdown-item" href="#">Richiesta trasporto m3</a></li>
    </ul>
    </li>
    <li class="nav-item dropdown mx-5" id="menu-products">
    <a class="nav-link dropdown-toggle button1 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Visualizza richieste
    </a>
    <ul class="dropdown-menu drop2">
    <li><a class="dropdown-item" href="#">Occupazione solo pubblico</a></li>
    <li><a class="dropdown-item" href="#">Trasporto</a></li>
    <li><a class="dropdown-item" href="#">Scala elevatore</a></li>
    <li><a class="dropdown-item" href="#">Consegna imballi</a></li>
    <li><a class="dropdown-item" href="#">Personale spec.</a></li>
    <li><a class="dropdown-item" href="#">Deposito magazzimo m2</a></li>
    <li><a class="dropdown-item" href="#">Trasporto m3</a></li>
    </ul>
    </li>
    <li class="nav-item">
    <a class="nav-link button1 mx-5 text-white" href="tratte.html">Visualizza tratte</a>
    </li>
    <li class="nav-item">
    <a class="nav-link button1 mx-5 text-white" href="./abbonamenti.html">Abbonamenti</a>
    </li>
    </ul>
    <!-- Login/Signup -->
    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
    <a href="./login.html" class="text-white text-decoration-none"><i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp;Login </a>
    <a href="./registrati.html" class="text-black text-decoration-none px-3 py-1 rounded-4" style="background-color: coral;">Sign Up&nbsp; <i class="fa-solid fa-pen"></i></a>
    </div>
    
    </div>
    </div>
    </div>
    </nav>`

    navbarHTML.innerHTML = navBarFinale;
}

navbar();

let bottone = document.querySelector(".hamburger");
let chiusura = document.querySelector(".closed");
let dropdown1 = document.querySelector(".drop1");
let dropdown2 = document.querySelector(".drop2");


bottone.addEventListener("click", function () {
    dropdown1.classList.add("show");
    dropdown2.classList.add("show");

    let back = document.querySelector('.offcanvas-backdrop');

    back.addEventListener("click", function () {
        dropdown1.classList.remove("show");
        dropdown2.classList.remove("show");
    });
});

chiusura.addEventListener("click", function () {
    dropdown1.classList.remove("show");
    dropdown2.classList.remove("show");
});

