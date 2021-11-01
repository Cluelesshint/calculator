let DISPLAYVALUE = null
let FIRST = null
let LAST = null
let FIRSTOP = null
let LASTOP = null;
let FLAG = 0;
let FLAGTWO = 0;
let SWITCH = 0;
let SWITCH2 = 0;

const add = function(x, y){
    return +x + +y;
}

const subtract = function(x, y){
    return +x - +y;
}

const divide = function(x, y){
    return +x / +y;
}

const multiply = function(x, y){
    return +x * +y;
}

const operate = function(operator, x, y){
    switch (operator){
        case '+':
            FLAGTWO = 1;
            FLAG = 0;
            return add(x, y);
        case '-':
            FLAGTWO = 1;
            FLAG = 0;
            return subtract(x, y);
        case '/':
            FLAGTWO = 1;
            FLAG = 0;
            return divide(x, y);
        case 'x': 
            FLAGTWO = 1;
            FLAG = 0;
            return multiply(x, y);
    }
}

const displayValue = function(number){
    const content = document.querySelector('.output');
    if (content.textContent === 0 || content.textContent === '0'){
        content.textContent = '';
        content.textContent = number;
    }
    else if (FIRSTOP !== null && FIRST !== null){
        if (FLAG === 1){
            content.textContent += number;
        }
        else if (FLAGTWO === 1){
            content.textContent = '';
            content.textContent = number;
            FLAGTWO = 0;
        }
        else if (SWITCH2 === 1){
            LAST = number;
            solve();
        }
        else if(FLAG === 0 && LAST === null){
            content.textContent = '';
            content.textContent = number;
            FLAG = 1;
        }else{
            FIRST = DISPLAYVALUE;
            LAST = number;
            let temp = LASTOP;
            LASTOP = FIRSTOP;
            FIRSTOP = temp;
            SWITCH = 1;
            solve();
        }
        DISPLAYVALUE = content.textContent;
    }
    else{
        content.textContent += number;
    }
    DISPLAYVALUE = content.textContent;
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

const getOperator = function(ID){
    switch (ID){
        case 'x':
            getFirstLast('x');
            solve();
            break;
        case '-':
            getFirstLast('-');
            solve();
            break;
        case '/':
            getFirstLast('/');
            solve();
            break;
        case '+':
            getFirstLast('+');
            solve();
            break;
    }
}

const solve = function(){
    if (LASTOP === null || LAST === null) return;
    else{
        displayValue(operate(LASTOP, FIRST, LAST));
    }
}

const getFirstLast = function(operator, flag){
    if (SWITCH === 0){
        if (FIRST === null){
            FIRST = DISPLAYVALUE;
        }else{
            LAST = FIRST;
            FIRST = DISPLAYVALUE;
        }
        if (FIRSTOP === null){
            FIRSTOP = operator;
        }else{
            LASTOP = FIRSTOP;
            FIRSTOP = operator;
        }
    }
    else if (SWITCH === 1){
        if (FIRST === null){
            FIRST = DISPLAYVALUE;
        }else{
            LAST = null;
            FIRST = DISPLAYVALUE;
        }
        if (FIRSTOP === null){
            FIRSTOP = operator;
        }else{
            FIRSTOP = LASTOP;
            LASTOP = operator;
        }
        SWITCH2 = 1;
    }
}

const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click', () =>{
            ID = button.id;
            getNumber(ID);
            getOperator(ID);
        })
    })
