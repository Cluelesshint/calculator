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

const displayValue = function(number){
    const content = document.querySelector('.output');
    console.log(content.textContent);
    if (content.textContent == 0){
        content.textContent = '';
        content.textContent = number;
    }else{
        content.textContent += number;
    }
}

const getNumber = function(ID){
    switch (ID){
        case 'zero':
            displayValue(0);
            break;
        case 'one':
            displayValue(1);
            break;
        case 'two':
            displayValue(2);
            break;
        case 'three':
            displayValue(3);
            break;
        case 'four':
            displayValue(4);
            break;
        case 'five':
            displayValue(5);
            break;
        case 'six':
            displayValue(6);
            break;
        case 'seven':
            displayValue(7);
            break;
        case 'eight':
            displayValue(8);
            break;
        case 'nine':
            displayValue(9);
            break;
    }
}

const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click', () =>{
            ID = button.id;
            getNumber(ID);
        })
    })
