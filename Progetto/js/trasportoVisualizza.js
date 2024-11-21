let c = false;
let c1 = false;
let bodyTabella = document.querySelector('.bodyTabella');
console.log(bodyTabella);

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;

let accessToken = localStorage.getItem('accessToken');

function predefinito() {


    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            fetchTrasporto(data.id);
            console.log(data.id);

        });
}
predefinito();



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

    bodyTabella.innerHTML = '';

    dati.forEach(element => {

        if (element.azienda.id != id) {


            let tabella = `<tr>
                
                <td class="text-center">${element.azienda.nomeAzienda}</td>
                <td class="text-center">${element.id}</td>
                <td class="text-center" data-eventoid="1">${element.comunePartenza}</td>
                <td class="text-center" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="text-center" data-eventoid="1">${element.mq}</td>
                <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="text-center" data-eventoid="1">${element.carico}</td>
                <td class="text-center" data-eventoid="1">${element.scarico}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
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
let collassaRegionePartenza = document.querySelector('.collassaRegionePartenza');
let collassaRegioneArrivo = document.querySelector('.collassaRegioneArrivo');
let collassaM3 = document.querySelector('.collassaM3');


regParLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaRegionePartenza.classList.contains('collapsed')) {
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

        if (!collassaRegioneArrivo.classList.contains('collapsed')) {
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

        if (!collassaM3.classList.contains('collapsed')) {
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
let sliderDemo = document.querySelector('.slider');
let reg1 = 0;
let reg2 = 0;
let reg3 = 0;
console.log(regioniPartenza);



console.log(reg1);

regioniPartenza.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regionePartenza', element.value);
        let regioneArrivoLocal = localStorage.getItem('regioneArrivo');
        reg1 = 1;

        if (reg2 == 0 && reg1 == 1 && reg3 == 0) {

            fetchRegioniPartenza(element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0) {

            fetchRegioniDoppie(element.value, regioneArrivoLocal);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1) {

            fetchRegioniMq(element.value, demo.textContent);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1) {

            fetchRegionePartenzaArrivoMq(element.value, regioneArrivoLocal, demo.textContent);

        }
    });


});


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
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                
                <td class="text-center">${element.azienda.nomeAzienda}</td>
                <td class="text-center">${element.id}</td>
                <td class="text-center" data-eventoid="1">${element.comunePartenza}</td>
                <td class="text-center" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="text-center" data-eventoid="1">${element.mq}</td>
                <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="text-center" data-eventoid="1">${element.carico}</td>
                <td class="text-center" data-eventoid="1">${element.scarico}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;



                c = true;
                if (c1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (c) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    c1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





regioniArrivo.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioneArrivo', element.value);
        let regionePartenzaLocal = localStorage.getItem('regionePartenza');
        reg2 = 1;

        if (reg2 == 1 && reg1 == 0 && reg3 == 0) {

            fetchRegioniArrivo(element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0) {


            fetchRegioniDoppie(regionePartenzaLocal, element.value);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 1) {

            fetchRegioniMq(element.value, demo.textContent);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1) {

            fetchRegionePartenzaArrivoMq(regionePartenzaLocal, element.value, demo.textContent);

        }
    });


});


function fetchRegioniArrivo(regione) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneArrivo(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}


function filtriRegioneArrivo(regione, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaPerRegioneArrivo/${regione}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroSoloRegioneArrivo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroSoloRegioneArrivo(dati, id) {
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                
                <td class="text-center">${element.azienda.nomeAzienda}</td>
                <td class="text-center">${element.id}</td>
                <td class="text-center" data-eventoid="1">${element.comunePartenza}</td>
                <td class="text-center" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="text-center" data-eventoid="1">${element.mq}</td>
                <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="text-center" data-eventoid="1">${element.carico}</td>
                <td class="text-center" data-eventoid="1">${element.scarico}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;

                c = true;
                if (c1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (c) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    c1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}






function fetchRegioniDoppie(regionePartenza, regioneArrivo) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniDoppie(regionePartenza, regioneArrivo, data.id);
            console.log(data.id);

        });
}


function filtriRegioniDoppie(regionePartenza, regioneArrivo, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegioniDoppie(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegioniDoppie(dati, id) {
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                
                <td class="text-center">${element.azienda.nomeAzienda}</td>
                <td class="text-center">${element.id}</td>
                <td class="text-center" data-eventoid="1">${element.comunePartenza}</td>
                <td class="text-center" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="text-center" data-eventoid="1">${element.mq}</td>
                <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="text-center" data-eventoid="1">${element.carico}</td>
                <td class="text-center" data-eventoid="1">${element.scarico}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;


                c = true;
                if (c1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (c) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    c1 = true;

                }
            }

        });

    } else {

        bodyTabella.innerHTML = nessunaCorrispondenza;
    }


}



sliderDemo.addEventListener('change', () => {
    let regionePartenzaLocal = localStorage.getItem('regionePartenza');
    let regioneArrivoLocal = localStorage.getItem('regioneArrivo');
    console.log('cambiato');

    reg3 = 1;
    if (reg2 == 0 && reg1 == 0 && reg3 == 1) {

        fetchDemo(demo.textContent);

    } else if (reg2 == 1 && reg1 == 1 && reg3 == 1) {

        fetchRegionePartenzaArrivoMq(regionePartenzaLocal, regioneArrivoLocal, demo.textContent);


    } else if (reg2 == 0 && reg1 == 1 && reg3 == 1) {

        fetchRegioniMq(regionePartenzaLocal, demo.textContent);

    } else if (reg2 == 1 && reg1 == 0 && reg3 == 1) {

        fetchRegioniMq(regioneArrivoLocal, demo.textContent);

    }
});



function fetchRegioniMq(regione, mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniMq(regione, mq, data.id);
            console.log(data.id);

        });
}


function filtriRegioniMq(regione, mq, id) {

    let rottaPartenza = `http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regione}&mq=${mq}`;
    let rottaArrivo = `http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regioneArrivo=${regione}&mq=${mq}`

    if (reg1 == 0) {
        console.log('ciaoneeee');

        fetch(rottaArrivo)
            .then((res) => res.json())
            .then((data) => {

                trasportoFiltroRegioniMq(data, id)
                console.log(data);
                console.log(id);
                ascolto();

            });

    } else {
        console.log('66');

        fetch(rottaPartenza)
            .then((res) => res.json())
            .then((data) => {

                trasportoFiltroRegioniMq(data, id)
                console.log(data);
                console.log(id);
                ascolto();

            });

    }

}



function trasportoFiltroRegioniMq(dati, id) {
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                    
                    <td class="text-center">${element.azienda.nomeAzienda}</td>
                    <td class="text-center">${element.id}</td>
                    <td class="text-center" data-eventoid="1">${element.comunePartenza}</td>
                    <td class="text-center" data-eventoid="1">${element.comuneArrivo}</td>
                    <td class="text-center" data-eventoid="1">${element.mq}</td>
                    <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                    <td class="text-center" data-eventoid="1">${element.carico}</td>
                    <td class="text-center" data-eventoid="1">${element.scarico}</td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                    </tr>`;


                c = true;
                if (c1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (c) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    c1 = true;

                }
            }

        });

    } else {

        bodyTabella.innerHTML = nessunaCorrispondenza;
    }


}



