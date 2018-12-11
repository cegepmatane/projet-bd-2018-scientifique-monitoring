this.ConnectionNode = function () {
    var connection;
    var positionBouee;

    function init() {
        connection = io.connect('http://vps202433.vps.ovh.ca:8080');
        connection.on('salutation', saluer);
        connection.on('donneeBouee', recevoirDonneeBouee);
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

    this.requeteDonneeBouee = function () {
        connection.emit('envoyer-donnee');
    };

    function recevoirDonneeBouee(donnee) {
        console.log("les donnee serait recu" + donnee);
    }
    this.retournerPosition = function () {
        return positionBouee;
    }

    init();
    this.requeteDonneeBouee();

}
