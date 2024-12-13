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
                            <h4>Dove siamo</h4>
                            <span>Pomezia, RM</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 pb-5 d-flex justify-content-center">
                    <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                            <h4>Chiamaci</h4>
                            <span>32143133255</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30 d-flex justify-content-center">
                    <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                            <h4>Mandaci un'email</h4>
                            <span>move@moveconnect.it</span>
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
                            <a href="iscriviti.html"><img src="./imgs/img.png" class="img-fluid" alt="logo"></a>
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

                                <li><a href="iscriviti.html">Iscriviti</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="partners.html">Partners</a></li>
                                <li><a href="privacyPolicy.html">Privacy</a></li>

                            </ul>
                        
                    </div>
                </div>
                <div class="footer-social-icon col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center"
                    style="padding: 0px  10px 10px 0px">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Seguici</h3>
                        </div>
                        <a href="#"><i class="fab fa-facebook-f facebook-bg soc"></i></a>
                        <a href="#"><i class="fab fa-x-twitter twitter-bg soc"></i></a>
                        <a href="#"><i class="fab fa-instagram instagram-bg soc"></i></a>
                        <a href="#"><i class="fab fa-tiktok tiktok-bg soc"></i></a>
                        <a href="https://www.youtube.com/@MoveConnect-d6t"><i class="fab fa-youtube youtube-bg soc"></i></a>
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
                        <p>Copyright &copy; 2024, Tutti i diritti riservati a <a href="iscriviti.html">Moveconnect</a></p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

</footer>`

footerHTML.innerHTML = footer;
}

Footer();