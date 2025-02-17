let tt = false;
let tt1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let accessToken = localStorage.getItem('accessToken');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;


fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchTratte(data.id);
        console.log(data.id);

    });




function fetchTratte(id) {


    let URLB = `http://localhost:8080/api/tratta/tuttLeTratteConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            tratte(data, id);
            ascolto();
        });
}



function tratte(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}







let regParLink = document.querySelectorAll('.regParLink');
let regArrLink = document.querySelectorAll('.regArrLink');
let veicoloLink = document.querySelectorAll('.veicoloLink');

let simboloPar = document.querySelector('.simboloPar');
let simboloArr = document.querySelector('.simboloArr');
let simboloVeicolo = document.querySelector('.simboloVeicolo');

let collassaRegionePartenza = document.querySelector('.collassaRegionePartenza');
let collassaRegioneArrivo = document.querySelector('.collassaRegioneArrivo');
let collassaVeicolo = document.querySelector('.collassaVeicolo');


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


veicoloLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaVeicolo.classList.contains('collapsed')) {
            simboloVeicolo.classList.remove('fa-plus');
            simboloVeicolo.classList.add('fa-minus');
        } else {
            simboloVeicolo.classList.remove('fa-minus');
            simboloVeicolo.classList.add('fa-plus');
        }

    })

});



let regioniPartenza = document.querySelectorAll('.regioniPartenza');
let regioniArrivo = document.querySelectorAll('.regioniArrivo');
let tipoVeicolo = document.querySelectorAll('.tipoVeicolo');
let tra1 = 0;
let tra2 = 0;
let tra3 = 0;


regioniPartenza.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioniPartenza', element.value);
        let regioneArrivoLocal = localStorage.getItem('regioniArrivo');
        let tipoVeicoloLocal = localStorage.getItem('tipoVeicolo');
        tra1 = 1;
        console.log(element.value);


        if (tra2 == 0 && tra1 == 1 && tra3 == 0) {

            fetchRegionePartenza(element.value);

        } else if (tra2 == 1 && tra1 == 1 && tra3 == 0) {

            fetchRegionePartenzaArrivo(element.value, regioneArrivoLocal);

        } else if (tra2 == 1 && tra1 == 1 && tra3 == 1) {

            fetchRegioniPartenzaArrivoVeicolo(element.value, regioneArrivoLocal, tipoVeicoloLocal);

        } else if (tra2 == 0 && tra1 == 1 && tra3 == 1) {

            fetchRegionePartenzaVeicolo(element.value, tipoVeicoloLocal);

        }
    });


});




regioniArrivo.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioniArrivo', element.value);
        let regioniPartenzaLocal = localStorage.getItem('regioniPartenza');
        let tipoVeicoloLocal = localStorage.getItem('tipoVeicolo');
        tra2 = 1;
        console.log(element.value);


        if (tra2 == 1 && tra1 == 0 && tra3 == 0) {

            fetchRegioneArrivo(element.value);

        } else if (tra2 == 1 && tra1 == 1 && tra3 == 0) {

            fetchRegionePartenzaArrivo(regioniPartenzaLocal, element.value);

        } else if (tra2 == 1 && tra1 == 1 && tra3 == 1) {

            fetchRegioniPartenzaArrivoVeicolo(regioniPartenzaLocal, element.value, tipoVeicoloLocal);

        } else if (tra2 == 1 && tra1 == 0 && tra3 == 1) {

            fetchRegioneArrivoVeicolo(element.value, tipoVeicoloLocal);

        }
    });


});




tipoVeicolo.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('tipoVeicolo', element.value);
        let regioniArrivoLocal = localStorage.getItem('regioniArrivo');
        let regioniPartenzaLocal = localStorage.getItem('regioniPartenza');
        tra3 = 1;

        console.log(element.value);


        if (tra2 == 0 && tra1 == 0 && tra3 == 1) {

            fetchVeicolo(element.value);
            console.log('hey');


        } else if (tra2 == 0 && tra1 == 1 && tra3 == 1) {

            fetchRegionePartenzaVeicolo(regioniPartenzaLocal, element.value);
            console.log('hey');


        } else if (tra2 == 1 && tra1 == 0 && tra3 == 1) {

            fetchRegioneArrivoVeicolo(regioniArrivoLocal, element.value);
            console.log('hey');


        } else if (tra2 == 1 && tra1 == 1 && tra3 == 1) {

            fetchRegioniPartenzaArrivoVeicolo(regioniPartenzaLocal, regioniArrivoLocal, element.value);
            console.log('parte quella a 3');


        }
    });


});



async function fetchRegionePartenza(regione) {
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

    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLeTratteConAziendaPerRegionePartenza/${regione}`)
        .then((res) => res.json())
        .then((data) => {

            tratteFiltroSoloRegionePartenza(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function tratteFiltroSoloRegionePartenza(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}



async function fetchRegionePartenzaArrivo(regionePartenza, regioneArrivo) {
    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaArrivo(regionePartenza, regioneArrivo, data.id);
            console.log(data.id);


        });
}

async function filtriRegionePartenzaArrivo(regionePartenza, regioneArrivo, id) {


    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLetratteConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}`)
        .then((res) => res.json())
        .then((data) => {

            tratteFiltroRegionePartenzaArrivo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function tratteFiltroRegionePartenzaArrivo(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





async function fetchRegioniPartenzaArrivoVeicolo(regionePartenza, regioneArrivo, veicolo) {
    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaArrivoVeicolo(regionePartenza, regioneArrivo, veicolo, data.id);
            console.log(data.id);


        });
}

async function filtriRegionePartenzaArrivoVeicolo(regionePartenza, regioneArrivo, veicolo, id) {


    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLetratteConAziendaTutto?regionePartenza=${regionePartenza}&regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${veicolo}`)
        .then((res) => res.json())
        .then((data) => {

            tratteFiltroRegionePartenzaArrivoVeicolo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function tratteFiltroRegionePartenzaArrivoVeicolo(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}







async function fetchRegionePartenzaVeicolo(regionePartenza, veicolo) {
    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePartenzaVeicolo(regionePartenza, veicolo, data.id);
            console.log(data.id);


        });
}

