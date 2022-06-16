"use strict";

const htmlMain = document.getElementById("main");

function createAndAppendElement(parentEl, type, innerTxt) {
  const htmlElement = document.createElement(type);
  htmlElement.append(document.createTextNode(innerTxt));
  parentEl.append(htmlElement);
  return htmlElement;
}

createAndAppendElement(htmlMain, "h2", "Hello H2 tag");
createAndAppendElement(htmlMain, "p", "I am created with createTextNode().");

const htmlUlElement = document.createElement("ul");
const htmlLiElement = document.createElement("li");
htmlLiElement.innerText = "Lorem ipsum dolor sit amet.";
htmlUlElement.append(htmlLiElement);
htmlMain.append(htmlUlElement);

createAndAppendElement(htmlMain, "p", "I am created with createTextNode() again.");
