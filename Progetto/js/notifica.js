let colonnaInfo = document.querySelector(".colonnaInfo");


async function tokenizzami() {


    let accessToken = localStorage.getItem('accessToken');


    await fetch(`http://127.0.0.1:8080/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => res.json())
        .then((data) => {

            
            richiesteRicevute(data.id);
            console.log(data.id);


        });

}

function richiesteRicevute(id) {
    fetch(`http://127.0.0.1:8080/api/amicizia/amicizieRicevute?idAzienda2=${id}`)
    .then((res) => res.json())
    .then((data) => {
        // Iterate through the data array to handle each item
        data.forEach(item => {
            // Check if azienda1 is defined before accessing it
            if (item.azienda1 && item.azienda1.id) {
                fetchImg(item, item.azienda1.id);
                console.log(item);
                console.log(item.azienda1.id);
                 // Pass the correct id to fetchImg
            } else {
                console.log("azienda1 is undefined for this item");
            }
        });
        console.log(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}

function fetchImg(dati, id) {
    let imgAzienda = document.querySelector('.imgAzienda');

    fetch(`http://127.0.0.1:8080/api/azienda/logo/${id}`)
        .then((response) => {
            console.log(response);
            
            if (!response.ok) {
                throw new Error("Errore nel recupero del logo");
            }
            return response.blob();
        })
        .then((blob) => {
            const logoUrl = URL.createObjectURL(blob);
            console.log(logoUrl);
            visualizzaRichiesteRicevute(dati, logoUrl);
            
        })
        .catch((error) => {
            console.error("Errore nel caricamento del logo:", error);
            imgAzienda.setAttribute('src', './img/default-logo.png');
        });
}

function visualizzaRichiesteRicevute(data, img) {
    console.log(data);

    colonnaInfo.innerHTML = '';
    let visualizzaRichieste = '';

    // Loop through each element of data to display requests
    data.forEach(element => {
        visualizzaRichieste += `   
            <div class="row pb-2">
                <div class="friend-request-card friend-request-card-better">
                    <div class="profile-picture">
                        <img src=${img}>
                    </div>
                    <div class="user-details">
                        <h3>${element.azienda1.nomeAzienda}</h3>
                    </div>
                    <div class="friend-request-actions">
                        <button class="button button-primary">Accept</button>
                        <button class="button button-secondary">Decline</button>
                    </div>
                </div>
            </div>`;
    });

    colonnaInfo.innerHTML += visualizzaRichieste;
}

tokenizzami();
// richiesteRicevute();
