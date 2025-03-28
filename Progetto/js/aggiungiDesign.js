

let genere = 'Design';
let titolo = document.querySelector('.titolo');
let descrizione = document.querySelector('.descrizione');
let testo = document.querySelector('.testo');
let img = document.querySelector('.img');
let datato = document.querySelector('.data');
let writer = document.querySelector('.writer');
let btnInviaAdd = document.querySelector('.btnInviaAdd');


btnInviaAdd.addEventListener('click', aggiungiArticoloDesign);

function aggiungiArticoloDesign() {

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


    fetch(`http://127.0.0.1:8080/api/design/inserisciDesign`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovoArticolo),

    })

    window.location.href = 'gestionaleDesign.html';

}
