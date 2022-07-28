"use strict";

let input = document.getElementById("exampleInput");
let output = document.getElementById("exampleOutput");

document
  .querySelector("form button")
  .addEventListener("click", (evt) => {
    evt.preventDefault();
    output.value = input.value;
  });
