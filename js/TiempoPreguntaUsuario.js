google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Segundos', 45],
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 120,
          yellowFrom:60, yellowTo: 90,
          greenFrom:0, greenTo:60,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('tiempoPromedio'));

        chart.draw(data, options);
      }