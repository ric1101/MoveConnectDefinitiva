function updateSummary() {
    document.getElementById('imballo1-summary').textContent = document.getElementById('imballo1-count').textContent;
    document.getElementById('imballo2-summary').textContent = document.getElementById('imballo2-count').textContent;
    document.getElementById('imballo3-summary').textContent = document.getElementById('imballo3-count').textContent;
    document.getElementById('imballo4-summary').textContent = document.getElementById('imballo4-count').textContent;
    document.getElementById('imballo5-summary').textContent = document.getElementById('imballo5-count').textContent;
    document.getElementById('imballo6-summary').textContent = document.getElementById('imballo6-count').textContent;
    document.getElementById('imballo7-summary').textContent = document.getElementById('imballo7-count').textContent;
    document.getElementById('imballo8-summary').textContent = document.getElementById('imballo8-count').textContent;
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
