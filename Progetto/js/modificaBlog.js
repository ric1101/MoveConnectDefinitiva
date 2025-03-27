

let genere = document.querySelector('.genere');
let titolo = document.querySelector('.titolo');
let descrizione = document.querySelector('.desc');
let testo = document.querySelector('.testo');
let img = document.querySelector('.img');
let datato = document.querySelector('.data');
let writer = document.querySelector('.writer');




function popolaModBlog() {

    let idMod = localStorage.getItem('idModifica');

    fetch(`http://127.0.0.1:8080/api/blog/${idMod}`)
        .then((res) => res.json())
        .then((data) => {

            titolo.value = data.titolo;
            descrizione.value = data.desc;
            testo.value = data.testo;
            img.value = data.img;
            datato.value = data.data;
            writer.value = data.writer;

        });


}
popolaModBlog();



