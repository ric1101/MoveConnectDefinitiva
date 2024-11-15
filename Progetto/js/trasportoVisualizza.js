

let bodyTabella = document.querySelector('.bodyTabella');
console.log(bodyTabella);

let accessToken = localStorage.getItem('accessToken');


fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchTrasporto(data.id);
        console.log(data.id);

    });


function fetchTrasporto(id) {


    let URLB = `http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            trasporto(data, id)
            ascolto();

        });

}



function trasporto(dati, id) {

    dati.forEach(element => {

        if (element.azienda.id != id) {

            console.log(element.azienda.logo, element.azienda.nomeAzienda, element.azienda.azienda_id);

            let tabella = `<tr>
                <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
                <td class="">${element.azienda.nomeAzienda}</td>
                <td class="">${element.id}</td>
                <td class="" data-eventoid="1">${element.comunePartenza}</td>
                <td class="" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="" data-eventoid="1">${element.mq}</td>
                <td class="" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="" data-eventoid="1">${element.carico}</td>
                <td class="" data-eventoid="1">${element.scarico}</td>
                <td class="" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;


            bodyTabella.innerHTML += tabella;

        }

    });

}


function ascolto() {

    let linkTrasporto = document.querySelectorAll('.linkTrasporto');

    linkTrasporto.forEach(element => {
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



let regParLink = document.querySelectorAll('.regParLink');
let regArrLink = document.querySelectorAll('.regArrLink');
let m3Link = document.querySelectorAll('.m3Link');
let simboloPar = document.querySelector('.simboloPar');
let simboloArr = document.querySelector('.simboloArr');
let simboloM3 = document.querySelector('.simboloM3');


regParLink.forEach(element => {

    element.addEventListener('click', () => {

        if (simboloPar.classList.contains('fa-plus')) {
            simboloPar.classList.remove('fa-plus');
            simboloPar.classList.add('fa-minus');
        } else {
            simboloPar.classList.remove('fa-minus');
            simboloPar.classList.add('fa-plus');
        }

    })

});


regArrLink.forEach(element => {

    element.addEventListener('click', () => {

        if (simboloArr.classList.contains('fa-plus')) {
            simboloArr.classList.remove('fa-plus');
            simboloArr.classList.add('fa-minus');
        } else {
            simboloArr.classList.remove('fa-minus');
            simboloArr.classList.add('fa-plus');
        }

    })

});


m3Link.forEach(element => {

    element.addEventListener('click', () => {

        if (simboloM3.classList.contains('fa-plus')) {
            simboloM3.classList.remove('fa-plus');
            simboloM3.classList.add('fa-minus');
        } else {
            simboloM3.classList.remove('fa-minus');
            simboloM3.classList.add('fa-plus');
        }

    })

});



let regioniPartenza = document.querySelectorAll('.regioniPartenza');
let regioniArrivo = document.querySelectorAll('.regioniArrivo');
let demo = document.querySelector('.demo');
let reg1 = 0;
console.log(regioniPartenza);

console.log(reg1);

regioniPartenza.forEach(element => {

    element.addEventListener('click', () => {
        reg1 = 1;
        if (reg2) {
            
        }
        fetchRegioniPartenza(element.value)
    });


});



 

// regioniArrivo.forEach(element => {

//     element.addEventListener('click', () => {
//         fetchRegioniArrivo(element.value)
//     });


// });


function fetchRegioniPartenza(regione) {
    console.log(reg1);
    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenza(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

function filtriRegionePartenza(regione, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaPerRegionePartenza/${regione}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroSoloRegionePartenza(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}


function trasportoFiltroSoloRegionePartenza(dati, id) {

    console.log(dati);
    console.log(id);
    

    if (dati.length != 0) {

        

        dati.forEach(element => {



            if (element.azienda.id != id) {

                console.log(element.azienda.logo, element.azienda.nomeAzienda, element.azienda.azienda_id);

                let tabella = `<tr>
                <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
                <td class="">${element.azienda.nomeAzienda}</td>
                <td class="">${element.id}</td>
                <td class="" data-eventoid="1">${element.comunePartenza}</td>
                <td class="" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="" data-eventoid="1">${element.mq}</td>
                <td class="" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="" data-eventoid="1">${element.carico}</td>
                <td class="" data-eventoid="1">${element.scarico}</td>
                <td class="" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;


                bodyTabella.innerHTML = tabella;

            } else {
                bodyTabella.innerHTML = 'Non ci sono corrispondenze!';
            }

        });

    } else {
        bodyTabella.innerHTML = 'Non ci sono corrispondenze!';
    }

}




