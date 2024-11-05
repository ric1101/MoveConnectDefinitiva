
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = `http://127.0.0.1:8080/api/tratta/tutteLeTratte`;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        tratte(data);
        ascolto();
    });

                              
function tratte(dati) {

    dati.forEach(element => {


        let tabella = `<tr>
                        <td class=""><img src="${element.azienda.logo}" style="height: 100px; width: 150px;" alt="img"></td>
                        <td class="">${element.azienda.nomeAzienda}</td>
                        <td class="">${element.id}</td>
                        <td class="" data-eventoid="1">${element.regionePartenza}</td>
                        <td class="" data-eventoid="1">${element.regioneArrivo}</td>
                        <td class="" data-eventoid="1">${element.dataPartenza}</td>
                        <td class="" data-eventoid="1">${element.dataArrivo}</td>
                        <td class="" data-eventoid="1">${element.tipoDiVeicolo}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkTratte" data-evento-id="${element.id}" href="./infoRichiesteTratte.html">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

    });


}



function ascolto() {
    
    let linkTratte = document.querySelectorAll('.linkTratte');

    linkTratte.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}