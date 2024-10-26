
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = ``;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        tratte(data);

    });

                              
function tratte(dati) {

    dati.forEach(element => {


        let tabella = `<tr>
                        <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="" data-eventoid="1">${element.giornoPartenza}</td>
                        <td class="" data-eventoid="1">${element.giornoArrivo}</td>
                        <td class="" data-eventoid="1">${element.tipoVeicolo}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark" href="./infoRichieste.html">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

    });


}

