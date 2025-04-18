
const URLOG = `https://127.0.0.1/api/azienda/login`;

let username = document.querySelector('#email');
let password = document.querySelector('#password');

let errore = document.querySelector('.errore');
let register = document.querySelector('#register');
let showPassword = document.querySelector('#showPassword');
let button = document.querySelector('.btn');




function toShowPassword() {
    if (password.type === 'text') {
        password.type = 'password'
    } else {
        password.type = 'text';
    }
}
showPassword.addEventListener('click', toShowPassword);


class Utente {
    constructor(username, password) {
        (this.username = username),
            (this.password = password)
    }
}

let nuovoUtente = {};

console.log(JSON.stringify(nuovoUtente));

function logIn(event) {
    event.preventDefault();
    nuovoUtente = new Utente(
        username.value,
        password.value
    );
    console.log(nuovoUtente);

    fetch(URLOG, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovoUtente),
    })
    .then(response => response.json())
    .then(data => {
        if (data.accessToken) {
            errore.innerHTML = '';
            console.log(data.accessToken); // Questo dovrebbe mostrare il token
            localStorage.setItem('accessToken', data.accessToken);
            window.location.href = 'index.html';
            
        }

    })
    .catch(error => {
        console.error("Errore:", error);
        errore.innerHTML = 'Email o password errati';
    });

    console.log(nuovoUtente);
}

button.addEventListener('click', logIn);
