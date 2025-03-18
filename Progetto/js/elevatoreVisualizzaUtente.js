let e = false;
let e1 = false;
let bodyTabella = document.querySelector('.bodyTabella');

let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;



function fetchElevatore() {

    let idRichiesteScale = localStorage.getItem('iDLocalAzienda');

    let URLB = `http://127.0.0.1:8080/api/scalaElevatore/tutteLeConsegneConAziendaScalaId/${idRichiesteScale}`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            elevatore(data);

            
        });

}
fetchElevatore();


function elevatore(dati) {
    let e = false;
    let e1 = false;
    let nomeAziendaInterna = document.querySelector('.nomeAziendaInterna');
    console.log(dati);
    bodyTabella.innerHTML = '';

    if (dati.length != 0) {

        
        dati.forEach(element => {
            
            nomeAziendaInterna.innerHTML = `<a href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>`;


            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {



                let tabella = `<tr>
                         
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.citta}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="text-center" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html" >INFO</a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailElevatore('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                    </tr>`;


                e = true;
                if (e1 == true) {
                    bodyTabella.innerHTML = '';
                }
                e1 = false;

                bodyTabella.innerHTML += tabella;

                ascolto();

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



function inviaMailElevatore(emailAziendale) {

    const subject = "Richiesta Moveconnect";
    const body = "Salve ho visto la richiesta sul portale di Moveconnect e sarei interessato ";
    const MailToLink = `mailto:${emailAziendale}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = MailToLink;

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


