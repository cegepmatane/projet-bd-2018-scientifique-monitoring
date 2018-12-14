

console.log("Langue: es");
console.log(document.getElementById("les-bouees"));

if(document.getElementById("les-bouees"))
{
    console.log("entre dans la verification");
    document.getElementById("les-bouees").innerHTML = "Las Boyas";
}
if(document.getElementById("info-bouee")){
    document.getElementById("info-bouee").innerHTML = "Información de la boya: <span id='bouee'></span>";
}
if(document.getElementById("graphique-barre-temperature"))
{
    var canvas = document.getElementById("graphique-bar-temp");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: ["Aire", "Agua"],
          datasets: [{
            label: 'Temperatura en °C',
            data: [bouee.temperatureAir, bouee.temperatureEau],
            backgroundColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          scales: {
            xAxes: [{
              ticks: {
                maxRotation: 90,
                minRotation: 80
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
}

if(document.getElementById("graphique-barre-vague"))
{
    var myChart = new Chart(document.getElementById("graphique-bar-vague"), {
        type: 'bar',
        data: {
          labels: ["Altura de las olas", "Altura media"],
          datasets: [{
            label: 'Altura de las olas en metro',
            data: [bouee.hauteurMaximum, bouee.vagueMoyenne],
            backgroundColor: [
            'rgba(62, 219, 0, 1)',
            'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          scales: {
            xAxes: [{
              ticks: {
                maxRotation: 90,
                minRotation: 80
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
}
if(document.getElementById("legende-vents"))
{
  var inner = "<p> Dirección del viento: <span id='direction-vent'>" + bouee.directionVent +"</span></p><p> Velocidad del viento: <span id='vitesse-vent'>"+bouee.kilometrageVent+"</span></span></p><p> Ráfagas: <span id='rafales'>"+bouee.rafales+"</span></p>";
  document.getElementById("legende-vents").innerHTML = inner;
}
if(document.getElementById("bouee"))
{
  var innerBouee = "Latitud: " + bouee.longitude + " Longitud: " + bouee.latitude;
  NomDeBouee.innerHTML = innerBouee;
}
