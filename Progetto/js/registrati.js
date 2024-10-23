

let nomeAzienda = document.querySelector("#nomeAzienda");
let logo = document.querySelector("#immagine");
let regione = document.querySelector(".regione");
let provincia = document.querySelector(".provincia");
let comune = document.querySelector(".comune");
let indirizzo = document.querySelector(".indirizzo");
let cap = document.querySelector(".cap");
let pIva = document.querySelector("#partitaIva");
let emailAziendale = document.querySelector("#emailAziendale");
let numeroTelefonoAziendale = document.querySelector("#numeroTelefonoAziendale");
let nomeDipendente = document.querySelector("#nome");
let cognomeDipendente = document.querySelector("#cognome");
let dataNascita = document.querySelector("#dataNascita");
let numeroTelefono = document.querySelector("#numeroTelefono");
let email = document.querySelector("#emailDipendente");
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
    pIva,
    emailAziendale,
    numeroTelefonoAziendale,
    nomeDipendente,
    cognomeDipendente,
    dataNascita,
    numeroTelefono,
    email,
    password
  ) {
    (this.nomeAzienda = nomeAzienda),
      (this.logo = logo),
      (this.regione = regione),
      (this.provincia = provincia),
      (this.comune = comune),
      (this.indirizzo = indirizzo),
      (this.cap = cap),
      (this.pIva = pIva),
      (this.emailAziendale = emailAziendale),
      (this.numeroTelefonoAziendale = numeroTelefonoAziendale),
      (this.nomeDipendente = nomeDipendente),
      (this.cognomeDipendente = cognomeDipendente),
      (this.dataNascita = dataNascita),
      (this.numeroTelefono = numeroTelefono),
      (this.email = email),
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
    pIva.value,
    emailAziendale.value,
    numeroTelefonoAziendale.value,
    nomeDipendente.value,
    cognomeDipendente.value,
    dataNascita.value,
    numeroTelefono.value,
    email.value,
    password.value
  );



  fetch("http://localhost:8080/api/azienda/inserisci", {
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


const regexPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

const regexPasswordMaiuscola = /(?=.*[A-Z])/;
const regexPasswordMinuscola = /(?=.*[a-z])/;
const regexPasswordSpeciale = /(?=.*[@$!%*?&])/;
const regexPasswordNumeri = /(?=.*\d)/;
let regexCap = /^[0-9]{5}$/;
let regexPIva = /^[0-9]{11}$/;
let regexNumTel = /^[0-9]{6,15}/;
const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

new Date();
let dat = new Date();

//--------------------------------------//

let ggMin = dat.getDate() + 1;
let mmMin = (dat.getMonth() + 1);
let aaMin = dat.getFullYear() - 75;

let dataMin = aaMin + "-" + mmMin + "-" + ggMin;
console.log(dataMin);

//--------------------------------------//

let ggMax = dat.getDate() + 1;
let mmMax = (dat.getMonth() + 1);
let aaMax = dat.getFullYear() - 18;

let dataMax = aaMax + "-" + mmMax + "-" + ggMax;
console.log(dataMax);

//--------------------------------------//

dataNascita.setAttribute('min', dataMin)
dataNascita.setAttribute('max', dataMax)



function passwordCheck() {


  if (password.value.length <= 8) {

    let lunghezzaMin = `<li> Minimo 8 caratteri </li>`;
    erroreLunghezzaMin.innerHTML = lunghezzaMin;
  } else {
    erroreLunghezzaMin.innerHTML = "";

  }

  if (password.value.length > 10) {
    let lunghezzaMax = `<li> Massimo 10 caratteri</li>`;
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

  if (!email.value.match(regexEMAIL)) {
    let emailDipErr = 'email non valida';
    invalidEmailDip.innerHTML = emailDipErr;
  } else {
    invalidEmailDip.innerHTML = ''
  }

}

function pIvaCheck() {

  if (!pIva.value.match(regexPIva)) {
    let pIvaErr = 'partita Iva non valida';
    invalidPIva.innerHTML = pIvaErr;
  } else {
    invalidPIva.innerHTML = '';
  }

}

function numTelAzCheck() {

  if (!numeroTelefonoAziendale.value.match(regexNumTel)) {
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

//   fetch(`http://localhost:8080/registrati?email=${emailLive}`)

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
    pIva.value.trim() != "" &&
    emailAziendale.value.trim() != "" &&
    numeroTelefonoAziendale.value.trim() != "" &&
    nomeDipendente.value.trim() != "" &&
    cognomeDipendente.value.trim() != "" &&
    dataNascita.value.trim() != "" &&
    numeroTelefono.value.trim != "" &&
    email.value.trim() != "" &&
    password.value.trim() != "" &&
    password.value.match(regexPASSWORD) &&
    cap.value.match(regexCap) &&
    emailAziendale.value.match(regexEMAIL) &&
    email.value.match(regexEMAIL) &&
    pIva.value.match(regexPIva) &&
    numeroTelefonoAziendale.value.match(regexNumTel) &&
    numeroTelefono.value.match(regexNumTel) &&
    checkboxPrivacy.checked &&
    checkboxCookie.checked) {

      nonInviato.innerHTML = '';
      registrazioneAzienda();
      
      
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
email.addEventListener('keyup', emailDipCheck);
emailAziendale.addEventListener('keyup', emailAzCheck);
pIva.addEventListener('keyup', pIvaCheck);
numeroTelefonoAziendale.addEventListener('keyup', numTelAzCheck);
numeroTelefono.addEventListener('keyup', numTelDipCheck);





