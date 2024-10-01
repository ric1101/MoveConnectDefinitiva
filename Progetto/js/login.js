
const URLOG = `http://localhost:8080/api/azienda/login`;

let email = document.querySelector('#email');
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
    constructor(email, password) {
        (this.email = email),
            (this.password = password)
    }
}

let nuovoUtente = {};

console.log(JSON.stringify(nuovoUtente));

function logIn() {
    event.preventDefault();
    let nuovoUtente = {
        email: email.value,
        password: password.value
    };

    fetch('http://localhost:8080/api/azienda/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovoUtente)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Salva il token JWT nel localStorage
            localStorage.setItem('authToken', data.token);
            window.location.href = 'index.html';
        } else {
            errore.innerHTML = 'Email o password errati';
        }
    });
}

button.addEventListener('click', logIn);

fetch('http://localhost:8080/api/azienda/loginDue', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);  // Dati dell'utente
});


