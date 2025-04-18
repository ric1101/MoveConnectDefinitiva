let bottoneBase = document.querySelector(".buttonEconomico");
let bottonePlus = document.querySelector(".buttonPlus");

function abbonamentoBase() {
    let accessToken = localStorage.getItem('accessToken');
    // Prima fetch per ottenere i dati dell'azienda
    fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => {
            // Check if the response is OK
            if (!res.ok) {
                return res.text().then(text => {
                    throw new Error(`Error: ${text}`);
                });
            }
            return res.json(); // Proceed with parsing JSON if response is valid
        })
        .then((data) => {
            console.log(data.id);

            // Seconda fetch per creare la sessione di checkout
            fetch(`https://127.0.0.1/api/product/v1/create-checkout-session/${data.id}?type=base`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}), // Corpo vuoto (puoi modificarlo se necessario)
            })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`Error: ${text}`);
                    });
                }

                // Try to parse the response as JSON, but handle potential issues gracefully
                return response.text().then((text) => {
                    // Check if the response contains a valid URL
                    const checkoutUrlPattern = /^https:\/\/checkout\.stripe\.com\/c\/pay\//;

                    if (checkoutUrlPattern.test(text)) {
                        // If it's a valid Stripe checkout URL, open it in a new tab
                        window.open(text, '_blank');
                    } else {
                        // Handle unexpected responses
                        console.error('Unexpected response:', text);
                    }
                });
            })
            .catch((error) => {
                console.error('Checkout session error:', error);
            });
        })
        .catch((error) => {
            console.error('Errore:', error);
        });
}

function abbonamentoPlus() {
    let accessToken = localStorage.getItem('accessToken');
    // Prima fetch per ottenere i dati dell'azienda
    fetch(`https://127.0.0.1/api/azienda/fromToken?token=${accessToken}`)
        .then((res) => {
            // Check if the response is OK
            if (!res.ok) {
                return res.text().then(text => {
                    throw new Error(`Error: ${text}`);
                });
            }
            return res.json(); // Proceed with parsing JSON if response is valid
        })
        .then((data) => {
            console.log(data.id);

            // Seconda fetch per creare la sessione di checkout
            fetch(`https://127.0.0.1/api/product/v1/create-checkout-session/${data.id}?type=plus`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "nomeAzienda": nomeAzienda
                }),
            })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`Error: ${text}`);
                    });
                }

                // Try to parse the response as JSON, but handle potential issues gracefully
                return response.text().then((text) => {
                    // Check if the response contains a valid URL
                    const checkoutUrlPattern = /^https:\/\/checkout\.stripe\.com\/c\/pay\//;

                    if (checkoutUrlPattern.test(text)) {
                        // If it's a valid Stripe checkout URL, open it in a new tab
                        window.open(text, '_blank');
                    } else {
                        // Handle unexpected responses
                        console.error('Unexpected response:', text);
                    }
                });
            })
            .catch((error) => {
                console.error('Checkout session error:', error);
            });
        })
        .catch((error) => {
            console.error('Errore:', error);
        });
}
