// global variables
var scale = document.getElementById("model").offsetWidth/13;

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
	var m1 = document.getElementById("m1").value;
	var b1 = document.getElementById("b1").value;
	var m2 = document.getElementById("m2").value;
	var b2 = document.getElementById("b2").value;
	var m1Abs = Math.abs(m1);
	var b1Abs = Math.abs(b1);
	var m2Abs = Math.abs(m2);
	var b2Abs = Math.abs(b2);
	var x2Ans = m1 * m2;
	var xAns1 = m1 * b2
	var xAns2 = m2 * b1;
	var oneAns = b1 * b2;

	// creates labels
	$("#m1-label").html(`${m1}x`);
	$("#b1-label").html(`${b1}`);
	$("#m2-label").html(`${m2}x`);
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

	// creates answer count
	document.getElementById("x2-answer").innerHTML = x2Ans;
	document.getElementById("x-answer").innerHTML = xAns1 + xAns2;
	document.getElementById("one-answer").innerHTML = oneAns;
}

// checks if input is valid on click
$(".input").each(function() {
	$(this).on('input', function() {
		var input = this.value
		if (this.value > -11 && this.value < 11) {
			document.getElementById("validator").innerHTML = ""
			compute();
		} else {
			document.getElementById("validator").innerHTML = "Enter a value between 1 and 10."
		}
	});
})