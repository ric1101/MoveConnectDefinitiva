


let bodyTabella = document.querySelector('.bodyTabella');


function popolaGestionale() {

    fetch(`http://127.0.0.1:8080/api/blog/tutti`)
        .then((res) => res.json())
        .then((data) => {


            data.forEach(element => {


                let articolo = `<tr>

                        <td class="text-center"><textarea name="" id="">${element.genere}</textarea></td>
                        <td class="text-center">${element.id}</td>
                        <td class="text-center" data-eventoid="1"><textarea name="" id="">${element.titolo}</textarea></td>
                        <td class="text-center" data-eventoid="1"><textarea name="" id="">${element.desc}</textarea></td>
                        <td class="text-center" data-eventoid="1"><textarea name="" id="" style="height: 100%; width: 100%;">${element.testo}</textarea></td>
                        <td class="text-center" data-eventoid="1"><img src="${element.img}" alt="" style="width: 100px; height: 100px;"></img></td>
                        <td class="text-center" data-eventoid="1"><textarea name="" id="">${element.data}</textarea></td>
                        <td class="text-center" data-eventoid="1"><textarea name="" id="">${element.writer}</textarea></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-primary" onclick="eliminaBlog(${element.id})"><i class="fa-solid fa-pen-to-square"></i></a></td>
                        <td class="text-center" data-eventoid="1"><a class="btn btn-danger" onclick="modificaBlog(${element.id}, )"><i class="fa-solid fa-trash-can"></i></a></td>

                    </tr>`;


                bodyTabella.innerHTML += articolo;

            });

        });

}

popolaGestionale();




function eliminaBlog(id) {




}


function modificaBlog(id) {




}