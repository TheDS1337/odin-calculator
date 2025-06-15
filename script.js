const add       = (a, b)    => a + b;
const subtract  = (a, b)    => a - b;
const multiply  = (a, b)    => a * b;
const divide    = (a, b)    => a / b;

const operate = function (op, a, b)
{
    switch( op ) {
        case '+':
            add(a, b);
            break;

        case '-':
            subtract(a, b);
            break;

        case 'x':
            multiply(a, b);
            break;

        case '/':
            divide(a, b);
            break;
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

for( const number of numbers ) {
    number.addEventListener("click", (event) => {
        const button = event.target.id;

        button === 'dot' ? '.' : button;
        button === 'equal' ? '=' : button;

        if( input.op === '' ) {
            if( button !== '=' ) {
                if( button !== '.' && input.a === '0' ) 
                    input.a = button;
                else 
                    input.a += button;
            }

            display.textContent = input.a;
        } else {
            if( button === '=' ) {
                if( input.op === '/' && parseFloat(input.a) === 0.0 )
                    display.textContent = 'UNDEFINED';
                else {
                    const aToFloat = parseFloat(input.a);
                    display.textContent += operate(input.op, aToFloat, aToFloat);
                }
            } else {
                if( button !== '.' && input.b === '0' ) 
                    input.b = button;
                else 
                    input.b += button;

                display.textContent += input.b;
            }
        }
    });
}

for( const operator of operations ) {
    operator.addEventListener("click", (event) => {
        input.op = event.target.id;
        display.innerHTML += operationEntity(input.op);
    });
}