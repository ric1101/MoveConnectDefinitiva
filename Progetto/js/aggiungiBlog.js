

let genere = 'Blog';
let titolo = document.querySelector('.titolo');
let descrizione = document.querySelector('.descrizione');
let testo = document.querySelector('.testo');
let img = document.querySelector('.img');
let datato = document.querySelector('.data');
let writer = document.querySelector('.writer');
let btnInviaAddBlog = document.querySelector('.btnInviaAddBlog');
let apiUrl = fetch(window.MY_APP_API_URL);


btnInviaAddBlog.addEventListener('click', aggiungiArticoloBlog);

async function aggiungiArticoloBlog() {

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
        genere
    );


    await fetch(`${apiUrl}/api/blog/inserisciBlog`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovoArticolo),

    })

    window.location.href = 'gestionaleBlog.html';

}
