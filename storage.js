// Enregistrement du départ du timer
var start = Date.now();
function storage(){
  sessionStorage.setItem("start", Date.now());
  start = sessionStorage.getItem("start");
}
