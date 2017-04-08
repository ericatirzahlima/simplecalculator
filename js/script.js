var number1;
var number2;

document.getElementById("number1").value;
document.getElementById("number2").value;

function Addition() {
	alert(parseInt(document.getElementById("number1").value) + parseInt(document.getElementById("number2").value));
}
function Subtraction(){
	alert(parseInt(document.getElementById("number1").value) - parseInt(document.getElementById("number2").value));
}
function Multiplication(){
	alert(parseInt(document.getElementById("number1").value) * parseInt(document.getElementById("number2").value));
}
function Division(){
	alert(parseInt(document.getElementById("number1").value) / parseInt(document.getElementById("number2").value));
}