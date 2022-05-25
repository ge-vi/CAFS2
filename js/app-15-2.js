"use strict"

const randomNumbers = [];

function generateRandomFloat() {
  return parseFloat((Math.random() * 10).toFixed(2));
}

for (let i = 0; i < 5; i++) {
  randomNumbers.push(generateRandomFloat());
}
console.log("random numbers:", randomNumbers);
console.log("max num:", Math.max(...randomNumbers));
console.log("min num:", Math.min(...randomNumbers));
