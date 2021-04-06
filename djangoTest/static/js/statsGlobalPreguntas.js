google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Preguntas, Acierto y Errores', 'Preguntas Contestadas', 'Aciertos', 'Errores'],
    [' ', 65000, 34000, 31000]
  ]);

  var options = {
    chart: {
      title: 'Preguntas, Acierto y Errores',
      subtitle: '¿Qué Tan Bien Contestas?',
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material_Aciertos_Global'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}