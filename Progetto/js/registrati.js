

let nomeAzienda = document.querySelector("#nomeAzienda");
// let logo = document.querySelector("#immagine");
let regione = document.querySelector(".regione");
let paese = document.querySelector(".paese");
let citta = document.querySelector(".citta");
let indirizzo = document.querySelector(".indirizzo");
let indirizzoDue = document.querySelector(".indirizzoDue");
let cap = document.querySelector(".cap");
let piva = document.querySelector("#partitaIva");
let emailAziendale = document.querySelector("#emailAziendale");
let numeroTelefonicoAziendale = document.querySelector("#numeroTelefonoAziendale");
let nomeDipendente = document.querySelector("#nome");
let cognomeDipendente = document.querySelector("#cognome");
let numeroTelefono = document.querySelector("#numeroTelefono");
let username = document.querySelector("#emailDipendente");
let password = document.querySelector("#password");
let bottoneRegistrati = document.querySelector("#registrati");
let showPassword = document.querySelector("#showPassword");
let checkboxPrivacy = document.querySelector("#flexCheckPrivacy");
let checkboxCookie = document.querySelector("#flexCheckCookie");


let listaErrori = document.querySelector('#listaErrori');
let erroreLunghezzaMin = document.querySelector('.erroreLunghezzaMin');
let erroreLunghezzaMax = document.querySelector('.erroreLunghezzaMax');
let erroreMaiuscola = document.querySelector('.erroreMaiuscola');
let erroreMinuscola = document.querySelector('.erroreMinuscola');
let erroreCarattereSpec = document.querySelector('.erroreCarattereSpec');
let erroreNumero = document.querySelector('.erroreNumero');
let nonInviato = document.querySelector('.nonInviato');
let invalidEmailAz = document.querySelector('.invalidEmailAz');
let invalidEmailDip = document.querySelector('.invalidEmailDip');
let invalidNumTelAz = document.querySelector('.invalidNumTelAz');
let invalidNumTelDip = document.querySelector('.invalidNumTelDip');



class Azienda {
  constructor(
    nomeAzienda,
    regione,
    paese,
    citta,
    indirizzo,
    indirizzoDue,
    cap,
    piva,
    emailAziendale,
    numeroTelefonicoAziendale,
    nomeDipendente,
    cognomeDipendente,
    numeroTelefono,
    username,
    password
  ) {
    (this.nomeAzienda = nomeAzienda),
      (this.regione = regione),
      (this.paese = paese),
      (this.citta = citta),
      (this.indirizzo = indirizzo),
      (this.indirizzoDue = indirizzoDue),
      (this.cap = cap),
      (this.piva = piva),
      (this.emailAziendale = emailAziendale),
      (this.numeroTelefonicoAziendale = numeroTelefonicoAziendale),
      (this.nomeDipendente = nomeDipendente),
      (this.cognomeDipendente = cognomeDipendente),
      (this.numeroTelefono = numeroTelefono),
      (this.username = username),
      (this.password = password);
  }
}



function registrazioneAzienda() {
  let apiUrl = fetch(window.MY_APP_API_URL);// dentro ogni funzione

  
  event.preventDefault();


  let nuovaAzienda = new Azienda(
    nomeAzienda.value,
    regione.value,
    paese.value,
    citta.value,
    indirizzo.value,
    indirizzoDue.value,
    cap.value,
    piva.value,
    emailAziendale.value,
    numeroTelefonicoAziendale.value,
    nomeDipendente.value,
    cognomeDipendente.value,
    numeroTelefono.value,
    username.value,
    password.value
  );


  console.log(nuovaAzienda);

  fetch("${apiUrl}/api/azienda/registerSerio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovaAzienda),
    
    
  })

}


const regexPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
const regexPasswordMaiuscola = /(?=.*[A-Z])/;
const regexPasswordMinuscola = /(?=.*[a-z])/;
const regexPasswordSpeciale = /(?=.*[@$!%*?&])/;
const regexPasswordNumeri = /(?=.*\d)/;
let regexPIva = /^[0-9]{11}$/;
let regexNumTel = /^[0-9]{6,15}/;
const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


