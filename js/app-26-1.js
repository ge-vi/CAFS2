// noinspection SpellCheckingInspection

"use strict";

/*
* Parašykite JavaScript kodą, kuris rodytu lango plotį ir aukštį H1 elemente
* (kiekvieną kartą kai keičiamas lango dydis skaičiai atsinaujina)
* */

const htmlH1Widht = document.getElementById("width");
const htmlH1Height = document.getElementById("height");

const displayDimensions = (width, height) => {
  if (width && height) {
    width.innerText = window.innerWidth;
    height.innerText = window.innerHeight;
  }
}

// as alternative can be used `DOMContentLoaded` event
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("load", evt => {
  displayDimensions(htmlH1Widht, htmlH1Height);
});

window.addEventListener("resize", evt => {
  displayDimensions(htmlH1Widht, htmlH1Height);
});
