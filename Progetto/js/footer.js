let footerHTML = document.querySelector(".footer");

function Footer() {
    let footer = `<footer class="footer-section">
    <div class="container">
        <div class="footer-cta pt-5">
            <div class="row">
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="cta-text">
                            <h4>Dove siamo</h4>
                            <span>Pomezia, RM</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                            <h4>Chiamaci</h4>
                            <span>32143133255</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                            <h4>Mandaci un'email</h4>
                            <span>move.connect@moveconnect.it</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="index.html"><img src="../Progetto/imgs/img.png" class="img-fluid" alt="logo"></a>
                        </div>
                        <div class="footer-text">
                            <p>Siamo un'azienda di trasporti internazionale</p>
                        </div>
                        <div class="footer-social-icon">
                            <span>Seguici</span>
                            <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                            <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                            <a href="#"><i class="fab fa-instagram instagram-bg"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Links utili</h3>
                        </div>
                        <ul>

                            <li><a href="index.html">Home</a></li>
                            <li><a href="contatti.html">Contatti</a></li>
                            <li><a href="abbonamenti.html">Abbonamenti</a></li>
                            <li><a href="tratte.html">Tratte</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="registrati.html">Sign up</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Iscriviti</h3>
                        </div>
                        <div class="footer-text mb-25">
                            <p>Not dimenticarti di iscriverti per rimanere sempre aggiornato.</p>
                        </div>
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Indirizzo Email">
                                <button><i class="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2024, Tutti i diritti riservati a <a href="https://codepen.io/anupkumar92/">Moveconnect</a></p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div class="footer-menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="terms.html">Termini</a></li>
                            <li><a href="privacyPolicy.html">Privacy</a></li>
                            <li><a href="#">Politica</a></li>
                            <li><a href="#">Contatti</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`

footerHTML.innerHTML = footer;
}

Footer();