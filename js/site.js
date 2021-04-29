jQuery(function($){
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
});

function validateForm() {
	var a = document.forms["ESPORTS"]["FullName"].value;
	var b = document.forms[""][""].value;
	var c = document.forms[""][""].value;
	var d = document.forms[""][""].value;
	if ((a == "") || (b == "")|| (c == "") || (d == "")){
		alert("Please fill in all sections.");
	}
	else{
		alert("...!");
	}
}