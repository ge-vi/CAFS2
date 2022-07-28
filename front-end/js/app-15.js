"use strict"

const input1 = parseInt(prompt("enter first number"));
const input2 = parseInt(prompt("enter second number"));

if (isNaN(input1) || isNaN(input2)) {
  alert("next time input two numbers");
} else {
  alert(`Result is: ${input1 + input2}`);
}
