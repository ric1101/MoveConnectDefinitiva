let t = false;
let t1 = false;
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
let merceLink = document.querySelectorAll('.merceLink');

let simboloPar = document.querySelector('.simboloPar');
let simboloArr = document.querySelector('.simboloArr');
let simboloM3 = document.querySelector('.simboloM3');
let simboloMerce = document.querySelector('.simboloMerce');

let collassaRegionePartenza = document.querySelector('.collassaRegionePartenza');
let collassaRegioneArrivo = document.querySelector('.collassaRegioneArrivo');
let collassaM3 = document.querySelector('.collassaM3');
let collassaMerce = document.querySelector('.collassaMerce');


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


merceLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaMerce.classList.contains('collapsed')) {
            simboloMerce.classList.remove('fa-plus');
            simboloMerce.classList.add('fa-minus');
        } else {
            simboloMerce.classList.remove('fa-minus');
            simboloMerce.classList.add('fa-plus');
        }

    })

});



let regioniPartenza = document.querySelectorAll('.regioniPartenza');
let regioniArrivo = document.querySelectorAll('.regioniArrivo');
let tipoMerce = document.querySelectorAll('.tipoMerce');
let demo = document.querySelector('.demo');
let sliderDemo = document.querySelector('.slider');
let reg1 = 0;
let reg2 = 0;
let reg3 = 0;
let reg4 = 0;
console.log(regioniPartenza);



console.log(reg1);




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
    t = false;
    t1 = false;
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



                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}




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
    t = false;
    t1 = false;
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

                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

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
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {

        bodyTabella.innerHTML = nessunaCorrispondenza;
    }


}






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
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

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
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

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
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}






regioniPartenza.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regionePartenza', element.value);
        let regioneArrivoLocal = localStorage.getItem('regioneArrivo');
        let merce = localStorage.getItem('merce');
        reg1 = 1;

        if (reg2 == 0 && reg1 == 1 && reg3 == 0 && reg4 == 0) {

            fetchRegioniPartenza(element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0 && reg4 == 0) {

            fetchRegioniDoppie(element.value, regioneArrivoLocal);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1 && reg4 == 0) {

            fetchRegionePartenzaMerce(element.value, merce);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 0 && reg4 == 1) {

            fetchRegioniMq(element.value, demo.textContent);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0 && reg4 == 1) {

            fetchRegionePartenzaArrivoMq(element.value, regioneArrivoLocal, demo.textContent);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1 && reg4 == 0) {

            fetchRegionePartenzaArrivoMerce(element.value, regioneArrivoLocal, merce);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1 && reg4 == 1) {

            fetchRegionePartenzaArrivoMerceMq(element.value, regioneArrivoLocal, merce, demo.textContent);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1 && reg4 == 1) {

            fetchRegionePartenzaMerceMq(element.value, merce, demo.textContent);

        }
    });


});


regioniArrivo.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioneArrivo', element.value);
        let regionePartenzaLocal = localStorage.getItem('regionePartenza');
        let merce = localStorage.getItem('merce');
        reg2 = 1;

        if (reg2 == 1 && reg1 == 0 && reg3 == 0 && reg4 == 0) {

            fetchRegioniArrivo(element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0 && reg4 == 0) {

            fetchRegioniDoppie(regionePartenzaLocal, element.value);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 1 && reg4 == 0) {

            fetchRegioneArrivoMerce(element.value, merce);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1 && reg4 == 0) {

            fetchRegionePartenzaArrivoMerce(regionePartenzaLocal, element.value, merce);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1 && reg4 == 1) {

            fetchRegionePartenzaArrivoMerceMq(regionePartenzaLocal, element.value, merce, demo.textContent);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 0 && reg4 == 1) {

            fetchRegioniMq(element.value, demo.textContent);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 1 && reg4 == 1) {

            fetchRegioneArrivoMerceMq(element.value, merce, demo.textContent);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0 && reg4 == 1) {

            fetchRegionePartenzaArrivoMq(regionePartenzaLocal, element.value, demo.textContent);

        }
    });


});


