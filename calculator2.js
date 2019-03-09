//Create array to store calculator inputs
var clickedButtons = [];
var total = 0;
var temporaryValue = [];

//Store and display values of clicked buttons to clickedButtons array
function storeClickedButton(buttonValue) {
    displayClickedButton(buttonValue);
    clickedButtons.push(buttonValue);
}

function displayClickedButton(buttonValue) {
    if(!isNaN(buttonValue) || buttonValue == "."){
        temporaryValue.push(buttonValue);
        display(temporaryValue.join(""))
    } else {
        display(buttonValue);
        temporaryValue = [];
    }
}

//Re-initialise all variables when AC is clicked
function allClear() {
    clickedButtons = [];
    total = 0;
    temporaryValue = [];
    display(0);
}

//convert clickedButtons into a new array
function makeCalculationValuesArray () {
    var calculationValuesArray = [];
    var numberBuilder = []
    for(var i = 0; i < clickedButtons.length+1; i++) {
        if(!isNaN(clickedButtons[i]) || clickedButtons[i] == ".") {
            numberBuilder.push(clickedButtons[i]);
        } else {
            calculationValuesArray.push(parseFloat(numberBuilder.join("")));
            calculationValuesArray.push(clickedButtons[i]);
            numberBuilder = [];
        }
    }
    calculationValuesArray.pop();
    console.log(calculationValuesArray);
}

//Calculation time!!
function performCalculation() {
    makeCalculationValuesArray();
//     var currentNumber = 0;
//     for(var i = 0; i < clickedButtons.length; i++) {
//         if(!isNaN(clickedButtons[i]) || clickedButtons[i] == ".") {

//         }
//     }

//     display("answer");
//     console.log(temporaryValue);
}

//show current number, symbol or answer on calculator screen
function display(displayValue) {
    document.getElementById("display").innerHTML = displayValue;
}