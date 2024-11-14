
let bodyTabella = document.querySelector('.bodyTabella');


let URLB = `http://127.0.0.1:8080/api/scalaElevatore/tutteScaleConAzienda`;
fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        elevatore(data);
        ascolto();
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
                        <td class="" data-eventoid="1"><a class="btn btn-dark linkElevatore" data-evento-id="${element.id}" href="./infoRichiesteScalaElevatore.html">INFO</a></td>
                    </tr>`;


        bodyTabella.innerHTML += tabella;

    });


}

function ascolto() {
    
    let linkElevatore = document.querySelectorAll('.linkElevatore');

    linkElevatore.forEach(element => {
        element.addEventListener('click', () => {
            let idElement = element.getAttribute('data-evento-id');
            localStorage.setItem('data-evento-id', idElement);
        })
    });


}



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}



let regLink = document.querySelectorAll('.regLink');
let scalaLink = document.querySelectorAll('.scalaLink');
let pesoLink = document.querySelectorAll('.pesoLink');
let simboloReg = document.querySelector('.simboloReg');
let simboloScala = document.querySelector('.simboloScala');
let simboloPeso = document.querySelector('.simboloPeso');


regLink.forEach(element => {

    element.addEventListener('click', () => {

        if (simboloReg.classList.contains('fa-plus')) {
            simboloReg.classList.remove('fa-plus');
            simboloReg.classList.add('fa-minus');
        } else {
            simboloReg.classList.remove('fa-minus');
            simboloReg.classList.add('fa-plus');
        }

    })

});


scalaLink.forEach(element => {

    element.addEventListener('click', () => {

        if (simboloScala.classList.contains('fa-plus')) {
            simboloScala.classList.remove('fa-plus');
            simboloScala.classList.add('fa-minus');
        } else {
            simboloScala.classList.remove('fa-minus');
            simboloScala.classList.add('fa-plus');
        }

    })

});


pesoLink.forEach(element => {

    element.addEventListener('click', () => {

        if (simboloPeso.classList.contains('fa-plus')) {
            simboloPeso.classList.remove('fa-plus');
            simboloPeso.classList.add('fa-minus');
        } else {
            simboloPeso.classList.remove('fa-minus');
            simboloPeso.classList.add('fa-plus');
        }

    })

});