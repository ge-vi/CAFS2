"use strict";

/*
Parašykitė funkcijas (tiek paprasta funkcija, tiek arrow) kuri suskaičioja skaičiaus dalių suma panaudojant rekursiją.
  sumOfDigits(4321) => 4+3+2+1
  sumOfDigitsArrow(4321) => 4+3+2+1
*/

/*

possible another approach

let nums = 123;

let lastNum = nums % 10;
console.log(lastNum); // 3

let remainder = Math.floor(nums / 10);
console.log(remainder); // 12
*/


function sumOfDigits(nums) {
  let stringArr = String(nums).split("");
  if (stringArr.length === 0) {
    return 0;
  }
  return Number(stringArr.shift()) + sumOfDigits(Array.from(stringArr, Number).join(""));
}

console.log(sumOfDigits(123)); // 6


const sumOfDigitsArrow = nums => {
  if (!Array.isArray(nums)) {
    nums = String(nums).split("");
  }
  if (nums.length === 0) {
    return 0;
  }
  return Number(nums.shift()) + sumOfDigitsArrow(nums);
}

console.log(sumOfDigitsArrow(345)); // 12

console.log("--------- eof");
