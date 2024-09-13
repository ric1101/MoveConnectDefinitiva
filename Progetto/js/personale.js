function updateSummary() {
    document.getElementById('facchino-summary').textContent = document.getElementById('facchino-count').textContent;
    document.getElementById('autista-summary').textContent = document.getElementById('autista-count').textContent;
    document.getElementById('montatore-summary').textContent = document.getElementById('montatore-count').textContent;
    document.getElementById('falegname-summary').textContent = document.getElementById('falegname-count').textContent;
}

// Funzione per incrementare il contatore
function increment(role) {
    let count = document.getElementById(role + '-count');
    let currentCount = parseInt(count.textContent);
    currentCount++;
    count.textContent = currentCount;
    updateSummary();
}

// Funzione per decrementare il contatore
function decrement(role) {
    let count = document.getElementById(role + '-count');
    let currentCount = parseInt(count.textContent);
    if (currentCount > 0) {
        currentCount--;
        count.textContent = currentCount;
        updateSummary();
    }
}

// Funzione per inviare la richiesta POST al server
function submitRequest() {
    const requestData = {
        facchino: document.getElementById('facchino-count').textContent,
        autista: document.getElementById('autista-count').textContent,
        montatore: document.getElementById('montatore-count').textContent,
        falegname: document.getElementById('falegname-count').textContent
    };
}



    function validaForm() {
        let indirizzo = document.getElementById('indirizzo').value;
        let civico = document.getElementById('civico').value;
        let cap = document.getElementById('cap').value;
        let provincia = document.getElementById('provincia').value;

        // Limiti specificati per ciascun campo
        let maxIndirizzoLength = 200;
        let maxCivicoLength = 5;
        let maxProvinciaLength = 50;
        let capPattern = /^[0-9]{5}$/; // Solo 5 numeri per CAP
        let alphanumericPattern = /^[A-Za-z0-9\s]+$/; // Solo caratteri alfanumerici e spazi

        // Validazione Indirizzo (alfanumerico e max 200 caratteri)
        if (indirizzo.length > maxIndirizzoLength || !alphanumericPattern.test(indirizzo)) {
            alert("L'indirizzo deve essere alfanumerico e non superare i 200 caratteri!");
            return false;
        }

        // Validazione Numero Civico (solo numeri, max 5 cifre)
        if (civico.length > maxCivicoLength || !/^[0-9]+$/.test(civico)) {
            alert("Il numero civico deve contenere solo numeri e non superare le 5 cifre!");
            return false;
        }

        // Validazione CAP (solo 5 numeri)
        if (!capPattern.test(cap)) {
            alert("Il CAP deve contenere 5 numeri!");
            return false;
        }

        // Validazione Provincia (alfanumerico e max 50 caratteri)
        if (provincia.length > maxProvinciaLength || !alphanumericPattern.test(provincia)) {
            alert("La provincia deve essere max 50 caratteri!");
            return false;
        }

        
    }

    //document.getElementById('btnInvioRichiesta').addEventListener('click', confermaRichiesta);

// .then(ordine => {
//     console.log('Ordine registrato con successo:', ordine);

//     const ordine_id = ordine.id;
//     const cart = prodottiScelti.map(element => new DettaglioOrdine(element.id, ordine_id, element.amount, (element.prezzo * element.amount))))};
