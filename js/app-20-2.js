// noinspection SpellCheckingInspection

"use strict";

let arr = ["a", "b", "c", "d"];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
console.log("for-in returns keys");
for (const index in arr) {
  console.log(index);
}
/*
0
1
2
3
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
console.log("for-of returns values");
for (const value of arr) {
  console.log(value);
}
/*
a
b
c
d
*/

console.log("--------------------------------");

/*
Parašykite funkciją, pavadintą getLaugh(), kuri turi vieną parametrą, skaičių, kuris žymi sugrįžtančių „ha“ skaičių.
Iškvietus: console.log(laugh(4));
Rezultatas: "hahahaha!"

P.S.
Padarykite po 1 variantą su kievienu ciklu. [WHILE, DO-WHILE, FOR]
*/

function getLaughWhile(timesToLaught) {
  // validate
  if (isNaN(timesToLaught) || timesToLaught <= 0) {
    return ":(";
  }
  // loop
  let result = "";
  while (timesToLaught) {
    result += "ha";
    timesToLaught--;
  }
  return result;
}

// test
console.log(getLaughWhile("zz"));
console.log(getLaughWhile(-2));
console.log(getLaughWhile(2));

function getLaughDoWhile(timesToLaught) {
  // validate
  if (isNaN(timesToLaught) || timesToLaught <= 0) {
    return ":(";
  }
  // loop
  let result = "";
  do {
    result += "ha";
    timesToLaught--;
  } while (timesToLaught)
  return result;
}

// test
console.log(getLaughDoWhile(3));

function getLaughFor(timesToLaught) {
  // validate
  if (isNaN(timesToLaught) || timesToLaught <= 0) {
    return ":(";
  }
  // loop
  let result = "";
  for (let i = timesToLaught; i > 0; i--) {
    result += "ha";
  }
  return result;
}

// test
console.log(getLaughFor(-4));

console.log("--------- eof");
