let m = false;
let m1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let nessunaCorrispondenza = `<div class="m-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;



function fetchMagazzino() {

    let idRichiesteMagazzino = localStorage.getItem('iDLocalAzienda');

    let URLB = `http://127.0.0.1:8080/api/depositoMagazzino/tutteLeConsegneConAziendaMagazzinoId/${idRichiesteMagazzino}`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            magazzino(data);


        });

}
fetchMagazzino();


function magazzino(dati) {
    m = false;
    m1 = false;
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
                        <td class="text-center" data-eventoid="1">${element.provincia}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.mq}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkDeposito" data-evento-id="${element.id}" href="./infoRichiesteDepositoMagazzino.html">INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailMagazzino('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;


                m = true;
                if (m1 == true) {
                    bodyTabella.innerHTML = '';
                }
                m1 = false;

                bodyTabella.innerHTML += tabella;


                ascolto();

            } else {
                if (m) {

                } else {

                    bodyTabella.innerHTML = nessunaCorrispondenza;
                    m1 = true;

                }
            }
        });

    } else {
        bodyTabella.innerHTML = nessunaCorrispondenza;
    }


}



function inviaMailMagazzino(emailAziendale) {

    const subject = "Richiesta Moveconnect";
    const body = "Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
    const MailToLink = `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = MailToLink;

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



