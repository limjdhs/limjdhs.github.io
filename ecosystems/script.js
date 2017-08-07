// global variables
var year = 0;
var carnivoreTotal = 0;
var omnivoreTotal = 0;
var herbivoreTotal = 0;
var producerTotal = 0;

const activeStatus = {
    "carnivore1": true,
    "omnivore1": true,
    "omnivore2": true,
    "herbivore1": true,
    "herbivore2": true,
    "herbivore3": true,
    "producer1": true,
    "producer2": true,
    "producer3": true,
    "producer4": true,
}

const extinctStatus = {
    "carnivore1": false,
    "omnivore1": false,
    "omnivore2": false,
    "herbivore1": false,
    "herbivore2": false,
    "herbivore3": false,
    "producer1": false,
    "producer2": false,
    "producer3": false,
    "producer4": false,
}

$('.menu .item')
  .tab()
;

$('.organism').click(function() {
    activeStatus[this.id] = !activeStatus[this.id]
    $(this).toggleClass('active')
})

$('#step').click(function() {
    if (year == 0) {
        // document.querySelector("#counter").innerHTML = year;

        // update resources
        trace1.y[year/10] = document.querySelector("#habitatOutput").innerHTML;
        trace2.y[year/10] = document.querySelector("#waterOutput").innerHTML;
        trace3.y[year/10] = document.querySelector("#airOutput").innerHTML;
        Plotly.newPlot('resources-chart', resourceData, resourceLayout);

        for (key in allOrganisms) {
            if (activeStatus[key] != false) {
                if (key.startsWith("carnivore")) {
                    allOrganisms[key].y[year/10] = 500;
                } else if (key.startsWith("omnivore")) {
                    allOrganisms[key].y[year/10] = 250;
                } else if (key.startsWith("herbivore")) {
                    allOrganisms[key].y[year/10] = 166 + (2/3);
                } else if (key.startsWith("producer")) {
                    allOrganisms[key].y[year/10] = 125;
                } else {
                    console.log("error")
                }
            } else {
                allOrganisms[key].y[year/10] = 0;
            }
        }

        // keep track of totals
        carnivoreTotal = allOrganisms.carnivore1.y[year/10]
        console.log("Carnivore Total: " + carnivoreTotal)

        omnivoreTotal = allOrganisms.omnivore1.y[year/10] + allOrganisms.omnivore2.y[year/10]
        console.log("Omnivore Total: " + omnivoreTotal)

        herbivoreTotal = allOrganisms.herbivore1.y[year/10] + allOrganisms.herbivore2.y[year/10] + allOrganisms.herbivore3.y[year/10]
        console.log("Herbivore Total: " + herbivoreTotal)

        producerTotal = allOrganisms.producer1.y[year/10] + allOrganisms.producer2.y[year/10] + allOrganisms.producer3.y[year/10] + allOrganisms.producer4.y[year/10]
        console.log("Producer Total: " + producerTotal)

        // updates chart
        Plotly.newPlot('organism-chart', organismData, organismLayout);

        year += 10;

    } else if (year < 110) {
        // document.querySelector("#counter").innerHTML = year;

        // update resources
        trace1.y[year/10] = document.querySelector("#habitatOutput").innerHTML;
        trace2.y[year/10] = document.querySelector("#waterOutput").innerHTML;
        trace3.y[year/10] = document.querySelector("#airOutput").innerHTML;
        Plotly.newPlot('resources-chart', resourceData, resourceLayout);

        for (key in allOrganisms) {
            // console.log(activeStatus[key])
            // console.log(allOrganisms[key] = allOrganisms[key].y)

            if (activeStatus[key] != false && extinctStatus[key] != true) {
                var temp
                var previous = allOrganisms[key].y[year/10 - 1]
                if (key.startsWith("carnivore")) {
                    // prey
                    temp = previous + (omnivoreTotal + herbivoreTotal - 2 * carnivoreTotal) / 2
                } else if (key.startsWith("omnivore")) {
                    // prey
                    temp = previous + (herbivoreTotal + omnivoreTotal - 2 * omnivoreTotal) / 2
                        // predators
                        // - 0.3 * (carnivoreTotal - omnivoreTotal) / 2
                } else if (key.startsWith("herbivore")) {
                    // prey 
                    temp = previous + ((producerTotal - herbivoreTotal)/3)
                        // predators
                        // - 0.3 * (carnivoreTotal + omnivoreTotal - 2 * herbivoreTotal) / 3
                        // + (previous - (carnivoreTotal + omnivoreTotal - 2 * herbivoreTotal) / 3)
                } else if (key.startsWith("producer")) {
                   //relies solely on resources 
                    temp = previous + (Math.sqrt(trace2.y[year/10] * trace3.y[year/10]) - (previous / 2.5))
                        // predators
                        // - 0.3 * (omnivoreTotal + herbivoreTotal - 2 * producerTotal) / 4
                        // + 0.2 * (previous - (omnivoreTotal / 8 + herbivoreTotal / 8))
                } else {
                    console.log("error");
                }

                if (temp > 0) {
                    // habitat impacts all
                    allOrganisms[key].y[year/10] = Math.min(temp, temp / 10 * Math.sqrt(2 * trace1.y[year/10]));
                } else {
                    // organism died
                    allOrganisms[key].y[year/10] = 0;
                    extinctStatus[key] = true;
                }
            } else {
                allOrganisms[key].y[year/10] = 0;
            }
        }

        // keep track of totals
        carnivoreTotal = allOrganisms.carnivore1.y[year/10]
        console.log("Carnivore Total: " + carnivoreTotal)

        omnivoreTotal = allOrganisms.omnivore1.y[year/10] + allOrganisms.omnivore2.y[year/10]
        console.log("Omnivore Total: " + omnivoreTotal)

        herbivoreTotal = allOrganisms.herbivore1.y[year/10] + allOrganisms.herbivore2.y[year/10] + allOrganisms.herbivore3.y[year/10]
        console.log("Herbivore Total: " + herbivoreTotal)

        producerTotal = allOrganisms.producer1.y[year/10] + allOrganisms.producer2.y[year/10] + allOrganisms.producer3.y[year/10] + allOrganisms.producer4.y[year/10]
        console.log("Producer Total: " + producerTotal)

        // updates chart
        Plotly.newPlot('organism-chart', organismData, organismLayout);
        // console.table(allOrganisms[key])

        year += 10;
    }
})

