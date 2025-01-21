let t = false;
let t1 = false;
let bodyTabella = document.querySelector('.bodyTabella');
console.log(bodyTabella);

let accessToken = localStorage.getItem('accessToken');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;


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
         

        });

}



function trasporto(dati, id) {
    t = false;
    t1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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




async function fetchRegioniPartenza(regione) {
    console.log(reg1);
    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenza(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

async function filtriRegionePartenza(regione, id) {

    console.log(regione);

    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaPerRegionePartenza/${regione}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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




async function fetchRegioniArrivo(regione) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneArrivo(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}


async function filtriRegioneArrivo(regione, id) {

    console.log(regione);

    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaPerRegioneArrivo/${regione}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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






async function fetchRegioniDoppie(regionePartenza, regioneArrivo) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniDoppie(regionePartenza, regioneArrivo, data.id);
            console.log(data.id);

        });
}


async function filtriRegioniDoppie(regionePartenza, regioneArrivo, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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






async function fetchRegioniMq(regione, mq) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniMq(regione, mq, data.id);
            console.log(data.id);

        });
}


async function filtriRegioniMq(regione, mq, id) {

    let rottaPartenza = `http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regione}&mq=${mq}`;
    let rottaArrivo = `http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regioneArrivo=${regione}&mq=${mq}`

    if (reg1 == 0) {
        console.log('ciaoneeee');

        await fetch(rottaArrivo)
            .then((res) => res.json())
            .then((data) => {

                trasportoFiltroRegioniMq(data, id)
                console.log(data);
                console.log(id);
                ascolto();

            });

    } else {
        console.log('66');

        await fetch(rottaPartenza)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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



async function fetchRegionePartenzaArrivoMq(regionePartenza, regioneArrivo, mq) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniDoppieMq(regionePartenza, regioneArrivo, mq, data.id);
            console.log(data.id);

        });
}


async function filtriRegioniDoppieMq(regionePartenza, regioneArrivo, mq, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}&mq=${mq}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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




async function fetchDemo(mq) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriDemo(mq, data.id);
            console.log(data.id);
            console.log("SONO QUI");


        });
}


async function filtriDemo(mq, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            console.log("POI ENTRO QUI");
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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
        console.log(demo.textContent);


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

        fetchRegionePartenzaArrivoMerceMq(regionePartenzaLocal, regioneArrivoLocal, merce, demo.textContent);

    } else if (reg2 == 0 && reg1 == 0 && reg3 == 1 && reg4 == 1) {

        fetchMerceMq(merce, demo.textContent);

    }
});







async function fetchMerce(merce) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriMerce(merce, data.id);
            console.log(data.id);

        });
}


async function filtriMerce(merce, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?tipoDiVeicolo=${merce}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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



async function fetchRegionePartenzaMerce(regionePartenza, merce) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaMerce(regionePartenza, merce, data.id);
            console.log(data.id);

        });
}


async function filtriRegionePartenzaMerce(regionePartenza, merce, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&tipoDiVeicolo=${merce}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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






async function fetchRegioneArrivoMerce(regioneArrivo, merce) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneArrivoMerce(regioneArrivo, merce, data.id);
            console.log(data.id);

        });
}


async function filtriRegioneArrivoMerce(regioneArrivo, merce, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${merce}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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






async function fetchRegionePartenzaArrivoMerce(regionePartenza, regioneArrivo, merce) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaArrivoMerce(regionePartenza, regioneArrivo, merce, data.id);
            console.log(data.id);

        });
}


async function filtriRegionePartenzaArrivoMerce(regionePartenza, regioneArrivo, merce, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${merce}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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








async function fetchRegionePartenzaArrivoMerceMq(regionePartenza, regioneArrivo, merce, mq) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaArrivoMerceMq(regionePartenza, regioneArrivo, merce, mq, data.id);
            console.log(data.id);

        });
}


async function filtriRegionePartenzaArrivoMerceMq(regionePartenza, regioneArrivo, merce, mq, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${merce}&mq=${mq}`)
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
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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






async function fetchRegionePartenzaMerceMq(regionePartenza, merce, mq) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaMerceMq(regionePartenza, merce, mq, data.id);
            console.log(data.id);

        });
}


async function filtriRegionePartenzaMerceMq(regionePartenza, merce, mq, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regionePartenza=${regionePartenza}&tipoDiVeicolo=${merce}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegionePartenzaMerceMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegionePartenzaMerceMq(dati, id) {
    t = false;
    t1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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







async function fetchRegioneArrivoMerceMq(regioneArrivo, merce, mq) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneArrivoMerceMq(regioneArrivo, merce, mq, data.id);
            console.log(data.id);

        });
}


async function filtriRegioneArrivoMerceMq(regioneArrivo, merce, mq, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${merce}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroRegioneArrivoMerceMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function trasportoFiltroRegioneArrivoMerceMq(dati, id) {
    t = false;
    t1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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









async function fetchMerceMq(merce, mq) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriMerceMq(merce, mq, data.id);
            console.log(data.id);

        });
}


async function filtriMerceMq(merce, mq, id) {


    await fetch(`http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAziendaTutto?tipoDiVeicolo=${merce}&mq=${mq}`)
        .then((res) => res.json())
        .then((data) => {

            trasportoFiltroMerceMq(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });


}



function trasportoFiltroMerceMq(dati, id) {
    t = false;
    t1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {


        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trasporto/byAziendaRichiesta?trasportoId=${element.id}`)
                    .then((res) => res.json())
                    .then((data) => {

                        console.log(data);


                        data.forEach(element => {
                            if (element.aziendaDTO.id == id) {


                                esitoControllo = true;


                            } else {



                            }



                        })
                        console.log(esitoControllo);
                        if (esitoControllo == false) {
                            console.log('1');
                            entrata = true;
                            visualizzaRecord(esitoControllo);
                            
                        } else {
                            console.log('2');
                            console.log(entrata);
                            
                            if (entrata == false) {

                                bodyTabella.innerHTML = nessunaCorrispondenza;

                            }
                        }

                    });

                function visualizzaRecord() {


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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                    t = true;
                    if (t1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    t1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (t) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    t1 = true;

                }
            }
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


let bottoneReset = document.querySelector('.bottoneReset');

bottoneReset.addEventListener('click', () => {
    location.reload();
});

function inviaMailTrasporto(emailAziendale) {

    const subject = "Richiesta Moveconnect";
    const body = "Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
    const MailToLink = `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = MailToLink;

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






