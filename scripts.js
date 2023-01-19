let initNumber = 0
let displayNumber = ''
let num1 = 0
let num2 = 0
let sign = ''

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

plusSign = document.getElementById('+');
plusSign.addEventListener('click', () => {
    storeNum();
    sign = '+';
    return sign;
});

minusSign = document.getElementById('-');
minusSign.addEventListener('click', () => {
    storeNum();
    sign = '-';
    return sign;
});

multiplySign = document.getElementById('x');
multiplySign.addEventListener('click', () => {
    storeNum();
    sign = '*';
    return sign;
});

divideSign = document.getElementById('÷');
divideSign.addEventListener('click', () => {
    storeNum();
    sign = '/';
    return sign;
});

equalSign = document.getElementById('=');
equalSign.addEventListener('click', () => {
    num2 = displayNumber
    displayNumber = ''
    return updateDisplay(operate(num1, num2, sign));
});

clearButton = document.getElementById('C');
clearButton.addEventListener('click', () => {
    clear();
})

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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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
    displayNumber = parseFloat(displayNumber);
    return displayNumber;
}

function storeNum () {
    num1 = displayNumber;
    displayNumber = '';
    console.log(num1);
    console.log(displayNumber);
    return num1;
}

function clear () {
    num1 = '';
    displayNumber = 0
    storeNum();
    display.textContent = initNumber;
}