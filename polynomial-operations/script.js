var scale = 100;

function addBoxes(box, rows, columns, label) {
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

// $('#compute').click(function() {
$(".input").each(function() {
	$(this).on('input', function() {
		console.log(this);
		var m1 = document.getElementById("m1").value
		var b1 = document.getElementById("b1").value
		var m2 = document.getElementById("m2").value
		var b2 = document.getElementById("b2").value

		$("#m1-label").html(`${m1}x`);
		$("#b1-label").html(`${b1}`);
		$("#m2-label").html(`${m2}x`);
		$("#b2-label").html(`${b2}`);

		addBoxes("box-one", m1, m2, "<span>x<sup>2</sup></span>");
		addBoxes("box-two", m1, b2, "x");
		addBoxes("box-three", b1, m2, "x");
		addBoxes("box-four", b1, b2, "1");

		$('#m2-label').css({
			'width':`${m2 * scale}px`
		})

		$('#b2-label').css({
			'width':`${b2 * 0.3 * scale}px`
		})

		$('#box-one').css({
			'width':`${m2 * scale}px`,
			'height':`${m1 * scale}px`
		})

		$('#box-two').css({
			'width':`${b2 * 0.3 * scale}px`,
			'height':`${m1 * scale}px`
		})

		$('#box-three').css({
			'width':`${m2 * scale}px`,
			'height':`${b1 * 0.3 * scale}px`
		})

		$('#box-four').css({
			'width':`${b2 * 0.3 * scale}px`,
			'height':`${b1 * 0.3 * scale}px`
		})
	});
})
