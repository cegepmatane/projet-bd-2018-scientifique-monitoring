this.ConnectionNode = function () {
    var connection;
    var positionBouee;

    function init() {
        connection = io.connect('http://vps202433.vps.ovh.ca:8080');
        connection.on('salutation', saluer);
        connection.on('donnees-bouee', recevoirDonneeBouee);
        connection.on('donnees-marqueurs-bouee', recevoirPositionBouee);
    }

    function saluer(salution) {
        //var resultat = document.getElementById("resultatNode");
        //resultat.innerHTML = JSON.parse(salution); 
    }
    this.requetePositionBouee = function () {
        connection.emit('requete-donnees-marqueurs');
    };

    function recevoirPositionBouee(positions) {
        console.log("ca rentre dans la fonction recevoir position");
        positionBouee = JSON.parse(positions);
        //console.log("socket des position: " + positions);
        console.log("les position sont recu: " + positionBouee);
        afficherMarqueur(positionBouee);
    }

    this.requeteDonneeBouee = function (id) {
        connection.emit('requete-donnees-bouee', JSON.stringify(id));
    };

    function recevoirDonneeBouee(donnee) {
        console.log("donner de la bouee recu: " + donnee);
       var bouee = JSON.parse(donnee);
        console.log("la bouee recu: " + bouee);
        setBouee(bouee);
    }
    this.retournerPosition = function () {
        return positionBouee;
    }

    init();
    

}