// resets charts
$('#reset').click(function() {
    trace1.y = [0]
    trace2.y = [0]
    trace3.y = [0]
    allOrganisms.carnivore1.y = [0]
    allOrganisms.omnivore1.y = [0]
    allOrganisms.omnivore2.y = [0]
    allOrganisms.herbivore1.y = [0]
    allOrganisms.herbivore2.y = [0]
    allOrganisms.herbivore3.y = [0]
    allOrganisms.producer1.y = [0]
    allOrganisms.producer2.y = [0]
    allOrganisms.producer3.y = [0]
    allOrganisms.producer4.y = [0]

    extinctStatus.carnivore1 = false;
    extinctStatus.omnivore1 = false;
    extinctStatus.omnivore2 = false;
    extinctStatus.herbivore1 = false;
    extinctStatus.herbivore2 = false;
    extinctStatus.herbivore3 = false;
    extinctStatus.producer1 = false;
    extinctStatus.producer2 = false;
    extinctStatus.producer3 = false;
    extinctStatus.producer4 = false;

    year = 0;
    // document.querySelector("#counter").innerHTML = year;

    Plotly.newPlot('organism-chart', organismData, organismLayout);
    Plotly.newPlot('resources-chart', resourceData, resourceLayout);
})

// ORGANISM CHART
// organism data

const allOrganisms = {
    carnivore1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10 C1',
        line: {
            color:"#FF4D45"
        }
    },
    omnivore1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '100 O1',
        line: {
            color:"#237ECC"
        }
    },
    omnivore2: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '100 O2',
        line: {
            color:"#18A0C2" 
        }
    },
    herbivore1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '1,000 H1',
        line: {
            color:"#226E2D" 
        }
    },
    herbivore2: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '1,000 H2',
        line: {
            color:"#369842" 
        }
    },
    herbivore3: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '1,000 H3',
        line: {
            color:"#2FB23F"
        }
    },
    producer1: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10,000 P1',
        line: {
            color:"#7A4825"
        }
    },
    producer2: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10,000 P2',
        line: {
            color:"#986D51"
        }
    },
    producer3: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10,000 P3',
        line: {
            color:"#B2764E"
        }
    },
    producer4: {
        x: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [0],
        mode: 'lines+markers',
        name: '10,000 P4',
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
        autorange:true,
        dtick: 10,
        range: [0, 100]
    },
    yaxis: {
        title: 'Number of Organisms',
        // range: [0, 1020]
    },
    showlegend: true,
    legend: {
        "orientation": "h",
        xanchor: "center",
        width: 500,
        // y: -0.5,
        y: 1.3,
        x: 0.5,
        font: {
            size: 10,
        }
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
        autorange:true,
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

