
const activeStatus = {
    "carnivore1": false,
    "omnivore1": false,
    "omnivore2": false,
    "herbivore1": false,
    "herbivore2": false,
    "herbivore3": false,
    "producer1": false,
    "producer2": true,
    "producer3": true,
    "producer4": false,
}

$('.organism').click(function() {
    activeStatus[this.id] = !activeStatus[this.id]
    $(this).toggleClass('active')
})

// global variables
var year = 0;
// adjusts resource values based on sliders
$('#step').click(function() {
    if (year != 110) {
        document.querySelector("#counter").innerHTML = year;

        //test
        // for (var key in activeStatus) {
        //     console.log(key)
        //     console.log(activeStatus)
        //     if (activeStatus[key] != false) {
        //         allOrganisms[key].y[year/10] = 0
        //     } else {
        //         allOrganisms[key].y[year/10] = 100
        //     }
        // }

        const key = 'producer4'
        console.table(allOrganisms[key])
        if (activeStatus[key] != false) {
                allOrganisms[key].y[year/10] = 100
            } else {
                allOrganisms[key].y[year/10] = 200
            }
        console.table(allOrganisms[key])

        Plotly.newPlot('organism-chart', organismData, organismLayout);



        trace1.y[year/10] = document.querySelector("#habitatOutput").innerHTML;
        trace2.y[year/10] = document.querySelector("#waterOutput").innerHTML;
        trace3.y[year/10] = document.querySelector("#airOutput").innerHTML;
        Plotly.newPlot('resources-chart', resourceData, resourceLayout);

        year += 10;
    }
})

$('#reset').click(function() {
    trace1.y = [0]
    trace2.y = [0]
    trace3.y = [0]
    year = 0;
    document.querySelector("#counter").innerHTML = year;
    Plotly.newPlot('resources-chart', resourceData, resourceLayout);
})

// ORGANISM CHART
// organism data

const allOrganisms = {
    carnivore1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: 'C1',
        line: {
            color:"#FF4D45"
        }
    },
    omnivore1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: 'O1',
        line: {
            color:"#237ECC"
        }
    },
    omnivore2: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: 'O2',
        line: {
            color:"#18A0C2" 
        }
    },
    herbivore1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: 'H1',
        line: {
            color:"#226E2D" 
        }
    },
    herbivore2: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: 'H2',
        line: {
            color:"#369842" 
        }
    },
    herbivore3: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: 'H3',
        line: {
            color:"#2FB23F"
        }
    },
    producer1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10 P1',
        line: {
            color:"#7A4825"
        }
    },
    producer2: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10 P2',
        line: {
            color:"#986D51"
        }
    },
    producer3: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10 P3',
        line: {
            color:"#B2764E"
        }
    },
    producer4: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10 P4',
        line: {
            color:"#D68E5E"
        }
    }
}

// which resources to chart
var organismData = [allOrganisms.carnivore1, allOrganisms.omnivore1, allOrganisms.omnivore2, allOrganisms.herbivore1, allOrganisms.herbivore2, allOrganisms.herbivore3, allOrganisms.producer1, allOrganisms.producer2, allOrganisms.producer3, allOrganisms.producer4];

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
        title: 'Years',
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
    y: [0],
    mode: 'lines+markers',
    name: 'Habitat',
    line: {
        color:"green"
    },
};

var trace2 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [0],
    mode: 'lines+markers',
    name: 'Water',
    line: {
        color:"blue"
    },
};

var trace3 = {
    x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [0],
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
        title: 'Years',
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

