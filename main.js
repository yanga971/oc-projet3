//Affichage google map sous diaporama
/*
// AFFICHAGE DE L'ENSEMBLE DES STATIONS
//UTILISATION DE LA BOUCLE for

  //Initialisation et affichage de la carte de la ville de Lyon
  function initMap() {
     var map = new google.maps.Map(document.getElementById('google_map'), {
      center: new google.maps.LatLng(45.764043,4.835659),
      zoom: 11
    });

  // Affichage de l'ensemble des stations
    ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c18bf95eec3f31e26c33a30a925adbdb7ed3cc55', function (stations){
      stations = JSON.parse(stations);
      for (var i = 0; i < stations.length; i++ ) {
          var station = stations[i];

          // Création d'un marqueur pour chaque station
          marker = new google.maps.Marker({
              // Pour la position,utilisation de la notation pointée car objet
              position: station.position,
              map: map,
              station: station
          });

          // Ajout d'un événement au click pour chaque marqueur
              google.maps.event.addListener(marker, 'click', (function(marker, station) {
                  return function(){
                    var stationElt = document.querySelector('h2');
                    // Nom de la station
                    var nameStationElt = document.querySelector('h3')
                    nameStationElt.textContent = station.name;
                    // Adresse de la station
                    var addressElt = document.getElementById('address')
                    addressElt.textContent = "Adresse : " + station.address;
                    // Places disponibles
                    var availableBikeStandElt = document.getElementById('availableBikeStand')
                    availableBikeStandElt.textContent = "Places disponibles : " + station.available_bike_stands;
                    // Vélos disponibles
                    var availableBikesElt = document.getElementById('availableBikes')
                    availableBikesElt.textContent = "Vélos disponibles : " + station.available_bikes;
                    // Etat de la station(ouverte ou fermée)
                    var statusElt = document.getElementById('status')
                    statusElt.textContent = "Etat de la station : " + station.status;
                  }
              })(marker, station));
      }; // Fin de la boucle for
    });
  }*/


// AFFICHAGE DE L'ENSEMBLE DES STATIONS
// AVEC LA METHODE forEach()

  //Initialisation et affichage de la carte de la ville de Lyon

  function initMap() {
    var map = new google.maps.Map(document.getElementById('google_map'), {
      center: new google.maps.LatLng(45.764043,4.835659),
      zoom: 11
    });

    // Affichage de l'ensemble des stations
      ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c18bf95eec3f31e26c33a30a925adbdb7ed3cc55', function (stations){
           stations = JSON.parse(stations);
           stations.forEach(function(station) {
                // on crée un marker pour chaque station
                var marker = new google.maps.Marker({
                  // Pour la position,utilisation de la notation pointée car objet
                  position: station.position,
                  map: map,
                  station: station
                });
                // Ajout d'un événement au click
                marker.addListener("click" , function() {
                  var stationElt = document.querySelector('h2');
                  // Nom de la station
                  var nameStationElt = document.querySelector('h3')
                  nameStationElt.textContent = station.name;
                  // Adresse de la station
                  var addressElt = document.getElementById('address')
                  addressElt.textContent = "Adresse : " + station.address;
                  // Places disponibles
                  var availableBikeStandElt = document.getElementById('availableBikeStand')
                  availableBikeStandElt.textContent = "Places disponibles : " + station.available_bike_stands;
                  // Vélos disponibles
                  var availableBikesElt = document.getElementById('availableBikes')
                  availableBikesElt.textContent = "Vélos disponibles : " + station.available_bikes;
                  // Etat de la station(ouverte ou fermée)
                  var statusElt = document.getElementById('status')
                  statusElt.textContent = "Etat de la station : " + station.status;
                })
            })// fin de boucle forEach
      });
  }
