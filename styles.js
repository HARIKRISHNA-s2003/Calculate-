function calculate(operation) {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(a) || isNaN(b)) {
        result = "Please enter both numbers";
    } else {
        if (operation === 'add') {
            result = a + b;
        } else if (operation === 'subtract') {
            result = a - b;
        } else if (operation === 'multiply') {
            result = a * b;
        } else if (operation === 'divide') {
            result = (b !== 0) ? a / b : "Cannot divide by zero";
        }
    }

    document.getElementById("result").innerText = result;
}
