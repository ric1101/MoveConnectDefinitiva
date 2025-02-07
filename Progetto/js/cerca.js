const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

searchInput.addEventListener('input', async (event) => {
    const query = event.target.value;
    
    if (query.length > 0) {
        const response = await fetch(`/api/azienda/nomeAzienda?nomeAzienda=${query}`);
        const results = await response.json();

        // Clear previous results
        resultsList.innerHTML = '';

        // Display new results
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.name;
            resultsList.appendChild(li);
        });
    } else {
        resultsList.innerHTML = ''; // Clear results if input is empty
    }
});