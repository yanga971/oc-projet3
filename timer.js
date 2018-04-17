// timer
var min, sec, tps, chrono;
var timer = function(name,time){
    clearInterval(chrono);
    storage(reservation.time);
    var timerElt = document.getElementById("validation");
     min = 20;
     sec = 0;
     tps = min * 60 + sec;
    chrono = setInterval(function() {
      // Ne garder que les entiers
      min=Math.floor(tps/60);
      sec=Math.floor(tps-min*60);
      tps--;
      timerElt.textContent = "Un vélo réservé à la station : " + name + " pour " + min + " MIN " + sec + " S";
      // Le décompte s'arrête
      if((min == 0) && (sec == 0)) {
        clearInterval(chrono);
      }
    },1000) // millisecondes
}
