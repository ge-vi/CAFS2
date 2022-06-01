// noinspection SpellCheckingInspection

"use strict";

/*
Parašykite funkciją (arrow function), pavadintą getHighestNumber(), kuri turi vieną parametrą, kuris žymi visus galimus
įvesti skaičius. Funkcijos tikslas yra leisti vartotojui, kaip argumentus nurodyti bet kokius skaičius ir grąžinama bus
didžiausias skaičius iš visų nurodytų.

Patarimas: gali prireikti (...args) kaip parametro!

Iškvietus: console.log(getHighestNumber(34,7,8,55,6,7,9,52,56);
Rezultatas: "56" – didžiausias skaičius

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
*/


const getHighestNumber = (...nums) => {
  let maxNum = 0;

  for (const num of nums) {
    if (maxNum < num) {
      maxNum = num;
    }
  }

  return maxNum;
}

// test
console.assert(getHighestNumber(34, 7, 8, 55, 6, 7, 9, 52, 56) === 56);

console.log("--------- eof");
