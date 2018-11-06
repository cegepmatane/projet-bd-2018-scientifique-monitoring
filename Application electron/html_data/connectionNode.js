this.ConnectionNode = function ()
{
   var connection;
   var positionBouee;

   function init()
   {
       connection = io.connect('http://vps202433.vps.ovh.ca:8080');
       connection.on('salutation', saluer);
       connection.on('donneeBouee', recevoirDonneeBouee);
       connection.on('positionBouee', recevoirPositionBouee);
   }

   function saluer(salution)
   {
       //var resultat = document.getElementById("resultatNode");
       //resultat.innerHTML = JSON.parse(salution); 
   }
   this.requetePositionBouee = function()
   {
       connection.emit('envoyer-position');
   };
 function recevoirPositionBouee(positions)
 {
    positionBouee = positions;
 }

   this.requeteDonneeBouee = function()
   {
    connection.emit('envoyer-donnee');
   };

   function recevoirDonneeBouee(donnee)
   {
    console.log("les donnee serait recu" + donnee);
   }
   this.retournerPosition = function()
   {
       return positionBouee;
   }

   init();
   this.requeteDonneeBouee();

}
