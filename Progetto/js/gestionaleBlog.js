


let bodyTabella = document.querySelector('.bodyTabella');


async function popolaGestionaleBlog() {
    let apiUrl = fetch(window.MY_APP_API_URL);

    bodyTabella.innerHTML = "";

    await fetch(`${apiUrl}/api/blog/tutti`)
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
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="modificaBlog(${element.id})"><i class="fa-solid fa-pen-to-square"></i></a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-danger" onclick="eliminaBlog(${element.id})"><i class="fa-solid fa-trash-can"></i></a></td>

                    </tr>`;


                bodyTabella.innerHTML += articolo;

            });

        });

}
popolaGestionaleBlog();



async function eliminaBlog(id) {

    await fetch(`${apiUrl}/api/blog/eliminaBlog/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }

    })

   popolaGestionaleBlog();

}


function modificaBlog(id) {


    localStorage.setItem('idModificaBlog', id);
    window.location.href = 'modificaBlog.html';

}