tipoMerce.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('merce', element.value);
        let regionePartenzaLocal = localStorage.getItem('regionePartenza');
        let regioneArrivoLocal = localStorage.getItem('regioneArrivo');
        reg3 = 1;

        if (reg2 == 0 && reg1 == 0 && reg3 == 1 && reg4 == 0) {

            fetchMerce(element.value);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1 && reg4 == 0) {

            fetchRegionePartenzaMerce(regionePartenzaLocal, element.value);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 1 && reg4 == 0) {

            fetchRegioneArrivoMerce(regioneArrivoLocal, element.value);

        } else if (reg2 == 0 && reg1 == 0 && reg3 == 1 && reg4 == 1) {

            fetchMerceMq(element.value, demo.textContent);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1 && reg4 == 0) {

            fetchRegionePartenzaArrivoMerce(regionePartenzaLocal, regioneArrivoLocal, element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1 && reg4 == 1) {

            fetchRegionePartenzaArrivoMerceMq(regionePartenzaLocal, regioneArrivoLocal, element.value, demo.textContent);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1 && reg4 == 1) {

            fetchRegionePartenzaMerceMq(regionePartenzaLocal, element.value, demo.textContent);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 1 && reg4 == 1) {

            fetchRegioneArrivoMerceMq(regioneArrivoLocal, element.value, demo.textContent);

        }


        
    });


});



sliderDemo.addEventListener('change', () => {
    let regionePartenzaLocal = localStorage.getItem('regionePartenza');
    let regioneArrivoLocal = localStorage.getItem('regioneArrivo');
    let merce = localStorage.getItem('merce');

    console.log('cambiato');

    reg4 = 1;

    if (reg2 == 0 && reg1 == 0 && reg3 == 0 && reg4 == 1) {

        fetchDemo(demo.textContent);

    } else if (reg2 == 1 && reg1 == 1 && reg3 == 0 && reg4 == 1) {

        fetchRegionePartenzaArrivoMq(regionePartenzaLocal, regioneArrivoLocal, demo.textContent);

    } else if (reg2 == 0 && reg1 == 1 && reg3 == 0 && reg4 == 1) {

        fetchRegioniMq(regionePartenzaLocal, demo.textContent);

    } else if (reg2 == 1 && reg1 == 0 && reg3 == 0 && reg4 == 1) {

        fetchRegioniMq(regioneArrivoLocal, demo.textContent);

    } else if (reg2 == 1 && reg1 == 0 && reg3 == 1 && reg4 == 1) {

        fetchRegionePartenzaMerceMq(regionePartenzaLocal, merce, demo.textContent);

    } else if (reg2 == 0 && reg1 == 1 && reg3 == 1 && reg4 == 1) {

        fetchRegioneArrivoMerceMq(regioneArrivoLocal, merce, demo.textContent);

    } else if (reg2 == 1 && reg1 == 1 && reg3 == 1 && reg4 == 1) {

        fetchRegioneArrivoPartenzaMerceMq(regioneArrivoLocal, regionePartenzaLocal, merce, demo.textContent);

    } else if (reg2 == 0 && reg1 == 0 && reg3 == 1 && reg4 == 1) {

        fetchMerceMq(merce, demo.textContent);

    }
});




let bottoneReset = document.querySelector('.bottoneReset');

bottoneReset.addEventListener('click', () => {
    location.reload();
});








function fetchMerce(merce) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriDemo(merce, data.id);
            console.log(data.id);

        });
}


function filtriDemo(merce, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?tipoDiVeicolo=${merce}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroMerce(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroMerce(dati, id) {
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}



function fetchRegionePartenzaMerce(regionePartenza, merce) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaMerce(regionePartenza, merce, data.id);
            console.log(data.id);

        });
}


function filtriRegionePartenzaMerce(regionePartenza, merce, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&tipoDiVeicolo=${merce}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegionePartenzaMerce(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegionePartenzaMerce(dati, id) {
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}






function fetchRegioneArrivoMerce(regioneArrivo, merce) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {
            
            filtriRegioneArrivoMerce(regioneArrivo, merce, data.id);
            console.log(data.id);

        });
}


function filtriRegioneArrivoMerce(regioneArrivo, merce, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${merce}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegioneArrivoMerce(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegioneArrivoMerce(dati, id) {
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}






function fetchRegionePartenzaArrivoMerce(regionePartenza, regioneArrivo, merce) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {
            
            filtriRegionePartenzaArrivoMerce(regionePartenza, regioneArrivo, merce, data.id);
            console.log(data.id);

        });
}


function filtriRegionePartenzaArrivoMerce(regionePartenza, regioneArrivo, merce, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${merce}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegionePartenzaArrivoMerce(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegionePartenzaArrivoMerce(dati, id) {
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}








function fetchRegionePartenzaArrivoMerceMq(regionePartenza, regioneArrivo, merce, mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {
            
            filtriRegionePartenzaArrivoMerceMq(regionePartenza, regioneArrivo, merce, mq, data.id);
            console.log(data.id);

        });
}


function filtriRegionePartenzaArrivoMerceMq(regionePartenza, regioneArrivo, merce, mq, id) {


    fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${merce}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegionePartenzaArrivoMerceMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegionePartenzaArrivoMerceMq(dati, id) {
    t = false;
    t1 = false;
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


                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}