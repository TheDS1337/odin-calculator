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