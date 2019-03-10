var clickedButtons = [];
var temporaryValue = [];
var decimalPointCounter = 0;
var storedAnswer = 0;
var numberBuilder = [];

//Store and display values of clicked buttons to clickedButtons array
function storeClickedButton(buttonValue) {
    if(decimalPointValidator(buttonValue) == false){
        return
    };
    displayClickedButton(buttonValue);
    clickedButtons.push(buttonValue);
}

//Two decimals in one number should not be accepted
function decimalPointValidator(buttonValue) {
    if(buttonValue == ".") {
        decimalPointCounter++;
    }
    if(buttonValue == "." && decimalPointCounter > 1) {
        return false;
    }
}

function displayClickedButton(buttonValue) {
    if(!isNaN(buttonValue) || buttonValue == "."){
        temporaryValue.push(buttonValue);
        display(parseFloat(temporaryValue.join("")))
    } else {
        display(buttonValue);
        temporaryValue = [];
        decimalPointCounter = 0;
    }
}

//Re-initialise all variables when AC is clicked
function allClear() {
    clickedButtons = [];
    temporaryValue = [];
    decimalPointCounter = 0;
}

function allClearButton() {
    allClear();
    display(0);
}

//Build "equation" array using clickedButtons array data.
//do this by converting individual number elements into the actual number required for the calculation
//e.g. [1,2,+,3,4] becomes [12,+,34]
function equationBuilder () {
    var equation = [];
    for(var i = 0; i < clickedButtons.length+1; i++) {
        if(!isNaN(clickedButtons[i]) || clickedButtons[i] == ".") {
            numberBuilder.push(clickedButtons[i]);
        } else {
            equation.push(parseFloat(numberBuilder.join("")), clickedButtons[i]);
            numberBuilder = [];
        }
    }
    equation.pop();
    return equation;
}

//Calculation time!!
function performCalculation() {
    var equation = equationBuilder();
    newCalculationChecker(equation);
    var runningTotal = equation[0];
    runningTotal = doTheMaths(equation, runningTotal);
    storedAnswer = runningTotal;
    display(storedAnswer);
    allClear();
}

//check if we are using the answer from the last calculation, or starting a new calculation
function newCalculationChecker (equation) {
    if (isNaN(equation[0])) {
        equation.unshift(storedAnswer)
    }
}

function doTheMaths (equation, runningTotal) {
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
    return runningTotal;
}

//show current number, symbol or answer on calculator screen
function display(displayValue) {
    document.getElementById("display").innerHTML = displayValue;
}