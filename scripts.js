let initNumber = 0
let displayNumber = ''

numberOne = document.getElementById('1');
numberOne.addEventListener('click', () => {
    updateDisplay(1);
});

numberOne = document.getElementById('2');
numberOne.addEventListener('click', () => {
    updateDisplay(2);
});

numberOne = document.getElementById('3');
numberOne.addEventListener('click', () => {
    updateDisplay(3);
});

numberOne = document.getElementById('4');
numberOne.addEventListener('click', () => {
    updateDisplay(4);
});

numberOne = document.getElementById('5');
numberOne.addEventListener('click', () => {
    updateDisplay(5);
});

numberOne = document.getElementById('6');
numberOne.addEventListener('click', () => {
    updateDisplay(6);
});

numberOne = document.getElementById('7');
numberOne.addEventListener('click', () => {
    updateDisplay(7);
});

numberOne = document.getElementById('8');
numberOne.addEventListener('click', () => {
    updateDisplay(8);
});

numberOne = document.getElementById('9');
numberOne.addEventListener('click', () => {
    updateDisplay(9);
});

numberOne = document.getElementById('0');
numberOne.addEventListener('click', () => {
    updateDisplay(0);
});

//Adds two numbers
function add (num1, num2) {
    total = num1 + num2;
    return total;
}

//Subtracts two numbers
function subtract (num1, num2) {
    total = num1 - num2;
    return total;
}

//Multiplies two numbers
function multiply (num1, num2) {
    total = num1 * num2;
    return total;
}
//Divides two numbers
function divide (num1, num2) {
    total = num1 / num2;
    return total;
}

//Performs an arthimatic operatoin
function operate (num1, num2, sign) {
    if (sign == "+") {
        return add(num1, num2);
    } else if (sign == "-") {
        return subtract(num1, num2);
    } else if (sign  == "*") {
        return multiply(num1, num2);
    } else if (sign == "/") {
        return divide(num1, num2);
    } else {
        console.log("no input");
    }
}

//Adds the diplay for user input
let display = document.createElement('div');
display.setAttribute("class", "display");
display.setAttribute('id', 'display');
calculator.insertBefore(display, row1);
display.textContent = initNumber;

//updates display as numbers are clicked
function updateDisplay (num){
    displayNumber = displayNumber.toString() + num;
    remove = document.getElementById('display');
    calculator.removeChild(remove);
    display = document.createElement('div');
    display.setAttribute("class", "display");
    display.setAttribute('id', 'display');
    calculator.insertBefore(display, row1);
    display.textContent = displayNumber;
}