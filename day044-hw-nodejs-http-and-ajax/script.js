// EXTERNAL API
const SERVICE_URI = 'http://localhost:8080';

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById('btn1');
const btnGetUser = document.getElementById('btn2');
const btnGetUsers = document.getElementById('btn3');
const btnGetPosts = document.getElementById('btn4');
const btnSendPost = document.getElementById('btn5');
//-- output
const textOutput = document.querySelector('#text');
const userOutput = document.querySelector('#user');
const usersOutput = document.querySelector('#users');
const postsOutput = document.querySelector('#posts');

// *** Functions ***
//OLD Version AJAX (XMLHttpRequest())
//-- Load Text File Information
function loadTextFileXHR() {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${SERVICE_URI}/sample.txt`);
  xhr.onload = function () {
    if (this.status === 200) {
      textOutput.textContent = `${this.responseText}`;
    }
  }
  xhr.send();
}

//-- Load User Information
function loadUserXHR() {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${SERVICE_URI}/user.json`);
  xhr.onload = function () {
    if (this.status === 200) {
      userOutput.textContent = `${this.responseText}`;
    }
  }
  xhr.send();
}

//-- Load Users information
function loadUsersXHR() {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${SERVICE_URI}/users.json`);
  xhr.onload = function () {
    if (this.status === 200) {
      usersOutput.textContent = `${this.responseText}`;
    }
  }
  xhr.send();
}

//-- Load Users information
function loadPostsXHR() {
  return;
}

//NEW VERSION AJAX (fetch())
// -- Getting data
function loadPostsFETCH() {
  return;
}

// -- Sending data
function sendPostFETCH() {
  return;
}

// *** Events ***
btnGetTextFile.addEventListener('click', loadTextFileXHR);
btnGetUser.addEventListener('click', loadUserXHR);
btnGetUsers.addEventListener('click', loadUsersXHR);
btnGetPosts.addEventListener('click', loadPostsXHR);
btnGetPosts.addEventListener('click', loadPostsFETCH);
btnSendPost.addEventListener('click', sendPostFETCH);

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
