import * as CryptoJS from 'crypto-js';
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
    nuovoUtente = new Utente(
        email.value,
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
        .then(response => {
            console.log(response);

            if (response.ok) {
                fetch(`http://localhost:8080/api/azienda/email/${email.value}`)

                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        window.location.href = 'index.html';
                        // let id = JSON.stringify(data.id);
                        // localStorage.setItem('idUtente', id);
                        storageEncryption(data.id);
                    });
                    
                } else {
                    errore.innerHTML = 'email o password errati';
                }



            console.log(nuovoUtente);

        });
}
button.addEventListener('click', logIn);


function storageEncryption(id) {
    /**
  * secret key should be stored in a safe place. This is only for a demo purpose.
  */
    let _key = "secret_key"

    function encrypt(txt) {
        return CryptoJS.AES.encrypt(txt, _key).toString();
    }

    function decrypt(txtToDecrypt) {
        return CryptoJS.AES.decrypt(txtToDecrypt, _key).toString(CryptoJS.enc.Utf8);
    }

    function manipulateLocalStorage() {
        Storage.prototype.setEncryptedItem = (key, value) => {
            localStorage.setItem(key, encrypt(value));
        };

        Storage.prototype.getDecryptedItem = (key) => {
            let data = localStorage.getItem(key) || "";
            return decrypt(data) || null;
        }
    }
 /**
  * First call this function to add our custom functions to the Storage interface
  * 
  */
    manipulateLocalStorage();
    /**
     * you can use the setEncryptedItem and getDecryptedItem functions
     * to encrypt and decrypt the data
     * */ 

    localStorage.setEncryptedItem("token", id);
    const token = localStorage.getDecryptedItem("token");
    console.log(token);
}
storageEncryption();

