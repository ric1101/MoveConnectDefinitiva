

let nomeAzienda = document.querySelector("#nomeAzienda");
let logo = document.querySelector("#immagine");
let regione = document.querySelector(".regione");
let provincia = document.querySelector(".provincia");
let comune = document.querySelector(".comune");
let indirizzo = document.querySelector(".indirizzo");
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
let invalidCap = document.querySelector('.invalidCap');
let invalidEmailAz = document.querySelector('.invalidEmailAz');
let invalidEmailDip = document.querySelector('.invalidEmailDip');
let invalidPIva = document.querySelector('.invalidPIva');
let invalidNumTelAz = document.querySelector('.invalidNumTelAz');
let invalidNumTelDip = document.querySelector('.invalidNumTelDip');



class Azienda {
  constructor(
    nomeAzienda,
    logo,
    regione,
    provincia,
    comune,
    indirizzo,
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
      (this.logo = logo),
      (this.regione = regione),
      (this.provincia = provincia),
      (this.comune = comune),
      (this.indirizzo = indirizzo),
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
  

  let nuovaAzienda = new Azienda(
    nomeAzienda.value,
    logo.value,
    regione.value,
    provincia.value,
    comune.value,
    indirizzo.value,
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



  fetch("http://127.0.0.1:8080/api/azienda/registerSerio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovaAzienda),
  })

}
// .then((response) => {
//   if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

//   window.localStorage.setItem("azienda", JSON.stringify(nuovaAzienda));
//   location.reload();
//  } else {
//   console.textContent = "Per continuare devi compilare tutti i campi e accettare i Termini di servizio e Cookie";
// }
// console.log(nuovaAzienda);


const regexPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

const regexPasswordMaiuscola = /(?=.*[A-Z])/;
const regexPasswordMinuscola = /(?=.*[a-z])/;
const regexPasswordSpeciale = /(?=.*[@$!%*?&])/;
const regexPasswordNumeri = /(?=.*\d)/;
let regexCap = /^[0-9]{5}$/;
let regexPIva = /^[0-9]{11}$/;
let regexNumTel = /^[0-9]{6,15}/;
const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// new Date();
// let dat = new Date();

// //--------------------------------------//

// let ggMin = dat.getDate() + 1;
// let mmMin = (dat.getMonth() + 1);
// let aaMin = dat.getFullYear() - 75;

// let dataMin = aaMin + "-" + mmMin + "-" + ggMin;
// console.log(dataMin);

// //--------------------------------------//

// let ggMax = dat.getDate() + 1;
// let mmMax = (dat.getMonth() + 1);
// let aaMax = dat.getFullYear() - 18;

// let dataMax = aaMax + "-" + mmMax + "-" + ggMax;
// console.log(dataMax);

// //--------------------------------------//

// dataNascita.setAttribute('min', dataMin)
// dataNascita.setAttribute('max', dataMax)



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


function capCheck() {


  if (!cap.value.match(regexCap)) {
    let capErr = 'cap non valido';
    invalidCap.innerHTML = capErr;
    console.log(invalidCap);
  } else {
    invalidCap.innerHTML = '';

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

function pIvaCheck() {

  if (!piva.value.match(regexPIva)) {
    let pIvaErr = 'partita Iva non valida';
    invalidPIva.innerHTML = pIvaErr;
  } else {
    invalidPIva.innerHTML = '';
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


// function emailCheckValue() {

//   let emailLive = email.value;

//   fetch(`http://127.0.0.1:8080/registrati?email=${emailLive}`)

//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data, "sono dentro la fetch")
      
//       if (data == 'true') {
        
//         return true;

//       } else {
        
//         return false;

//       }


//     })

// }


function controlloDati() {

  event.preventDefault();

  if (nomeAzienda.value.trim() != "" &&
    logo.value.trim() != "" &&
    regione.value.trim() != "" &&
    provincia.value.trim() != "" &&
    comune.value.trim() != "" &&
    indirizzo.value.trim() != "" &&
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
    cap.value.match(regexCap) &&
    emailAziendale.value.match(regexEMAIL) &&
    username.value.match(regexEMAIL) &&
    piva.value.match(regexPIva) &&
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
  // if (emailCheckValue()) {
    
    controlloDati();
  // } else {

  // }

});

password.addEventListener("keyup", passwordCheck);
cap.addEventListener('keyup', capCheck)
username.addEventListener('keyup', emailDipCheck);
emailAziendale.addEventListener('keyup', emailAzCheck);
piva.addEventListener('keyup', pIvaCheck);
numeroTelefonicoAziendale.addEventListener('keyup', numTelAzCheck);
numeroTelefono.addEventListener('keyup', numTelDipCheck);





