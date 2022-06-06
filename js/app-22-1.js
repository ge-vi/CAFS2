// noinspection SpellCheckingInspection

"use strict";

/*
* Sukurkite funkciją`getMaxSubSum(arr)`,
* kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.
* */

let arr = [11, -2, 34, 45, 19, 6];

function getMaxSubSum(arr) {
  let sumResult = 0;
  for (const arrElement of arr) {
    if (arrElement > 0) {
      sumResult += arrElement;
    }
  }
  return sumResult;
}

console.log(getMaxSubSum(arr));
console.assert(getMaxSubSum(arr) === 115);
