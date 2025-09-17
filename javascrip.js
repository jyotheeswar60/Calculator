// get the display input
const display = document.forms['calc'].display;

// add character to display
function appendChar(char) {
    display.value += char;
}

// clear all
function clearDisplay() {
    display.value = "";
}

// delete last character
function deleteChar() {
    display.value = display.value.toString().slice(0, -1);
}

// calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