function fetchRegionePartenzaArrivoMq(regionePartenza, regioneArrivo, mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniDoppieMq(regionePartenza, regioneArrivo, mq, data.id);
            console.log(data.id);

        });
}


function filtriRegioniDoppieMq(regionePartenza, regioneArrivo, mq, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegioniDoppieMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegioniDoppieMq(dati, id) {
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                
                <td class="text-center">${element.azienda.nomeAzienda}</td>
                <td class="text-center">${element.id}</td>
                <td class="text-center" data-eventoid="1">${element.comunePartenza}</td>
                <td class="text-center" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="text-center" data-eventoid="1">${element.mq}</td>
                <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="text-center" data-eventoid="1">${element.carico}</td>
                <td class="text-center" data-eventoid="1">${element.scarico}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;


                c = true;
                if (c1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (c) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    c1 = true;

                }
            }

        });

    } else {

        bodyTabella.innerHTML = nessunaCorrispondenza;
    }


}




function fetchDemo(mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriDemo(mq, data.id);
            console.log(data.id);

        });
}


function filtriDemo(mq, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroDemo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroDemo(dati, id) {
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.azienda.id != id) {


                let tabella = `<tr>
                <td class="text-center">${element.azienda.nomeAzienda}</td>
                <td class="text-center">${element.id}</td>
                <td class="text-center" data-eventoid="1">${element.comunePartenza}</td>
                <td class="text-center" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="text-center" data-eventoid="1">${element.mq}</td>
                <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="text-center" data-eventoid="1">${element.carico}</td>
                <td class="text-center" data-eventoid="1">${element.scarico}</td>
                <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;


                c = true;
                if (c1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (c) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    c1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}


let bottoneReset = document.querySelector('.bottoneReset');

bottoneReset.addEventListener('click', () => {
    location.reload();
});