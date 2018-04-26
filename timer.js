// timer
var min, sec, chrono;
var toto = {
  name,
  min,
  sec,


  init: function(){
    if (sessionStorage.length > 0){
      //console.log('vous avez deja une reservation')

      this.getItem();
      //timer(name, time)
      this.chrono(this.name, this.min, this.sec);
    } else {
      this.display()
    }
  },
  getItem: function() {
    this.name = sessionStorage.getItem("name")
    //this.time = sessionStorage.getItem('time')
    //console.log(this.name);
    //document.getElementById("validation").textContent = "Vous avez déjà une réservation : " + this.name ;
  },
  chrono:function(){
    // Récupération des données stockées
    var name = sessionStorage.getItem("name");
    var min = sessionStorage.getItem("min");
    var sec = sessionStorage.getItem("sec");

    // Décrémente le temps restant
    var stop = setInterval(function(){
      document.getElementById("validation").textContent = "Vous avez déjà une réservation : " + name + " pour une durée de " + min + " MIN " + sec + " S" ;
      sec--;
      if(sec == 00){
        min--;
        sec = 60;
       }

       //Persistance des données lors d'une actualisation de la page web
       window.addEventListener('unload', function() {
         sessionStorage.setItem("min", min);
         sessionStorage.setItem("sec", sec);
       });

       if((min == 0) && (sec == 1)){
          clearInterval(stop);
          document.getElementById("validation").textContent = "Votre réservation est terminée.";
       }
    },1000)
    console.log( "Vous avez déjà une réservation : " + name + " pour une durée de " + min + " MIN " + sec + " S");
  },
  display: function() {
    console.log("vous n'avez pas de reservation");
    document.getElementById("validation").textContent = "Vous n'avez pas de réservation.";
  }
}; // fin objet

// timer de 20min si résa vélo
function timer(name,time){
    clearInterval(chrono);
    var timerElt = document.getElementById("validation");
    var min = 1;
    var sec = 60;
    chrono = setInterval(function(){
        timerElt.textContent = "Un vélo réservé à la station : " + name + " pour une durée de " + min + " MIN " + sec + " S";
        sec--;
        if(sec == 00){
          min--;
          sec = 60;
        }

        //Persistance des données lors d'une actualisation de la page web
        window.addEventListener('unload', function() {
          sessionStorage.setItem("min", min);
          sessionStorage.setItem("sec", sec);
        });

        if((min == 0) && (sec == 1)){
           clearInterval(chrono);
           timerElt.textContent = "Votre réservation est terminée.";
        }
    },1000)
}
