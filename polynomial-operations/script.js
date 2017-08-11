// global variables
var scale = document.getElementById("model").offsetWidth/13;
var m1 = document.getElementById("m1").value;
var b1 = document.getElementById("b1").value;
var m2 = document.getElementById("m2").value;
var b2 = document.getElementById("b2").value;

// creates boxes
function addBoxes(box, rows, columns, label, width, height) {
	var string = ""
	for (i=0; i<rows; i++) {
		string += "<div class='sim-row' style='height:"+100/rows+"%'>"
		for (j=0; j<columns; j++) {
			string +="<div class='sim-column' style='width:"+100/columns+"%'>"+label+"</div>"
		}
		string += "</div>"
	}
	document.getElementById(box).innerHTML = string;
}

// runs model
function compute() {
	// sets up variables
	var m1Abs = Math.abs(m1);
	var b1Abs = Math.abs(b1);
	var m2Abs = Math.abs(m2);
	var b2Abs = Math.abs(b2);
	var x2Ans = m1 * m2;
	var xAns1 = m1 * b2
	var xAns2 = m2 * b1;
	var xAns = xAns1 + xAns2;
	var oneAns = b1 * b2;

	// refreshes input and answer fields
	document.getElementById("x-input-1").innerHTML = "";
	document.getElementById("one-input-1").innerHTML = "";
	document.getElementById("x-input-2").innerHTML = "";
	document.getElementById("one-input-2").innerHTML = "";
	document.getElementById("x2-answer").innerHTML = "";
	document.getElementById("x-answer").innerHTML = "";
	document.getElementById("one-answer").innerHTML = "";

	// creates input equation
	if (m1 != 0 && b1 != 0) {
		document.getElementById("x-input-1").innerHTML = "(";
	}
	if (m1 != 0) {
		document.getElementById("x-input-1").innerHTML += m1+"x";
	}
	if (b1 < 0) {
		document.getElementById("one-input-1").innerHTML = b1;
	} else if (m1 != 0 && b1 > 0) {
		document.getElementById("one-input-1").innerHTML = "+"+b1;
	} else if (b1 > 0) {
		document.getElementById("one-input-1").innerHTML = b1;
	}
	if (m1 != 0 && b1 != 0) {
		document.getElementById("one-input-1").innerHTML += ")";
	}

	if (m2 != 0 && b2 != 0) {
		document.getElementById("x-input-2").innerHTML = "(";
	}
	if (m2 != 0) {
		document.getElementById("x-input-2").innerHTML += m2+"x";
	}
	if (b2 < 0) {
		document.getElementById("one-input-2").innerHTML = b2;
	} else if (m2 != 0 && b2 > 0) {
		document.getElementById("one-input-2").innerHTML = "+"+b2;
	} else if (b2 > 0) {
		document.getElementById("one-input-2").innerHTML = b2;
	}
	if (m2 != 0 && b2 != 0) {
		document.getElementById("one-input-2").innerHTML += ")";
	}


	// creates labels
	if (m1 != 0) {
		$("#m1-label").html(`${m1}x`);
	} else {
		$("#m1-label").html(``);
	}
	$("#b1-label").html(`${b1}`);
	if (m2 != 0) {
		$("#m2-label").html(`${m2}x`);
	} else {
		$("#m2-label").html(``);
	}
	$("#b2-label").html(`${b2}`);

	// sets dimensions of boxes
	$('#m2-label').css({
		'width':`${m2Abs * scale}px`
	})
	$('#b2-label').css({
		'width':`${b2Abs * 0.3 * scale}px`
	})
	$('#box-one').css({
		'width':`${m2Abs * scale}px`,
		'height':`${m1Abs * scale}px`
	})
	$('#box-two').css({
		'width':`${b2Abs * 0.3 * scale}px`,
		'height':`${m1Abs * scale}px`
	})
	$('#box-three').css({
		'width':`${m2Abs * scale}px`,
		'height':`${b1Abs * 0.3 * scale}px`
	})
	$('#box-four').css({
		'width':`${b2Abs * 0.3 * scale}px`,
		'height':`${b1Abs * 0.3 * scale}px`
	})
	if (m2 == 0) {
		$('#m2-label').css({
			'width':'30px'
		})
		$('#box-one').css({
			'width':'30px'
		})
		$('#box-three').css({
			'width':'30px'
		})
		$('div#box-one div.sim-row').css({
			'background':'#FFFFFF' // neutral box one
		})
		$('div#box-three div.sim-row').css({
			'background':'white' // neutral box three
		})
	}

	// creates boxes
	addBoxes("box-one", m1Abs, m2Abs, "<span>x<sup>2</sup></span>");
	addBoxes("box-two", m1Abs, b2Abs, "x");
	addBoxes("box-three", b1Abs, m2Abs, "x");
	addBoxes("box-four", b1Abs, b2Abs, "1");

	// styles boxes
	if (x2Ans > 0) {
		$('div#box-one div.sim-row').css({
			'background':'#FF9B92' // positive box one
		})
	} else if (x2Ans < 0) {
		$('div#box-one div.sim-row').css({
			'background':'#FF5149' // negative box one
		})
	}
	if (xAns1 > 0) {
		$('div#box-two div.sim-row').css({
			'background':'#8ACCFF' // positive box two
		})
	} else if (xAns1 < 0) {
		$('div#box-two div.sim-row').css({
			'background':'#3189CC' // negative box two
		})
	}
	if (xAns2 > 0) {
		$('div#box-three div.sim-row').css({
			'background':'#8ACCFF' // positive box three
		})
	} else if (xAns2 < 0) {
		$('div#box-three div.sim-row').css({
			'background':'#3189CC' // negative box three
		})
	}
	if (oneAns > 0) {
		$('div#box-four div.sim-row').css({
			'background':'#F1FFAB' // positive box four
		})
	} else if (oneAns < 0) {
		$('div#box-four div.sim-row').css({
			'background':'#E0D051' // negative box four
		})
	}

	// creates answer
	if (x2Ans != 0) {
		document.getElementById("x2-answer").innerHTML = x2Ans + "x<sup>2</sup>";
	}
	if (x2Ans != 0 && xAns > 0) {
		document.getElementById("x-answer").innerHTML = "+" + xAns + "x";
	} else if (xAns != 0) {
		document.getElementById("x-answer").innerHTML = xAns + "x";
	} 
	if (oneAns > 0) {
		document.getElementById("one-answer").innerHTML = "+" + oneAns;
	} else if (oneAns < 0) {
		document.getElementById("one-answer").innerHTML = oneAns;
	}
}

// checks if input is valid on click
$(".input").each(function() {
	$(this).on('input', function() {
		m1 = document.getElementById("m1").value;
		b1 = document.getElementById("b1").value;
		m2 = document.getElementById("m2").value;
		b2 = document.getElementById("b2").value;

		if (m1 > -11 && m1 < 11 && b1 > -11 && b1 < 11 && m2 > -11 && m2 < 11 && b2 > -11 && b2 < 11 ) {
			document.getElementById("validator").innerHTML = ""
			compute();
		} else {
			document.getElementById("validator").innerHTML = "Enter values between -10 and 10."
		}
	});
})
compute()