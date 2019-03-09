//Create array to store calculator inputs
var inputs = [];
var total = 0;

//Create a variable to store current button value
var temp = "";

 //Store values of clicked number or operator buttons to inputs array
 function storeClickedButton(buttonValue) {
    inputs.push(buttonValue);
    display(inputs);
}

//Re-initialise all variables when AC is clicked
function allClear() {
    inputs = [];
    total = 0;
    temp = "";
    display(0);
}

//show answer or current number on calculator screen
function display(displayValue) {
    document.getElementById("display").innerHTML = displayValue;
}