"use strict";

/* elements */
const calcDisplay = document.getElementById("js-calc-display");
const calcClearBtn = document.getElementById("js-calc-clear");
const calcResultBtn = document.getElementById("js-calc-result");

const calcNumbersBtn = document.querySelectorAll(".js-calc-numbers button");
const calcActionsBtn = document.querySelectorAll(".js-calc-actions button");

/* calculator memory */
let firstOperand;
let secondOperand;
let calcOperation;
let calcOpInProgress;
let calculatedResult;


const initCalculator = () => {

  clearCalculator();

  calcClearBtn.addEventListener("click", clearCalculator);

  /* bind numbers clicks */
  for (const calcNum of calcNumbersBtn) {
    calcNum.addEventListener("click", handleNumberInput);
  }

  /* bind to calc. actions */
  for (const calcAction of calcActionsBtn) {
    calcAction.addEventListener("click", handleOperationInput);
  }

  /* calculate result */
  calcResultBtn.addEventListener("click", handleCalculation);
}

const clearMemory = () => {
  firstOperand = "";
  secondOperand = "";
  calcOperation = "";
  calculatedResult = "";
};

const clearDisplay = () => {
  if (calcDisplay.tagName === "INPUT") {
    calcDisplay.value = "";
  }
};

const updateDisplay = () => {
  calcDisplay.value = `${firstOperand} ${calcOperation} ${secondOperand}`;
}

const clearCalculator = () => {
  clearMemory();
  clearDisplay();
}

const handleNumberInput = (evt) => {
  if (!calcOpInProgress) {
    firstOperand += Number(evt.target.value);
    updateDisplay();
  } else {
    secondOperand += Number(evt.target.value);
    updateDisplay();
  }
}

const handleOperationInput = (evt) => {
  if (firstOperand) {
    calcOperation = String(evt.target.value);
    updateDisplay();
    calcOpInProgress = true;
  }
}

const handleCalculation = () => {
  if (firstOperand && secondOperand && calcOperation) {
    calculatedResult = calculateValue(+firstOperand, +secondOperand, calcOperation);
    calcDisplay.value = Number(calculatedResult).toFixed(2);

    clearMemory();
    calcOpInProgress = false;
  }
}

window.addEventListener("load", evt => {
  initCalculator();
});
