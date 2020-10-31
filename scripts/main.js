Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Marital Status of Women Aged 20-44 in The United States'
  },
  subtitle: {
    text: 'Source: data.un.org'
  },
  xAxis: {
    categories: [
      '1970',
      '1980',
      '1990',
      '2000',
      '2009',
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Number of Women'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Single',
    data: [67.2, 96.1, 124.8, 142.5, 179.5]

  }, {
    name: 'Married',
    data: [385, 330.1, 220.5, 198.1, 260.7]

  }, {
    name: 'Divorced',
    data: [22.8, 48.7, 37.9, 33.6, 39.7]

  }]
});

Highcharts.chart('container2', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Married Women Aged 20-44 in The United States'
  },
  subtitle: {
    text: 'Source: data.un.org'
  },
  xAxis: {
    categories: ['1970', '1980', '1990', '2000', '2010']
  },
  yAxis: {
    title: {
      text: 'Number of Women'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'United States',
    data: [385, 330.1, 220.5, 198.1, 260.7]
  }, {
    name: 'Denmark',
    data: [399, 286.4, 233.9, 210.6, 201.6]
  }, {
    name: 'Argentina',
    data: [320, 318.6, 280.6, 217.9, 169]
  }, {
    name: 'Japan',
    data: [374.4, 348.7, 310.2, 263.9, 250.4]
  }]
});
