


let bodyTabella = document.querySelector('.bodyTabella');


async function popolaGestionaleDesign() {
    bodyTabella.innerHTML = "";

    await fetch(`https://127.0.0.1/api/design/tuttiIDesign`)
        .then((res) => res.json())
        .then((data) => {


            data.forEach(element => {


                let articolo = `<tr>

                        <td class="text-center">${element.genere}</td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1">${element.titolo}</td>
                        <td class="text-center" data-eventoid="1">${element.desc}</td>
                        <td class="text-center" data-eventoid="1">${element.testo}</td>
                        <td class="text-center" data-eventoid="1"><img src="${element.img}" alt="" style="width: 100px; height: 100px;"></img></td>
                        <td class="text-center" data-eventoid="1">${element.data}</td>
                        <td class="text-center" data-eventoid="1">${element.writer}</td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="modificaDesign(${element.id})"><i class="fa-solid fa-pen-to-square"></i></a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-danger" onclick="eliminaDesign(${element.id})"><i class="fa-solid fa-trash-can"></i></a></td>

                    </tr>`;


                bodyTabella.innerHTML += articolo;

            });

        });

}
popolaGestionaleDesign();



async function eliminaDesign(id) {

    await fetch(`https://127.0.0.1/api/design/eliminaDesign/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }

    })

   popolaGestionaleDesign();

}


function modificaDesign(id) {


    localStorage.setItem('idModificaDesign', id);
    window.location.href = 'modificaDesign.html';

}