let containerToto = document.querySelector(".container-finale");

function stampaPartners(){
    let partnerz = `<hr>

    <div class="row partnerUtente">
        <div class="col-md-3 col-sm-12 partnerImage">
            <img class="immaginePartner" src="../Progetto/imgs/9.png" alt="">
            
        </div>

        <div class="col-md-9 col-sm-12 partnerDati">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta beatae explicabo et provident sed quaerat obcaecati, nulla exercitationem? Nisi reprehenderit, placeat nemo quis asperiores numquam aperiam maiores corporis voluptas! Esse voluptatem architecto corrupti soluta ducimus, repellendus provident vel eaque quasi quas ipsa itaque in, dolorum voluptas, earum neque explicabo.</p>

            <p>Usa il nostro codice sconto per avere un <h3 style="color: rgb(38, 169, 38);">10%</h3> di sconto</p>

            <div class="discount">
                <h2>Discount code:</h2>
                <div class="codice">
                    <H3 class="cod">FORZAROMA1927</H3>
                </div>
            </div>
        </div>
        

    </div>
    <hr>
    
    <hr>

    <div class="row partnerUtente">
        <div class="col-md-3 col-sm-12 partnerImage">
            <img class="immaginePartner" src="../Progetto/imgs/6.png" alt="">
            
        </div>

        <div class="col-md-9 col-sm-12 partnerDati">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta beatae explicabo et provident sed quaerat obcaecati, nulla exercitationem? Nisi reprehenderit, placeat nemo quis asperiores numquam aperiam maiores corporis voluptas! Esse voluptatem architecto corrupti soluta ducimus, repellendus provident vel eaque quasi quas ipsa itaque in, dolorum voluptas, earum neque explicabo.</p>

            <p>Usa il nostro codice sconto per avere un <h3 style="color: rgb(38, 169, 38);">50%</h3> di sconto</p>

            <div class="discount">
                <h2>Discount code:</h2>
                <div class="codice">
                    <H3 class="cod">ABBASSOAPPLES3MPR3</H3>
                </div>
            </div>
        </div>
        

    </div>
    <hr>
    
    <hr>

    <div class="row partnerUtente">
        <div class="col-md-3 col-sm-12 partnerImage">
            <img class="immaginePartner" src="../Progetto/imgs/4.png" alt="">
            
        </div>

        <div class="col-md-9 col-sm-12 partnerDati">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta beatae explicabo et provident sed quaerat obcaecati, nulla exercitationem? Nisi reprehenderit, placeat nemo quis asperiores numquam aperiam maiores corporis voluptas! Esse voluptatem architecto corrupti soluta ducimus, repellendus provident vel eaque quasi quas ipsa itaque in, dolorum voluptas, earum neque explicabo.</p>

            <p>Usa il nostro codice sconto per avere un <h3 style="color: rgb(38, 169, 38);">30%</h3> di sconto</p>

            <div class="discount">
                <h2>Discount code:</h2>
                <div class="codice">
                    <H3 class="cod">F0RZ4S4MSUNG</H3>
                </div>
            </div>
        </div>
        

    </div>
    <hr>`
    
    containerToto.innerHTML = partnerz;
}

stampaPartners();