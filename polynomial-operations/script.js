var scale = 100;

$('#compute').click(function() {
	var m1 = document.getElementById("m1").value
	var b1 = document.getElementById("b1").value
	var m2 = document.getElementById("m2").value
	var b2 = document.getElementById("b2").value
	// console.log(m1 + " " + b1 + " " + m2 + " " + b2) 

	$("#m1-label").html(`${m1}x`);
	$("#b1-label").html(`${b1}`);
	$("#m2-label").html(`${m2}x`);
	$("#b2-label").html(`${b2}`);

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
})