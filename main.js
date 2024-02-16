let firstNum, operator, lastNum;

let operate = function(operator,firstNum,lastNum){
    return operator(firstNum,lastNum)
}

let add = function(firstNum,lastNum){
    return firstNum + lastNum
}

let subtract = function(firstNum,lastNum){
    return firstNum-lastNum
}

let multiply = function(firstNum,lastNum){
    return firstNum*lastNum
}

let divide = function(firstNum,lastNum){
    return firstNum/lastNum
}
