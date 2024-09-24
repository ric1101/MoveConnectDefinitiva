let nomeAzienda = document.querySelector("#nomeAzienda");
let logo = document.querySelector("#immagine");
let indirizzo = document.querySelector("#indirizzo");
let pIva = document.querySelector("#partitaIva");
let emailAziendale = document.querySelector("#emailAziendale");
let nomeDipendente = document.querySelector("#nome");
let cognomeDipendente = document.querySelector("#cognome");
let dataNascita = document.querySelector("#dataNascita");
let numeroTelefono = document.querySelector("#numeroTelefono");
let emailDipendente = document.querySelector("#emailDipendente");
let password = document.querySelector("#password");
let bottoneRegistrati = document.querySelector("#registrati");





class Azienda {
    constructor(nomeAzienda,logo,indirizzo,pIva, emailAziendale,nomeDipendente,cognomeDipendente,dataNascita,numeroTelefono,emailDipendente,password){
        (this.nomeAzienda = nomeAzienda),
        (this.logo = logo),
        (this.indirizzo = indirizzo),
        (this.pIva = pIva),
        (this.emailAziendale = emailAziendale),
        (this.nomeDipendente = nomeDipendente),
        (this.cognomeDipendente = cognomeDipendente),
        (this.dataNascita = dataNascita),
        (this.numeroTelefono = numeroTelefono),
        (this.emailDipendente = emailDipendente),
        (this.password = password);
    }
}

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
        emailDipendente.value,
        password.value
    );

    fetch("http://localhost:8080/api/azienda/inserisci", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovaAzienda),
      });
    }

    bottoneRegistrati.addEventListener("click", registrazioneAzienda);

