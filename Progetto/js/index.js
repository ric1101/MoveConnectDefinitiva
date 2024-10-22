

let linkRegione = document.querySelectorAll('.linkRegione');

linkRegione.forEach(element => {
    element.addEventListener('click', () =>  {
        let regione = element.getAttribute('data-name');
        localStorage.setItem('regione', regione);
    });
});