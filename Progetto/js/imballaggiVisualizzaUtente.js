let i = false;
let i1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;


function fetchImballaggi() {

    let idRichiesteImballi = localStorage.getItem('iDLocalAzienda');

    let URLB = `http://127.0.0.1:8080/api/consegnaImballi/tutteLeConsegneConAziendaId/${idRichiesteImballi}`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            imballaggi(data);

        });

}
fetchImballaggi();


function imballaggi(dati) {
    i = false;
    i1 = false;
    let nomeAziendaInterna = document.querySelector('.nomeAziendaInterna');
    console.log(dati);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {


        dati.forEach(element => {

            nomeAziendaInterna.innerHTML = `<a href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>`;


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {


                let tabella = `<tr>
                        
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regione}</td>
                        <td class="text-center" data-eventoid="1">${element.paese}</td>
                        <td class="text-center" data-eventoid="1">${element.citta}</td>
                        <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkImballi" href="./infoRichiesteImballi.html" data-evento-id="${element.id}" >INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailImballi('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>

                        </tr>`;


                i = true;
                if (i1 == true) {
                    bodyTabella.innerHTML = '';
                }
                i1 = false;

                bodyTabella.innerHTML += tabella;


                ascolto();

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