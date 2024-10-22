
// Map initialization
var map = L.map('maps').setView([41.90223306855646, 12.480054350031331], 7);

// Osm layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// open street hot
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

// OpenStreetMap_HOT.addTo(map);

// all city
var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// OpenStreetMap_France.addTo(map);

// old style
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});

// Esri_NatGeoWorldMap.addTo(map);

// all black

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// OpenTopoMap.addTo(map);

// google street
var googlestreet = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// googlestreet.addTo(map);

//black

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
});



mappa();


// layer controller
var baseMaps = {
    "OSM": osm,
    "OpenStreetMap.HOT": OpenStreetMap_HOT,
    "OpenStreetMapFrance": OpenStreetMap_France,
    "Esri_NatGeoWorldMap": Esri_NatGeoWorldMap,
    "OpenTopoMap": OpenTopoMap,
    "GoogleStreetView": googlestreet,
    "BlackMap": Stadia_AlidadeSmoothDark
};

var overlayMaps = {
    "Marker": singleMarker
};

L.control.layers(baseMaps, overlayMaps, {}).addTo(map);

// Leaflet search
L.control.geocoder().addTo(map);

const resizeObserver = new ResizeObserver(() => {
    map.invalidateSize();
});

L.control.resizer({ direction: 'e' }).addTo(map);

var map; // Definisci la variabile mappa in un contesto globale.

function initMap() {
    map = L.map('map').setView([51.505, -0.09], 13); // Crea la mappa qui
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

document.addEventListener("DOMContentLoaded", function () {
    initMap(); // Inizializza la mappa al caricamento della pagina.

    // Quando la media query per lo schermo piccolo scatta:
    window.addEventListener("resize", function () {
        var width = window.innerWidth;
        if (width < 577) {
            setTimeout(function () {
                if (map) {
                    map.invalidateSize(); // Forza il ridimensionamento della mappa
                }
            }, 100); // Attendi che la mappa diventi visibile
        }
    });
});





function mappa() {

    let regione = localStorage.getItem('regione');

    console.log(regione);


    if (regione == 'Abruzzo') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([42.600988, 13.704649], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([42.015883, 13.628597], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([42.091340, 14.436092], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);



        map.setView(new L.LatLng(42.248321, 13.902746), 7);


    } else if (regione == 'Basilicata') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([40.727628, 15.889481], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([40.225591, 16.186651], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(40.440392, 16.206780), 7);


    } else if (regione == 'Calabria') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([39.561854, 16.299919], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([38.560005, 16.285260], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(39.111504, 16.552604), 7);



    } else if (regione == 'Campania') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([41.168754, 14.453713], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([40.432757, 15.250221], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([40.994850, 15.085426], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);



        map.setView(new L.LatLng(40.878657, 14.915138), 7);




    } else if (regione == 'Emilia') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([44.713586, 10.140913], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([44.054062, 12.167891], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([44.701874, 11.503218], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);



        map.setView(new L.LatLng(44.588535, 11.025312), 7);


    } else if (regione == 'Friuli') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([45.877812, 13.317382], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([46.454172, 13.127868], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([46.015316, 12.669189], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);



        map.setView(new L.LatLng(46.167698, 13.039977), 7);



    } else if (regione == 'Lazio') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([42.346479, 12.896853], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([42.391122, 11.990481], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([41.545704, 13.347293], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);



        map.setView(new L.LatLng(42.098337, 12.682620), 7);


    } else if (regione == 'Liguria') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([43.997373, 7.879161], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([44.489270, 9.208507], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([44.159168, 9.779796], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);



        map.setView(new L.LatLng(44.233997, 8.730601), 7);




    } else if (regione == 'Lombardia') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([45.359496, 9.213174], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([45.301043, 10.367970], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([46.056224, 9.961482], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([45.876424, 9.268605], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);



        map.setView(new L.LatLng(45.618556, 9.850622), 7);


    } else if (regione == 'Marche') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([43.655244, 12.905283], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([43.070829, 13.579241], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([43.458517, 13.144829], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(43.354108, 13.213420), 7);



    } else if (regione == 'Molise') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([41.599191, 14.424031], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([41.903785, 14.920502], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([41.589420, 14.796384], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(41.659726, 14.644427), 7);


    } else if (regione == 'Piemonte') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([44.497406, 7.690690], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([45.844988, 8.261979], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([45.047252, 7.185319], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([44.833396, 8.665727], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(45.142319, 8.053657), 7);



    } else if (regione == 'Puglia') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([41.516751, 15.583689], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([40.308801, 18.116037], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([41.021302, 16.869089], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(40.909308, 16.819651), 7);


    } else if (regione == 'Sardegna') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([39.365339, 9.109766], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([40.777662, 8.686793], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([40.577696, 9.488795], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(40.091973, 9.131739), 7);


    } else if (regione == 'Sicilia') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([37.967854, 13.246443], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([37.045457, 14.833843], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([37.978153, 15.088611], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(37.585770, 14.017279), 7);



    } else if (regione == 'Toscana') {

        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([43.714973, 11.422429], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([42.868660, 11.375275], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([44.035550, 10.359055], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(43.468947, 11.213388), 7);


    } else if (regione == 'Trentino') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([46.112815, 11.077520], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([46.820328, 11.868536], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([46.676793, 10.787872], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(46.458262, 11.258795), 7);


    } else if (regione == 'Umbria') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([42.616027, 12.651967], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([43.388469, 12.393618], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([42.863623, 12.184597], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(42.964718, 12.528370), 7);



    } else if (regione == 'Valdaosta') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([45.850354, 7.676546], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([45.772121, 7.097092], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(45.739284, 7.403262), 7);


    } else if (regione == 'Veneto') {


        // marker
        var myIcon = L.icon({
            iconUrl: '../Progetto/imgs/file (1).png',
            iconSize: [60, 60],
        });

        var singleMarker = L.marker([45.468554, 11.381964], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Tracks</a></h1> <p> Azienda di trasporti ad alta velocità per magazzini </p> <img src="../Progetto/imgs/1.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([46.047371, 12.139735], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Fast And Easy</a></h1> <p> Azienda di trasporti ad alta velocità per mobili, armadi e molto altro </p> <img src="../Progetto/imgs/2.png"/>').openPopup()
        popUp.addTo(map);

        var singleMarker = L.marker([45.216022, 11.933961], { icon: myIcon, draggable: false });
        var popUp = singleMarker.bindPopup('<h1><a href="https://www.samsung.com/it/support/repair/" target="_blank" >Mobili Service</a></h1> <p> Azienda di trasporti solamente per mobilificio medio pesante </p> <img src="../Progetto/imgs/3.png"/>').openPopup()
        popUp.addTo(map);


        map.setView(new L.LatLng(45.678898, 12.041747), 7);




    } else {
        // Codice per regione non trovata o default

    }



}
