// setting up variables 
let fileName='dataDemo.json';
let map=null;
let showInstructions = false;

// functions for datamap - toggling state, updating bars and sliders
function cycleColor(color){
    const colors = ['dem','rep','neutral'];
    return colors[(colors.indexOf(color)+1)%3];
}

function toggleState(state){
    const newColor = cycleColor(map.options.data[state].fillKey);
    const newData = {};
    newData[state] = {};
    newData[state].fillKey = newColor;
    
    let newRepVote = '';
    const slider = document.getElementById(`${state}-input`) 
    
    if (newColor == 'dem') {
        newRepVote = 0.49;
        slider.value = 49;
    } else if (newColor == 'rep') {
        newRepVote = 0.51;
        slider.value = 51;
    } else {
        newRepVote = 0.5;
        slider.value = 50;
    }
    
    document.getElementById(`${state}-repLabel`).innerHTML = slider.value + '%';
    document.getElementById(`${state}-demLabel`).innerHTML = 100 - slider.value + '%';
    newData[state].repVote = newRepVote
    
    map.updateChoropleth(newData);
    updateElectoralBar();
    updatePopularBar();
}

function updateElectoralBar(){
    const sums = {
        rep: 0,
        dem: 0,
        neutral: 0
    };
    for(const state in map.options.data){
        switch(map.options.data[state].fillKey){
            case 'rep':
                sums.rep += map.options.data[state].votes;
                break;
            case 'dem':
                sums.dem += map.options.data[state].votes;
                break;
            case 'neutral':
                sums.neutral += map.options.data[state].votes;
                break;
        }
    }
    
    for(const party in sums){
        if (fileName == 'data1984.json') {
            document.querySelector(`#electoral-bar .${party}`).style.width = `${sums[party]*2/(548/538)}px`;
        } else {
            document.querySelector(`#electoral-bar .${party}`).style.width = `${sums[party]*2}px`;
        }
    }
    
    document.querySelector('#electoral-bar .rep-num').innerHTML = sums.rep;
    document.querySelector('#electoral-bar .dem-num').innerHTML = sums.dem;
}

