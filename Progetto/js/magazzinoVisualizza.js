let c = false;
let c1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;

let accessToken = localStorage.getItem('accessToken');


fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchMagazzino(data.id);
        console.log(data.id);

    });


function fetchMagazzino(id) {


    let URLB = `http://127.0.0.1:8080/api/depositoMagazzino/tuttiIMagazziniConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            magazzino(data, id);
            ascolto();
        });

}



function magazzino(dati, id) {

    dati.forEach(element => {


        if (element.azienda.id != id) {


            let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regione}</td>
                        <td class="text-center" data-eventoid="1">${element.provincia}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.mq}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkDeposito" data-evento-id="${element.id}" href="./infoRichiesteDepositoMagazzino.html">INFO</a></td>
                    </tr>`;


            bodyTabella.innerHTML += tabella;

        }

    });

}


function ascolto() {

    let linkDeposito = document.querySelectorAll('.linkDeposito');

    linkDeposito.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });

}



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}



let regLink = document.querySelectorAll('.regLink');
let depositoLink = document.querySelectorAll('.depositoLink');
let mqLink = document.querySelectorAll('.mqLink');

let simboloReg = document.querySelector('.simboloReg');
let simboloDeposito = document.querySelector('.simboloDeposito');
let simboloMq = document.querySelector('.simboloMq');

let collassaRegioni = document.querySelector('.collassaRegioni');
let collassaDeposito = document.querySelector('.collassaDeposito');
let collassaMq = document.querySelector('.collassaMq');


regLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaRegioni.classList.contains('collapsed')) {
            simboloReg.classList.remove('fa-plus');
            simboloReg.classList.add('fa-minus');
        } else {
            simboloReg.classList.remove('fa-minus');
            simboloReg.classList.add('fa-plus');
        }

    })

});


depositoLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaDeposito.classList.contains('collapsed')) {
            simboloDeposito.classList.remove('fa-plus');
            simboloDeposito.classList.add('fa-minus');
        } else {
            simboloDeposito.classList.remove('fa-minus');
            simboloDeposito.classList.add('fa-plus');
        }

    })

});


mqLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaMq.classList.contains('collapsed')) {
            simboloMq.classList.remove('fa-plus');
            simboloMq.classList.add('fa-minus');
        } else {
            simboloMq.classList.remove('fa-minus');
            simboloMq.classList.add('fa-plus');
        }

    })

});



let regioniDeposito = document.querySelectorAll('.regioniDeposito');
let tipoDeposito = document.querySelectorAll('.tipoDeposito');
let deposito1 = document.querySelector('.deposito1');
let deposito2 = document.querySelector('.deposito2');
let deposito3 = document.querySelector('.deposito3');
let demo = document.querySelector('.demo');
let sliderDemo = document.querySelector('.slider');
let reg1 = 0;
let reg2 = 0;
let reg3 = 0;


let bottoneReset = document.querySelector('.bottoneReset');

bottoneReset.addEventListener('click', () => {
    location.reload();
});




regioniDeposito.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioniDeposito', element.value);

        reg1 = 1;

        let mobilioParsato = parseInt(deposito1.value);
        let pedaneParsato = parseInt(deposito2.value);
        let altroParsato = parseInt(deposito3.value);

        if (reg2 == 0 && reg1 == 1 && reg3 == 0) {

            fetchRegioniDeposito(element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0) {

            fetchRegioniTipoDeposito(element.value, mobilioParsato, pedaneParsato, altroParsato);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1) {

            fetchRegioniMq(element.value, demo.textContent);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1) {

            fetchRegioneTipoDepositoMq(element.value, mobilioParsato, pedaneParsato, altroParsato, demo.textContent);

        }
    });


});