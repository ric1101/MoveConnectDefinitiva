

let genere = document.querySelector('.genere');
let titolo = document.querySelector('.titolo');
let descrizione = document.querySelector('.descrizione');
let testo = document.querySelector('.testo');
let img = document.querySelector('.img');
let datato = document.querySelector('.data');
let writer = document.querySelector('.writer');
let btnInviaModifica = document.querySelector('.btnInviaModifica');



let idMod = localStorage.getItem('idModifica');

function popolaModBlog() {


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

btnInviaModifica.addEventListener('click', modificaBlog);

function modificaBlog() {

    class NuovoArticolo {
        constructor(titolo, desc, testo, img, data, writer, genere) {
            (this.titolo = titolo),
                (this.desc = desc),
                (this.testo = testo),
                (this.img = img),
                (this.data = data),
                (this.writer = writer),
                (this.genere = genere)
        }
    }

    let nuovoArticolo = new NuovoArticolo(
        titolo.value,
        descrizione.value,
        testo.value,
        img.value,
        datato.value,
        writer.value,
        genere.value
    );


    fetch(`http://127.0.0.1:8080/api/blog/modificaBlog/${idMod}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovoArticolo),

    })

    window.location.href = 'gestionaleBlog.html';

}
