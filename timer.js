// timer
var timer = {

  init: function(){
    if (sessionStorage.length > 0){
      this.getItem();
      this.chrono();
    } else {
      this.display()
    }
  },
  getItem: function() {
    name = sessionStorage.getItem("name")
    min = sessionStorage.getItem("min");
    sec = sessionStorage.getItem("sec");
    save();
  },
  chrono: function() {
    var duration = min + sec;
    clearInterval(interval)
    var interval = setInterval(function(){
        var temp = convert(duration)
        document.getElementById("validation").textContent = "Vous avez déjà une réservation à la station : " + name  + temp;

        duration--;
        if(duration < 0){
          stopDecompte();
          document.getElementById("validation").textContent = "Votre réservation est terminée.";
        }
    }, 1000)
  },
  display: function() {
    console.log("vous n'avez pas de reservation");
    document.getElementById("validation").textContent = "Vous n'avez pas de réservation.";
  }
}; // fin objet

// Décompte de 20 minutes si confirmation  de la réservation d'un vélo
var timerElt = document.getElementById("validation");
var interval;
var duration = 60 ;
function decompte(name){
  clearInterval(interval)
  interval = setInterval( function(){
      var temp = convert(duration)
      timerElt.textContent = "Un vélo réservé à la station : " + name + temp;
      duration--;

      if(duration < 0){
        stopDecompte();
      }
  }, 1000)
}

function stopDecompte(){
  clearInterval(interval);
  sessionStorage.clear();
  timerElt.textContent = "Votre réservation est terminée."
  window.removeEventListener("unload",save);
}

// Convertion de la durée (duration) en minutes et secondes
function convert(a){
      sec = a % 60;
      min = Math.floor(a / 60) % 60;

      return " pour une durée de " + min + " MIN " + sec + " S";
}
confirmElt.addEventListener("click", timer);

// Persistance des données lors d'une actualisation de la page web
function save(){
      sessionStorage.setItem("min", min);
      sessionStorage.setItem("sec", sec);
}
window.addEventListener("unload", save);
