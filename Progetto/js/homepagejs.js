let navbarHTML = document.querySelector(".navbarMain");

function navbar(){
    let navBarFinale = `<nav class="navbar navbar-expand-lg fixed-top" style="background-color: #6c757d;">
    <div class="container-fluid">
    <!-- Logo -->
    <a class="navbar-brand fs-4" href="index.html"><img class="logo" src="../imgs/icona-transformed (1).png" alt=""></a>
    <!-- Bottoni -->
    <button class="navbar-toggler shadow-none border-0 hamburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- SideBar -->
    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <!-- SideBar Header -->
    <div class="offcanvas-header text-black border-bottom">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img class="logo" src="../imgs/icona-transformed (1).png" alt=""></h5>
    <button type="button" class="btn-close-black shadow-none closed" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
    </div>
    <!--Sidebar Body  -->
    <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
    <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
    <li class="nav-item dropdown mx-5" id="menu-products">
    <a class="nav-link dropdown-toggle button1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Inserisci servizio
    </a>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Occupazione solo pubblico</a></li>
    <li><a class="dropdown-item" href="#">Richiesta supporto</a></li>
    <li><a class="dropdown-item" href="#">Scala elevatore</a></li>
    <li><a class="dropdown-item" href="#">Consegna imballi</a></li>
    <li><a class="dropdown-item" href="#">Richiesta personale specializzato</a></li>
    <li><a class="dropdown-item" href="#">Deposito magazzimo m2(mQuadri)</a></li>
    <li><a class="dropdown-item" href="#">Richiesta trasporto m3(mCubi)</a></li>
    </ul>
    </li>
    <li class="nav-item dropdown mx-5" id="menu-products">
    <a class="nav-link dropdown-toggle button1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Visualizza servizio
    </a>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Occupazione solo pubblico</a></li>
    <li><a class="dropdown-item" href="#">Richiesta supporto</a></li>
    <li><a class="dropdown-item" href="#">Scala elevatore</a></li>
    <li><a class="dropdown-item" href="#">Consegna imballi</a></li>
    <li><a class="dropdown-item" href="#">Richiesta personale specializzato</a></li>
    <li><a class="dropdown-item" href="#">Deposito magazzimo m2(mQuadri)</a></li>
    <li><a class="dropdown-item" href="#">Richiesta trasporto m3(mCubi)</a></li>
    </ul>
    </li>
    <li class="nav-item">
    <a class="nav-link button1 mx-5" href="#">Visualizza tratte</a>
    </li>
    </ul>
    <!-- Login/Signup -->
    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
    <a href="login" class="text-black">Login</a>
    <a href="signup" class="text-black text-decoration-none px-3 py-1 rounded-4" style="background-color: coral;">Sign Up</a>
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
let dropdown = document.querySelector(".dropdown-menu");


function aggiungiClasse() {
    if(dropdown.classList.contains("show")){
        dropdown.classList.remove("show");
    }else
    dropdown.classList.add("show");
}


bottone.addEventListener("click", aggiungiClasse);
chiusura.addEventListener("click", aggiungiClasse);
