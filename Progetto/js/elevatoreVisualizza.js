
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = `http://localhost:8080/api/scala/tutteLeScale`;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        elevatore(data);

    });



function elevatore(dati) {

    dati.forEach(element => {


        console.log(element.azienda.logo, element.azienda.nomeAzienda, element.azienda.azienda_id);

        let tabella = `<tr>
                        <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.comune}</td>
                        <td class="" data-eventoid="1">${element.tipoDiScala}</td>
                        <td class="" data-eventoid="1">${element.pesoMassimo}</td>
                        <td class="" data-eventoid="1">${element.inizio}</td>
                        <td class="" data-eventoid="1">${element.fine}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark" href="">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

    });


}

