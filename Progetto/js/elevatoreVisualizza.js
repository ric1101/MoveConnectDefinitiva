let e = false;
let e1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;

let accessToken = localStorage.getItem('accessToken');

function predefinito() {


    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            fetchElevatore(data.id);
            console.log(data.id);

        });
}
predefinito();



function fetchElevatore(id) {

    let URLB = `http://127.0.0.1:8080/api/scalaElevatore/tutteScaleConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            elevatore(data, id);
            ascolto();
        });

}


function elevatore(dati, id) {

    bodyTabella.innerHTML = '';

    dati.forEach(element => {

        if (element.azienda.id != id) {


            let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


            bodyTabella.innerHTML += tabella;

        }

    });

}

function ascolto() {

    let linkElevatore = document.querySelectorAll('.linkElevatore');

    linkElevatore.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}



let regLink = document.querySelectorAll('.regLink');
let scalaLink = document.querySelectorAll('.scalaLink');
let pesoLink = document.querySelectorAll('.pesoLink');
let simboloReg = document.querySelector('.simboloReg');
let simboloScala = document.querySelector('.simboloScala');
let simboloPeso = document.querySelector('.simboloPeso');
let collassaRegione = document.querySelector('.collassaRegione');
let collassaScala = document.querySelector('.collassaScala');
let collassaPeso = document.querySelector('.collassaPeso');

regLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaRegione.classList.contains('collapsed')) {
            simboloReg.classList.remove('fa-plus');
            simboloReg.classList.add('fa-minus');
        } else {
            simboloReg.classList.remove('fa-minus');
            simboloReg.classList.add('fa-plus');
        }

    })

});


scalaLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaScala.classList.contains('collapsed')) {
            simboloScala.classList.remove('fa-plus');
            simboloScala.classList.add('fa-minus');
        } else {
            simboloScala.classList.remove('fa-minus');
            simboloScala.classList.add('fa-plus');
        }

    })

});


pesoLink.forEach(element => {

    element.addEventListener('click', () => {

        if (!collassaPeso.classList.contains('collapsed')) {
            simboloPeso.classList.remove('fa-plus');
            simboloPeso.classList.add('fa-minus');
        } else {
            simboloPeso.classList.remove('fa-minus');
            simboloPeso.classList.add('fa-plus');
        }

    })

});



let regioniScala = document.querySelectorAll('.regioniScala');
let scalaEl = document.querySelectorAll('.scalaEl');
let pesoMax = document.querySelectorAll('.pesoMax');

let reg1 = 0;
let reg2 = 0;
let reg3 = 0;


regioniScala.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioneScala', element.value);
        let scale = localStorage.getItem('scala');
        let peso = localStorage.getItem('peso');
        reg1 = 1;
        console.log(element.value);


        if (reg2 == 0 && reg1 == 1 && reg3 == 0) {

            fetchRegioni(element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0) {

            fetchRegioniScale(element.value, scale);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1) {

            fetchRegioniPeso(element.value, peso);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1) {

            fetchRegioneScalaPeso(element.value, scale, peso);

        }
    });


});




function fetchRegioni(regione) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegione(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

function filtriRegione(regione, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeScaleConAziendaPerRegione/${regione}`)
        .then((res) => res.json())
        .then((data) => {

            elevatoreFiltroSoloRegione(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function elevatoreFiltroSoloRegione(dati, id) {
    e = false;
    e1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (e) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    e1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}



scalaEl.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('scala', element.value);
        let regioneScala = localStorage.getItem('regioneScala');
        let peso = localStorage.getItem('peso');
        reg2 = 1;

        if (reg2 == 1 && reg1 == 0 && reg3 == 0) {

            fetchScala(element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 0) {

            fetchRegioniScale(regioneScala, element.value);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 1) {

            fetchScalaPeso(element.value, peso);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1) {

            fetchRegioneScalaPeso(regioneScala, element.value, peso);

        }
    });


});


function fetchScala(scala) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriScala(scala, data.id);
            console.log(data.id);

        });
}

