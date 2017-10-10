
// jquery starts here
$(document).ready(function () {

	$('.goTop').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

	function scrollNav() {
		$('.nav a').click(function(){  
			//Animate
			$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top
			}, 800);
		return false;
	});
	$('.scrollTop a').scrollTop();
	}
	scrollNav();

    $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
	});
});// jquery ends here

			
function calculateQuad() {
	var l = document.getElementById('length').value
	, b = document.getElementById('breadth').value;

	var perimeter = ((l * 2 ) + (b * 2)).toFixed(2);

	var area = (l * b).toFixed(2);
	
	if(isNaN(l) || isNaN(b)){
		document.getElementById('data').innerHTML = "Please  enter numbers only";
		return;
	} else if ( l <= 0 || b <=0 ){
		document.getElementById('data').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data').innerHTML = "Area: " + area + " " 
		+ "Perimeter: " + perimeter; 
	}
}



function calculateTri() {
	var s1 = document.getElementById('side1').value, 
		s2 = document.getElementById('side2').value, 
		s3 = document.getElementById('side3').value;

	var peri = ((s1 * 1) + (s2 * 1) + (s3 * 1)).toFixed(2);
	
	var p  = peri / 2;

	var area2 = (Math.sqrt(p * (p - s1) * (p - s2) * (p - s3))).toFixed(2);
	
	if(isNaN(s1) || isNaN(s2)|| isNaN(s3)){
		document.getElementById('data2').innerHTML = "Please  enter numbers only";
		return;
	} else if ( s1 <= 0 || s2 <=0 || s3 <=0){
		document.getElementById('data2').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data2').innerHTML = "Area: " + area2 + " " + "Perimeter: " + peri; 
	}
}

function calculateCircle() {
	var r = document.getElementById('radius').value;

	var circlePeri = (2 * Math.PI * r).toFixed(2);
	
	var circlAarea = (Math.PI * r * r).toFixed(2);
	
	if(isNaN(r)){
		document.getElementById('data3').innerHTML = "Please  enter numbers only";
		return;
	} else if (r <= 0){
		document.getElementById('data3').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data3').innerHTML = "Area: " + circlAarea + " " + "Perimeter: " + circlePeri; 
	}
}
