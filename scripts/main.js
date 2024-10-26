Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Median weekly earnings of full-time wage and salary workers by race and gender, 2023',
        align: 'left'
    },
    xAxis: {
        categories: ['White', 'Black', 'Asian', 'Hispanic or Latino'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '0%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Male',
        data: [1225, 970, 1635, 915]
    }, {
        name: 'Female',
        data: [1021, 889, 1299, 800]
    }]
});

Highcharts.chart('container2', {

    title: {
        text: 'Monthly Unemployment, September 2023-September 2024',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of people'
        }
    },

    xAxis: {
        categories: [
            'Sep','Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',],
        accessibility: {
            rangeDescription: 'Range: September 2023 to September 2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        }
    },

    series: [{
        name: 'Unemployed Population',
        data: [
            6347, 6443, 6262, 6268, 6124, 6458,
            6429, 6492, 6649, 6811, 7163, 7115, 6834
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});