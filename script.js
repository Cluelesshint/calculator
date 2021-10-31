let DISPLAYVALUE = 0;
let OPERATION = '';
let LASTOP = true;

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
    if (content.textContent == 0){
        content.textContent = '';
        content.textContent += number;
    }else{
        content.textContent += number;
    }
    DISPLAYVALUE = content.textContent;
}

const takeNumber = function(ID){
    switch (ID){
        case 'zero':
            displayValue('0');
            LASTOP = true;
            break;
        case 'one':
            displayValue('1');
            LASTOP = true;
            break;
        case 'two':
            displayValue('2');
            LASTOP = true;
            break;
        case 'three':
            displayValue('3');
            LASTOP = true;
            break;
        case 'four':
            displayValue('4');
            LASTOP = true;
            break;
        case 'five':
            displayValue('5');
            LASTOP = true;
            break;
        case 'six':
            displayValue('6');
            LASTOP = true;
            break;
        case 'seven':
            displayValue('7');
            LASTOP = true;
            break;
        case 'eight':
            displayValue('8');
            LASTOP = true;
            break;
        case 'nine':
            displayValue('9');
            LASTOP = true;
            break;
    }
}

const clearDisplayContent = function(num){
    if (num){
        const content = document.querySelector('.output');
        content.textContent = '';
        DISPLAYVALUE = 0;
    }else{
        const content = document.querySelector('.output');
        content.textContent = 0;
        DISPLAYVALUE = 0;
    }
}

const addToOperation = function(ID){
    OPERATION += DISPLAYVALUE + ' ';
    if (ID != '=' && LASTOP === true){
        OPERATION += ID + ' ';
    } 
}

const completeClear = function(ID){
    if (ID === 'clear'){
        const content = document.querySelector('.output');
        DISPLAYVALUE = 0;
        OPERATION = [];
        LASTOP = true;
        content.textContent = DISPLAYVALUE;
    }
}

const checkOperator = function(ID){
    switch (ID){
        case '+':
            addToOperation(ID);
            clearDisplayContent(1);
            LASTOP = false;
            break;
        case '-':
            addToOperation(ID);
            clearDisplayContent(1);
            LASTOP = false;
            break;
        case 'x':
            addToOperation(ID);
            clearDisplayContent(1);
            LASTOP = false;
            break;
        case '/':
            addToOperation(ID);
            clearDisplayContent(1);
            LASTOP = false;
            break;
        case '=':
            addToOperation(ID);
            displayOperation();
            clearDisplayContent();
            break;

    }
}

const displayOperation = function(){
    console.log(OPERATION);
}

const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click', () =>{
            ID = button.id;
            takeNumber(ID);
            checkOperator(ID);
            completeClear(ID);
        })
    })
