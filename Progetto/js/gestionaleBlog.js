let tabella = document.querySelector(".tabellozza");
let titolo = document.getElementById("titolo");
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
let aggiungiAziendaButton = document.getElementById("aggiungiAziendaButton");
let titolo2 = document.getElementById('titolo2'); 
let desc2 = document.getElementById('desc2');
let testo2 = document.getElementById('testo2');
let img2 = document.getElementById('img2');
let data2 = document.getElementById('data2');
let writer2 = document.getElementById('writer2');
let genere2 = document.getElementById('genere2');
let eventoSelezionato = "";
let arrayBlog = [];

const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
    modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-overlay"))
            modal.classList.add("hide");
    } else modal.classList.add("hide");
}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);

async function getAllBlog() {
    try {
        const response = await fetch("http://127.0.0.1:8080/api/blog/tutti")
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
        <td class="idBlog">${evento.id}</td>
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
                            spavAziendaDaEliminare.textContent = azienda.titolo;
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
            const response = await fetch(`http://127.0.0.1:8080/api/blog/eliminaBlog/${eventoSelezionato}`, {
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

        class Evento{
            constructor(titolo2,desc2,testo2,img2,data2,writer2,genere2){
                this.titolo2 = titolo2;
                this.desc2 = desc2;
                this.testo2 = testo2;
                this.img2 = img2;
                this.data2= data2;
                this.writer2 = writer2;
                this.genere2 = genere2;
            }
        }

        class EventoPUT {
            constructor(id,titolo, desc,testo,img,data,writer,genere){ 
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

        function inserisciNuovoBlog() {
            event.preventDefault(); // Prevent form submission
        
            // Check if any of the input fields are empty
            if (titolo2.value.trim() === "" || 
                desc2.value.trim() === "" || 
                testo2.value.trim() === "" || 
                img2.value.trim() === "" || 
                data2.value.trim() === "" || 
                writer2.value.trim() === "" || 
                genere2.value.trim() === "") {
                console.error("All fields are required.");
            } else {
                // Create a new blog object
                const BlogCreato = new Evento(
                    titolo2.value,
                    desc2.value,
                    testo2.value,
                    img2.value,
                    data2.value,
                    writer2.value,
                    genere2.value
                );
        
                console.log(BlogCreato); // Log the created object
        
                // Send a POST request
                fetch('http://127.0.0.1:8080/api/blog/inserisciBlog', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(BlogCreato),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to post data");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Blog created successfully:", data);
                    // Optionally, refresh the list or clear the input fields
                })
                .catch(error => {
                    console.error("Error while creating blog:", error);
                });
            }
        }
        
        aggiungiAziendaButton.addEventListener("click", inserisciNuovoBlog);
       


        function modificaAzienda(oggettoAziendaModificata) {
            console.log('Dati inviati per la modifica:', oggettoAziendaModificata); // Verifica i dati qui
            fetch('http://127.0.0.1:8080/api/blog/modificaBlog', {
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

    
    
