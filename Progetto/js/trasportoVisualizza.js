

let bodyTabella = document.querySelector('.bodyTabella');
console.log(bodyTabella);


let URLB = `http://127.0.0.1:8080/api/richiestaTrasporto/tuttiITrasportiConAzienda`;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        recuperaDatiAzienda(data)
        console.log(data);
        ascolto();

    });

function recuperaDatiAzienda(dati) {

    dati.forEach(element => {


        console.log(element.azienda.logo, element.azienda.nomeAzienda, element.azienda.azienda_id);

        let tabella = `<tr>
                <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
                <td class="">${element.azienda.nomeAzienda}</td>
                <td class="">${element.id}</td>
                <td class="" data-eventoid="1">${element.comunePartenza}</td>
                <td class="" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="" data-eventoid="1">${element.mq}</td>
                <td class="" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="" data-eventoid="1">${element.carico}</td>
                <td class="" data-eventoid="1">${element.scarico}</td>
                <td class="" data-eventoid="1"><a class="btn btn-dark linkTrasporto" data-evento-id="${element.id}" href="./infoRichiesteTrasporto.html">INFO</a></td>
                </tr>`;


        bodyTabella.innerHTML += tabella;



    });

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