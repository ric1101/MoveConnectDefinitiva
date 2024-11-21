
let bodyTabella = document.querySelector('.bodyTabella');

let accessToken = localStorage.getItem('accessToken');


fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchMagazzino(data.id);
        console.log(data.id);

    });


function fetchMagazzino(id) {


    let URLB = `http://127.0.0.1:8080/api/depositoMagazzino/tuttiIMagazziniConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            magazzino(data, id);
            ascolto();
        });

}



function magazzino(dati, id) {

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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-dark linkDeposito" data-evento-id="${element.id}" href="./infoRichiesteDepositoMagazzino.html">INFO</a></td>
                    </tr>`;


            bodyTabella.innerHTML += tabella;

        }

    });

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