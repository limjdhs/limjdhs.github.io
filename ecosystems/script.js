
const activeStatus = {
    "carnivore-one": true,
    //ecvry1
}

$('.organism').click(function() {
    activeStatus[this.id] = !activeStatus[this.id]
    $(this).toggleClass('active')
})

function toggleStatus(organism) {
    const newData = {};
    newData[organism] = {};
    newData[organism].status = currentStatus;

    if (currentStatus = "active") {
        currentStatus = "inactive"
    } else {
        currentStatus = "active"
    }
}

// global variables
var day = 0;

// adjusts resource values based on sliders
$('#step').click(function() {
    if (day != 110) {
        document.querySelector("#counter").innerHTML = day;

        trace1.y[day/10] = document.querySelector("#habitatOutput").innerHTML;
        trace2.y[day/10] = document.querySelector("#waterOutput").innerHTML;
        trace3.y[day/10] = document.querySelector("#airOutput").innerHTML;
        
        Plotly.newPlot('resources-chart', data, layout);

        day += 10;
    }
})

// resources data
var trace1 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'Habitat'
};

var trace2 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'Water'
};

var trace3 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'Air Quality'
};

// which resources to chart
var data = [trace1, trace2, trace3];

// layout of graph
var layout = {
    width:500,
    height:300,
    margin: {
        t: 20,
        r: 20,
        l: 50,
        b: 45,
    },
    xaxis: {
        title: 'Days',
        dtick: 10,
        range: [0, 100]
    },
    yaxis: {
        title: 'Amount of Resource',
        range: [0, 102]
    },
    showlegend: true,
    legend: {
        "orientation": "h",
        xanchor: "center",
        y: 1.2,
        x: 0.5
    }
};

//draws initial graph
Plotly.newPlot('resources-chart', data, layout);

