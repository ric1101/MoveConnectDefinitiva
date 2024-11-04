let tabella = document.querySelector(".tabellozza");
let nomeAzienda = document.getElementById("nomeAzienda");
let logo = document.querySelector("#logo");
let indirizzo = document.querySelector("#indirizzo");
let piva = document.querySelector("#pIva");
let numeroAziendale = document.querySelector("#numeroAziendale");
let emailAziendale = document.querySelector("#emailAziendale");
let nomeDipendente = document.querySelector("#nomeDipendente");
let cognomeDipendente = document.querySelector("#cognomeDipendente");
let dataNascita = document.querySelector("#dataNascita");
let numeroTelefono = document.querySelector("#numeroTelefono");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let bodyTabella = document.querySelector("#bodyTabella");
let bottoneModifica = document.querySelector(".bottoneModifica");
let spavAziendaDaEliminare = document.querySelector("#spanEventoDaEliminare");
let spanEventoDaEliminare = document.getElementById('spanEventoDaEliminare');
let bottoneConfermaEliminazione = document.querySelector('.delete');
let deleteCont = document.querySelector(".delete_cont");

let eventoSelezionato = "";
let arrayAziende = [];

async function getAllAziende() {
    try {
        const response = await fetch("http://localhost:8080/api/azienda/tutteLeAziende")
        const aziende = await response.json();
        console.log("CIAO");
        arrayAziende = aziende;
        console.log(aziende);
        tutteLeAziende();
        
        
    } catch (error) {
        console.error("Error fetching aziende", error);
    }
    
}

getAllAziende();

function tutteLeAziende() {
    let fragment = document.createDocumentFragment();
    arrayAziende.forEach((evento) => {
        let aziendaRecord = document.createElement("tr");
        let inserisciTabella = `  
        <td class="idAzienda">${evento.id}</td>
        <td class="nomeAzienda" data-eventoId="${evento.id}" >${evento.nomeAzienda}</td>
        <td class="logo"  data-eventoId="${evento.id}">${evento.logo}</td>
        <td class="indirizzo"  data-eventoId="${evento.id}">${evento.indirizzo}</td>
        <td class="pIva"  data-eventoId="${evento.id}">${evento.pIva}</td>
        <td class="numeroAziendale"  data-eventoId="${evento.id}">${evento.numeroTelefonoAziendale}</td>
        <td class="emailAziendale"  data-eventoId="${evento.id}">${evento.emailAziendale}</td>
        <td class="nomeDipendente"  data-eventoId="${evento.id}">${evento.nomeDipendente}</td>
        <td class="cognomeDipendente"  data-eventoId="${evento.id}">${evento.cognomeDipendente}</td>
        <td class="dataNascita"  data-eventoId="${evento.id}">${evento.dataNascita}</td>
        <td class="numeroTelefono"  data-eventoId="${evento.id}">${evento.numeroTelefono}</td>
        <td class="email"  data-eventoId="${evento.id}">${evento.email}</td>
        <td class="password"  data-eventoId="${evento.id}">${evento.password}</td>
        
        <td>
        <button class="bottoneModifica fa-solid fa-pen btn btn-primary" data-eventoId="${evento.id}"></button>
        <button data-bs-toggle="modal" data-bs-target="#modalConfermaEliminazione" class="btnApriModalEliminazione fa-solid fa-trash btn btn-danger" data-eventoId="${evento.id}"></button>  
        </td>
        `;
        
        aziendaRecord.innerHTML = inserisciTabella;
        fragment.appendChild(aziendaRecord);
    });
    
    bodyTabella.appendChild(fragment);
    
    document.querySelectorAll(".bottoneModifica").forEach(btn => {
        btn.addEventListener("click", () => toggleEdit(btn));
    });
    
    // document.querySelectorAll(".btnApriModalEliminazione").forEach(btn => {
        //     btn.addEventListener("click", () =>{
            //         let azienda = arrayAziende.find(azienda => azienda.id == btn.getAttribute("data-eventoId"));
            //         if(azienda){
                //             spavAziendaDaEliminare.textContent = azienda.nomeAzienda;
                //             eventoSelezionato = btn.getAttribute("data-eventoId");
                //         }
                //     });
                // });
                
                let modalElimina = document.querySelectorAll(".btnApriModalEliminazione")
                modalElimina.forEach(btn => {
                    btn.addEventListener("click", () => {
                        deleteCont.classList.remove("d-none"); 
                        deleteCont.classList.add("d-block");
                    })
                })
            
                        
                        let bottoneTornaIndiedtro = document.querySelectorAll('.cancel');
                        bottoneTornaIndiedtro.forEach(btn => {
                            btn.addEventListener("click", () => {
                        deleteCont.classList.remove("d-block");
                        deleteCont.classList.add("d-none");
                            
                    })
                })

                let bottoneConfermaEliminazione = document.querySelectorAll('.delete');
                modalElimina.forEach(btn => {
                    btn.addEventListener("click", () => {
                        eventoSelezionato = btn.getAttribute("data-eventoId"); // Capture the ID here
                        let azienda = arrayAziende.find(azienda => azienda.id == eventoSelezionato);
                        if (azienda) {
                            spavAziendaDaEliminare.textContent = azienda.nomeAzienda;
                            deleteCont.classList.remove("d-none");
                            deleteCont.classList.add("d-block");
                        }
                    });
                });
                
                
                
                
                
            }



