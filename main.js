// CARTE DES STATIONS DE VELOS
// ET ACTIVATION DU CANVAS POUR LA RESERVATION D'UN VELO

// Initialisation de la carte sur la ville de Lyon
  function initMap() {
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: new google.maps.LatLng(45.764043,4.835659),
        zoom: 11
    });

    // Insertion des marqueurs dans un tableau
    var markers = [];
    // Création d'un objet afin de transmettre la carte et le tableau des markers
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
          map: map
        });
        // Ajout du marqueur dans le tableau
        markers.push("stations");
        // Ajout du marqueur sur la carte
        markerClusterer.addMarker(marker);

        // Ajout d'un événement au click
        marker.addListener("click" , function() {
          var stationElt = document.querySelector("h2");
          // Nom de la station
          var nameStationElt = document.querySelector("h3")
          nameStationElt.textContent = station.name;
          // Adresse de la station
          var addressElt = document.getElementById("address")
          addressElt.textContent = "Adresse : " + station.address;
          // Places disponibles
          var availableBikeStandElt = document.getElementById("availableBikeStand")
          availableBikeStandElt.textContent = "Places disponibles : " + station.available_bike_stands;
          // Vélos disponibles
          var availableBikesElt = document.getElementById("availableBikes")
          availableBikesElt.textContent = "Vélos disponibles : " + station.available_bikes;
            // Activation du bouton "réservez" si vélos disponibles
            if(station.available_bikes === 0){
              document.getElementById("btn").setAttribute("disabled", "disabled");
            } else {
              document.getElementById("btn").removeAttribute("disabled");
              }
            // Apparition de la fenêtre canvas au click
            document.getElementById("btn").onclick = function() {
              if (window.getComputedStyle(document.getElementById("signature")).display === "none"){
                document.getElementById("signature").style.display = "block";
              } else {
                document.getElementById("signature").style.display = "none";
                }
                // Validation de la réservation
                if(document.getElementById("signature").style.display === "none"){
                  var validationElt = document.getElementById("validation");
                  var min = 1, sec = 0;
                  var tps = min * 60 + sec;
                  var chrono = setInterval(function() {
                    // Ne garder que les entiers
                    min=Math.floor(tps/60);
                    sec=Math.floor(tps-min*60);
                    tps--;
                    // Le décompte s'arrête
                    if((min == 0) && (sec == 0)) {
                      clearInterval(chrono);
                    }
                    validationElt.textContent = "1 vélo réservé à la station " + station.name +" pour " + min + " MIN " + sec + " S";
                    document.getElementById("btn").setAttribute("disabled", "disabled");// Désactive le bouton "réservez"
                  },1000); // millisecondes
                  if(typeof sessionStorage!='undefined') {
                    if('validation' in sessionStorage) {
                      alert("Message récupéré");
                      document.getElementById('validation').value = sessionStorage.getItem('validationElt');
                    }
                  } else {
                    alert("sessionStorage n'est pas supporté");
                  }
                }
            } // Fin de la fonctionnalité canvas
          // Etat de la station(ouverte ou fermée)
          var statusElt = document.getElementById("status")
          statusElt.textContent = "Etat de la station : " + station.status;
        })
      }) // Fin de forEach
    }); // Fin function(stations)
  }
  // Détection du support
