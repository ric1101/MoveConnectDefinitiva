let c = false;
let c1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let accessToken = localStorage.getItem('accessToken');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;


fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchImballaggi(data.id);
        console.log(data.id);

    });



function fetchImballaggi(id) {


    let URLB = `http://127.0.0.1:8080/api/consegnaImballi/tutteLeConsegneConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            imballaggi(data, id);
            ascolto();
        });

}


function imballaggi(dati, id) {

    dati.forEach(element => {

        if (element.azienda.id != id) {

            let tabella = `<tr>
                        
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regione}</td>
                        <td class="" data-eventoid="1">${element.provincia}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.indirizzo}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkImballi" data-evento-id="${element.id}" href="./infoRichiesteImballi.html">INFO</a></td>
                    </tr>`;


            bodyTabella.innerHTML += tabella;

        }

    });

}



function ascolto() {

    let linkImballi = document.querySelectorAll('.linkImballi');

    linkImballi.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}


let regLink = document.querySelectorAll('.regLink');
let imballiLink = document.querySelectorAll('.imballiLink');
let simboloReg = document.querySelector('.simboloReg');
let simboloImballi = document.querySelector('.simboloImballi');


regLink.forEach(element => {

    element.addEventListener('click', () => {

        if (simboloReg.classList.contains('fa-plus')) {
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

        if (simboloImballi.classList.contains('fa-plus')) {
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

let reg1 = 0;
let reg2 = 0;






function fetchRegioniImballi(regione) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneImballi(regione, data.id);
            console.log(data.id);
            console.log(regione);

        });
}




function filtriRegioneImballi(regione, id) {

    console.log(regione);

    fetch(`http://127.0.0.1:8080/api/consegnaImballi/tutteLeConsegneConAziendaPerRegione/${regione}`) //ci va la rotta nuova
        .then((res) => res.json())
        .then((data) => {

            imballaggiFiltroRegioneImballi(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}



function imballaggiFiltroRegioneImballi(dati, id) {
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regione}</td>
                        <td class="" data-eventoid="1">${element.provincia}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.indirizzo}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkImballi" data-evento-id="${element.id}" href="./infoRichiesteImballi.html">INFO</a></td>
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



async function fetchRegioniTipiImballi(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8) {

    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriRegioneTipiImballi(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);
            console.log(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);

        });
}




async function filtriRegioneTipiImballi(regione, imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, id) {


    await fetch(`http://localhost:8080/api/consegnaImballi/tuttiGliImballiConAziendaTutto?regione=${regione}&imballo1=${imballo1}&imballo2=${imballo2}&imballo3=${imballo3}&imballo4=${imballo4}&imballo5=${imballo5}&imballo6=${imballo6}&imballo7=${imballo7}&imballo8=${imballo8}`)
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
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regione}</td>
                        <td class="" data-eventoid="1">${element.provincia}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.indirizzo}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkImballi" data-evento-id="${element.id}" href="./infoRichiesteImballi.html">INFO</a></td>
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





function fetchTipiImballi(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8) {

    fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            filtriTipiImballi(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);
            console.log(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, data.id);


        });
}




function filtriTipiImballi(imballo1, imballo2, imballo3, imballo4, imballo5, imballo6, imballo7, imballo8, id) {


    fetch(`http://localhost:8080/api/consegnaImballi/tuttiGliImballiConAziendaTutto?imballo1=${imballo1}&imballo2=${imballo2}&imballo3=${imballo3}&imballo4=${imballo4}&imballo5=${imballo5}&imballo6=${imballo6}&imballo7=${imballo7}&imballo8=${imballo8}`) //ci va la rotta nuova
        .then((res) => res.json())
        .then((data) => {

            imballaggiFiltroTipiImballi(data, id)
            console.log(data);
            console.log(id);
            ascolto();

        });

}





function imballaggiFiltroTipiImballi(dati, id) {
    c = false;
    c1 = false;
    console.log(dati);
    console.log(id);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {



        dati.forEach(element => {



            if (element.azienda.id != id) {


                let tabella = `<tr>
                        
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regione}</td>
                        <td class="" data-eventoid="1">${element.provincia}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.indirizzo}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkImballi" data-evento-id="${element.id}" href="./infoRichiesteImballi.html">INFO</a></td>
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

regioniImballi.forEach(element => {

    element.addEventListener('click', () => {
        localStorage.setItem('regioneImballi', element.value);

        reg1 = 1;
        console.log(element.value);

        let num1 = parseInt(tipoImballo1.value);
        let num2 = parseInt(tipoImballo2.value);
        let num3 = parseInt(tipoImballo3.value);
        let num4 = parseInt(tipoImballo4.value);
        let num5 = parseInt(tipoImballo5.value);
        let num6 = parseInt(tipoImballo6.value);
        let num7 = parseInt(tipoImballo7.value);
        let num8 = parseInt(tipoImballo8.value);

        if (reg2 == 0 && reg1 == 1) {

            fetchRegioniImballi(element.value);

        } else if (reg2 == 1 && reg1 == 1) {

            fetchRegioniTipiImballi(element.value, num1, num2, num3, num4, num5, num6, num7, num8);
            console.log(element.value, num1, num2, num3, num4, num5, num6, num7, num8);
            
        }
    });


});


tipiImballi.forEach(element => {

    element.addEventListener('click', () => {


        let regioneImballi = localStorage.getItem('regioneImballi');
        reg2 = 1;
        if (element.value == 0) {
            element.setAttribute('value', 1);
        } else {
            element.setAttribute('value', 0);
        }
        console.log(element.value);

        let num1 = parseInt(tipoImballo1.value);
        let num2 = parseInt(tipoImballo2.value);
        let num3 = parseInt(tipoImballo3.value);
        let num4 = parseInt(tipoImballo4.value);
        let num5 = parseInt(tipoImballo5.value);
        let num6 = parseInt(tipoImballo6.value);
        let num7 = parseInt(tipoImballo7.value);
        let num8 = parseInt(tipoImballo8.value);

        console.log(typeof(num1));
        
        if (reg2 == 1 && reg1 == 0) {
            console.log('parte questa');

            fetchTipiImballi(num1, num2, num3, num4, num5, num6, num7, num8);


            console.log(num1);

        } else if (reg2 == 1 && reg1 == 1) {
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