// Création du canvas
var canvasElt = document.createElement("canvas");
canvasElt.id = "canvas"; // Définition de son identifiant
//canvasElt.textContent = "Signature :";// Définition du contenu textuel
document.getElementById("resa_velo").appendChild(canvasElt);// Insertion de l'élement dans le DOM
canvasElt.style.display = "none";

// Création du bouton "Validez"
var confirmElt = document.createElement("button");
confirmElt.id = "confirm";
confirmElt.textContent = "Confirmer";
document.getElementById("resa_velo").appendChild(confirmElt);
confirmElt.style.display = "none";

// Création bouton "Effacer"
var clearElt = document.createElement("button");
clearElt.id = "clear";
clearElt.textContent = "Effacer";
document.getElementById("resa_velo").appendChild(clearElt);
clearElt.style.display = "none";

var reservation = document.getElementById("canvas");

function canvas(e){
 if(reservation.getContext) {
   var ctx = reservation.getContext("2d");
   // Propriétés canvas
   var canvas = false;
   document.getElementById("confirm").disabled = true;
   // Propriétés graphiques
   ctx.strokeStyle = "black";
   ctx.lineWidth = 2;
   // Bouton de souris activé
   reservation.onmousedown = function(e) {
     // Dessin activé
     canvas = true;
     // Désactivation du bouton "validez"
     document.getElementById("confirm").disabled = false;
     // Repositionnement du début du tracé
     ctx.moveTo(e.offsetX,e.offsetY);
   };
   // Mouvement de souris
   reservation.onmousemove = function(e) {
   if(canvas) dessiner(e.offsetX,e.offsetY);
   };
   // Bouton de souris relâché
   reservation.onmouseup = function(e) {
     // Dessin désactivé
     canvas = false;
     };
     // Ajoute un segment au tracé
     function dessiner(x,y) {
     ctx.lineTo(x,y);
     ctx.stroke();
     }
     // Efface le contenu du canvas
    var clear = document.getElementById("clear").addEventListener("click", function(){
      ctx.clearRect(0,0, reservation.width, reservation.height);
      reservation.width = reservation.width
    })
 }
} // fonction canvas
