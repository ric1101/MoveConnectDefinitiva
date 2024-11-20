
let bodyTabella = document.querySelector('.bodyTabella');

let accessToken = localStorage.getItem('accessToken');

fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {

        fetchPersonale(data.id);
        console.log(data.id);
        
    });



function fetchPersonale(id) {


    let URLB = `http://127.0.0.1:8080/api/personaleSpecializzato/tuttiIPersonaliConAzienda`;
    fetch(URLB)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            personale(data, id);
            ascolto();
        });

}


function personale(dati, id) {

    dati.forEach(element => {

        if (element.azienda.id != id) {



            let tabella = `<tr>
                        
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regione}</td>
                        <td class="" data-eventoid="1">${element.provincia}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.indirizzo}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkPersonale" data-evento-id="${element.id}"  href="./infoRichiestePersonale.html">INFO</a></td>
                    </tr>`;


            bodyTabella.innerHTML += tabella;
        }

    });


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