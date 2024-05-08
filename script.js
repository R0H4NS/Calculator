function clearScreen() {
    document.getElementById("screen").value = "";
}

function display(value) {
    document.getElementById("screen").value += value;
}

function calculate() {
    var p = document.getElementById("screen").value;
    var q = eval(p);
    document.getElementById("screen").value = q;
}