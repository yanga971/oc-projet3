// Initialisation du context
var reservation = document.getElementById('signature');
if(reservation.getContext) {
  var ctx = reservation.getContext("2d");

  // Propriétés canvas
  var signature = false;
  document.getElementById("btn_canvas").disabled = true;

  // Propriétés graphiques
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  // Bouton de souris activé
  reservation.onmousedown = function(e) {
    // Dessin activé
    signature = true;
    // Désactivation du bouton "validez"
    document.getElementById("btn_canvas").disabled = false;
    // Repositionnement du début du tracé
    ctx.moveTo(e.offsetX,e.offsetY);
  };
  // Mouvement de souris
  reservation.onmousemove = function(e) {
  if(signature) dessiner(e.offsetX,e.offsetY);
  };
  // Bouton de souris relâché
  reservation.onmouseup = function(e) {
    // Dessin désactivé
    signature = false;
    };
    // Ajoute un segment au tracé
    function dessiner(x,y) {
    ctx.lineTo(x,y);
    ctx.stroke();
    }
}
