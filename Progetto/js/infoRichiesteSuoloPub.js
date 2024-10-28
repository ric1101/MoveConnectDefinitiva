let colonnaInfo = document.querySelector('.colonnaInfo');


fetch(`http://127.0.0.1:8080/api/richiestaSuoloPubblico/${}`)
    .then((res) => res.json())
    .then((data) => {

        console.log(data);
        suolo(data);

    });

function suoloInfo() {
    




    let visualizzaInfo = ``;


}
suoloInfo();


logo
azienda
#
regione
provincia
comune
indirizzo
cap
mq
inizio
fine
chiusuraStrada
cartelli
note