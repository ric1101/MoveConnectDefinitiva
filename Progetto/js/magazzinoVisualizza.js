
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = `http://127.0.0.1:8080/api/depositoMagazzino/tuttiIMagazziniConAzienda`;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        magazzino(data);
        ascolto();
    });



function magazzino(dati) {

    dati.forEach(element => {


        let tabella = `<tr>
                        <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regione}</td>
                        <td class="" data-eventoid="1">${element.provincia}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.mq}</td>
                        <td class="" data-eventoid="1">${element.inizio}</td>
                        <td class="" data-eventoid="1">${element.fine}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkDeposito" data-evento-id="${element.id}" href="./infoRichiesteDepositoMagazzino.html">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

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