$(function () {//from w w w .j  av a  2  s. com
    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            size: '90%',
            startAngle: -180,
            endAngle: 90,
            background: {
                backgroundColor: '#EEE',
                innerRadius: '95%',
                outerRadius: '100%',
                shape: 'arc'
            }
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
    $('#temp001').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: -30,
            max: 60
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'inTemp',
            data: [-0.1], /////// Temp Value //////////
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:#000' + ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y} &deg;C</span><br/>' + '<span style="font-size:12px;color:silver">abcde</span></div>'
            }
        }]
    }));
});