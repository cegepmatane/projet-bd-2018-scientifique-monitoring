(function ()
{
   var connection;

   function init()
   {
       connection = io.connect('http://vps202433.vps.ovh.ca:8080');
       connection.on('salutation', saluer);
       connection.on('donneeBouee', recevoirDonneeBouee);
   }

   function saluer(salution)
   {
       //var resultat = document.getElementById("resultatNode");
       //resultat.innerHTML = JSON.parse(salution); 
   }

   this.requeteDonneeBouee = function()
   {
    connection.emit('envoyer-donnee');
   };

   function recevoirDonneeBouee(donnee)
   {
    console.log("les donnee serait recu" + donnee);
   }


   init();
   this.requeteDonneeBouee();

}
)();