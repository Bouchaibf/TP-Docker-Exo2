// affichage date et heure toutes les minutes

//   function affichage() 
var affichage = () => {

    var d = new Date();

    var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();

    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    console.log("on est le : " + date + " et il est : " + hours);

}

// boucle infini affiche en permanence la date et l'heure toutes les minutes
// let i=0;
// while (i==0) {
//    setTimeout(affichage,1000);
// }
// -------------------------------------------------------------------------
// ou bien avec setInterval et arrêt au bout de 4 minutes 
    const inter = setInterval(affichage,60000);
  setTimeout(() => {
  clearInterval(inter);
 }, 240000)


