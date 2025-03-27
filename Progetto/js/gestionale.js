


let bodyTabella = document.querySelector('.bodyTabella');


function popolaGestionale() {

    fetch(`http://127.0.0.1:8080/api/blog/tutti`)
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

popolaGestionale();



function eliminaBlog(id) {

    fetch(`http://127.0.0.1:8080/api/blog/eliminaBlog/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }

    })

}


function modificaBlog(id) {


    // class NuovoArticolo {
    //     constructor(titolo, desc, testo, img, data, writer, genere) {
    //         (this.titolo = titolo),
    //         (this.desc = desc),
    //         (this.testo = testo),
    //         (this.img = img),
    //         (this.data = data),
    //         (this.writer = writer),
    //         (this.genere = genere)
    //     }
    // }

    // let nuovoArticolo = new NuovoArticolo(


    // );


    // fetch(`http://127.0.0.1:8080/api/blog/modificaBlog/${id}`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(),

    // })

    localStorage.setItem('idModifica', id);
    window.location.href = 'modificaBlog.html';

}