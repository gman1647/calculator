let initNumber = 0
let displayNumber = ''
let num1 = 0
let num2 = 0
let sign = ''

document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('mousedown', () => {
        number.style.backgroundColor = "var(--function-button-color)";
    });
    number.addEventListener('mouseup', () => {
        number.style.backgroundColor = "var(--number-button-color)";
    });
})

document.querySelectorAll('.clear').forEach(number => {
    number.addEventListener('mousedown', () => {
        number.style.backgroundColor = "var(--function-button-color)";
    });
    number.addEventListener('mouseup', () => {
        number.style.backgroundColor = "var(--clear-button-color)";
    });
})

document.querySelectorAll('.operator').forEach(number => {
    number.addEventListener('mousedown', () => {
        number.style.backgroundColor = "var(--clear-button-color)";
    });
    number.addEventListener('mouseup', () => {
        number.style.backgroundColor = "var(--function-button-color)";
    });
})

numberOne = document.getElementById('1');
numberOne.addEventListener('click', () => {
    updateDisplay(1);
});

numberTwo = document.getElementById('2');
numberTwo.addEventListener('click', () => {
    updateDisplay(2);
});

numberThree = document.getElementById('3');
numberThree.addEventListener('click', () => {
    updateDisplay(3);
});

numberFour = document.getElementById('4');
numberFour.addEventListener('click', () => {
    updateDisplay(4);
});

numberFive = document.getElementById('5');
numberFive.addEventListener('click', () => {
    updateDisplay(5);
});

numberSix = document.getElementById('6');
numberSix.addEventListener('click', () => {
    updateDisplay(6);
});

numberSeven = document.getElementById('7');
numberSeven.addEventListener('click', () => {
    updateDisplay(7);
});

numberEight = document.getElementById('8');
numberEight.addEventListener('click', () => {
    updateDisplay(8);
});

numberNine = document.getElementById('9');
numberNine.addEventListener('click', () => {
    updateDisplay(9);
});

numberZero = document.getElementById('0');
numberZero.addEventListener('click', () => {
    updateDisplay(0);
});

plusSign = document.getElementById('+');
plusSign.addEventListener('click', () => {
    checkSign()
    storeNum();
    sign = '+';
    return sign;
});



minusSign = document.getElementById('-');
minusSign.addEventListener('click', () => {
    checkSign();
    storeNum();
    sign = '-';
    return sign;
});

multiplySign = document.getElementById('x');
multiplySign.addEventListener('click', () => {
    checkSign();
    storeNum();
    sign = '*';
    return sign;
});

divideSign = document.getElementById('÷');
divideSign.addEventListener('click', () => {
    checkSign();
    storeNum();
    sign = '/';
    return sign;
});

equalSign = document.getElementById('=');
equalSign.addEventListener('click', () => {
    runOperation();
});
equalSign.addEventListener('mousedown', () => {
    equalSign.style.backgroundColor = "var(--function-button-color)";
});
equalSign.addEventListener('mouseup', () => {
    equalSign.style.backgroundColor = "var(--enter-button-color)";
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

//Checks to see if operator button was previously entered to update running total
function checkSign() {
    if (sign !== '') {
        runOperation();
    } else {
        console.log("no sign");
    }
};

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

function runOperation () {
    num2 = displayNumber
    displayNumber = ''
    return updateDisplay(operate(num1, num2, sign));
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
    return num1;
}

function clear () {
    num1 = '';
    displayNumber = 0
    sign = '';
    storeNum();
    display.textContent = initNumber;
}

