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
    zoom: 11,
    mapTypeId: 'roadmap'
  });

  // Affiche un marqueur sur la carte de la station désirée
  var marker = new google.maps.Marker({
    position: {lat: 45.743317, lng: 4.815747},
    map: map
  });
}

//Appel de la fonction ajax pour récupérer les informations sur la station en question
ajaxGet(' https://api.jcdecaux.com/vls/v1/stations/2010?contract=Lyon&apiKey=c18bf95eec3f31e26c33a30a925adbdb7ed3cc55', function (station){
  console.log(station);
});
