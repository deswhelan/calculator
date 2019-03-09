//Create array to store calculator inputs
var clickedButtons = [];
var total = 0;

//Create a variable to store current button value
var temporaryValue = [];

//Store values of clicked buttons to clickedButtons array
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

//convert individual inputs to appropriate display values
// function convertToDisplay() {
//     var displayValue = clickedButtons.reduce((a,c) => a + c);
//     var sliceCounter = 0;

//     clickedButtons.forEach(function (element) {
//         if(!isNaN(element)){
//             sliceCounter++
//         } else {
//             console.log(sliceCounter);
//             return;
//         }
//     });

//     display(temporaryValue);
// }

function defineDisplayValue() {
    var sliceCounter = 0;

    clickedButtons.forEach(function (element) {
        if(!isNaN(element)){
            sliceCounter++
        } else {
            console.log(sliceCounter);
            return;
        }
    });

    var displayValue = "";

    return displayValue;
}

//show current number, symbol or answer on calculator screen
function display(displayValue) {
    document.getElementById("display").innerHTML = displayValue;
}