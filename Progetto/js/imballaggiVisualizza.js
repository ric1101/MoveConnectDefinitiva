let i = false;
let i1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;

let accessToken = localStorage.getItem('accessToken');
let apiUrl = fetch(window.MY_APP_API_URL);




fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        console.log(data.id);
        fetchImballaggi(data.id);

    });



function fetchImballaggi(id) {


    let URLB = `https://127.0.0.1/api/consegnaImballi/tutteLeConsegneConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            imballaggi(data, id);
        });

}


function imballaggi(dati, id) {
    i = false;
    i1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {



                if (element.azienda.id != id) {

                    

                    fetch(`https://127.0.0.1/api/propostaImballi/byAziendaRichiesta?consegnaImballiId=${element.id}`)
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
                        <td class="text-center" data-eventoid="1">${element.paese}</td>
                        <td class="text-center" data-eventoid="1">${element.regione}</td>
                        <td class="text-center" data-eventoid="1">${element.citta}</td>
                        <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkImballi" href="./infoRichiesteImballi.html"  data-evento-id="${element.id}">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailImballi('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>

                        </tr>`;


                        i = true;
                        if (i1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        i1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (i) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        i1 = true;

                    }
                }
            } else {
                if (i) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    i1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}






let regLink = document.querySelectorAll('.regLink');
let imballiLink = document.querySelectorAll('.imballiLink');

let simboloReg = document.querySelector('.simboloReg');
let simboloImballi = document.querySelector('.simboloImballi');

let collassaRegioni = document.querySelector('.collassaRegioni');
let collassaImballi = document.querySelector('.collassaImballi');


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



imballiLink.forEach(element => {

    element.addEventListener('click', () => {


        if (!collassaImballi.classList.contains('collapsed')) {
            simboloImballi.classList.remove('fa-plus');
            simboloImballi.classList.add('fa-minus');
        } else {
            simboloImballi.classList.remove('fa-minus');
            simboloImballi.classList.add('fa-plus');
        }


    })

});




let regioniImballi = document.querySelectorAll('.regioniImballi');
let tipiImballi = document.querySelectorAll('.tipoImballi');

let tipoImballo1 = document.querySelector('.tipoImballo1');
let tipoImballo2 = document.querySelector('.tipoImballo2');
let tipoImballo3 = document.querySelector('.tipoImballo3');
let tipoImballo4 = document.querySelector('.tipoImballo4');
let tipoImballo5 = document.querySelector('.tipoImballo5');
let tipoImballo6 = document.querySelector('.tipoImballo6');
let tipoImballo7 = document.querySelector('.tipoImballo7');
let tipoImballo8 = document.querySelector('.tipoImballo8');

let imb1 = 0;
let imb2 = 0;



async function fetchRegioniImballi(regione) {

    await fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneImballi(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}




async function filtriRegioneImballi(regione, id) {

    console.log(regione);

    await fetch(`https://127.0.0.1/api/consegnaImballi/tutteLeConsegneConAziendaPerRegione/${regione}`) //ci va la rotta nuova
        .then((res) => res.json())
        .then((data) => {

            imballaggiFiltroRegioneImballi(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function imballaggiFiltroRegioneImballi(dati, id) {
    i = false;
    i1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {

            console.log(dati);


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {



                if (element.azienda.id != id) {

                    

                    fetch(`https://127.0.0.1/api/propostaImballi/byAziendaRichiesta?consegnaImballiId=${element.id}`)
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
                        <td class="text-center" data-eventoid="1">${element.paese}</td>
                        <td class="text-center" data-eventoid="1">${element.regione}</td>
                        <td class="text-center" data-eventoid="1">${element.citta}</td>
                        <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkImballi" href="./infoRichiesteImballi.html"  data-evento-id="${element.id}">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailImballi('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>

                        </tr>`;


                        i = true;
                        if (i1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        i1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (i) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        i1 = true;

                    }
                }
            } else {
                if (i) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    i1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }
}



async function fetchRegioniTipiImballi(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8) {

    await fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneTipiImballi(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);
            console.log(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);

        });
}




async function filtriRegioneTipiImballi(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, id) {


    await fetch(`https://127.0.0.1/api/consegnaImballi/tuttiGliImballiConAziendaTutto?paese=${regione}&imballo1=${imballo1}&imballo2=${imballo2}&imballo3=${imballo3}&imballo4=${imballo4}&imballo5=${imballo5}&imballo6=${imballo6}&imballo7=${imballo7}&imballo8=${imballo8}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Errore nella risposta: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => {
            imballaggiFiltroRegioneTipiImballi(data, id);
            console.log('Dati ricevuti:', data);
        })



}



function imballaggiFiltroRegioneTipiImballi(dati, id) {
    i = false;
    i1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {

            console.log(dati);


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {



                if (element.azienda.id != id) {

                    

                    fetch(`https://127.0.0.1/api/propostaImballi/byAziendaRichiesta?consegnaImballiId=${element.id}`)
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
                        <td class="text-center" data-eventoid="1">${element.paese}</td>
                        <td class="text-center" data-eventoid="1">${element.regione}</td>
                        <td class="text-center" data-eventoid="1">${element.citta}</td>
                        <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkImballi" href="./infoRichiesteImballi.html"  data-evento-id="${element.id}">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailImballi('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>

                        </tr>`;


                        i = true;
                        if (i1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        i1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (i) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        i1 = true;

                    }
                }
            } else {
                if (i) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    i1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





async function fetchTipiImballi(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8) {

    await fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriTipiImballi(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);
            console.log(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);


        });
}




async function filtriTipiImballi(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, id) {


    await fetch(`https://127.0.0.1/api/consegnaImballi/tuttiGliImballiConAziendaTutto?imballo1=${imballo1}&imballo2=${imballo2}&imballo3=${imballo3}&imballo4=${imballo4}&imballo5=${imballo5}&imballo6=${imballo6}&imballo7=${imballo7}&imballo8=${imballo8}`) //ci va la rotta nuova
        .then((res) => res.json())
        .then((data) => {

            imballaggiFiltroTipiImballi(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}





function imballaggiFiltroTipiImballi(dati, id) {
    i = false;
    i1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {

            console.log(dati);


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {



                if (element.azienda.id != id) {

                    

                    fetch(`https://127.0.0.1/api/propostaImballi/byAziendaRichiesta?consegnaImballiId=${element.id}`)
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
                        <td class="text-center" data-eventoid="1">${element.paese}</td>
                        <td class="text-center" data-eventoid="1">${element.regione}</td>
                        <td class="text-center" data-eventoid="1">${element.citta}</td>
                        <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkImballi" href="./infoRichiesteImballi.html"  data-evento-id="${element.id}">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailImballi('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                        </tr>`;


                        i = true;
                        if (i1 == true) {
                            bodyTabella.innerHTML = '';
                        }
                        i1 = false;

                        bodyTabella.innerHTML += tabella;


                        ascolto();


                    }


                } else {
                    if (i) {

                    } else {

                        bodyTabella.innerHTML = nessunaCorrispondenza;
                        i1 = true;

                    }
                }
            } else {
                if (i) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    i1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}





regioniImballi.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioneImballi', element.value);

        imb1 = 1;
        console.log(element.value);


        let num1 = parseInt(tipoImballo1.value);
        let num2 = parseInt(tipoImballo2.value);
        let num3 = parseInt(tipoImballo3.value);
        let num4 = parseInt(tipoImballo4.value);
        let num5 = parseInt(tipoImballo5.value);
        let num6 = parseInt(tipoImballo6.value);
        let num7 = parseInt(tipoImballo7.value);
        let num8 = parseInt(tipoImballo8.value);

        if (imb2 == 0 && imb1 == 1) {

            fetchRegioniImballi(element.value);

        } else if (imb2 == 1 && imb1 == 1) {

            fetchRegioniTipiImballi(element.value, num1, num2, num3, num4, num5, num6, num7, num8);
            console.log(element.value, num1, num2, num3, num4, num5, num6, num7, num8);

        }
    });


});


tipiImballi.forEach(element => {

    element.addEventListener('click', () => {


        let regioneImballi = localStorage.getItem('regioneImballi');
        imb2 = 1;
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

        let num1 = parseInt(tipoImballo1.value);
        let num2 = parseInt(tipoImballo2.value);
        let num3 = parseInt(tipoImballo3.value);
        let num4 = parseInt(tipoImballo4.value);
        let num5 = parseInt(tipoImballo5.value);
        let num6 = parseInt(tipoImballo6.value);
        let num7 = parseInt(tipoImballo7.value);
        let num8 = parseInt(tipoImballo8.value);

        console.log(typeof (num1));

        if (imb2 == 1 && imb1 == 0) {
            console.log('parte questa');

            fetchTipiImballi(num1, num2, num3, num4, num5, num6, num7, num8);


            console.log(num1);

        } else if (imb2 == 1 && imb1 == 1) {
            console.log('no questa');

            console.log(regioneImballi, num1, num2, num3, num4, num5, num6, num7, num8);
            fetchRegioniTipiImballi(regioneImballi, num1, num2, num3, num4, num5, num6, num7, num8);


        }
    });


});



let bottoneReset = document.querySelector('.bottoneReset');

bottoneReset.addEventListener('click', () => {
    location.reload();
});


function inviaMailImballi(emailAziendale) {

    const subject = "Richiesta Moveconnect";
    const body = "Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
    const MailToLink = `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = MailToLink;

}

function ascolto() {

    let linkImballi = document.querySelectorAll('.linkImballi');
    console.log(linkImballi);


    linkImballi.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}