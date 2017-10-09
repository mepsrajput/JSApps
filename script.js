function calculate() {
	var a = document.getElementById('side1').value
	, b = document.getElementById('side2').value;

	var p = (a * 2 ) + (b * 2);

	var area = (a * b)
	
	if(isNaN(a) || isNaN(b)){
		document.getElementById('data').innerHTML = "Please  enter numbers only";
		return;
	} else if ( a <= 0 || b <=0 ){
		document.getElementById('data').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data').innerHTML = "Area: " + area + " " 
		+ "Perimeter: " + p; 
	}
}
		

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
	           

});		
			
			