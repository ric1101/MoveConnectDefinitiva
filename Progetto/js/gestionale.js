


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

                            </tr>`;


                bodyTabella.innerHTML += articolo;

            });

        });


}


popolaGestionale();