let tabella = document.querySelector(".tabellozza");
let titolo = document.getElementById("#titolo");
let desc = document.querySelector("#desc");
let testo = document.querySelector("#testo");
let img = document.querySelector("#img");
let data = document.querySelector("#data");
let writer = document.querySelector("#writer");
let genere = document.querySelector("#genere");
let bodyTabella = document.querySelector("#bodyTabella");
let bottoneModifica = document.querySelector(".bottoneModifica");
let spavAziendaDaEliminare = document.querySelector("#spanEventoDaEliminare");
let spanEventoDaEliminare = document.getElementById('spanEventoDaEliminare');
let bottoneConfermaEliminazione = document.querySelector('.delete');
let deleteCont = document.querySelector(".delete_cont");

let eventoSelezionato = "";
let arrayBlog = [];

async function getAllBlog() {
    try {
        const response = await fetch("http://localhost:8080/api/design/tutti")
        const blog = await response.json();
        console.log("CIAO");
        arrayBlog = blog;
        console.log(blog);
        tutteLeBlog();
        
        
    } catch (error) {
        console.error("Error fetching blog", error);
    }
    
}

getAllBlog();

function tutteLeBlog() {
    let fragment = document.createDocumentFragment();
    arrayBlog.forEach((evento) => {
        let aziendaRecord = document.createElement("tr");
        let inserisciTabella = `  
        <td class="idDesign">${evento.id}</td>
        <td class="titolo" data-eventoId="${evento.id}" >${evento.titolo}</td>
        <td class="desc"  data-eventoId="${evento.id}">${evento.desc}</td>
        <td class="testo"  data-eventoId="${evento.id}">${evento.testo}</td>
        <td class="img"  data-eventoId="${evento.id}">${evento.img}</td>
        <td class="data"  data-eventoId="${evento.id}">${evento.data}</td>
        <td class="writer"  data-eventoId="${evento.id}">${evento.writer}</td>
        <td class="genere"  data-eventoId="${evento.id}">${evento.genere}</td>
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
                        let azienda = arrayBlog.find(azienda => azienda.id == eventoSelezionato);
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
        let titoloSelezionata = document.querySelector(`.titolo[data-eventoId="${eventId}"]`);
        let descSelezionata= document.querySelector(`.desc[data-eventoId="${eventId}"]`);
        let testoSelezionata = document.querySelector(`.testo[data-eventoId="${eventId}"]`);
        let imgSelezionata = document.querySelector(`.img[data-eventoId="${eventId}"]`);
        let dataSelezionata = document.querySelector(`.data[data-eventoId="${eventId}"]`);
        let writerSelezionata = document.querySelector(`.writer[data-eventoId="${eventId}"]`);
        let genereSelezionata = document.querySelector(`.genere[data-eventoId="${eventId}"]`);

        const oggettoAziendaModificata = new EventoPUT(
            Number(eventId),
            titoloSelezionata.textContent,
            descSelezionata.textContent,
            testoSelezionata.textContent,
            imgSelezionata.textContent,
            dataSelezionata.textContent,
            writerSelezionata.textContent,
            genereSelezionata.textContent,
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
            const response = await fetch(`http://localhost:8080/api/design/eliminaDesign/${eventoSelezionato}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Failed to delete");
            }

            console.log("Azienda eliminata con successo");
            // Optionally, refresh the list or remove the entry from the table
            // getAllBlog(); // You can call this to refresh the list
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    } else {
        console.error("ID non trovato per l'eliminazione.");
    }
}

// Attach the click event for confirmation
bottoneConfermaEliminazione.addEventListener("click", confermaEliminazione);

        class EventoPUT {
            constructor(id, data, desc,genere,img,testo,titolo,writer){ 
            this.id = id;
            this.titolo = titolo;
            this.desc = desc;
            this.testo = testo;
            this.img = img;
            this.data = data;
            this.writer = writer;
            this.genere = genere;
        }

        }

   
        async function modificaAzienda(oggettoAziendaModificata) {
            console.log('Dati inviati per la modifica:', oggettoAziendaModificata); 
            try {
                const response = await fetch('http://localhost:8080/api/blog/modificaBlog', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(oggettoAziendaModificata)
                });
        
                if (!response.ok) {
                    const errorDetails = await response.text(); // Capture the response text for better debugging
                    throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetails}`);
                }
                
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Errore durante la modifica dell\'azienda:', error);
            }
        }

    

