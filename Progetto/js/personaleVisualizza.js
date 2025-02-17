let p = false;
let p1 = false;
let bodyTabella = document.querySelector('.bodyTabella');


let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;

let accessToken = localStorage.getItem('accessToken');

fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchPersonale(data.id);
        console.log(data.id);

    });



function fetchPersonale(id) {


    let URLB = `http://127.0.0.1:8080/api/personaleSpecializzato/tuttiIPersonaliConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            personale(data, id);
           
        });

}


function personale(dati, id) {
    p = false;
    p1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {


                 

                    fetch(`http://127.0.0.1:8080/api/personale/byAziendaPersonale?personaleId=${element.id}`)
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
                    <td class="text-center" data-eventoid="1">${element.regione}</td>
                    <td class="text-center" data-eventoid="1">${element.provincia}</td>
                    <td class="text-center" data-eventoid="1">${element.comune}</td>
                    <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkPersonale" data-evento-id="${element.id}"  href="./infoRichiestePersonale.html">INFO</a></td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailPersonale('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                </tr>`;

                    p = true;
                    if (p1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    p1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (p) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    p1 = true;

                }
            }
        } else {
            if (p) {

            } else {

                bodyTabella.innerHTML = nessunaCorrispondenza;
                p1 = true;

            }
        }
    });

} else {
    bodyTabella.innerHTML = nessunaCorrispondenza;
}



}



let regLink = document.querySelectorAll('.regLink');
let personaleLink = document.querySelectorAll('.personaleLink');

let simboloReg = document.querySelector('.simboloReg');
let simboloPersonale = document.querySelector('.simboloPersonale');

let collassaRegioni = document.querySelector('.collassaRegioni');
let collassaPersonale = document.querySelector('.collassaPersonale');



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



personaleLink.forEach(element => {

    element.addEventListener('click', () => {


        if (!collassaPersonale.classList.contains('collapsed')) {
            simboloPersonale.classList.remove('fa-plus');
            simboloPersonale.classList.add('fa-minus');
        } else {
            simboloPersonale.classList.remove('fa-minus');
            simboloPersonale.classList.add('fa-plus');
        }

    })

});




let pers1 = 0;
let pers2 = 0;



async function fetchRegioniPersonale(regione) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegionePersonale(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}




async function filtriRegionePersonale(regione, id) {

    console.log(regione);

    await fetch(`http://127.0.0.1:8080/api/personaleSpecializzato/${regione}`) //ci va la rotta nuova
        .then((res) => res.json())
        .then((data) => {

            personaleFiltroRegione(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function personaleFiltroRegione(dati, id) {
    p = false;
    p1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {


                 

                    fetch(`http://127.0.0.1:8080/api/personale/byAziendaPersonale?personaleId=${element.id}`)
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
                    <td class="text-center" data-eventoid="1">${element.regione}</td>
                    <td class="text-center" data-eventoid="1">${element.provincia}</td>
                    <td class="text-center" data-eventoid="1">${element.comune}</td>
                    <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkPersonale" data-evento-id="${element.id}"  href="./infoRichiestePersonale.html">INFO</a></td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailPersonale('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                </tr>`;

                    p = true;
                    if (p1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    p1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (p) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    p1 = true;

                }
            }
        } else {
            if (p) {

            } else {

                bodyTabella.innerHTML = nessunaCorrispondenza;
                p1 = true;

            }
        }
    });

} else {
    bodyTabella.innerHTML = nessunaCorrispondenza;
}

}



async function fetchRegioniTipiPersonale(regione, autista, falegname, montatore, operatore,) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneTipiPersonale(regione, autista, falegname, montatore, operatore, data.id);
            console.log(regione, autista, falegname, montatore, operatore);

        });
}




async function filtriRegioneTipiPersonale(regione, autista, falegname, montatore, operatore, id) {


    await fetch(`http://localhost:8080/api/personaleSpecializzato/tuttoIlPersonaleConAziendaTutto?regione=${regione}&autista=${autista}&falegname=${falegname}&montatore=${montatore}&operatore=${operatore}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Errore nella risposta: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => {
            personaleFiltroRegioneTipiPersonale(data, id);
            console.log('Dati ricevuti:', data);
        })



}



function personaleFiltroRegioneTipiPersonale(dati, id) {
    p = false;
    p1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {


                 

                    fetch(`http://127.0.0.1:8080/api/personale/byAziendaPersonale?personaleId=${element.id}`)
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
                    <td class="text-center" data-eventoid="1">${element.regione}</td>
                    <td class="text-center" data-eventoid="1">${element.provincia}</td>
                    <td class="text-center" data-eventoid="1">${element.comune}</td>
                    <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkPersonale" data-evento-id="${element.id}"  href="./infoRichiestePersonale.html">INFO</a></td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailPersonale('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                </tr>`;

                    p = true;
                    if (p1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    p1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (p) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    p1 = true;

                }
            }
        } else {
            if (p) {

            } else {

                bodyTabella.innerHTML = nessunaCorrispondenza;
                p1 = true;

            }
        }
    });

} else {
    bodyTabella.innerHTML = nessunaCorrispondenza;
}

}





