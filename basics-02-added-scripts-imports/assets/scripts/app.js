const defaultResult = 0;
let currentResult = defaultResult;


function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);

//currentResult = add(5, 5);
//let calculationDescription = `(${defaultResult} + 10) * 3 /2 - 1`;

