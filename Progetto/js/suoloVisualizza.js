
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = `http://127.0.0.1:8080/api/richiesta/tutteConAzienda`;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        suolo(data);
        ascolto();
    });



function suolo(dati) {

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
                        <td class="" data-eventoid="1">${element.chiusuraStrada}</td>
                        <td class="" data-eventoid="1">${element.cartelli}</td>
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkSuolo" data-evento-id="${element.id}" href="./infoRichiesteSuoloPub.html">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

    });


}




function ascolto() {
    
    let linkSuolo = document.querySelectorAll('.linkSuolo');

    linkSuolo.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}