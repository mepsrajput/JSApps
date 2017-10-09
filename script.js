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
			
			
			