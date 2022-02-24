window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Performance  X Meta"
        },
        axisY: {
            title: "Distância percorrida em - Km",
            valueFormatString: "#.##",
            suffix: "km",
            stripLines: [{
                value: 10,
                label: "Meta"
            }]
        },
        data: [{
            yValueFormatString: "#.## km",
            xValueFormatString: "MMM",
            type: "spline",
            dataPoints: [

                { x: new Date(2022, 0), y: 10 },
                { x: new Date(2022, 1), y: 9.8 },
                { x: new Date(2022, 2), y: 9.3 },
                { x: new Date(2022, 3), y: 8.7 },
                { x: new Date(2022, 4), y: 8.3 },
                { x: new Date(2022, 5), y: 9.2 },
                { x: new Date(2022, 6), y: 9.5 },
                { x: new Date(2022, 7), y: 9.3 },
                { x: new Date(2022, 8), y: 7.9 },
                { x: new Date(2022, 9), y: 10.2 },
                { x: new Date(2022, 10), y: 10.5 },
                { x: new Date(2022, 11), y: 9.0 },
                { x: new Date(2022, 12), y: 7.8 },
            ]
        }]
    });
    chart.render();
}

