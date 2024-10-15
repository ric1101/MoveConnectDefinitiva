
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = ``;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        trasporto(data);

    });


                              

function trasporto(dati) {

    dati.forEach(element => {


        let tabella = `<tr>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.comunePartenza}</td>
                        <td class="" data-eventoid="1">${element.comuneArrivo}</td>
                        <td class="" data-eventoid="1">${element.m2}</td>
                        <td class="" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="" data-eventoid="1">${element.carico}</td>
                        <td class="" data-eventoid="1">${element.scarico}</td>
                        <td class="" data-eventoid="1">${element.azienda}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark" href="">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

    });


}

