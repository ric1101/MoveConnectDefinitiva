
let bodyTabella = document.querySelector('.bodyTabella');

let accessToken = localStorage.getItem('accessToken');

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
                        <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
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