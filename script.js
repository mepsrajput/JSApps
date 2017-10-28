
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
	
		$('.group').hide();
		$('#square').show();
		$('#selectMe').change(function () {
			$('.group').hide();
			$('#'+$(this).val()).show();
		})

});// jquery ends here


//#1 Quadrilateral			
function calculateQuad1() {
	var ql1 = document.getElementById('quadLength1').value
	, qb1 = document.getElementById('quadBreadth1').value;

	var perimeter = ( 2 * ( parseInt(ql1) + parseInt(qb1) ) ).toFixed(2);

	var area = (ql1 * qb1).toFixed(2);
	
	if(isNaN(ql1) || isNaN(qb1)){
		document.getElementById('quadData1').innerHTML = "Please  enter numbers only";
		return;
	} else if ( ql1 <= 0 || qb1 <=0 ){
		document.getElementById('quadData1').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('quadData1').innerHTML = "Area: " + area	+ "<br />Perimeter: " + perimeter; 
	}
}
function calculateQuad() {
	var rl = document.getElementById('rectLength').value
	, rb = document.getElementById('rectBreadth').value;

	var perimeter = ( 2 * ( parseInt(rl) + parseInt(rb) ) ).toFixed(2);

	var area = (rl * rb).toFixed(2);
	
	if(isNaN(rl) || isNaN(rb)){
		document.getElementById('quadData').innerHTML = "Please  enter numbers only";
		return;
	} else if ( rl <= 0 || rb <=0 ){
		document.getElementById('quadData').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('quadData').innerHTML = "Area: " + area	+ "<br />Perimeter: " + perimeter; 
	}
}
function calculateQuad2() {
	var ql2 = document.getElementById('quadLength2').value

	var area = ( Math.pow(ql2,2) ).toFixed(2);

	var perimeter = ( 4 * ql2 ).toFixed(2);
	
	if(isNaN(ql2)){
		document.getElementById('quadData2').innerHTML = "Please  enter numbers only";
		return;
	} else if ( ql2 <= 0 ){
		document.getElementById('quadData2').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('quadData2').innerHTML = "Area: " + area	+ "<br />Perimeter: " + perimeter; 
	}
}
function calculateQuad3() {
	var ql3 = document.getElementById('quadLength3').value
	, rs = document.getElementById('rhombSide').value;

	var perimeter = ( 4 * rs ).toFixed(2);

	var area = ( ( ql3 * rs ) / 2 ).toFixed(2);
	
	if(isNaN(ql3) || isNaN(rs)){
		document.getElementById('quadData3').innerHTML = "Please  enter numbers only";
		return;
	} else if ( ql3 <= 0 || rs <=0 ){
		document.getElementById('quadData3').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('quadData3').innerHTML = "Area: " + area	+ "<br />Perimeter: " + perimeter; 
	}
}
function calculateQuad4() {
	var base1 = document.getElementById('base1').value
	, base2 = document.getElementById('base2').value
	, tp = document.getElementById('trapPerpendicular').value
	, ts3 = document.getElementById('trapSide3').value
	, ts4 = document.getElementById('trapSide4').value;

	var area = (  tp * ( (base1) + (base2) ) / 2 ).toFixed(2);
	
	var perimeter = ( parseInt(base1) + parseInt(base2) + parseInt(ts3) + parseInt(ts4) * 1 ).toFixed(2); 
	
	if(isNaN(base1) || isNaN(base2) || isNaN(ts3) || isNaN(ts4) || isNaN(tp)){
		document.getElementById('quadData4').innerHTML = "Please  enter numbers only";
		return;
	} else if ( base1 <= 0 || base2 <=0 || tp <=0 || ts3 <=0 || ts4 <=0 ){
		document.getElementById('quadData4').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('quadData4').innerHTML = "Area: " + area	+ "<br />Perimeter: " + perimeter; 
	}
}
function calculateQuad5() {
	var ks1 = document.getElementById('kiteSide1').value
	, ks2 = document.getElementById('kiteSide2').value;

	var area = (( ks1 * ks2 ) / 2 ).toFixed(2);

	var perimeter = ( 2 * ( parseInt(ks1) + parseInt(ks2) ) ).toFixed(2);
	
	if(isNaN(ks1) || isNaN(ks2)){
		document.getElementById('quadData5').innerHTML = "Please  enter numbers only";
		return;
	} else if ( ks1 <= 0 || ks2 <=0 ){
		document.getElementById('quadData5').innerHTML = "Negative numbers and Zero don't make sense";
		return;
    } else {
		document.getElementById('quadData5').innerHTML = "Area: " + area	+ "<br />Perimeter: " + perimeter; 
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