async function fetchTipiPersonale(autista, falegname, montatore, operatore) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriTipiPersonale(autista, falegname, montatore, operatore, data.id);
            console.log(autista, falegname, montatore, operatore, data.id);


        });
}




async function filtriTipiPersonale(autista, falegname, montatore, operatore, id) {


    await fetch(`http://localhost:8080/api/personaleSpecializzato/tuttoIlPersonaleConAziendaTutto?autista=${autista}&falegname=${falegname}&montatore=${montatore}&operatore=${operatore}`) //ci va la rotta nuova
        .then((res) => res.json())
        .then((data) => {

            personaleFiltroTipiPersonale(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}





function personaleFiltroTipiPersonale(dati, id) {
    p = false;
    p1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';
    let entrata = false;
    let esitoControllo = false;

    if (dati.length != 0) {



        dati.forEach(element => {


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {


                if (element.azienda.id != id) {


                 

                    fetch(`http://127.0.0.1:8080/api/personale/byAziendaPersonale?personaleId=${element.id}`)
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
                    <td class="text-center" data-eventoid="1">${element.regione}</td>
                    <td class="text-center" data-eventoid="1">${element.provincia}</td>
                    <td class="text-center" data-eventoid="1">${element.comune}</td>
                    <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkPersonale" data-evento-id="${element.id}"  href="./infoRichiestePersonale.html">INFO</a></td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailPersonale('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                </tr>`;

                    p = true;
                    if (p1 == true) {
                        bodyTabella.innerHTML = '';
                    }
                    p1 = false;

                    bodyTabella.innerHTML += tabella;


                    ascolto();


                }


            } else {
                if (p) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    p1 = true;

                }
            }
        } else {
            if (p) {

            } else {

                bodyTabella.innerHTML = nessunaCorrispondenza;
                p1 = true;

            }
        }
    });

} else {
    bodyTabella.innerHTML = nessunaCorrispondenza;
}

}



let tipoPersonale = document.querySelectorAll('.tipoPersonale');
let personale1 = document.querySelector('.personale1');
let personale2 = document.querySelector('.personale2');
let personale3 = document.querySelector('.personale3');
let personale4 = document.querySelector('.personale4');
let regioniPersonale = document.querySelectorAll('.regioniPersonale');


regioniPersonale.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regionePersonale', element.value);

        pers1 = 1;
        console.log(element.value);


        let autistaParsato = parseInt(personale2.value);
        let falegnameParsato = parseInt(personale4.value);
        let montatoreParsato = parseInt(personale3.value);
        let operatoreParsato = parseInt(personale1.value);

        if (pers2 == 0 && pers1 == 1) {

            fetchRegioniPersonale(element.value);

        } else if (pers2 == 1 && pers1 == 1) {

            fetchRegioniTipiPersonale(element.value, autistaParsato, falegnameParsato, montatoreParsato, operatoreParsato);
            console.log(element.value, autistaParsato, falegnameParsato, montatoreParsato, operatoreParsato);

        }
    });


});


tipoPersonale.forEach(element => {

    element.addEventListener('click', () => {

        let regionePersonale = localStorage.getItem('regionePersonale');

        pers2 = 1;
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

        let autistaParsato = parseInt(personale2.value);
        let falegnameParsato = parseInt(personale4.value);
        let montatoreParsato = parseInt(personale3.value);
        let operatoreParsato = parseInt(personale1.value);



        if (pers2 == 1 && pers1 == 0) {
            console.log('parte questa');

            fetchTipiPersonale(autistaParsato, falegnameParsato, montatoreParsato, operatoreParsato);



        } else if (pers2 == 1 && pers1 == 1) {
            console.log('no questa');

            fetchRegioniTipiPersonale(regionePersonale, autistaParsato, falegnameParsato, montatoreParsato, operatoreParsato);
            console.log(regionePersonale, autistaParsato, falegnameParsato, montatoreParsato, operatoreParsato);


        }
    });


});


let bottoneReset = document.querySelector('.bottoneReset');

bottoneReset.addEventListener('click', () => {
    location.reload();
});

function inviaMailPersonale(emailAziendale) {

    const subject = "Richiesta Moveconnect";
    const body = "Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
    const MailToLink = `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = MailToLink;

}

function ascolto() {

    let linkPersonale = document.querySelectorAll('.linkPersonale');

    linkPersonale.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}