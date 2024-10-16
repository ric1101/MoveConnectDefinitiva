
let regioniSeconda = 'https://comuni-istat-api.belicedigital.com/api/regioni';

addEventListener("DOMContentLoaded", function () {

    this.localStorage.removeItem('regione1');
    this.localStorage.removeItem('sigla1');
    this.localStorage.removeItem('provincia1');
    
    
});


fetch(regioniSeconda)
    .then((res) => res.json())
    .then((data) => {
        stampaRegione2(data);
        console.log(data);

        // Add event listener to the select element after options are dynamically added
        let selectElement1 = document.querySelector('#regioni1');

        selectElement1.addEventListener('change', function () {
            JSON.stringify(localStorage.setItem('regione1', selectElement1.value));

            localStorage.removeItem('sigla1');
            localStorage.removeItem('provincia1');
            
            visualizzaProvincia2();
            visualizzaComune2();
        });


    });


function stampaRegione2(regioni) {

    let reg1 = document.querySelector('#regioni1');

    regioni.forEach(element => {
        reg1.innerHTML += `<option value="${element}">${element}</option>`;

    });

}


function visualizzaProvincia2() {

    let regione1 = localStorage.getItem('regione1');

    fetch(`https://comuni-istat-api.belicedigital.com/api/province/${regione1}`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            stampaProvincia2(data);

        });
}

function stampaProvincia2(province) {

    let prov1 = document.querySelector('#province1');
    prov1.innerHTML = `<option value="">Seleziona Provincia</option>`;

    province.forEach(element => {
        prov1.innerHTML += `<option value="${element}">${element}</option>`;
        
    });

}


fetch(`https://comuni-istat-api.belicedigital.com/api/province`)
    .then((res) => res.json())
    .then((data) => {

        let selectElement2 = document.querySelector('#province1');

        selectElement2.addEventListener('change', function () {
            JSON.stringify(localStorage.setItem('provincia1', selectElement2.value));

            arrayConfronto2(data);
            visualizzaComune2();
        });
        
    });



let provinceAbbreviate2 = [
    "AG",  // Agrigento
    "AL",  // Alessandria
    "AN",  // Ancona
    "BT",  // Andria (Barletta-Andria-Trani)
    "AO",  // Aosta
    "AR",  // Arezzo
    "AP",  // Ascoli Piceno
    "AT",  // Asti
    "AV",  // Avellino
    "BA",  // Bari
    "BT",  // Barletta (Barletta-Andria-Trani)
    "BL",  // Belluno
    "BN",  // Benevento
    "BG",  // Bergamo
    "BI",  // Biella
    "BO",  // Bologna
    "BZ",  // Bolzano
    "BS",  // Brescia
    "BR",  // BrindisiTrasporto  
    "CA",  // Cagliari
    "CL",  // Caltanissetta
    "CB",  // Campobasso
    "SU",  // Carbonia-Iglesias
    "CE",  // Caserta
    "CT",  // Catania
    "CZ",  // Catanzaro
    "CH",  // Chieti
    "CO",  // Como
    "CS",  // Cosenza
    "CR",  // Cremona
    "KR",  // Crotone
    "CN",  // Cuneo
    "EN",  // Enna
    "FM",  // Fermo
    "FE",  // Ferrara
    "FI",  // Firenze
    "FG",  // Foggia
    "FC",  // Forlì-Cesena
    "FR",  // Frosinone
    "GE",  // Genova
    "GO",  // Gorizia
    "GR",  // Grosseto
    "IM",  // Imperia
    "IS",  // Isernia
    "AQ",  // L'Aquila
    "SP",  // La Spezia
    "LT",  // Latina
    "LE",  // Lecce
    "LC",  // Lecco
    "LI",  // Livorno
    "LO",  // Lodi
    "LU",  // Lucca
    "MC",  // Macerata
    "MN",  // Mantova
    "MS",  // Massa-Carrara
    "MT",  // Matera
    "ME",  // Messina
    "MI",  // Milano
    "MO",  // Modena
    "MB",  // Monza e Brianza
    "NA",  // Napoli
    "NO",  // Novara
    "NU",  // Nuoro
    "OR",  // Oristano
    "PD",  // Padova
    "PA",  // Palermo
    "PR",  // Parma
    "PV",  // Pavia
    "PG",  // Perugia
    "PU",  // Pesaro e Urbino
    "PE",  // Pescara
    "PC",  // Piacenza
    "PI",  // Pisa
    "PT",  // Pistoia
    "PN",  // Pordenone
    "PZ",  // Potenza
    "PO",  // Prato
    "RG",  // Ragusa
    "RA",  // Ravenna
    "RC",  // Reggio di Calabria
    "RE",  // Reggio nell'Emilia
    "RI",  // Rieti
    "RN",  // Rimini
    "RM",  // Roma
    "RO",  // Rovigo
    "SA",  // Salerno
    "SS",  // Sassari
    "SV",  // Savona
    "SI",  // Siena
    "SR",  // Siracusa
    "SO",  // Sondrio
    "TA",  // Taranto
    "TE",  // Teramo
    "TR",  // Terni
    "TO",  // Torino
    "BT",  // Trani (Barletta-Andria-Trani)
    "TP",  // Trapani
    "TN",  // Trento
    "TV",  // Treviso
    "TS",  // Trieste
    "UD",  // Udine
    "VA",  // Varese
    "VE",  // Venezia
    "VB",  // Verbania
    "VC",  // Vercelli
    "VR",  // Verona
    "VV",  // Vibo Valentia
    "VI",  // Vicenza
    "VT"   // Viterbo
  ];

  
function arrayConfronto2(prov) {
    
    let provinciaEstesa1 = localStorage.getItem('provincia1');
    let arrayEstesa1 = prov;
    console.log(provinciaEstesa1);
    console.log(arrayEstesa1);

    let indiceEsteso1 = arrayEstesa1.indexOf(provinciaEstesa1);

    let indiceAbbreviato1 = provinceAbbreviate2[indiceEsteso1];
    console.log(indiceAbbreviato1);
    JSON.stringify(localStorage.setItem('sigla1', indiceAbbreviato1));
    
}

async function visualizzaComune2() {
    

    let sigla1 = localStorage.getItem('sigla1');
    console.log(sigla1);

    await fetch(`https://comuni-istat-api.belicedigital.com/api/provincia/${sigla1}/comuni`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            stampaComune2(data);

        });

}

function stampaComune2(comun) {
    
    let comune1 = document.querySelector('#comuni1');
    comune1.innerHTML = `<option value="">Seleziona Comune</option>`;

    comun.forEach(element => {
        comune1.innerHTML += `<option value="${element}">${element}</option>`;
        
    });

}
