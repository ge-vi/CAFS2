"use strict";

const calcDisplay = document.getElementById("calc-display");
const calcClearBtn = document.getElementById("calc-clear");
const calcResultBtn = document.getElementById("calc-result");

const calcNumbersBtn = document.querySelectorAll(".calc-numbers button");

const clearInput = function (inputElement) {
  if (inputElement.tagName === "INPUT") {
    inputElement.value = 0
  }
}

calcClearBtn.addEventListener("click", evt => {
  clearInput(calcDisplay);
});

for (const calcNum of calcNumbersBtn) {
  console.dir(calcNum);
  calcNum.addEventListener("click", evt => {
    console.dir(evt.target.value);
  });
}
