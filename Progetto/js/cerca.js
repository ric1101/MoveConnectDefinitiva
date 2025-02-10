async function cercaAzienda() {
    let nomeAzienda = document.getElementById("searchInput").value;
    
    if (nomeAzienda.length < 2) { 
        document.getElementById("ricerca").innerHTML = "";
        return;
    }

    try {
        let response = await fetch(`http://localhost:8080/api/azienda/search?nomeAzienda=${(nomeAzienda)}`);
        let aziende = await response.json();
        
        let resultsList = document.getElementById("ricerca");
        resultsList.innerHTML = "";

        aziende.forEach(azienda => {
            let li = document.createElement("li");
            li.textContent = azienda.nomeAzienda; 
            resultsList.appendChild(li);
        });

    } catch (error) {
        console.error("Errore nella ricerca:", error);
    }
}