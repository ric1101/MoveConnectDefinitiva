
let bodyTabella = document.querySelector('.bodyTabella');
console.log(bodyTabella);


let URLB = `http://localhost:8080/api/richiesta/tutteLeRichieste`;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        recuperaDatiAzienda(data)
        console.log(data);


    });

function recuperaDatiAzienda(dati) {

    dati.forEach(element => {


        console.log(element.azienda.logo, element.azienda.nomeAzienda, element.azienda.azienda_id);

        let tabella = `<tr>
                <td class="">${element.azienda.logo}</td>
                <td class="">${element.azienda.nomeAzienda}</td>
                <td class="">${element.id}</td>
                <td class="" data-eventoid="1">${element.comunePartenza}</td>
                <td class="" data-eventoid="1">${element.comuneArrivo}</td>
                <td class="" data-eventoid="1">${element.mq}</td>
                <td class="" data-eventoid="1">${element.tipoDiVeicolo}</td>
                <td class="" data-eventoid="1">${element.carico}</td>
                <td class="" data-eventoid="1">${element.scarico}</td>
                <td class="" data-eventoid="1"><a class="btn btn-dark" href="">INFO</a></td>
                </tr>`;


        bodyTabella.innerHTML += tabella;



    });

}


