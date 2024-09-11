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
fetch(URL_ORDINI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ordine)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Errore nella registrazione dell\'ordine: ' + response.statusText);
    }
    return response.json();
})
// .then(ordine => {
//     console.log('Ordine registrato con successo:', ordine);

//     const ordine_id = ordine.id;
//     const cart = prodottiScelti.map(element => new DettaglioOrdine(element.id, ordine_id, element.amount, (element.prezzo * element.amount))))};
