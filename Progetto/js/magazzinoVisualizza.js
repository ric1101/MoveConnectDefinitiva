let d = false;
let d1 = false;
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



var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
    output1.innerHTML = this.value;
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
let demo1 = document.querySelector('.demo1');
let sliderDemo1 = document.querySelector('.slider1');
let mag1 = 0;
let mag2 = 0;
let mag3 = 0;


let bottoneReset = document.querySelector('.bottoneReset');

bottoneReset.addEventListener('click', () => {
    location.reload();
});




regioniDeposito.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioniDeposito', element.value);

        mag1 = 1;

        let mobilioParsato = parseInt(deposito1.value);
        let pedaneParsato = parseInt(deposito2.value);
        let altroParsato = parseInt(deposito3.value);

        if (mag2 == 0 && mag1 == 1 && mag3 == 0) {

            fetchRegioniDeposito(element.value);

        } else if (mag2 == 1 && mag1 == 1 && mag3 == 0) {

            fetchRegioniTipoDeposito(element.value, mobilioParsato, pedaneParsato, altroParsato);

        } else if (mag2 == 0 && mag1 == 1 && mag3 == 1) {

            fetchRegioniDepositoMq(element.value, demo1.textContent);

        } else if (mag2 == 1 && mag1 == 1 && mag3 == 1) {

            fetchRegioneTipoDepositoMq(element.value, mobilioParsato, pedaneParsato, altroParsato, demo1.textContent);

        }
    });


});



tipoDeposito.forEach(element => {
    let regioniDeposito = localStorage.getItem('regioniDeposito');

    element.addEventListener('click', () => {

        mag2 = 1;

        if (element.hasAttribute('checked')) {
            element.removeAttribute('checked');
        } else {
            element.setAttribute('checked', true);
        }
        console.log(element.value);

        if (element.hasAttribute('checked')) {
            element.setAttribute('value', 1);
        } else {
            element.setAttribute('value', 0);

        }

        let mobilioParsato = parseInt(deposito1.value);
        let pedaneParsato = parseInt(deposito2.value);
        let altroParsato = parseInt(deposito3.value);

        if (mag2 == 1 && mag1 == 0 && mag3 == 0) {

            fetchTipoDeposito(mobilioParsato, pedaneParsato, altroParsato);

        } else if (mag2 == 1 && mag1 == 1 && mag3 == 0) {

            fetchRegioniTipoDeposito(regioniDeposito, mobilioParsato, pedaneParsato, altroParsato);

        } else if (mag2 == 1 && mag1 == 0 && mag3 == 1) {

            fetchTipoDepositoMq(mobilioParsato, pedaneParsato, altroParsato, demo1.textContent);

        } else if (mag2 == 1 && mag1 == 1 && mag3 == 1) {

            fetchRegioneTipoDepositoMq(regioniDeposito, mobilioParsato, pedaneParsato, altroParsato, demo1.textContent);

        }
    });


});



sliderDemo1.addEventListener('change', () => {
    let regioniDeposito = localStorage.getItem('regioniDeposito');
    console.log('cambiato');

    mag3 = 1;

    let mobilioParsato = parseInt(deposito1.value);
    let pedaneParsato = parseInt(deposito2.value);
    let altroParsato = parseInt(deposito3.value);

    if (mag2 == 0 && mag1 == 0 && mag3 == 1) {

        fetchDemoDeposito(demo1.textContent);

    } else if (mag2 == 1 && mag1 == 1 && mag3 == 1) {

        fetchRegioneTipoDepositoMq(regioniDeposito, mobilioParsato, pedaneParsato, altroParsato, demo1.textContent);

    } else if (mag2 == 0 && mag1 == 1 && mag3 == 1) {

        fetchRegioniDepositoMq(regioniDeposito, demo1.textContent);

    } else if (mag2 == 1 && mag1 == 0 && mag3 == 1) {

        fetchTipoDepositoMq(mobilioParsato, pedaneParsato, altroParsato, demo1.textContent);

    }
});




