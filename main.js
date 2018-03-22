// CARTE DES STATIONS DE VELOS

// Initialisation de la carte sur la ville de Lyon
  function initMap() {
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: new google.maps.LatLng(45.764043,4.835659),
        zoom: 11
    });

    // Pour insérer les marqueurs dans un tableau
    var markers = [];
    // Création d'un objet afin de transmettre le tableau markers
    var markerClusterer = new MarkerClusterer(map, markers, {
	     // m à la fin indique la première lettre des noms des images
	      imagePath: 'images/markerclusterer/m'
    });

    // Affichage de l'ensemble des stations
    ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c18bf95eec3f31e26c33a30a925adbdb7ed3cc55', function (stations){
      stations = JSON.parse(stations);
      stations.forEach(function(station) {
        // Création d'un marqueur pour chaque station
        var marker = new google.maps.Marker({
          position: station.position,
          map: map,
          station: station
        });
        // Ajout du marqueur dans le tableau
        markers.push("stations");
        // Ajout du marqueur sur la carte
        markerClusterer.addMarker(marker);

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
      }) // Fin de forEach
    });
  }