async function filtriRegionePartenzaVeicolo(regionePartenza, veicolo, id) {


    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLetratteConAziendaTutto?regionePartenza=${regionePartenza}&tipoDiVeicolo=${veicolo}`)
        .then((res) => res.json())
        .then((data) => {

            tratteFiltroRegionePartenzaVeicolo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function tratteFiltroRegionePartenzaVeicolo(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }
}



async function fetchRegioneArrivoVeicolo(regioneArrivo, veicolo) {
    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneArrivoVeicolo(regioneArrivo, veicolo, data.id);
            console.log(data.id);


        });
}

async function filtriRegioneArrivoVeicolo(regioneArrivo, veicolo, id) {


    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLetratteConAziendaTutto?regioneArrivo=${regioneArrivo}&tipoDiVeicolo=${veicolo}`)
        .then((res) => res.json())
        .then((data) => {

            tratteFiltroRegioneArrivoVeicolo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function tratteFiltroRegioneArrivoVeicolo(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





async function fetchRegioneArrivo(regioneArrivo) {
    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneArrivo(regioneArrivo, data.id);
            console.log(data.id);


        });
}

async function filtriRegioneArrivo(regioneArrivo, id) {


    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLeTratteConAziendaPerRegioneArrivo/${regioneArrivo}`)
        .then((res) => res.json())
        .then((data) => {

            tratteFiltroRegioneArrivo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function tratteFiltroRegioneArrivo(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





async function fetchVeicolo(veicolo) {
    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriVeicolo(veicolo, data.id);
            console.log(data.id);


        });
}

async function filtriVeicolo(veicolo, id) {


    await fetch(`http://127.0.0.1:8080/api/tratta/tutteLetratteConAziendaTutto?tipoDiVeicolo=${veicolo}`)
        .then((res) => res.json())
        .then((data) => {

            tratteFiltroVeicolo(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function tratteFiltroVeicolo(dati, id) {
    tt = false;
    tt1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {

        dati.forEach(element => {


            if (element.stato == 'APERTA'|| element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {

                    fetch(`http://127.0.0.1:8080/api/trattazza/byAziendaRichiesta?trattaId=${element.id}`)
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
                        
                         <td class="text-center">
                        <a style="color:#FAAD06;"href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>
                    </td>                              
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                        tt = true;
                        if (tt1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        tt1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (tt) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        tt1 = true;

                    }
                }
            } else {
                if (tt) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    tt1 = true;

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

function inviaMailTratte(emailAziendale) {

    const subject="Richiesta Moveconnect";
    const body="Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
    const MailToLink= `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href=MailToLink;

}

function ascolto() {

    let linkTratte = document.querySelectorAll('.linkTratte');

    linkTratte.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}
