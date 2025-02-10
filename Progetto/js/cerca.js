const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

searchInput.addEventListener('input', async (event) => {
    const query = event.target.value.trim();

    if (query.length > 0) {
        try {
            // Fetch results from the backend
            const response = await fetch(`http://localhost:8080/api/azienda/nomeAzienda?nomeAzienda=${query}`);
            const results = await response.json();

            // Filter results dynamically based on the query
            const filteredResults = results.filter(result => {
                // Ensure result.name exists and filter by the starting characters
                return result.name && result.name.toLowerCase().startsWith(query.toLowerCase());
            });

            // Clear previous results
            resultsList.innerHTML = '';

            // Display filtered results
            if (filteredResults.length > 0) {
                filteredResults.forEach(result => {
                    const li = document.createElement('li');
                    li.textContent = result.name;
                    resultsList.appendChild(li);
                });
            } else {
                // If no results match, display "No matches found"
                resultsList.innerHTML = '<li>No matches found</li>';
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            resultsList.innerHTML = '<li>Error occurred while fetching data</li>';
        }
    } else {
        // Clear results when the input is empty
        resultsList.innerHTML = '';
    }
});