//Affichage google map sous diaporama
/*function initMap() {
        var lyon = {lat: 45.764043, lng: 4.835659};
        var map = new google.maps.Map(document.getElementById('google_map'), {
          zoom: 11,
          center: lyon
        });*/
//Création marqueur
      /*var marker = new google.maps.Marker({
          position: lyon,
          map: map
        });
      }*/


//Initialisation et affichage de la carte de la ville de Lyon
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('google_map'), {
    center: {lat: 45.764043, lng: 4.835659},
    zoom: 11
  });

  // Pour une seule station
  // Affiche un marqueur sur la carte de la station désirée
  var marker = new google.maps.Marker({
    position: {lat: 45.743317, lng: 4.815747},
    map: map
  });

  // Ajout d'un événement sur le marqueur
  marker.addListener("click" , function() {
    // Ajout dans le DOM
    var stationElt = document.querySelector('h2');
    //Appel de la fonction ajax pour récupérer les informations sur la station en question
    ajaxGet('https://api.jcdecaux.com/vls/v1/stations/2010?contract=Lyon&apiKey=c18bf95eec3f31e26c33a30a925adbdb7ed3cc55', function (station) {
      var info = JSON.parse(station);
      // Nom de la station
      var nameElt = document.createElement("h3");
      nameElt.textContent = info.name;

      // Adresse de la station
      var addressElt = document.createElement("p");
      addressElt.textContent = "Adresse : " + info.address;

      // Nombre de places disponibles
      var placeDispoElt = document.createElement("p");
      placeDispoElt.textContent = "Places disponibles : " + info.available_bike_stands;

      // Nombre de vélos disponibles
      var veloDispoElt = document.createElement("p");
      veloDispoElt.textContent = "Vélos disponibles : " + info.available_bikes;

      // Status de la station(ouverte ou fermée)
      var statusElt = document.createElement("p");
      statusElt.textContent = "Etat de la Station : " + info.status;

      stationElt.appendChild(nameElt);
      stationElt.appendChild(addressElt);
      stationElt.appendChild(placeDispoElt);
      stationElt.appendChild(veloDispoElt);
      stationElt.appendChild(statusElt);
    });
  });
}


/*
//Appel de la fonction ajax pour récupérer les informations sur toutes les stations de Lyon
ajaxGet('  https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c18bf95eec3f31e26c33a30a925adbdb7ed3cc55', function (stations){
  console.log(stations);
});*/
