

console.log("Langue: fr");
console.log(document.getElementById("les-bouees"));

if(document.getElementById("les-bouees"))
{
    console.log("entre dans la verification");
    document.getElementById("les-bouees").innerHTML = "Les Bouées";
}

if(document.getElementById("info-bouee")){
    document.getElementById("info-bouee").innerHTML = "Information sur la bouée: <span id='bouee'></span>";
}
if(document.getElementById("graphique-barre-temperature"))
{
    var canvas = document.getElementById("graphique-bar-temp");
    canvas.width = canvas.width;
    var myChart = new Chart(document.getElementById("graphique-bar-temp"), {
        type: 'bar',
        data: {
          labels: ["Air", "Eau"],
          datasets: [{
            label: 'Temperature en °C',
            data: [12, 19],
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
          labels: ["Hauteur maximale", "Hauteur moyenne"],
          datasets: [{
            label: 'Hauteur des vagues en Mètre',
            data: [3.6, 2.3],
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
  var inner = "<p> Direction des vents: <span id='direction-vent'></span></p><p> Vitesse des vents: <span id='vitesse-vent'></span></span></p><p> Rafales: <span id='rafales'></span></p>";
  document.getElementById("legende-vents").innerHTML = inner;
}
