
  var min, sec, tps, chrono;
  var timer = function(name){
    clearInterval(chrono);
    var timerElt = document.getElementById("validation");
     min = 1;
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
