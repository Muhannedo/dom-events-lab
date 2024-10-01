/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let firstNumber = "";
let currentOperator = "";
let secondNumber = "";

/*------------------------ Cached Element References ------------------------*/
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonClicked = event.target;

    if (buttonClicked.classList.contains("number")) {
      addNumber(buttonClicked.innerText);
    } else if (buttonClicked.classList.contains("operator")) {
      if (buttonClicked.innerText === "C") {
        resetCalculator();
      } else {
        setOperator(buttonClicked.innerText);
      }
    } else if (buttonClicked.classList.contains("equals")) {
      calculateResult();
    }
  });
});
/*-------------------------------- Functions --------------------------------*/
function addNumber(number) {
  firstNumber += number;
  updateDisplay(firstNumber);
}
// check if the user clicks C or another operator
function setOperator(operator) {
  if (firstNumber === "") return;
  if (secondNumber) calculateResult();
  currentOperator = operator;
  secondNumber = firstNumber;
  firstNumber = "";
}
// check if there is any number to do the operation how the calculater will operate
function calculateResult() {
  if (secondNumber === "" || firstNumber === "") return;
  let result;

  const num1 = +secondNumber;
  const num2 = +firstNumber;
  if (currentOperator === "+") {
    result = num1 + num2;
  } else if (currentOperator === "-") {
    result = num1 - num2;
  } else if (currentOperator === "*") {
    result = num1 * num2;
  } else if (currentOperator === "/") {
    result = num1 / num2;
  }

  firstNumber = result;
  currentOperator = "";
  secondNumber = "";
  updateDisplay(firstNumber);
}
// reseting the calculater if the user clicks C
function resetCalculator() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  updateDisplay("");
  // updateDisplay("0");
}

function updateDisplay(value) {
  display.innerText = value;
}
// making the display of the calculater 0 at the first beginning
// updateDisplay("0");
updateDisplay("");
