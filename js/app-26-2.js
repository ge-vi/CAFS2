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

/* helper */
const DEBUG = false;


const initCalculator = () => {

  clearCalculator();

  calcClearBtn.addEventListener("click", clearCalculator);

  /* bind numbers clicks */
  for (const calcNum of calcNumbersBtn) {
    calcNum.addEventListener("click", handleNumberInput);
  }

  /* bind to calc. actions */
  for (const calcAction of calcActionsBtn) {
    calcAction.addEventListener("click", handleOperatorInput);
  }

  /* calculate result */
  calcResultBtn.addEventListener("click", handleCalculation);
}


const clearMemory = () => {
  firstOperand = "";
  secondOperand = "";
  calcOperation = "";
  calcOpInProgress = false;
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
  if (!secondOperand && !calcOpInProgress) {
    firstOperand += evt.target.value;
    updateDisplay();
  } else {
    secondOperand += evt.target.value;
    updateDisplay();
  }
}

const handleOperatorInput = (evt) => {
  if (calculatedResult) {
    firstOperand = calculatedResult;
    secondOperand = "";
  }
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
  }
}

window.addEventListener("DOMContentLoaded", evt => {
  initCalculator();
});

if (DEBUG) {
  window.addEventListener("click", () => {
    console.log("firstOperand", firstOperand);
    console.log("secondOperand", secondOperand);
    console.log("calcOperation", calcOperation);
    console.log("calcOpInProgress", calcOpInProgress);
    console.log("calculatedResult", calculatedResult);
    console.log("---");
  });
}
