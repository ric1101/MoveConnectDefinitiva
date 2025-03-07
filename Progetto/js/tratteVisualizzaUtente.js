let tt = false;
let tt1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;



function fetchTratte() {

    let idRichiesteTratte = localStorage.getItem('iDLocalAzienda');

    let URLB = `http://localhost:8080/api/tratta/tutteLeConsegneConAziendaTrattaId/${idRichiesteTratte}`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            tratte(data);

        });

}
fetchTratte();


function tratte(dati) {
    tt = false;
    tt1 = false;
    let nomeAziendaInterna = document.querySelector('.nomeAziendaInterna');
    console.log(dati);
    bodyTabella.innerHTML = '';


    if (dati.length != 0) {

        dati.forEach(element => {

            nomeAziendaInterna.innerHTML = `<a href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>`;


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {


                let tabella = `<tr>
                                       
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html" target="_blank">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTratte('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    
                    </tr>`;


                tt = true;
                if (tt1 == true) {
                    bodyTabella.innerHTML = '';
                }
                tt1 = false;

                bodyTabella.innerHTML += tabella;


                ascolto();

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


function inviaMailTratte(emailAziendale) {

    const subject = "Richiesta Moveconnect";
    const body = "Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
    const MailToLink = `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = MailToLink;

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