function filtriScala(scala, id) {


    fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeScaleConAziendaTutto?tipoDiScala=${scala}`)
        .then((res) => res.json())
        .then((data) => {

            elevatoreFiltroScala(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function elevatoreFiltroScala(dati, id) {
    e = false;
    e1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {









        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';
                }
                e1 = false;

                bodyTabella.innerHTML += tabella;

            } else {
                if (e) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    e1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}













function fetchRegioniScale(regione, scala) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniScala(regione, scala, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

function filtriRegioniScala(regione, scala, id) {


    fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeScaleConAziendaTutto?regione=${regione}&tipoDiScala=${scala}`)
        .then((res) => res.json())
        .then((data) => {

            elevatoreFiltroRegioniScala(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function elevatoreFiltroRegioniScala(dati, id) {
    e = false;
    e1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (e) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    e1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}


pesoMax.forEach(element => {

    element.addEventListener('click', () => {
        console.log(element.value);

        localStorage.setItem('peso', element.value);
        let scale = localStorage.getItem('scala');
        let regioneScala = localStorage.getItem('regioneScala');
        reg3 = 1;

        if (reg2 == 0 && reg1 == 0 && reg3 == 1) {

            fetchPeso(element.value);

        } else if (reg2 == 0 && reg1 == 1 && reg3 == 1) {

            fetchRegioniPeso(regioneScala, element.value);

        } else if (reg2 == 1 && reg1 == 0 && reg3 == 1) {

            fetchScalaPeso(scale, element.value);

        } else if (reg2 == 1 && reg1 == 1 && reg3 == 1) {

            fetchRegioneScalaPeso(regioneScala, scale, element.value);
            console.log(regioneScala, scale, element.value);

        }
    });


});



function fetchPeso(peso) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriPeso(peso, data.id);
            console.log(data.id);

        });
}

function filtriPeso(peso, id) {

    fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeScaleConAziendaTutto?pesoMassimo=${peso}`)
        .then((res) => res.json())
        .then((data) => {

            elevatoreFiltroPeso(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function elevatoreFiltroPeso(dati, id) {
    e = false;
    e1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (e) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    e1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}



function fetchRegioniPeso(regione, peso) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniPeso(regione, peso, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

function filtriRegioniPeso(regione, peso, id) {


    fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeScaleConAziendaTutto?regione=${regione}&pesoMassimo=${peso}`)
        .then((res) => res.json())
        .then((data) => {

            elevatoreFiltroRegioniPeso(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function elevatoreFiltroRegioniPeso(dati, id) {
    e = false;
    e1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';
                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (e) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    e1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }

}


function fetchRegioneScalaPeso(regione, scala, peso) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioniScalaPeso(regione, scala, peso, data.id);
            console.log(data.id);
            console.log(regione);

        });
}

function filtriRegioniScalaPeso(regione, scala, peso, id) {


    fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeScaleConAziendaTutto?regione=${regione}&tipoDiScala=${scala}&pesoMassimo=${peso}`)
        .then((res) => res.json())
        .then((data) => {

            elevatoreFiltroRegioniScalaPeso(data, id)
            console.log(data);
            console.log(id);
            console.log(peso);
            ascolto();

        });

}



function elevatoreFiltroRegioniScalaPeso(dati, id) {
    e = false;
    e1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';

                }

                bodyTabella.innerHTML += tabella;

            } else {
                if (e) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    e1 = true;

                }
            }

        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;

    }

}




function fetchScalaPeso(scala, peso) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriScalaPeso(scala, peso, data.id);
            console.log(data.id);

        });
}

function filtriScalaPeso(scala, peso, id) {


    fetch(`http://127.0.0.1:8080/api/scalaElevatore/tutteLeScaleConAziendaTutto?tipoDiScala=${scala}&pesoMassimo=${peso}`)
        .then((res) => res.json())
        .then((data) => {

            elevatoreFiltroScalaPeso(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function elevatoreFiltroScalaPeso(dati, id) {
    e = false;
    e1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';


    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';

                }


                bodyTabella.innerHTML += tabella;

            } else {
                if (e) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    e1 = true;

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