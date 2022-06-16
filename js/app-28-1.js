"use strict";

const htmlMain = document.getElementById("main");

function createElement(parentEl, type, innerTxt) {
  const htmlElement = document.createElement(type);
  htmlElement.append(document.createTextNode(innerTxt));
  parentEl.append(htmlElement);
}

createElement(htmlMain, "h2", "Hello H2 tag");
createElement(htmlMain, "p", "I am created with createTextNode().");

const htmlUlElement = document.createElement("ul");
const htmlLiElement = document.createElement("li");
htmlLiElement.innerText = "Lorem ipsum dolor sit amet.";
htmlUlElement.append(htmlLiElement);
htmlMain.append(htmlUlElement);

createElement(htmlMain, "p", "I am created with createTextNode() again.");
