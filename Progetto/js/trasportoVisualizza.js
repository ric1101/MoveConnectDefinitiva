
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


        fetch(`http://localhost:8080/api/azienda/${element.azienda_id}`)
            .then((res) => res.json())
            .then((data) => {



                trasporto(dati, data.logo, data.nomeAzienda);
                console.log(data.logo, data.nomeAzienda);
                
                
            });
    });
}




function trasporto(dati, logo, azienda) {

    dati.forEach(element => {


        let tabella = `<tr>
                        <td class="">${logo}</td>
                        <td class="">${azienda}</td>
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

