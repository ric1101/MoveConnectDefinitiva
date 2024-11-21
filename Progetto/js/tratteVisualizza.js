
let bodyTabella = document.querySelector('.bodyTabella');

let accessToken = localStorage.getItem('accessToken');

fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchTratte(data.id);
        console.log(data.id);

    });



function fetchTratte(id) {


    let URLB = `http://localhost:8080/api/tratta/tuttLeTratteConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            tratte(data, id);
            ascolto();
        });
}

function tratte(dati, id) {

    dati.forEach(element => {


        if (element.azienda.id != id) {


            let tabella = `<tr>
                        
                        <td class="text-center">${element.azienda.nomeAzienda}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="text-center" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="text-center" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiestaTratte.html">INFO</a></td>
                    </tr>`;


            bodyTabella.innerHTML += tabella;

        }
        
    });


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