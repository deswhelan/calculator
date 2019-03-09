//Create array to store calculator inputs
var clickedButtons = [];
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
    temporaryValue = [];
    display(0);
}

//convert clickedButtons array into an "equation" array
function equationBuilder () {
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
    return calculationValuesArray;
}

//Calculation time!!
function performCalculation() {
    var equation = equationBuilder();
    var runningTotal = equation[0];
    console.log(equation);

    for (var i = 2; i < equation.length; i++) {
        var symbol = equation[i-1];
        if (!isNaN(equation[i])) {
            if(symbol == "+") {
                runningTotal += equation[i];
            }
            if(symbol == "-") {
                runningTotal -= equation[i];
            }
            if(symbol == "*") {
                runningTotal *= equation[i];
            } 
            if(symbol == "/") {
                runningTotal /= equation[i];
            }
            
        }
    }
    display(runningTotal);
}

//show current number, symbol or answer on calculator screen
function display(displayValue) {
    document.getElementById("display").innerHTML = displayValue;
}