async function toggleEdit(btn){
    let isEditable = btn.classList.contains("fa-floppy-disk");

    let eventId = btn.getAttribute("data-eventoId");

    let campiForm = document.querySelectorAll(`[data-eventoId="${eventId}"]`);
    let btnApriModalEliminazioneSingoloEvento = document.querySelector(`.btnApriModalEliminazione[data-eventoId="${eventId}"]`);

    if(btn.classList.contains("fa-floppy-disk")){
        let nomeAziendaSelezionata = document.querySelector(`.nomeAzienda[data-eventoId="${eventId}"]`);
        let logoSelezionata= document.querySelector(`.logo[data-eventoId="${eventId}"]`);
        let indirizzoSelezionata = document.querySelector(`.indirizzo[data-eventoId="${eventId}"]`);
        let pIvaSelezionata = document.querySelector(`.pIva[data-eventoId="${eventId}"]`);
        let numeroTelefonoAziendaleSelezionata = document.querySelector(`.numeroAziendale[data-eventoId="${eventId}"]`);
        let emailAziendaleSelezionata = document.querySelector(`.emailAziendale[data-eventoId="${eventId}"]`);
        let nomeDipendenteSelezionata = document.querySelector(`.nomeDipendente[data-eventoId="${eventId}"]`);
        let cognomeDipendenteSelezionata= document.querySelector(`.cognomeDipendente[data-eventoId="${eventId}"]`);
        let dataNascitaSelezionata = document.querySelector(`.dataNascita[data-eventoId="${eventId}"]`);
        let numeroTelefonoSelezionata = document.querySelector(`.numeroTelefono[data-eventoId="${eventId}"]`);
        let emailSelezionata = document.querySelector(`.email[data-eventoId="${eventId}"]`);
        let passwordSelezionata = document.querySelector(`.password[data-eventoId="${eventId}"]`);  

        const oggettoAziendaModificata = new EventoPUT(
            Number(eventId),
            nomeAziendaSelezionata.textContent,
            logoSelezionata.textContent,
            indirizzoSelezionata.textContent,
            pIvaSelezionata.textContent,
            numeroTelefonoAziendaleSelezionata.textContent,
            emailAziendaleSelezionata.textContent,
            nomeDipendenteSelezionata.textContent,
            cognomeDipendenteSelezionata.textContent,
            dataNascitaSelezionata.textContent,
            numeroTelefonoSelezionata.textContent,
            emailSelezionata.textContent,
            passwordSelezionata.textContent
        )

        console.log("Azienda da aggiornare", oggettoAziendaModificata);
        

        modificaAzienda(oggettoAziendaModificata);

        btn.classList.remove("fa-floppy-disk");
        btn.classList.add("fa-pen");

        [...campiForm].forEach(campo =>{
            campo.style.color = !isEditable ? "blue" : "black";
            campo.removeAttribute('contenteditable');
        })

        btn.style.color = "white";
        btnApriModalEliminazioneSingoloEvento.style.color = "white";


    }else {
        campiForm.forEach(campo => {
            campo.setAttribute("contenteditable", !isEditable);
            campo.style.color = !isEditable ? "blue" : "black";

            btnApriModalEliminazioneSingoloEvento.style.color = "white";
        });
        btn.classList.toggle("fa-floppy-disk", !isEditable);
        btn.classList.toggle("fa-pen", isEditable);
        btn.style.color = "white";
    }
}
async function confermaEliminazione() {
    console.log("ID da eliminare:", eventoSelezionato); // Check the ID
    if(eventoSelezionato) { // Make sure the ID is not empty
        try {
            const response = await fetch(`http://localhost:8080/api/azienda/eliminaAzienda/${eventoSelezionato}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Failed to delete");
            }

            console.log("Azienda eliminata con successo");
            // Optionally, refresh the list or remove the entry from the table
            // getAllAziende(); // You can call this to refresh the list
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    } else {
        console.error("ID non trovato per l'eliminazione.");
    }
}

// Attach the click event for confirmation
bottoneConfermaEliminazione.addEventListener("click", confermaEliminazione);


    class Evento{
        constructor(nomeAzienda,logo,indirizzo,pIva,numeroTelefonoAziendale,emailAziendale,nomeDipendente,cognomeDipendente,dataNascita,numeroTelefono,email,password){
            this.nomeAzienda = nomeAzienda;
            this.logo = logo;
            this.indirizzo = indirizzo;
            this.pIva = pIva;
            this.numeroTelefonoAziendale = numeroTelefonoAziendale;
            this.emailAziendale = emailAziendale;modalElimina.forEach(btn => {
                btn.addEventListener("click", () => {
                    eventoSelezionato = btn.getAttribute("data-eventoId"); // Capture the ID here
                    let azienda = arrayAziende.find(azienda => azienda.id == eventoSelezionato);
                    if (azienda) {
                        spavAziendaDaEliminare.textContent = azienda.nomeAzienda;
                        deleteCont.classList.remove("d-none");
                        deleteCont.classList.add("d-block");
                    }
                });
            });
            
            this.nomeDipendente = nomeDipendente;
            this.cognomeDipendente = cognomeDipendente;
            this.dataNascita = dataNascita;
            this.numeroTelefono = numeroTelefono;
            this.email = email;
            this.password = password;

        }
    }

        class EventoPUT {
            constructor(id, nomeAzienda,logo,indirizzo,pIva,numeroTelefonoAziendale,emailAziendale,nomeDipendente,cognomeDipendente,dataNascita,numeroTelefono,email,password){ 
            this.id = id;
            this.nomeAzienda = nomeAzienda;
            this.logo = logo;
            this.indirizzo = indirizzo;
            this.pIva = pIva;
            this.numeroTelefonoAziendale = numeroTelefonoAziendale;
            this.emailAziendale = emailAziendale;
            this.nomeDipendente = nomeDipendente;
            this.cognomeDipendente = cognomeDipendente;
            this.dataNascita = dataNascita;
            this.numeroTelefono = numeroTelefono;
            this.email = email;
            this.password = password;
        }

        }

        function modificaAzienda(oggettoAziendaModificata) {
            console.log('Dati inviati per la modifica:', oggettoAziendaModificata); // Verifica i dati qui
            fetch('http://localhost:8080/api/azienda/modificaAzienda', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(oggettoAziendaModificata)
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(errorText => {
                        throw new Error('Errore nella richiesta: ' + errorText);
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Azienda modificata con successo:', data);
            })
            .catch(error => {
                console.error('Errore durante la modifica dell\'azienda:', error.message);
            });
        }

    

