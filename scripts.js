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

document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return;
        }
        if (event.key === "1") {
            updateNumber(1);
        } else if (event.key === "2") {
            updateNumber(2);
        } else if (event.key === "3") {
            updateNumber(3);
        } else if (event.key === "4") {
            updateNumber(4);
        } else if (event.key === "5") {
            updateNumber(5);
        } else if (event.key === "6") {
            updateNumber(6);
        } else if (event.key === "7") {
            updateNumber(7);
        } else if (event.key === "8") {
            updateNumber(8);
        } else if (event.key === "9") {
            updateNumber(9);
        } else if (event.key === "0") {
            updateNumber(0);
        } else if (event.key === "+") {
            plusSignPressed ();
        } else if (event.key === "-") {
            minusSignPressed ();
        } else if (event.key === "/") {
            divSignPressed ();
        } else if (event.key === "*") {
            multSignPressed ();
        } else if (event.key === "Enter") {
            runOperation ();
        } else if (event.key === "Escape") {
            clear();
        } else if (event.key === "Backspace") {
            deleteLast(displayNumber);
        }
});

numberOne = document.getElementById('1');
numberOne.addEventListener('click', () => {
    updateNumber(1);
});

numberTwo = document.getElementById('2');
numberTwo.addEventListener('click', () => {
    updateNumber(2);
});

numberThree = document.getElementById('3');
numberThree.addEventListener('click', () => {
    updateNumber(3);
});

numberFour = document.getElementById('4');
numberFour.addEventListener('click', () => {
    updateNumber(4);
});

numberFive = document.getElementById('5');
numberFive.addEventListener('click', () => {
    updateNumber(5);
});

numberSix = document.getElementById('6');
numberSix.addEventListener('click', () => {
    updateNumber(6);
});

numberSeven = document.getElementById('7');
numberSeven.addEventListener('click', () => {
    updateNumber(7);
});

numberEight = document.getElementById('8');
numberEight.addEventListener('click', () => {
    updateNumber(8);
});

numberNine = document.getElementById('9');
numberNine.addEventListener('click', () => {
    updateNumber(9);
});

numberZero = document.getElementById('0');
numberZero.addEventListener('click', () => {
    updateNumber(0);
});

plusSign = document.getElementById('+');
plusSign.addEventListener('click', () => {
    plusSignPressed ()
});

minusSign = document.getElementById('-');
minusSign.addEventListener('click', () => {
    minusSignPressed()
});

multiplySign = document.getElementById('x');
multiplySign.addEventListener('click', () => {
    multSignPressed()
});

divideSign = document.getElementById('÷');
divideSign.addEventListener('click', () => {
    divSignPressed()
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

deleteButton = document.getElementById('del');
deleteButton.addEventListener('click', () => {
    deleteLast(displayNumber);
});

function plusSignPressed () {
    if (displayNumber === "") {
        sign = '+';
        return sign;
    } else {
    checkSign();
    storeNum();
    sign = '+';
    return sign;
    }
}

function minusSignPressed () {
    if (displayNumber === "") {
        sign = '-';
        return sign;
    } else {
    checkSign();
    storeNum();
    sign = '-';
    return sign;
    }
}

function multSignPressed () {
    if (displayNumber === "") {
        sign = '*';
        return sign;
    } else {
    checkSign();
    storeNum();
    sign = '*';
    return sign;
    }
}

function divSignPressed () {
    if (displayNumber === "") {
        sign = '/';
        return sign;
    } else {
    checkSign();
    storeNum();
    sign = '/';
    return sign;
    }
}
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
    return updateNumber(operate(num1, num2, sign));
}

//Adds the diplay for user input
let display = document.createElement('div');
display.setAttribute("class", "display");
display.setAttribute('id', 'display');
calculator.insertBefore(display, row1);
display.textContent = initNumber;

function updateNumber (num) {
    checkLength(displayNumber);
    console.log("this is from update number: " + displayNumber)
    displayNumber = displayNumber.toString() + num;
    return updateDisplay(displayNumber);
}

//updates display
function updateDisplay (){
    checkLength(displayNumber);
    remove = document.getElementById('display');
    calculator.removeChild(remove);
    display = document.createElement('div');
    display.setAttribute("class", "display");
    display.setAttribute('id', 'display');
    calculator.insertBefore(display, row1);
    display.textContent = displayNumber;
    if (displayNumber.startsWith("Error")) {
       return displayNumber;
    } else {
    displayNumber = parseFloat(displayNumber);
    return displayNumber;
};
}

function storeNum () {
    num1 = displayNumber;
    displayNumber = '';
    return num1;
}

function clear () {
    num1 = '';
    displayNumber = 0
    sign = '';
    storeNum();
    display.textContent = initNumber;
    tooLong= document.getElementById('errorMessage');
    document.body.removeChild(tooLong);
}

function deleteLast (num) {
    num = num.toString();
    num = num.slice(0, -1);
    display.textContent = num;
    displayNumber = num;
    return displayNumber;
}

function checkLength (string) {
    string = string.toString();
    if (string.startsWith("Error")) {
        console.log("too long")
        displayNumber="Error";
        return displayNumber;    
    } else if (string.length > 13) {
        tooLong = document.createElement('div');
        tooLong.setAttribute('id', 'errorMessage')
        document.body.appendChild(tooLong);
        tooLong.textContent = 'Error: maximum output is 13 digts.'
        displayNumber = 'Error'
        updateDisplay();
    } else {
        console.log("all good")
    }
}


