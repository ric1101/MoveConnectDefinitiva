const URLOGIN = `http://127.0.0.1:8080/api/admin/login`;

let errore = document.querySelector('.errore');
let showPassword = document.querySelector('#showPassword');
let button = document.querySelector('.btn');

let username = document.querySelector('#email');
let password = document.querySelector('#password');

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


function logIn(event) {
    event.preventDefault();
    nuovoUtente = new Utente(
        email.value,
        password.value
    );
    console.log(nuovoUtente);

    fetch(URLOGIN, {
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
            window.location.href = 'getionaleBlogDesign.html';
            
        }

    })
    .catch(error => {
        console.error("Errore:", error);
        errore.innerHTML = 'Email o password errati';
    });

    console.log(nuovoUtente);
}

button.addEventListener('click', logIn);