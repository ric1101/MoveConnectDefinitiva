/* aggiornamenti */
let designContent = document.querySelector('.design-content');
/* curiosità */
let blogContent = document.querySelector('.blog-content');


const URLD = 'http://localhost:8080/api/blog/tutti';
const URLB = 'http://localhost:8080/api/design/tutti';

fetch(URLD)
    .then((res) => res.json())
    .then((data) => {

        popolaArticoliDesign(data);
        console.log(data);

    });

fetch(URLB)
    .then((res) => res.json())
    .then((data) => {

        popolaArticoliBlog(data);
        console.log(data);

    });


function popolaArticoliDesign(dati) {

    dati.forEach(element => {

        let articolo = `<div class="design-item">
        <a id="${element.id}" class="designLink" href="/Progetto/article.html">
        <div class="design-img">
        <img src="${element.img}" alt="">
        
        </div>
        </a>
        <div class="design-title">
        <a id="${element.id}" class="designLink" href="/Progetto/article.html">${element.title}</a>
        </div>
        </div>`;

        designContent.innerHTML += articolo;


    });

    inviaDesign();

}

popolaArticoliDesign();



function popolaArticoliBlog(dati) {

    dati.forEach(element => {

        let articolo = `<div class="blog-item">
        <div class="blog-img">
        <img src="${element.img}" alt="">
        
        </div>
        <div class="blog-text">
        <span>${element.data}</span>
        <h2>${element.title}</h2>
        <p>${element.desc}</p>
        <a class="blogLink" id="${element.id}" href="/Progetto/article.html">Scopri di più</a>
        </div>
        </div>`;

        blogContent.innerHTML += articolo;


    });

    inviaBlog();

}

popolaArticoliBlog();


let designItem = document.querySelectorAll('.designLink');
let blogItem = document.querySelectorAll('.blogLink');


function inviaDesign() {

    designItem.forEach(element => {

        element.addEventListener('click', function () {

            let id = element.getAttribute('id');
            localStorage.setItem('artId', id);
            let articoloDesign = 'Design';
            localStorage.setItem('art', articoloDesign);

        }

        );

    });
}


function inviaBlog() {

    blogItem.forEach(element => {

        element.addEventListener('click', function () {

            let id = element.getAttribute('id');
            localStorage.setItem('artId', id);
            let articoloBlog = 'Blog';
            localStorage.setItem('art', articoloBlog);

        }

        );

    });
}