function updatePopularBar(){
    const sums = {
        rep: 0,
        dem: 0,
        neutral: 0
    };

    for(const state in map.options.data){

        switch(map.options.data[state].fillKey){
            case 'rep':
                sums.rep += map.options.data[state].popVote * map.options.data[state].repVote;
                sums.dem += map.options.data[state].popVote * (1 - map.options.data[state].repVote);
                break;
            case 'dem':
                sums.rep += map.options.data[state].popVote * map.options.data[state].repVote;
                sums.dem += map.options.data[state].popVote * (1 - map.options.data[state].repVote);
                break;
            case 'neutral':
                sums.neutral += map.options.data[state].popVote;
                break;
        }
    }
    
    for(const party in sums){
        if (fileName == 'data1984.json'){
            document.querySelector(`#popular-bar .${party}`).style.width = `${sums[party]/(172217.178 / 2)}px`;
        } else {
            document.querySelector(`#popular-bar .${party}`).style.width = `${sums[party]/(63720 * 2)}px`;
        }
    }
    
    document.querySelector('#popular-bar .rep-num').innerHTML = Math.round(sums.rep).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector('#popular-bar .dem-num').innerHTML = Math.round(sums.dem).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createSliders(){
    let slider = '';

    for (let state in map.options.data){
        let data = map.options.data;
        let initialValue = data[state].fillKey === 'rep' ? data[state].repVote*100 : (data[state].repVote)*100;
        initialValue = Math.round(initialValue);
        slider += `
            <label><b>${state}: </b> <span id="${state}-demLabel">${100-initialValue}%</span></label>
            <input id="${state}-input" type="range" min="0" max="100" value="${initialValue}" data-show-value="true"/>
            <span id="${state}-repLabel">${initialValue}%</span>
            <br>
        `;
    }

    document.querySelector('#sliders').innerHTML = slider;
}

function updateSliders(){
    for (let state in map.options.data){
        const slider = document.getElementById(`${state}-input`)
        slider.addEventListener('input', () => {
            document.getElementById(`${state}-repLabel`).innerHTML = slider.value + '%';
            document.getElementById(`${state}-demLabel`).innerHTML = 100 - slider.value +'%';
            
            let newFillKey = '';
            
            if (slider.value < 50) {
                newFillKey = 'dem';
            } else if (slider.value == 50) {
                newFillKey = 'neutral';
            } else {
                newFillKey = 'rep';
            }

            const newData = {}
            newData[state] = {
                fillKey: newFillKey,
                repVote: slider.value / 100
            }
            
            map.updateChoropleth(newData);
            updateElectoralBar();
            updatePopularBar();
        })
    }
}

// functions to switch simulations
function dataDemo() {
    fileName='dataDemo.json';
    updateAll(fileName);
    document.getElementById("description").innerHTML = "Demonstration | The map below shows 50 states and the District of Columbia. Each state is assigned the number of electoral votes and popular votes that it had in 2016. Use the simulation to see how the larger states can appear to quickly decide a presidential election.";
}
dataDemo();

function data2016() {
    fileName='data2016.json';
    updateAll(fileName);
    document.getElementById("description").innerHTML = "2016 Presidential Election | The map below starts off with the results of the 2016 Presidential Election, where businessman Donald Trump (R) ran against former Secretary of State Hillary Clinton (D). While Clinton won the popular vote by more than 2%, the winner-take-all structure of the electoral college resulted in her winning only 232 electoral votes.";
}

function data1984() {
    fileName='data1984.json';
    updateAll(fileName);
    document.getElementById("description").innerHTML = "1984 Presidential Election | The map below starts off with the results of the 1984 Presidential Election, where incumbent Ronald Reagan (R) ran against former Vice President Walter Mondale (D). While Mondale won over 40% of the popular vote, the winner-take-all structure of the electoral college resulted in him winning only 13 electoral votes (10 from Minnesota and 3 from the District of Columbia).";
}

function data2020() {
    fileName='data2020.json';
    updateAll(fileName);
    document.getElementById("description").innerHTML = "2020 Presidential Election | The map below starts off with showing the states that have voted for the same party since 2000. The 13 gray states will decide the outcome of the presidential race, where a candidate needs 270 votes to win.";
}

function toggleInstructions(){
    showInstructions = !showInstructions;
    updateInstructions();
}

function updateInstructions() {
    document.querySelector("#directions span").innerHTML = showInstructions ? 'hide' : 'show';
    document.getElementById("instructions").style.display = showInstructions ? 'block' : 'none';
}

function updateAll(fileName) {
    d3.json(`data/${fileName}`, function(error, data){
        if (error) {
            console.log(error);
            alert("error in loading file")
        }

    map.updateChoropleth(data);
    updateElectoralBar();
    updatePopularBar();
    createSliders();
    updateSliders();
    });
}

// global datamap, d3
d3.json(`data/${fileName}`, function(error, data){
    if (error) {
        console.log(error);
        alert("error in loading file")
    }

    map = new Datamap({
        element: document.getElementById("map"),
        geographyConfig: {
            highlightOnHover: false,
            borderColor: 'black',
            popupTemplate: function(geography,data) {
                return `
                    <div class="hoverinfo">    
                        <strong>${geography.properties.name}</strong><br/>
                        Winner: ${getFullWinner(data.fillKey)}<br/>
                        Electoral Votes: ${data.votes}<br/>
                        2016 Voters: ${data.popVote}
                    </div>
                `
            }
        },
        setProjection: function(element) {
            const projection = d3.geo.albersUsa()
                .scale(950)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]); // ??????????
            const path = d3.geo.path()
                .projection(projection);
            
            return {path: path, projection: projection};
        },
        scope: 'usa',
        fills: {
            defaultFill: '#AAAAAA',
            neutral: '#AAAAAA',
            rep: '#ED1C24', //'#E91D0E',
            dem: '#1E90FF', //'#232066'
        },
        data: data,
        done: (datamap) => {
            const height = 476
            const width = 776
            const zoom = d3.behavior.zoom()
            .scaleExtent([1, 4])
            .on('zoom', function() {
                const e = d3.event
                const tx = Math.min(0, Math.max(e.translate[0], width - width * e.scale))
                const ty = Math.min(0, Math.max(e.translate[1], height - height * e.scale))
                zoom.translate([tx, ty])
                datamap.svg.selectAll("g").attr("transform", "translate(" + [tx,ty] + ")scale(" + e.scale + ")");
            })
            datamap.svg.call(zoom);

            // datamap.svg.call(d3.behavior.zoom().on('zoom', redraw));
            
            // function redraw() {
            //     datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            // }
        }
    });

    map.labels({'labelColor': 'black'});
    map.resize()

    const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI',
        'ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO',
        'MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI',
        'SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

    function getFullWinner(short){
        switch(short){
            case 'dem':
                return 'Democrat';
            case 'rep':
                return 'Republican';
            case 'neutral':
                return 'Neutral';
        }
    }


    states.forEach(function(state) {
        document.querySelector(`.${state}`).addEventListener('click',function(){toggleState(state)});
    });

    updateElectoralBar();
    updatePopularBar();
    createSliders();
    updateSliders();

} )


