"use strict";

function plusPlus(num1, num2) {
  // fail fast
  if (isNaN(num1) && isNaN(num2)) {
    return 0;
  }

  while(num2) {
    num1++;
    num2--;
  }

  return num1;
}

function plusPlusRecursive(num1, num2) {
  if(num2 === 0) {
    return num1;
  }
  num1++;
  return plusPlusRecursive(num1, num2 - 1);
}
