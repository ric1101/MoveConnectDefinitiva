
let genere = 'Blog';
let titolo = document.querySelector('.titolo');
let descrizione = document.querySelector('.descrizione');
let testo = document.querySelector('.testo');
let img = document.querySelector('.img');
let datato = document.querySelector('.data');
let writer = document.querySelector('.writer');
let btnInviaModificaBlog = document.querySelector('.btnInviaModificaBlog');



let idMod = localStorage.getItem('idModificaBlog');

function popolaModBlog() {


    fetch(`https://127.0.0.1/api/blog/${idMod}`)
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

btnInviaModificaBlog.addEventListener('click', modificaBlog);

async function modificaBlog() {

    
    

    class NuovoArticoloBlog{
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

    let nuovoArticoloBlog = new NuovoArticoloBlog(
        titolo.value,
        descrizione.value,
        testo.value,
        img.value,
        datato.value,
        writer.value,
        genere
    );

    


    await fetch(`https://127.0.0.1/api/blog/modificaBlog/${idMod}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovoArticoloBlog),

    })
    console.log("CIAOOO");
    window.location.href = 'gestionaleBlog.html';


}
