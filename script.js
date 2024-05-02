function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num2").value);
    console.log(num1)

    var result;

    switch (operation) {
        case 'add':
            if (!isNaN(num3)) {
                result = num1 + num2 + num3;
            } else {
                result = num1 + num2;
            }

            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            if (!isNaN(num3)) {
                result = num1 * num2 * num3;
            } else {
                result = num1 * num2;
            }

        case 'divide':
            if (num2 === 0) {
                document.getElementById("result").innerHTML = "Division par zéro impossible";
                return;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            break;
    }

    document.getElementById("result").innerHTML = "Résultat : " + result;
}
