const add = function(x, y){
    return x + y;
}

const subtract = function(x, y){
    return x - y;
}

const divide = function(x, y){
    return x / y;
}

const multiply = function(x, y){
    return x * y;
}

const operate = function(operator, x, y){
    switch (operator){
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '/':
            return divide(x, y);
        case 'x': 
            return multiply(x, y);
    }
}