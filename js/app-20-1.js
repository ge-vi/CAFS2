// noinspection SpellCheckingInspection

"use strict";

/*
Parašykite funkciją checkNumber, turinčią vieną parametrą, kuri:

Patikrins skaičius nuo 1 iki (begalybės - 1)
Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"

Iškvietus: console.log(checkNumber(15));
Rezultatas: "Skaičius dalijasi iš 3 ir iš 5".

*/

function checkNumber(num) {
  if (num <= 0 || !Number.isInteger(num)) {
    return "Ne tinkama reikšmė";
  } else if (!Boolean(num % 3) && !Boolean(num % 5)) {
    return "Skaičius dalijasi iš 3 ir iš 5";
  } else if (!Boolean(num % 3)) {
    return "Skaičius dalijasi iš 3"
  } else if (!Boolean(num % 5)) {
    return "Skaičius dalijasi iš 5"
  } else {
    return "Skaičius nesidalija nei iš 3 nei iš 5";
  }
}

console.assert(checkNumber("abc") === "Ne tinkama reikšmė");
console.assert(checkNumber(-10) === "Ne tinkama reikšmė");
console.assert(checkNumber(3) === "Skaičius dalijasi iš 3");
console.assert(checkNumber(5) === "Skaičius dalijasi iš 5");
console.assert(checkNumber(15) === "Skaičius dalijasi iš 3 ir iš 5");
console.assert(checkNumber(8) === "Skaičius nesidalija nei iš 3 nei iš 5");

console.log("--------- eof");
