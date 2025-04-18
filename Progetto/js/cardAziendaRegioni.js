
function getAziendeByRegione() {
    let apiUrl = fetch(window.MY_APP_API_URL);

    const regione = localStorage.getItem('regione'); 
    if (!regione) {
        console.error('Regione non trovata nel localStorage');
        return;
    }

    const container = document.getElementById('aziende-container');

    

    
    fetch(`https://127.0.0.1/api/azienda/${regione}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nel recupero delle aziende');
            }
            return response.json();
        })
        .then(data => {
            
            data.forEach(azienda => {
                
                const card = document.createElement('div');
                card.classList.add('card', "mb-3");

                card.innerHTML = `
                   <div class="row g-0 align-items-center">
                <div class="col-md-4 d-flex justify-content-center p-3">
                    <img src="${azienda.logo}" alt=" Logo" class="img-fluid rounded-start" style="max-height: 100px;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title">nome: ${azienda.nomeAzienda}</h6>
                         <h6 class="card-title">email aziendale: ${azienda.emailAziendale}</h6>
                        
                    </div>
                </div>
            </div>
                `;

                
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Errore:', error);
        });
}


window.onload = function() {
    getAziendeByRegione();
};