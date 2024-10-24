
    
    document.addEventListener("DOMContentLoaded", () => {
         fetch("http://localhost:8080/api/azienda/tutteLeAziende") 
            .then(  response => response.json())
            .then(data => {
                generateCards(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

getAllAziende();
function generateCards(aziende) {
    const container = document.getElementById("aziende-container");
    aziende.forEach(azienda => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        
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
}