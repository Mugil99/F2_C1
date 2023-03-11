function calculate() {
  // Get the input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  // Calculate the result
  var result = calculateResult(num1, num2, operator);

  // Display the result
  if (result === null) {
    document.getElementById("result").value = "Please enter a valid operator.";
  } else if (isNaN(result)) {
    document.getElementById("result").value = "Please enter valid numbers.";
  } else {
    document.getElementById("result").value = result;
  }
}

function calculateResult(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return null;
  }
}