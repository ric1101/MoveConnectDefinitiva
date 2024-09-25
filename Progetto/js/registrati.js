let nomeAzienda = document.querySelector("#nomeAzienda");
let logo = document.querySelector("#immagine");
let indirizzo = document.querySelector("#indirizzo");
let pIva = document.querySelector("#partitaIva");
let emailAziendale = document.querySelector("#emailAziendale");
let nomeDipendente = document.querySelector("#nome");
let cognomeDipendente = document.querySelector("#cognome");
let dataNascita = document.querySelector("#dataNascita");
let numeroTelefono = document.querySelector("#numeroTelefono");
let email = document.querySelector("#emailDipendente");
let password = document.querySelector("#password");
let bottoneRegistrati = document.querySelector("#registrati");
let listaErrori = document.querySelector("#listaErrori");
let showPassword = document.querySelector("#showPassword");

class Azienda {
  constructor(
    nomeAzienda,
    logo,
    indirizzo,
    pIva,
    emailAziendale,
    nomeDipendente,
    cognomeDipendente,
    dataNascita,
    numeroTelefono,
    email,
    password
  ) {
    (this.nomeAzienda = nomeAzienda),
      (this.logo = logo),
      (this.indirizzo = indirizzo),
      (this.pIva = pIva),
      (this.emailAziendale = emailAziendale),
      (this.nomeDipendente = nomeDipendente),
      (this.cognomeDipendente = cognomeDipendente),
      (this.dataNascita = dataNascita),
      (this.numeroTelefono = numeroTelefono),
      (this.email = email),
      (this.password = password);
  }
}

let nuovaAzienda = {};

console.log(JSON.stringify(nuovaAzienda));

function registrazioneAzienda() {
  nuovaAzienda = new Azienda(
    nomeAzienda.value,
    logo.value,
    indirizzo.value,
    pIva.value,
    emailAziendale.value,
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
  });
  console.log(nuovaAzienda);
}

bottoneRegistrati.addEventListener("click", registrazioneAzienda);

const regexPASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function passwordCheck() {
    listaErrori.innerHTML = "";
     listaErrori.innerHTML += `<li>La tua password deve contenere almeno:</li>`;
    if(password.value.length < 8 ) {
        let troppoCorta = `<li>Almeno 8 caratteri</li>`;
        listaErrori.innerHTML += troppoCorta;
        console.log(troppoCorta);
        
    }

    if(password.value.length > 15){
        let troppoLunga = `<li> Massimo 15 caratteri </li>`;
        listaErrori.innerHTML += troppoLunga;
    }

  if (
    !password.value.match(regexPASSWORD)
  ) {
    listaErrori.innerHTML += `                         
                               <li>Almeno un carattere in maiuscolo</li>
                               <li>Almeno un carattere in minuscolo</li>
                               <li>Almeno un numero</li>
                               <li>Almeno un carattere speciale (!,?,@)</li>
                               `;

    //  form.classList.remove('was-validated');
    return false;
  } else {
    listaErrori.innerHTML = "";
    if(password.value.length < 8 ) {
        let troppoCorta = `<li>Almeno 8 caratteri</li>`;
        listaErrori.innerHTML += troppoCorta;
        console.log(troppoCorta);
        
    }
    
    if(password.value.length > 15){
        listaErrori.innerHTML += `<li>La tua password deve contenere almeno:</li>`;
        let troppoLunga = `<li> Massimo 15 caratteri </li>`;
        listaErrori.innerHTML += troppoLunga;
    }

    // btn_login.classList.add('form-control');
    return true;
  }
}

password.addEventListener("keyup", passwordCheck);

function toShowPassword() {
    if (password.type === "text") {
      password.type = "password";
    } else {
      password.type = "text";
    }
  }
  
  showPassword.addEventListener("click", toShowPassword);

//   bottoneRegistrati.addEventListener("click", function(){
//     event.preventDefault();

//     let emailLive = email.value;

//   fetch(`http://localhost:8080/registrati?email=${emailLive}`)

//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data, "sono dentro la fetch")
//       let risultato = data;


//       let controllo = risultato;
//       console.log(controllo, "controllo iniziale");
//       // Previeni l'invio predefinito del form
//       if (
//         passwordCheck() &&
//         email.value.match(regexEMAIL) &&
//         cognome.value != "" &&
//         nome.value != "" && (!controllo)
//       ) {
//         console.log(controllo, "sono dentro l-if")
//         nonInviato.classList.add('d-none');
//         inviato.classList.remove('d-none');
//         inviato.classList.remove('text-danger');
//         inviato.classList.add('text-success');
//         inviato.innerHTML = "Dati inviati correttamente";


//         // form.classList.add("was-validated");
//         registrazione();
//         console.log("true");
//         setTimeout(() => {
//           window.location.href = 'login.html';

//         }, 2000);
//       } else if (controllo) {
//         inviato.classList.remove('text-success');
//         inviato.classList.add('text-danger');
//         nonInviato.classList.remove("d-none");
//         nonInviato.innerHTML = "Email già esistente";
//         inviato.innerHTML = "Invio non riuscito";

//       } else {
//         console.log('Email doppione');
//         inviato.classList.add("text-danger");
//         inviato.innerHTML = "Invio non riuscito";
//       }


//     })
//  });
// })


