//food web connections
$(document).ready(function() {
 jsPlumb.bind("ready", function() {
    jsPlumb.connect({ 
        source:"carnivore1",
        target:"omnivore-one",
        connector:[ "Flowchart", { midpoint:0.6} ],
        anchors:[ [0.5,1,0,1,-7.5,0], [0.5,0,0,-1]],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });
    
    jsPlumb.connect({ 
        source:"carnivore1",
        target:"omnivore-two",
        connector:[ "Flowchart", { midpoint:0.6} ],
        anchors:[ [0.5,1,0,1,7.5,0],"Top"],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"carnivore1",
        target:"herbivore-one",
        connector:[ "Flowchart", { midpoint:0.1 } ],
        anchors:[ [0.5,1,0,1,-15,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });
   
    jsPlumb.connect({ 
        source:"carnivore1",
        target:"herbivore-two",
        connector:[ "Flowchart" ],
        anchors:[ "Bottom", "Top"],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"carnivore1",
        target:"herbivore-three",
        connector:[ "Flowchart", {midpoint:0.1} ],
        anchors:[ [0.5,1,0,1,15,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"darkred", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"omnivore-two",
        connector:[ "Flowchart"],
        anchors:[ [1,0.5,1,0,0,5], [0,0.5,-1,0,0,5] ],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"herbivore-one",
        connector:[ "Flowchart", { midpoint:0.55} ],
        anchors:[ [0.5,1,0,1,-15,0], "Top"],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"herbivore-two",
        connector:[ "Flowchart", { midpoint:0.8 } ],
        anchors:[ "Bottom", [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"herbivore-three",
        connector:[ "Flowchart", { midpoint:0.3 } ],
        anchors:[ [0.5,1,0,1,15,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"producer-one",
        connector:[ "Flowchart", { midpoint:0.075 } ],
        anchors:[ [0.5,1,0,1,-22.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"producer-two",
        connector:[ "Flowchart" ],
        anchors:[ [0.5,1,0,1,-7.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"producer-three",
        connector:[ "Flowchart", {midpoint:0.13} ],
        anchors:[ [0.5,1,0,1,7.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-one",
        target:"producer-four",
        connector:[ "Flowchart", { midpoint:0.025 } ],
        anchors:[ [0.5,1,0,1,22.5,0], [0.5,0,0,-1,-7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"omnivore-one",
        connector:[ "Flowchart"],
        anchors:[ [0,0.5,-1,0,0,-5], [1,0.5,1,0,0,-5] ],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"herbivore-one",
        connector:[ "Flowchart", { midpoint:0.3 } ],
        anchors:[ [0.5,1,0,1,-15,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"herbivore-two",
        connector:[ "Flowchart", { midpoint:0.8 } ],
        anchors:[ "Bottom", [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"herbivore-three",
        connector:[ "Flowchart", { midpoint:0.55} ],
        anchors:[ [0.5,1,0,1,15,0], "Top"],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"producer-one",
        connector:[ "Flowchart", { midpoint:0.025 } ],
        anchors:[ [0.5,1,0,1,-22.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"producer-two",
        connector:[ "Flowchart", {midpoint:0.13} ],
        anchors:[ [0.5,1,0,1,-7.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"producer-three",
        connector:[ "Flowchart" ],
        anchors:[ [0.5,1,0,1,7.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"omnivore-two",
        target:"producer-four",
        connector:[ "Flowchart", { midpoint:0.075 } ],
        anchors:[ [0.5,1,0,1,22.5,0], [0.5,0,0,-1,7.5,0]],
        paintStyle:{ stroke:"blue", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-one",
        target:"producer-one",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,-11.25,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-one",
        target:"producer-two",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,-3.75,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-one",
        target:"producer-three",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,3.75,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-one",
        target:"producer-four",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,11.25,0], [0.5,0,0,-1,-15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-two",
        target:"producer-one",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,-11.25,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-two",
        target:"producer-two",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,-3.75,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-two",
        target:"producer-three",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,3.75,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-two",
        target:"producer-four",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,11.25,0], "Top"],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-three",
        target:"producer-one",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,11.25,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-three",
        target:"producer-two",
        connector:[ "Flowchart", { midpoint:0.375 } ],
        anchors:[ [0.5,1,0,1,3.75,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-three",
        target:"producer-three",
        connector:[ "Flowchart", { midpoint:0.625 } ],
        anchors:[ [0.5,1,0,1,-3.75,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });

    jsPlumb.connect({ 
        source:"herbivore-three",
        target:"producer-four",
        connector:[ "Flowchart", { midpoint:0.125 } ],
        anchors:[ [0.5,1,0,1,-11.25,0], [0.5,0,0,-1,15,0]],
        paintStyle:{ stroke:"green", strokeWidth:2 },
        endpoint:[ "Rectangle", { width:5, height:5 }, "Rectangle", { width:5, height:5 } ]
    });
});
});