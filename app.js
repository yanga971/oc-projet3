
/*var initApp = function() {
  if (sessionStorage){
        var name = sessionStorage.getItem("name")
        var refresh = sessionStorage.getItem("refresh")
        timerElt.textContent = "Un vélo réservé à la station : " + name + " pour " + min + " MIN " + sec + " S";
      } else {
        timerElt.textContent = "Vous n'avez pas de réservation.";
      }
}*/
// if (sessionStorage.length > 0){
//   console.log('vous avez deja une reservation')
//   var name = sessionStorage.getItem('name')
//   var time = sessionStorage.getItem('time')
//   timer(name, time)
// } else {
//   console.log('vous n\'avez pas de reservation')
//     document.getElementById("validation").textContent = "Vous n'avez pas de réservation.";
// }

/*var toto = {
  name,
  min,
  sec,
  tps,
  init: function(){
    if (sessionStorage.length > 0){
      console.log('vous avez deja une reservation')
      this.getItem();
      // timer(name, time)
      this.chrono(this.name, this.min, this.sec);
    } else {
      this.display()
    }
  },
  getItem: function() {
    this.name = sessionStorage.getItem('name')
    this.time = sessionStorage.getItem('time')
  },
  chrono: function(name, min, sec, tps) {
    console.log('demarrage du chrono')
  },
  display: function() {
    console.log('vous n\'avez pas de reservation');
    document.getElementById("validation").textContent = "Vous n'avez pas de réservation.";
  }
}*/

toto.init();
