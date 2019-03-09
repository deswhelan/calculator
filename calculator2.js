//Create array to store calculator inputs
var clickedButtons = [];
var temporaryValue = [];
var decimalPointCounter = 0;
var storedAnswer = 0;

//Store and display values of clicked buttons to clickedButtons array
function storeClickedButton(buttonValue) {
    if(decimalPointChecker(buttonValue) == false){
        return
    };
    displayClickedButton(buttonValue);
    clickedButtons.push(buttonValue);
}

//Two decimals in one number should not be accepted
function decimalPointChecker(buttonValue) {
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
        console.log("last clicked button: " + temporaryValue);
        display(parseFloat(temporaryValue.join("")))
    } else {
        console.log("last clicked button: " + buttonValue)
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

//convert clickedButtons array into an "equation" array
function equationBuilder () {
    var equation = [];
    var numberBuilder = [];
    for(var i = 0; i < clickedButtons.length+1; i++) {
        if(!isNaN(clickedButtons[i]) || clickedButtons[i] == ".") {
            numberBuilder.push(clickedButtons[i]);
        } else {
            equation.push(parseFloat(numberBuilder.join("")));
            equation.push(clickedButtons[i]);
            numberBuilder = [];
        }
    }
    equation.pop();
    console.log("Equation: " + equation);
    return equation;
}

//Calculation time!!
function performCalculation() {
    var equation = equationBuilder();

    if (isNaN(equation[0])) {
        equation.unshift(storedAnswer)
    }
    var runningTotal = equation[0];

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
    storedAnswer = runningTotal;
    display(runningTotal);
    allClear();
}

//show current number, symbol or answer on calculator screen
function display(displayValue) {
    document.getElementById("display").innerHTML = displayValue;
}