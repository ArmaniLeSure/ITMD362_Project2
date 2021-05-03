jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

form.onsubmit = submit;

function validateForm() {
    var a = document.forms["CONTACT"]["FName"].value;
    var b = document.forms["CONTACT"]["LName"].value;
    var c = document.forms["CONTACT"]["Email"].value;
    var d = document.forms["CONTACT"]["Reason"].value;
    if ((a == "") || (b == "") || (c == "")) {
        alert("Please fill in all sections.");
    } else {
        alert("Welcome to...!");
    }
}