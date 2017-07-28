
const activeStatus = {
    "carnivore-one": true,
    "omnivore-one": true,
    "omnivore-two": true,
    "herbivore-one": true,
    "herbivore-two": true,
    "herbivore-three": true,
    "producer-one": true,
    "producer-two": true,
    "producer-three": true,
    "producer-four": true,
}

$('.organism').click(function() {
    activeStatus[this.id] = !activeStatus[this.id]
    $(this).toggleClass('active')
})

// function toggleStatus(organism) {
//     const newData = {};
//     newData[organism] = {};
//     newData[organism].status = currentStatus;
//     console.log("before conditional")
//     if (currentStatus = "active") {
//         currentStatus = "inactive"
//     } else {
//         currentStatus = "active"
//     }
//     console.log("after conditional")
// }

// global variables
var day = 0;

// adjusts resource values based on sliders
$('#step').click(function() {
    if (day != 110) {
        document.querySelector("#counter").innerHTML = day;

        trace1.y[day/10] = document.querySelector("#habitatOutput").innerHTML;
        trace2.y[day/10] = document.querySelector("#waterOutput").innerHTML;
        trace3.y[day/10] = document.querySelector("#airOutput").innerHTML;
        
        Plotly.newPlot('resources-chart', resourceData, resourceLayout);

        day += 10;
    }
})

// ORGANISM CHART
// organism data
var carnivore1 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'C1',
    line: {
        color:"#FF4D45"
    }
};

var omnivore1 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'O1',
    line: {
        color:"#237ECC"
    }
};

var omnivore2 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'O2',
    line: {
        color:"#18A0C2" 
    }
};

var herbivore1 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'H1',
    line: {
        color:"#226E2D" 
    }
};

var herbivore2 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'H2',
    line: {
        color:"#369842" 
    }
};

var herbivore3 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'H3',
    line: {
        color:"#2FB23F"
    }
};

var producer1 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'P1',
    line: {
        color:"#7A4825"
    }
};

var producer2 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'P2',
    line: {
        color:"#986D51"
    }
};

var producer3 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'P3',
    line: {
        color:"#B2764E"
    }
};

var producer4 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'P4',
    line: {
        color:"#D68E5E"
    }
};

// which resources to chart
var organismData = [carnivore1, omnivore1, omnivore2, herbivore1, herbivore2, herbivore3, producer1, producer2, producer3, producer4];

// layout of graph
var organismLayout = {
    width:500,
    height:340,
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
        title: 'Number of Organisms',
        range: [0, 1020]
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
Plotly.newPlot('organism-chart', organismData, organismLayout);

// RESOURCES CHART
// resources data
var trace1 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'Habitat',
    line: {
        color:"green"
    },
};

var trace2 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'Water',
    line: {
        color:"blue"
    },
};

var trace3 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [100],
    mode: 'lines+markers',
    name: 'Air Quality',
    line: {
        color:"purple"
    }
};

// which resources to chart
var resourceData = [trace1, trace2, trace3];

// layout of graph
var resourceLayout = {
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
Plotly.newPlot('resources-chart', resourceData, resourceLayout);

