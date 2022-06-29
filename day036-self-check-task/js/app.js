"use strict";

/*
first
*/
document.getElementById("js-hello-btn").addEventListener("click", () => {
  alert('Hello World!');
});

/*
second
*/
const htmlJsWordCase = document.getElementById("js-word-case");
htmlJsWordCase?.addEventListener("click", evt => {
  const htmlInput = htmlJsWordCase.getElementsByTagName("input").item(0);
  switch (evt.target.id) {
    case "tup":
      htmlInput.value = toUpperCase(htmlInput.value);
      break;
    case "tlc":
      htmlInput.value = toLowerCase(htmlInput.value);
      break;
    case "fuc":
      htmlInput.value = firstUpperCase(htmlInput.value);
      break;
    case "flc":
      htmlInput.value = firstLowerCase(htmlInput.value);
      break;
  }
});

function toUpperCase(str) {
  return str.toUpperCase();
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function firstUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstLowerCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/*
third
*/

/*
fourth
*/
const htmlJsBlock = document.getElementById("js-block");
const htmlBtnBlock = htmlJsBlock?.children.namedItem("btn-block");
const htmlBtnUnBlock = htmlJsBlock?.children.namedItem("btn-unblock");
const htmlInputBlc = htmlJsBlock?.children.namedItem("inpt-blc");

htmlJsBlock.addEventListener("click", evt => {
  if (evt.target === htmlBtnBlock) {
    htmlInputBlc.setAttribute("disabled", "");
  } else if (evt.target === htmlBtnUnBlock) {
    htmlInputBlc.removeAttribute("disabled");
  }
});

/*
fifth
*/

/*
sixth
*/
