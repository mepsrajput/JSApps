
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


//#1 Quadrilateral			
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
		document.getElementById('data').innerHTML = "Area: " + area	+ "<br />Perimeter: " + perimeter; 
	}
}


//#2 Triangle
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
		document.getElementById('data2').innerHTML = "Area: " + area2 + "<br />Perimeter: " + peri; 
	}
}

//#3 Circle
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
		document.getElementById('data3').innerHTML = "Area: " + circlAarea + "<br />Perimeter: " + circlePeri; 
	}
}


//#4 Sphere
function calculateSphere() {
	var sr = document.getElementById('sphereRadius').value;

	var sphereArea = (4 * Math.PI * sr * sr).toFixed(2);
	
	var sphereVol = ((4 * Math.PI * sr * sr * sr) / 3).toFixed(2);
	
	if(isNaN(sr)){
		document.getElementById('data4').innerHTML = "Please  enter numbers only";
		return;
	} else if ( sr <=0 ){
		document.getElementById('data4').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data4').innerHTML = "Surface Area: " + sphereArea + "<br />Sphere Volume: " + sphereVol; 
	}
}




//#5 Cone
function calculateCone() {
	var cor = document.getElementById('coneRadius').value;
	var coh = document.getElementById('coneHeight').value;

	var col = Math.sqrt( Math.pow(cor,2)  + Math.pow(coh,2) );
	
	var coneArea = ((Math.PI * cor) * ( cor + col )).toFixed(2);
	
	var coneVol = (( Math.PI * cor * cor * coh ) / 3).toFixed(2);
	
	if(isNaN(cor) || isNaN(coh)){
		document.getElementById('data5').innerHTML = "Please  enter numbers only";
		return;
	} else if (cor <= 0 || coh <= 0){
		document.getElementById('data5').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data5').innerHTML = "Surface Area: " + coneArea + "<br /> Volume: " + coneVol; 
	}

}


//#6 Cuboid
function calculateCuboid() {
	var cl = document.getElementById('cuboidLength').value;
	var cb = document.getElementById('cuboidBreadth').value;
	var ch = document.getElementById('cuboidHeight').value;
	
	var cuboidArea = (2 * ( (cl * cb) + (cb * ch) + (ch * cl ) ) ).toFixed(2);
	
	var cuboidVol = ( cl * cb * ch ).toFixed(2);
	
	if(isNaN(cl) || isNaN(cb) || isNaN(ch)){
		document.getElementById('data6').innerHTML = "Please  enter numbers only";
		return;
	} else if (cl <= 0 || cb <= 0 || ch <= 0){
		document.getElementById('data6').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data6').innerHTML = "Surface Area: " + cuboidArea + "<br /> Volume: " + cuboidVol; 
	}

}

//#7 Cylinder
function calculateCylinder() {
	var cyh = document.getElementById('cylHeight').value;
	var cyr = document.getElementById('cylRadius').value;

	
	var cylArea = ( 2 * Math.PI * cyr * ( cyr + cyh ) ).toFixed(2);
	
	var cylVol = ( Math.PI * cyr * cyr * cyh ).toFixed(2);
	
	if(isNaN(cyr) || isNaN(cyh)){
		document.getElementById('data7').innerHTML = "Please  enter numbers only";
		return;
	} else if (cyr <= 0 || cyh <= 0){
		document.getElementById('data7').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('data7').innerHTML = "Surface Area: " + cylArea + "<br /> Volume: " + cylVol; 
	}

}