// Simple Web Calculator

let num1 = prompt("Enter the first number:");
num1 = Number(num1); 


let operator = prompt("Enter operation: +, -, *, or /");


let num2 = prompt("Enter the second number:");
num2 = Number(num2); 


let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "Error! Cannot divide by zero.";
  }
} else {
  result = "Invalid operator!";
}


alert(`Result: ${result}`);
