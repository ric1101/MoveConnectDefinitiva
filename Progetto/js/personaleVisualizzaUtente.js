let p = false;
let p1 = false;
let bodyTabella = document.querySelector('.bodyTabella');


let nessunaCorrispondenza = `<div class="d-flex justify-content-center mt-3">
<p>Non ci sono Corrispondenze!</p>
</div>`;
let apiUrl = fetch(window.MY_APP_API_URL);// inserisci dentro ogni funzione


function fetchPersonale() {

    let idRichiestePersonale = localStorage.getItem('iDLocalAzienda');

    let URLB = `https://127.0.0.1/api/personaleSpecializzato/tutteLeConsegneConAziendaPersonaleId/${idRichiestePersonale}`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            personale(data);

        });

}
fetchPersonale();


function personale(dati) {
    p = false;
    p1 = false;
    let nomeAziendaInterna = document.querySelector('.nomeAziendaInterna');
    console.log(dati);
    bodyTabella.innerHTML = '';


    if (dati.length != 0) {


        dati.forEach(element => {

            nomeAziendaInterna.innerHTML = `<a href="/Progetto/paginaUtente.html?nomeAzienda=${element.azienda.nomeAzienda}">${element.azienda.nomeAzienda}</a>`;

            if (element.stato == 'APERTA' || element.stato == 'INTERESSATA') {


                let tabella = `<tr>
                        
                    <td class="text-center">${element.id}</td>
                    <td class="text-center" data-eventoid="1">${element.paese}</td>
                    <td class="text-center" data-eventoid="1">${element.regione}</td>
                    <td class="text-center" data-eventoid="1">${element.citta}</td>
                    <td class="text-center" data-eventoid="1">${element.indirizzo}</td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkPersonale" data-evento-id="${element.id}"  href="./infoRichiestePersonale.html" >INFO</a></td>
                    <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="inviaMailPersonale('${element.azienda.username}')"><i class="fa-solid fa-comments"></i></a></td>
                </tr>`;

                p = true;
                if (p1 == true) {
                    bodyTabella.innerHTML = '';
                }
                p1 = false;

                bodyTabella.innerHTML += tabella;


                ascolto();



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