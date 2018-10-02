(function ()
{
   var connection;

   function init()
   {
       connection = io.connect('http://vps202433.vps.ovh.ca:8080');
       connection.on('salutation', saluer);
   }

   function saluer(salution)
   {
       var resultat = document.getElementById("resultatNode");
       resultat.innerHTML = JSON.parse(salution); 
   }
   init();

}
)();