function fetchRegioniDeposito(regione) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneDeposito(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

function filtriRegioneDeposito(regione, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tuttiIMagazziniConAziendaPerRegione/${regione}`)
        .then((res) => res.json())
        .then((data) => {

            depositoFiltroSoloRegione(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function depositoFiltroSoloRegione(dati, id) {
    d = false;
    d1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



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



                d = true;
                if (d1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (d) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    d1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}




function fetchRegioniTipoDeposito(regione, mobilio, pedane, altro) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneDeposito(regione, mobilio, pedane, altro, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

function filtriRegioneTipoDeposito(regione, mobilio, pedane, altro, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tuttiMagazziniConAziendaTutto?regione=${regione}&mobilio=${mobilio}&pedane=${pedane}&altro=${altro}`)
        .then((res) => res.json())
        .then((data) => {

            depositoFiltroRegioneTipoDeposito(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function depositoFiltroRegioneTipoDeposito(dati, id) {
    d = false;
    d1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



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



                d = true;
                if (d1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (d) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    d1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}




function fetchRegioniDepositoMq(regione, mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneDepositoMq(regione, mq, data.id);
            console.log(data.id);
            console.log(regione);

        });
}


function filtriRegioneDepositoMq(regione, mq, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tuttiMagazziniConAziendaTutto?regione=${regione}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            depositoFiltroRegioneDepositoMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}


function depositoFiltroRegioneDepositoMq(dati, id) {
    d = false;
    d1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



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



                d = true;
                if (d1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (d) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    d1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}




function fetchRegioneTipoDepositoMq(regione, mobilio, pedane, altro, mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneTipoDepositoMq(regione, mobilio, pedane, altro, mq, data.id);
            console.log(data.id);
            console.log(regione);

        });
}


function filtriRegioneTipoDepositoMq(regione, mobilio, pedane, altro, mq, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tuttiMagazziniConAziendaTutto?regione=${regione}&mobilio=${mobilio}&pedane=${pedane}&altro=${altro}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            depositoFiltroRegioneTipoDepositoMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}


function depositoFiltroRegioneTipoDepositoMq(dati, id) {
    d = false;
    d1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



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



                d = true;
                if (d1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (d) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    d1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}




function fetchTipoDeposito(mobilio, pedane, altro) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriTipoDeposito(mobilio, pedane, altro, data.id);
            console.log(data.id);

        });
}

function filtriTipoDeposito(mobilio, pedane, altro, id) {


    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tuttiMagazziniConAziendaTutto?mobilio=${mobilio}&pedane=${pedane}&altro=${altro}`)
        .then((res) => res.json())
        .then((data) => {

            depositoFiltroTipoDeposito(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function depositoFiltroTipoDeposito(dati, id) {
    d = false;
    d1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



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



                d = true;
                if (d1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (d) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    d1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





function fetchTipoDepositoMq(mobilio, pedane, altro, mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriTipoDepositoMq(mobilio, pedane, altro, mq, data.id);
            console.log(data.id);

        });
}

function filtriTipoDepositoMq(mobilio, pedane, altro, mq, id) {


    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tuttiMagazziniConAziendaTutto?mobilio=${mobilio}&pedane=${pedane}&altro=${altro}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            depositoFiltroTipoDepositoMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function depositoFiltroTipoDepositoMq(dati, id) {
    d = false;
    d1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



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



                d = true;
                if (d1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (d) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    d1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





function fetchDemoDeposito(mq) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriTipoDepositoMq(mq, data.id);
            console.log(data.id);

        });
}

function filtriDemoDeposito(mq, id) {


    fetch(`http://127.0.0.1:8080/api/depositoMagazzino/tuttiMagazziniConAziendaTutto?mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            depositoFiltroDemoDeposito(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function depositoFiltroDemoDeposito(dati, id) {
    d = false;
    d1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



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



                d = true;
                if (d1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (d) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    d1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}



