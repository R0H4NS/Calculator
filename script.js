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

function deletes() {
    var screen = document.getElementById("screen")
    if(screen.value.length > 0)
    {
        screen.value = screen.value.substring(0, screen.value.length-1);
    }
}