//food web connections
$(document).ready(function() {
 jsPlumb.bind("ready", function() {
    jsPlumb.connect({ 
        source:"carnivore1",
        target:"omnivore1",
        connector:[ "Flowchart", { midpoint:0.6} ],
        anchors:[ [0.5,1,0,1,-7.5,0], [0.5,0,0,-1]],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });
    
    jsPlumb.connect({ 
        source:"carnivore1",
        target:"omnivore2",
        connector:[ "Flowchart", { midpoint:0.6} ],
        anchors:[ [0.5,1,0,1,7.5,0],"Top"],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"carnivore1",
        target:"herbivore1",
        connector:[ "Flowchart", { midpoint:0.1 } ],
        anchors:[ [0.5,1,0,1,-15,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });
   
    jsPlumb.connect({ 
        source:"carnivore1",
        target:"herbivore2",
        connector:[ "Flowchart" ],
        anchors:[ "Bottom", "Top"],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"carnivore1",
        target:"herbivore3",
        connector:[ "Flowchart", {midpoint:0.1} ],
        anchors:[ [0.5,1,0,1,15,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"omnivore2",
        connector:[ "Flowchart"],
        anchors:[ [1,0.5,1,0,0,5], [0,0.5,-1,0,0,5] ],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"herbivore1",
        connector:[ "Flowchart", { midpoint:0.55} ],
        anchors:[ [0.5,1,0,1,-15,0], "Top"],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"herbivore2",
        connector:[ "Flowchart", { midpoint:0.8 } ],
        anchors:[ "Bottom", [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"herbivore3",
        connector:[ "Flowchart", { midpoint:0.3 } ],
        anchors:[ [0.5,1,0,1,15,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"producer1",
        connector:[ "Flowchart", { midpoint:0.075 } ],
        anchors:[ [0.5,1,0,1,-22.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"producer2",
        connector:[ "Flowchart" ],
        anchors:[ [0.5,1,0,1,-7.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"producer3",
        connector:[ "Flowchart", {midpoint:0.13} ],
        anchors:[ [0.5,1,0,1,7.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore1",
        target:"producer4",
        connector:[ "Flowchart", { midpoint:0.025 } ],
        anchors:[ [0.5,1,0,1,22.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"omnivore1",
        connector:[ "Flowchart"],
        anchors:[ [0,0.5,-1,0,0,-5], [1,0.5,1,0,0,-5] ],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"herbivore1",
        connector:[ "Flowchart", { midpoint:0.3 } ],
        anchors:[ [0.5,1,0,1,-15,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"herbivore2",
        connector:[ "Flowchart", { midpoint:0.8 } ],
        anchors:[ "Bottom", [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"herbivore3",
        connector:[ "Flowchart", { midpoint:0.55} ],
        anchors:[ [0.5,1,0,1,15,0], "Top"],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"producer1",
        connector:[ "Flowchart", { midpoint:0.025 } ],
        anchors:[ [0.5,1,0,1,-22.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"producer2",
        connector:[ "Flowchart", {midpoint:0.13} ],
        anchors:[ [0.5,1,0,1,-7.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"producer3",
        connector:[ "Flowchart" ],
        anchors:[ [0.5,1,0,1,7.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore2",
        target:"producer4",
        connector:[ "Flowchart", { midpoint:0.075 } ],
        anchors:[ [0.5,1,0,1,22.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore1",
        target:"producer1",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,-11.25,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore1",
        target:"producer2",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,-3.75,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore1",
        target:"producer3",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,3.75,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore1",
        target:"producer4",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,11.25,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore2",
        target:"producer1",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,-11.25,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore2",
        target:"producer2",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,-3.75,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore2",
        target:"producer3",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,3.75,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore2",
        target:"producer4",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,11.25,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore3",
        target:"producer1",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,11.25,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore3",
        target:"producer2",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,3.75,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore3",
        target:"producer3",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,-3.75,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore3",
        target:"producer4",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,-11.25,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });
});
});