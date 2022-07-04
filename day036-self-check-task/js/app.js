"use strict";

/*
first
alert
*/
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("js-hello-btn")?.addEventListener("click", () => {
    alert('Hello World!');
  });

});

/*
second
manipulate string
*/
window.addEventListener("DOMContentLoaded", function () {
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
    return str.trim().toUpperCase();
  }

  function toLowerCase(str) {
    return str.trim().toLowerCase();
  }

  function firstUpperCase(str) {
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function firstLowerCase(str) {
    str = str.trim();
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
});

/*
third
validate input
*/
window.addEventListener("DOMContentLoaded", function () {
  const htmlForm1 = document.forms["js-form-1"];
  htmlForm1.addEventListener("submit", evt => {
    // https://getbootstrap.com/docs/5.0/forms/validation/#custom-styles
    if (!htmlForm1.checkValidity()) {
      evt.preventDefault()
      evt.stopPropagation()
    }

    htmlForm1.classList.add("was-validated")
  }, false);
});

/*
fourth
block unblock input
*/
window.addEventListener("DOMContentLoaded", function () {
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
});

/*
fifth
change image
*/
window.addEventListener("DOMContentLoaded", function () {
  const htmlImageMonkey = document.querySelector('img[alt="monkey"]');
  htmlImageMonkey.addEventListener("mouseover", () => {
    setElementSrc(htmlImageMonkey, "img/PLDVxza.jpg");
  });
  htmlImageMonkey.addEventListener("mouseleave", () => {
    setElementSrc(htmlImageMonkey, "img/0DElr0H.jpg");
  });

  function setElementSrc(el, newSrc) {
    el.setAttribute("src", newSrc);
  }
});

/*
sixth
manipulate dom
*/
window.addEventListener("DOMContentLoaded", function () {
  const htmlBlockToStyle = document.getElementById("js-styled-block");
  let htmlFigure = htmlBlockToStyle?.querySelector("#blockquote-fig");
  const htmlFigureClone = htmlFigure.cloneNode(true);

  htmlBlockToStyle?.querySelector("#js-dd-cursors")
    ?.addEventListener("click", function (evt) {
      evt.preventDefault();
      let cssClass = evt.target.dataset.cursor;
      classChanger(htmlFigure, "cursor", cssClass);
    });

  htmlBlockToStyle?.querySelector("#js-dd-colors")
    ?.addEventListener("click", function (evt) {
      evt.preventDefault();
      let cssClass = evt.target.dataset.background;
      classChanger(htmlFigure, "bg", cssClass);
    });

  htmlBlockToStyle?.querySelector("#js-dd-borders")
    ?.addEventListener("click", function (evt) {
      evt.preventDefault();
      let cssClass = evt.target.dataset.border;
      classChanger(htmlFigure, "border", cssClass);
    });

  htmlBlockToStyle?.addEventListener("click", evt => {
    if (evt.target.id === "js-btn-reset") {
      console.log(evt);
      insertDefaultFigure(htmlFigure, htmlFigureClone);
    }
  });

  function insertDefaultFigure(takerNode, giverNode) {
    takerNode.replaceWith(giverNode)
    htmlFigure = giverNode;
  }

  /**
   * Changes element css class or classes
   */
  function classChanger(element, cssMatcher, cssClass) {
    // fail fast
    if (!element || !cssMatcher || !cssClass) {
      return;
    }

    // clear all "cssMatcher like" css classes
    element.classList.forEach(cssCls => {
      if (cssCls.includes(cssMatcher)) {
        element.classList.remove(cssCls);
      }
    });

    // add single css class or multiple classes
    if (cssClass.includes(" ")) {
      cssClass.split(" ").forEach(item => {
        element.classList.add(item);
      });
    } else {
      element.classList.add(cssClass);
    }
  }
});
