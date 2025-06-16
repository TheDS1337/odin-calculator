const add       = (a, b)    => a + b;
const subtract  = (a, b)    => a - b;
const multiply  = (a, b)    => a * b;
const divide    = (a, b)    => a / b;

const operate = function (op, a, b)
{
    switch( op ) {
        case '+':
            return add(a, b);

        case '-':
            return subtract(a, b);

        case 'x':
            return multiply(a, b);

        case '/':
            return divide(a, b);
    }
}

const operationEntity = function (op) {
    switch( op ) {
        case '+':
            return '&plus;';

        case '-':
            return '&minus;';

        case 'x':
            return '&times;';

        case '/':
            return '&divide;';
    }
}

const input = {
    a: '0',
    b: '0',
    op: ''
};

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

let lastPressedButton = '';

for( const number of numbers ) {
    number.addEventListener("click", (event) => {
        let button = event.target.id;

        if( button === 'dot' )
            button = '.';
        else if( button === 'equal' )
            button = '=';
        
        if( input.op === '' ) {
            if( button === '=' ) {
                input.op = '';
                display.textContent = '=' + input.a;
            } else {
                if( button !== '.' && input.a === '0' ) 
                    input.a = button;
                else 
                    input.a += button;

                display.textContent = input.a;
            }
        } else {
            if( button === '=' ) {
                if( lastPressedButton === input.op )
                    input.b = input.a;

                if( input.op === '/' && parseFloat(input.b) === 0.0 )
                    display.textContent = 'NaN';
                else {
                    input.a = operate(input.op, parseFloat(input.a), parseFloat(input.b)).toString();
                    input.b = '0';
                    input.op = '';

                    display.textContent = '=' + input.a;
                }
            } else {
                if( button !== '.' && input.b === '0' ) 
                    input.b = button;
                else 
                    input.b += button;

                display.textContent += input.b;
            }
        }

        // Let's not display more than we can
        if( display.textContent.length > 16 )
            display.textContent = display.textContent.slice(0, 16);

        lastPressedButton = button;
    });
}

for( const operator of operations ) {
    operator.addEventListener("click", (event) => {
        lastPressedButton = input.op = event.target.id;
        display.innerHTML += operationEntity(input.op);

        // Let's not display more than we can
        if( display.textContent.length > 16 )
            display.textContent = display.textContent.slice(0, 16);
    });
}