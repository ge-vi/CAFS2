"use strict";

const calcDisplay = document.getElementById("js-calc-display");
const calcClearBtn = document.getElementById("js-calc-clear");
const calcResultBtn = document.getElementById("js-calc-result");

const calcNumbersBtn = document.querySelectorAll(".js-calc-numbers button");
const calcActionsBtn = document.querySelectorAll(".js-calc-actions button");

let firstOperand;
let secondOperand;
let calcOperation;
let calculatedResult;


const initCalculator = () => {

  clearCalculator();

  calcClearBtn.addEventListener("click", evt => {
    clearCalculator();
  });

  /* bind numbers clicks */
  for (const calcNum of calcNumbersBtn) {

    calcNum.addEventListener("click", evt => {
      console.log("num:", evt.target.value);

      if (calcOperation) {
        secondOperand += Number(evt.target.value);
        updateDisplay(secondOperand);
      } else {
        firstOperand += Number(evt.target.value);
        updateDisplay(firstOperand);
      }
    });
  }

  /* bind to calc. actions */
  for (const calcAction of calcActionsBtn) {
    calcAction.addEventListener("click", evt => {
      console.log("action:", evt.target.value);

      calcOperation = String(evt.target.value);
      updateDisplay(calcOperation);
    });
  }

  /* calculate result */
  calcResultBtn.addEventListener("click", evt => {
    if (firstOperand && secondOperand && calcOperation) {
      calculatedResult = calculateValue(firstOperand, secondOperand, calcOperation);
      calcDisplay.value = Number(calculatedResult).toFixed(2);
      clearMemory();
    }
  });
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

const updateDisplay = (valToAdd) => {
  calcDisplay.value += valToAdd;
}

const clearCalculator = () => {
  clearMemory();
  clearDisplay();
}

window.addEventListener("load", evt => {
  initCalculator();
});
