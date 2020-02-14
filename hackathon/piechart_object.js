function drawChart('piechart'); {

    var dataValues = eval(jsonObj);
    var data = new google.visualization.DataTable(dataValues);
    data.addColumn('string', 'NAME');
    data.addColumn('number', 'NUMBER');

    for (var i = 0; i < dataValues.length; i++) {
        data.addRow([dataValues[i].name, dataValues[i].number]);
    }

    var options = { 'title': 'Pie Chart Example' };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}