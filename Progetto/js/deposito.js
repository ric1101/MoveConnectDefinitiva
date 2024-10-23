function updateSummary() {
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

