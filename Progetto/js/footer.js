let footerHTML = document.querySelector(".footer");

function Footer() {
    let footer = `<footer class="footer-section ">
    <div class="container ">
        <div class="footer-cta pt-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 pb-5 d-flex justify-content-center">
                    <div class="single-cta">
                        <i class="fas fa-map-marker-alt" style="padding-right: 5px"></i>
                        <div class="cta-text">
                            <h4>Sede Legale</h4>
                            <span>Via Masaccio 8, 42124<br>Reggio Emilia RE<br>P.Iva: 03077140352</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 pb-5 d-flex justify-content-center">
                    <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                            <h4>Chiamaci</h4>
                            <span>+39 331 955 4877</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30 d-flex justify-content-center">
                    <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                            <h4>Mandaci un'email</h4>
                            <span>info@moveconnect.it</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-50 pb-5 d-flex justify-content-center">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="index.html"><img src="./imgs/img.png" class="img-fluid" alt="logo"></a>
                        </div>
                        <div class="footer-text">
                            <p>Siamo un'azienda di traslochi</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 d-flex justify-content-center">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Links utili</h3>
                        </div>
                        
                            <ul style="padding-left: 0rem !important;">

                                <li><a href="index.html">Home</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="partners.html">Partners</a></li>

                            </ul>
                        
                    </div>
                </div>
                <div class="footer-social-icon col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Seguici</h3>
                        </div>
                        <a href="https://www.facebook.com/profile.php?id=61571642270034" target="_blank"><i class="fab fa-facebook-f facebook-bg soc"></i></a>
                        <a href="https://x.com/Move_Connect_" target="_blank"><i class="fab fa-x-twitter twitter-bg soc"></i></a>
                        <a href="https://www.instagram.com/moveconnect.srl?igsh=MTU5cjAxdzh0NjNleA==" target="_blank"><i class="fab fa-instagram instagram-bg soc"></i></a>
                        <a href="http://tiktok.com/@move.connect_" target="_blank"><i class="fab fa-tiktok tiktok-bg soc"></i></a>
                        <a href="https://www.youtube.com/@MoveConnect-d6t" target="_blank"><i class="fab fa-youtube youtube-bg soc"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-area">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2024, Tutti i diritti riservati a <a href="index.html">Moveconnect</a></p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 text-center">
                    <div class="footer-menu text-center">
                        <ul class="mb-0 text-center">
                            <li><a href="https://www.iubenda.com/privacy-policy/78378781/legal?an=no&s_ck=false&newmarkup=yes">Privacy</a></li>
                            <li><a href="https://www.iubenda.com/privacy-policy/78378781/cookie-policy?an=no&s_ck=false&newmarkup=yes">Cookie</a></li>
                            <li><a onclick="gestisci()">Gestionale Blog</a></li>
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


function gestisci() {
    
    let accessToken = localStorage.getItem('accessToken');
    
        fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
    
               if (data.abbonamento == 'ADMIN') {
                
                window.location.href = 'gestionaleBlogDesign.html';

               } else {

                window.location.href = 'pagina404.html';

               }
                
    
    
            });

}