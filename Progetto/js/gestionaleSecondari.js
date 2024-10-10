let tabella = document.querySelector(".tabellozza");
let id = document.querySelector(".secondari_id");
let nomeDipendente = document.querySelector("#nomeDipendente");
let cognomeDipendente = document.querySelector("#cognomeDipendente");
let numeroTelefono = document.querySelector("#numeroTelefono");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let azienda_id = document.querySelector("#azienda_id");

let arraySecondini = [];

async function getAllSecondini() {
    try {
        const response = await fetch("http://localhost:8080/api/secondari/tuttiGliUtentiSecondari")
        const aziende = await response.json();
        arrayAziende = aziende;
        console.log(aziende);
        tuttiISecondari();
        
    } catch (error) {
        console.error("Error fetching aziende", error);
    }
    
}

getAllSecondini();

function tuttiISecondari() {
    let fragment = document.createDocumentFragment();
    arraySecondini.forEach((evento) => {
        let aziendaRecord = document.createElement("tr");
        let inserisciTabella = ` 
            <td class="nomeDipendente" ">${evento.id}</td>
            <td class="nomeDipendente" ">${evento.nomeDipendente}</td>
            <td class="cognomeDipendente" ">${evento.cognomeDipendente}</td>
            <td class="numeroTelefono" ">${evento.numeroTelefono}</td>
            <td class="email" ">${evento.email}</td>
            <td class="password" ">${evento.password}</td>
            <td class="password" ">${evento.azienda_id}</td>
           
            <td>
                <button class="bottoneModifica fa-solid fa-pen btn btn-primary" data-eventoId="${evento.id}"></button>
                <button data-bs-toggle="modal" data-bs-target="#modalConfermaEliminazione" class="btnApriModalEliminazione fa-solid fa-trash btn btn-danger" data-eventoId="${evento.id}"></button>  
            </td>
        `
        aziendaRecord.innerHTML = inserisciTabella;
        fragment.appendChild(aziendaRecord);
    });

    bodyTabella.appendChild(fragment);

    
}