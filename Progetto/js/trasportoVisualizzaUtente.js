let t = false;
let t1 = false;
let bodyTabella = document.querySelector('.bodyTabella');


let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;




function fetchTrasporto() {

    let idRichiesteTrasporto = localStorage.getItem('iDLocalAzienda');


    let URLB = `${apiUrl}/api/richiestaTrasporto/tutteLeConsegneConAziendaTrasportoId/${idRichiesteTrasporto}`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            trasporto(data)


        });

}
fetchTrasporto();


function trasporto(dati) {
    t = false;
    t1 = false;
    let nomeAziendaInterna = document.querySelector('.nomeAziendaInterna');
    console.log(dati);
    bodyTabella.innerHTML = '';


    if (dati.length != 0) {


        dati.forEach(element => {

            nomeAziendaInterna.innerHTML = `<a href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>`;


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {



                let tabella = `<tr>
                    
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.cittaPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.cittaArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.mq}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1">${element.carico}</td>
                        <td class="text-center" data-eventoid="1">${element.scarico}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html" >INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailTrasporto('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;

                t = true;
                if (t1 == true) {
                    bodyTabella.innerHTML = '';
                }
                t1 = false;

                bodyTabella.innerHTML += tabella;

                ascolto();


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