// code and explanations
function pythonParsing(data) {
    const lines = data.split('\n');

    const lineData = { maxBlock: -1, data: []};

    let blockIndex = -1;

    for (const i in lines) {
        if (lines[i].trim()[0] === '#' && lines[i].includes('begin')) {
            blockIndex = parseInt(lines[i].trim()[lines[i].trim().length - 1], 10);
            lineData.maxBlock = blockIndex;
        } else if (lines[i].trim()[0] === '#' && lines[i].includes('end')) {
            blockIndex = -1;
        }
        
        if (lines[i].trim()[0] !== '#') {
            lineData.data.push({
                lineNumber: i,
                lineText: lines[i] || ' ',
                blockIndex,
            })
        }
    }

    return lineData;
}

function preHover() {
    var output = '';
    var preBox = document.getElementById('highlight');
    var txt = preBox.innerHTML.split('\n');
    for(var x=0;x<txt.length-1;x++) {
        output = output + `
        <div class="popup" id="highlight-${x}">${txt[x]}</div>`;
    }
    preBox.innerHTML = output;
}
preHover();


function parsing(fileName, idName, resolver) {
    $.get(fileName, data => {
        const parsedData = pythonParsing(data);
        const lines = parsedData.data;
        const maxBlock = parsedData.maxBlock;
        let html = '';

        for (let i in lines) {
            html += `<div class="block-${lines[i].blockIndex}" data-block="${lines[i].blockIndex}">${lines[i].lineText}</div><br />`;
        }
        document.getElementById(idName).innerHTML = html;


        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });

        for (let i=0; i<=maxBlock; i++) {
            $(`.block-${i}`).hover(function() {
                $(`.block-${i}`).addClass("hl");
            }, function() {
                $(`.block-${i}`).removeClass("hl");
            })
        }

        resolver(maxBlock)
    }, 'text')

}

function openTab(fileName) {
    if (fileName == "clickState") {
        let parsePython = new Promise(function(resolve, reject) {
            parsing('clickState.py', 'highlight', resolve) 
        }).then(function(message){
            parsing('clickStateExplanation', 'explanation')
        })
    } else if (fileName == "updateElectoralBar") {
        let parsePython = new Promise(function(resolve, reject) {
            parsing('updateElectoralBar.py', 'highlight', resolve)
        }).then(function(message){
            parsing('updateElectoralBarExplanation', 'explanation')
        })
    } else if (fileName =="updatePopularBar") {
        let parsePython = new Promise(function(resolve, reject) {
            parsing('updatePopularBar.py', 'highlight', resolve)
        }).then(function(message){
            parsing('updatePopularBarExplanation', 'explanation')
        })
    }
}
openTab('clickState')