function passwordCheck() {


  if (password.value.length <= 8) {

    let lunghezzaMin = `<li> Minimo 8 caratteri </li>`;
    erroreLunghezzaMin.innerHTML = lunghezzaMin;
  } else {
    erroreLunghezzaMin.innerHTML = "";

  }

  if (password.value.length > 15) {
    let lunghezzaMax = `<li> Massimo 15 caratteri</li>`;
    erroreLunghezzaMax.innerHTML = lunghezzaMax;
  } else {
    erroreLunghezzaMax.innerHTML = "";
  }

  if (!password.value.match(regexPasswordMaiuscola)) {
    let maiuscolo = `<li>Almeno un carattere in maiuscolo</li>`
    erroreMaiuscola.innerHTML = maiuscolo;

  } else {
    erroreMaiuscola.innerHTML = "";
  }

  if (!password.value.match(regexPasswordMinuscola)) {
    let minuscolo = `<li>Almeno un carattere in minuscolo</li>`;
    erroreMinuscola.innerHTML = minuscolo;
  } else {
    erroreMinuscola.innerHTML = "";
  }

  if (!password.value.match(regexPasswordSpeciale)) {
    let carattereSpeciale = `<li>Almeno un carattere speciale(@$!%*?&)</li>`;
    erroreCarattereSpec.innerHTML = carattereSpeciale;
  } else {
    erroreCarattereSpec.innerHTML = "";
  }


  if (!password.value.match(regexPasswordNumeri)) {
    let numero = `<li>Almeno un numero</li>`;
    erroreNumero.innerHTML = numero;
  } else {
    erroreNumero.innerHTML = "";
  }

}


function emailAzCheck() {

  if (!emailAziendale.value.match(regexEMAIL)) {
    let emailAzErr = 'email aziendale non valida';
    invalidEmailAz.innerHTML = emailAzErr;
    console.log('true');

  } else {
    invalidEmailAz.innerHTML = '';
    console.log('false');
  }

}

function emailDipCheck() {

  if (!username.value.match(regexEMAIL)) {
    let emailDipErr = 'email non valida';
    invalidEmailDip.innerHTML = emailDipErr;
  } else {
    invalidEmailDip.innerHTML = ''
  }

}


function numTelAzCheck() {

  if (!numeroTelefonicoAziendale.value.match(regexNumTel)) {
    let numAzErr = 'numero aziendale non valido';
    invalidNumTelAz.innerHTML = numAzErr;
  } else {
    invalidNumTelAz.innerHTML = '';
  }

}

function numTelDipCheck() {

  if (!numeroTelefono.value.match(regexNumTel)) {
    let numDipErr = 'numero dipendente non valido';
    invalidNumTelDip.innerHTML = numDipErr;
  } else {
    invalidNumTelDip.innerHTML = '';
  }

}


function controlloDati() {


  if (nomeAzienda.value.trim() != "" &&
    regione.value.trim() != "" &&
    paese.value.trim() != "" &&
    citta.value.trim() != "" &&
    indirizzo.value.trim() != "" &&
    indirizzoDue.value.trim() != "" &&
    cap.value.trim() != "" &&
    piva.value.trim() != "" &&
    emailAziendale.value.trim() != "" &&
    numeroTelefonicoAziendale.value.trim() != "" &&
    nomeDipendente.value.trim() != "" &&
    cognomeDipendente.value.trim() != "" &&
    numeroTelefono.value.trim != "" &&
    username.value.trim() != "" &&
    password.value.trim() != "" &&
    password.value.match(regexPASSWORD) &&
    emailAziendale.value.match(regexEMAIL) &&
    username.value.match(regexEMAIL) &&
    numeroTelefonicoAziendale.value.match(regexNumTel) &&
    numeroTelefono.value.match(regexNumTel) &&
    checkboxPrivacy.checked &&
    checkboxCookie.checked) {

      nonInviato.innerHTML = '';
      registrazioneAzienda();
      
      localStorage.setItem('emailUtente', username.value);
      location.reload();
      window.location.href = 'codice.html';
      console.log('ciao');
      

    } else {
      
      nonInviato.innerHTML = 'riempi i campi mancanti o incompleti!';

  }

}


function toShowPassword() {
  if (password.type === "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
}
showPassword.addEventListener("click", toShowPassword);


bottoneRegistrati.addEventListener("click", () => {
    
    controlloDati();
 

});

password.addEventListener("keyup", passwordCheck);
username.addEventListener('keyup', emailDipCheck);
emailAziendale.addEventListener('keyup', emailAzCheck);
numeroTelefonicoAziendale.addEventListener('keyup', numTelAzCheck);
numeroTelefono.addEventListener('keyup', numTelDipCheck);





