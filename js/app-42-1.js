// noinspection DuplicatedCode

"use strict";

function createTable(tableData) {

  if (!Array.isArray(tableData)) {
    throw new Error("not posts array given");
  }

  const htmlTableElement = document.createElement("table");
  tableData.forEach(post => {
    console.log(post);
    htmlTableElement.appendChild(createTableRow(post));
  });
  return htmlTableElement;
}

function createTableRow(rowData) {
  const htmlTableRowElement = document.createElement("tr");

  for (const [key, value] of Object.entries(rowData)) {
    let htmlTableTd = document.createElement("td");
    htmlTableTd.textContent = `${value}`;
    htmlTableRowElement.appendChild(htmlTableTd);
  }

  return htmlTableRowElement;
}

function getPosts(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(posts => resolve(posts))
      .catch(err => reject(err))
  });
}

function getUsers(posts) {
  // todo after users fetch restructure json data so user id is key of array to quickly select whole user
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => {
        posts = posts.map(post => {
          post.user = users.find(u => {
            u.id === post.userId;
          });
          resolve(posts);
        });
      });
  });
}

// function resolveUser(posts) {
//   posts.map(post => {
//     getUser(post.userId).then(user => {
//       post.userName = user.name;
//       return post;
//     });
//   });
// }

const htmlPostsTable = document.getElementById("js-posts-table");

document.getElementById("js-posts-button")?.addEventListener("click", evt => {
  getPosts("https://jsonplaceholder.typicode.com/posts")
    .then(posts => getUsers(posts))
    .then(postsWithUsers => htmlPostsTable.appendChild(createTable(postsWithUsers)))
    .catch(err => console.log(err));
});
