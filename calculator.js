function add() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result = n1 + n2;
  document.getElementById("result").innerText = "Result: " + result;
}

function subtract() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result = n1 - n2;
  document.getElementById("result").innerText = "Result: " + result;
}

function multiply() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result = n1 * n2;
  document.getElementById("result").innerText = "Result: " + result;
}

function divide() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  if (n2 === 0) {
    document.getElementById("result").innerText = "Result: Cannot divide by zero";
  } else {
    let result = n1 / n2;
    document.getElementById("result").innerText = "Result: " + result;
  }
}
