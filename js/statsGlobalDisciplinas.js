google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Disciplinas', 'Física', 'Química', 'Biología', 'Informática'],
    ['Nivel de Dominio', 75, 80, 95, 60]
  ]);

  var options = {
    chart: {
      title: 'Disciplina Predominante',
      subtitle: '¿Qué Disciplina De La Ciencia Dominas Mejor',
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material_Discilinas_Global'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}