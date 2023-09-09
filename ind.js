
// fetch('http://example.com/temperature')
// .then(response => response.json())
// .then(data => {


var gaugeOptions = {
    chart: {
        type: 'solidgauge',
        backgroundColor:'#374151',
        
    },

    title: null,

    pane: {
        size: '87%',
        startAngle: -180,
        endAngle: 90,
        background: {
            backgroundColor: '#EEE',
            innerRadius: '95%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0, '#000088'],
            [29 / 90, '#000088'],
            [30 / 90, '#5555ff'],
            [41 / 90, '#5555ff'],
            [42 / 90, '#00ff00'],
            [54 / 90, '#00ff00'],
            [55 / 90, '#ff8c00'],
            [59 / 90, '#ff8c00'],
            [60 / 90, '#ff0000']
        ],

        lineWidth: 0,
        minorTickInterval: 0,
        tickPixelInterval: 50,
        tickWidth: 1,
        labels: {
            style:{
                color:'white'
            },
            enabled: true,
            distance: 10
        }
    },

    plotOptions: {
        solidgauge: {
            innerRadius: '95%',
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};
var chartSpeed = Highcharts.chart('container', Highcharts.merge(gaugeOptions, {
    yAxis: {  
        min: -30,
        max: 60,
        title: {
            text: 'thermometer',
            style:{
                color:'white'
            },
        }
    },

    credits: {
        enabled: false
    },
    series: [{
        name: 'inTemp',
        data: [25], //data.temperature
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} &deg;C</span><br/>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: '{y} &deg;C'
        }
    }]

}));
// });

