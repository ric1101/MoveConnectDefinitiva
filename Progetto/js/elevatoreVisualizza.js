
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = ``;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        elevatore(data);

    });



function elevatore(dati) {

    dati.forEach(element => {


        let tabella = `<tr>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="" data-eventoid="1">${element.inizio}</td>
                        <td class="" data-eventoid="1">${element.fine}</td>
                        <td class="" data-eventoid="1">${element.azienda}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark" href="">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

    });


}

