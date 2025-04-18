
let bodyTabella = document.querySelector('.bodyTabella');

let accessToken = localStorage.getItem('accessToken');

fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchSuolo(data.id);
        console.log(data.id);

    });



function fetchSuolo(id) {


    let URLB = `https://127.0.0.1/api/richiesta/tutteConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            suolo(data, id);
            ascolto();
        });

}



function suolo(dati, id) {

    dati.forEach(element => {

        if (element.azienda.id != id) {


            let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regione}</td>
                        <td class="text-center" data-eventoid="1">${element.provincia}</td>
                        <td class="text-center" data-eventoid="1">${element.comune}</td>
                        <td class="text-center" data-eventoid="1">${element.mq}</td>
                        <td class="text-center" data-eventoid="1">${element.inizio}</td>
                        <td class="text-center" data-eventoid="1">${element.fine}</td>
                        <td class="text-center" data-eventoid="1">${element.chiusuraStrada}</td>
                        <td class="text-center" data-eventoid="1">${element.cartelli}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkSuolo" data-evento-id="${element.id}" href="./infoRichiesteSuoloPub.html">INFO</a></td>
                    </tr>`;


            bodyTabella.innerHTML += tabella;

        }

    });

}


function ascolto() {

    let linkSuolo = document.querySelectorAll('.linkSuolo');

    linkSuolo.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}