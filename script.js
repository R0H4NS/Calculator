function display(value) {
    var screen = document.getElementById("screen");
    screen.value += value;
    screen.scrollLeft = screen.scrollWidth;
}


function clearScreen() {
    var screen = document.getElementById("screen");
    screen.value = "";
    screen.scrollLeft = 0;
}


function calculate() {
    var expression = document.getElementById("screen").value;
    var result = eval(expression);
    document.getElementById("screen").value = result;
    addToHistory(expression, result);
}


function deletes() {
    var screen = document.getElementById("screen");
    if (screen.value.length > 0) {
        screen.value = screen.value.substring(0, screen.value.length - 1);
    }
}


var calculationHistory = JSON.parse(localStorage.getItem('calculationHistory')) || [];


function addToHistory(expression, result) {
    calculationHistory.push({ expression: expression, result: result });
    localStorage.setItem('calculationHistory', JSON.stringify(calculationHistory));
}


var currentHistoryIndex = -1;
function displayHistory() {
    var screen = document.getElementById('screen');


    if (currentHistoryIndex === -1) {
        if (calculationHistory.length > 0) {
            currentHistoryIndex = calculationHistory.length - 1;
            screen.value = calculationHistory[currentHistoryIndex].expression + " = " + calculationHistory[currentHistoryIndex].result;
        } else {
            screen.value = 'No history available';
        }
    } else if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        screen.value = calculationHistory[currentHistoryIndex].expression + " = " + calculationHistory[currentHistoryIndex].result;
    } else {
        screen.value = 'Beginning of history';
    }
}