alert('Vamos operar com dois valores.')

let numberOne = prompt('Insira o primeiro número.');
let numberTwo = prompt('Insira o segundo número.');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let operator = prompt('Escolha a operação. (Digite apenas os símbolos: + - / * %)');
let result = null;

switch (operator) {
    case '+':
        result = numberOne + numberTwo;
        break;

    case '-':
        result = numberOne - numberTwo;
        break;

    case '*':
        result = numberOne * numberTwo;
        break;
    
    case '/':
        result = numberOne / numberTwo;
        break;

    case '%':
        result = numberOne % numberTwo;
        break;

    default:
        alert('Operador inválido.');
        break;

};

alert(`O resultado da operação é ${result}.`);