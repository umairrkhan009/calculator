let add = function (firstNum, lastNum) {
    return parseFloat(firstNum) + parseFloat(lastNum)
}

let subtract = function (firstNum, lastNum) {
    return parseFloat(firstNum) - parseFloat(lastNum)
}

let multiply = function (firstNum, lastNum) {
    return parseFloat(firstNum) * parseFloat(lastNum)
}

let divide = function (firstNum, lastNum) {
    return parseFloat(firstNum) / parseFloat(lastNum)
}

let operate = function (operator, firstNum, lastNum) {
    switch (operator) {
        case "+":
            return add(firstNum, lastNum)
            break;

        case "-":
            return subtract(firstNum, lastNum)
            break;
        case "*":
            return multiply(firstNum, lastNum)
            break;
        case "/":
            return divide(firstNum, lastNum)
            break;
        default:
            break
    }
}


let operator = '';
let firstNum = '';
let lastNum = '';
let result = '';
let opCount = 0
let opPressed = false
let decimalPressed = false

const numbers = document.querySelectorAll('#num')
const operatations = document.querySelectorAll('#op')
const display = document.querySelector('.displayMain')
const decimalButton = document.querySelector('.decimal')
const del = document.querySelector('#del')
const displayUpper = document.querySelector('.displayUpper')




const roundResult = function (result, decimalPlaces = 8) {
    return parseFloat(result.toFixed(decimalPlaces))
}

const disableDecimal = function () {
    decimalButton.disabled = true
}

const enableDecimal = function () {
    decimalButton.disabled = false
}


const inputNumber = function (e) {
    let num = e.target.innerHTML
    if (num == '.') {
        decimalPressed = true
        disableDecimal()
    }
    if (opPressed == true) {
        display.innerHTML = ''
        opPressed = false
        decimalPressed = false
    }
    display.innerHTML += e.target.innerHTML
    console.log(display.innerHTML)
}

const allClear = function () {
    display.innerHTML = ''
    displayUpper.innerHTML = ''
    firstNum = ''
    lastNum = ''
    opCount = 0
    opPressed = false
    decimalPressed = false
    enableDecimal()
}

del.addEventListener('click', () => {
    let number = display.innerHTML
    display.innerHTML = number.slice(0, -1)
    let dotCheck = display.innerHTML
    if (dotCheck.indexOf('.') > -1) {
        console.log('yo')
    }
    else {
        enableDecimal()
    }
})


numbers.forEach((num) => {
    num.addEventListener('click', inputNumber)
})


operatations.forEach((op) => {
    op.addEventListener('click', (e) => {
        opCount++
        opPressed = true
        enableDecimal()
        let value = e.target.innerHTML
        if (value == '+' || value == '-' || value == '*' || value == '/') {
            if (opCount >= 2) {
                lastNum = parseFloat(display.innerHTML)
                displayUpper.innerHTML = firstNum + " " + operator + " " + lastNum
                firstNum = operate(operator, firstNum, lastNum)

            }
            operator = value
            if (opCount < 2) {
                firstNum = parseFloat(display.innerHTML)
                displayUpper.innerHTML = firstNum + " " + operator
            }
        }
        else if (value == '=') {
            lastNum = parseFloat(display.innerHTML)
            let result = operate(operator, firstNum, lastNum)
            display.innerHTML = roundResult(result)
            displayUpper.innerHTML = firstNum + " " + operator + " " + lastNum
            opCount = 0
            enableDecimal()
        }
        else if (value == 'AC') {
            allClear()
        }
    })
})
