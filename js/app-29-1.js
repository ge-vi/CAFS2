"use strict";

// top nav
const htmlTopNav = document.getElementById("top-nav");

const htmlMenuBtn = htmlTopNav?.querySelector("button");
const htmlMenuList = htmlTopNav?.querySelector("ul");

htmlMenuBtn?.addEventListener("click", evt => {
  htmlMenuList?.classList.toggle("display-none");
});


// slides

const htmlSlider = document.getElementById("slider");
const htmlSliderImg = htmlSlider?.querySelector("img");

function swapImage(elem) {
  elem.src = "https://picsum.photos/400/300.webp?random=1";
}

// real time clock
const htmlHours = document.getElementById("hours");
const htmlMinutes = document.getElementById("minutes");
const htmlSeconds = document.getElementById("seconds");

function updateTimer() {
  let today = new Date();
  htmlHours.textContent = today.getHours().toString().padStart(2, "0");
  htmlMinutes.textContent = today.getMinutes().toString().padStart(2, "0");
  htmlSeconds.textContent = today.getSeconds().toString().padStart(2, "0");
}

window.addEventListener("DOMContentLoaded", evt => {
  // start timer
  updateTimer();
  // updating timer
  setInterval(updateTimer, 500);

  // updating slides
  setInterval(() => {
    swapImage(htmlSliderImg);
  }, 2000);

});


// form
const htmlFormMsg = document.querySelector("#form-with-message .status-message");

document.forms["reg-form"].addEventListener("submit", evt => {

  const errors = [];

  if (!evt.target.elements["name"].value) {
    errors.push("no name: please enter name");
  }
  if (!evt.target.elements["email"].value) {
    errors.push("no emai: please enter email");
  }

  if (errors.length) {
    htmlFormMsg.textContent = `some errors found. ${errors.toString()}`;
    htmlFormMsg.classList.toggle("display-none");
    evt.preventDefault();
  }
});
