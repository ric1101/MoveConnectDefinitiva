/* aggiornamenti */
let designContent = document.querySelector('.design-content');
/* curiosità */
let blogContent = document.querySelector('.blog-content');


const URLD = 'http://127.0.0.1:8080/api/design/tutti';
const URLB = 'http://127.0.0.1:8080/api/blog/tutti';


    
fetch(URLD)
.then((res) => res.json())
.then((data) => {
    
    popolaArticoliDesign(data);
    
    
});

fetch(URLB)
.then((res) => res.json())
.then((data) => {
    
    popolaArticoliBlog(data);
    
    
});






function inviaDesign() {
    
    let designItem = document.querySelectorAll('.designLink');
        console.log(designItem);
        

        designItem.forEach(art => {
            
            art.addEventListener('click', function () {

                let id = art.getAttribute('id');
                localStorage.setItem('artId', id);
                let articoloDesign = 'Design';
                localStorage.setItem('art', articoloDesign);
                
    
            }
    
            );


        });
        
}


function popolaArticoliDesign(dati) {
    
    
    dati.forEach(element => {

      
        
        let articolo = `<div class="design-item">
        <a id="${element.id}" class="designLink" href="/Progetto/article.html">
        <div class="design-img" style="background-image: url(${element.img});">
        
        
        </div>
        </a>
        <div class="design-title">
        <a id="${element.id}" class="designLink Linkdesign" href="/Progetto/article.html">${element.titolo}</a>
        </div>
        </div>`;
        
        designContent.innerHTML += articolo;
        
        
    });
    inviaDesign();
    
}




function inviaBlog() {
    
    let blogItem = document.querySelectorAll('.blogLink');
        console.log(blogItem);
        

        blogItem.forEach(art => {
            
            art.addEventListener('click', function () {

                let id = art.getAttribute('id');
                localStorage.setItem('artId', id);
                let articoloBlog = 'Blog';
                localStorage.setItem('art', articoloBlog);
                
    
            }
    
            );


        });
        
}


function popolaArticoliBlog(dati) {
    
    dati.forEach(element => {
        
        let articolo = `<div class="blog-item">
        <div class="blog-img" style="background-image: url(${element.img});">
        
        
        </div>
        <div class="blog-text">
        <span>${element.data}</span>
        <h2>${element.titolo}</h2>
        <p class="puntino">${element.desc}</p>
        <a class="blogLink" id="${element.id}" href="/Progetto/article.html">Scopri di più</a>
        </div>
        </div>`;
        blogContent.innerHTML += articolo;
        
        
    });
    
    puntini();
    inviaBlog();
}


function puntini() {

    let cardText = document.querySelectorAll('.puntino');
    console.log(cardText);
    
    cardText.forEach(desc => {
      // console.log(cardText);
      let descrizione = desc.textContent.trim();
      if (descrizione.length > 120) {
        // console.log(descrizione.length);
        desc.textContent = descrizione.substring(0, 120);
        desc.textContent += '...';
        // console.log(desc.textContent);
      }
  
    });
  
  }

