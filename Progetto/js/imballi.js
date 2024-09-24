
let regioni = 'https://comuni-istat-api.belicedigital.com/api/regioni';


fetch(regioni)
    .then((res) => res.json())
    .then((data) => {
        stampaRegione(data);
        console.log(data);

        // Add event listener to the select element after options are dynamically added
        let selectElement = document.querySelector('#regioni');

        selectElement.addEventListener('change', function () {
            JSON.stringify(localStorage.setItem('regione', selectElement.value));
            visualizzaProvincia();
        });


    });


function stampaRegione(regioni) {

    let reg = document.querySelector('#regioni');

    regioni.forEach(element => {
        reg.innerHTML += `<option value="${element}">${element}</option>`;

    });


}


function visualizzaProvincia() {

    let regione = localStorage.getItem('regione');

    fetch(`https://comuni-istat-api.belicedigital.com/api/province/${regione}`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            stampaProvincia(data);

        });
}

function stampaProvincia(province) {

    let prov = document.querySelector('#province');
    prov.innerHTML = `<option value="">Seleziona Provincia</option>`;

    province.forEach(element => {
        prov.innerHTML += `<option value="${element}">${element}</option>`;
        
    });

}


fetch(`https://comuni-istat-api.belicedigital.com/api/province`)
    .then((res) => res.json())
    .then((data) => {

        let selectElement1 = document.querySelector('#province');

        selectElement1.addEventListener('change', function () {
            JSON.stringify(localStorage.setItem('provincia', selectElement1.value));

            arrayConfronto(data);
            visualizzaComune();
        });
        
    });



let provinceAbbreviate = [
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
    "BR",  // Brindisi
    "CA",  // Cagliari
    "CL",  // Caltanissetta
    "CB",  // Campobasso
    "CI",  // Carbonia-Iglesias
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

  console.log(provinceAbbreviate); 
  
function arrayConfronto(prov) {
    
    let provinciaEstesa = localStorage.getItem('provincia');
    let arrayEstesa = prov;
    console.log(provinciaEstesa);
    console.log(arrayEstesa);

    let indiceEsteso = arrayEstesa.indexOf(provinciaEstesa);

    let indiceAbbreviato = provinceAbbreviate[indiceEsteso];
    console.log(indiceAbbreviato);
    JSON.stringify(localStorage.setItem('sigla', indiceAbbreviato));
    
}

async function visualizzaComune() {
    

    let sigla = localStorage.getItem('sigla');
    console.log(sigla);

    await fetch(`https://comuni-istat-api.belicedigital.com/api/provincia/${sigla}/comuni`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
            stampaComune(data);

        });

}

function stampaComune(comun) {
    
    let comune = document.querySelector('#comuni');
    comune.innerHTML = `<option value="">Seleziona Comune</option>`;

    comun.forEach(element => {
        comune.innerHTML += `<option value="${element}">${element}</option>`;
        
    });

}
