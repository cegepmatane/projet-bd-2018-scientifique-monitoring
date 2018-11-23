

console.log("Langue: en");
console.log(document.getElementById("les-bouees"));

if(document.getElementById("les-bouees"))
{
    console.log("entre dans la verification");
    document.getElementById("les-bouees").innerHTML = "The Buoys";
}
if(document.getElementById("info-bouee")){
document.getElementById("info-bouee").innerHTML = "Information on the buoy: <span id='bouee'></span>";
}
if(document.getElementById("graphique-barre-temperature"))
{
    var canvas = document.getElementById("graphique-bar-temp");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: ["Air", "Water"],
          datasets: [{
            label: 'Temperature in °C',
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
          labels: ["Wave height", "Average height"],
          datasets: [{
            label: 'Wave height in Meter',
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
  var inner = "<p> Wind direction: <span id='direction-vent'></span></p><p> Winds speed: <span id='vitesse-vent'></span></span></p><p> Gust: <span id='rafales'></span></p>";
  document.getElementById("legende-vents").innerHTML = inner;
}