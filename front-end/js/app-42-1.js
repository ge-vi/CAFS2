// noinspection DuplicatedCode

"use strict";

function createTable(tableData, ...tableColumns) {

  if (!Array.isArray(tableData)) {
    throw new Error("not posts array given");
  }

  const htmlTableElement = document.createElement("table");
  tableData.forEach(post => {
    console.log(post);
    htmlTableElement.appendChild(createTableRow(post, tableColumns));
  });
  return htmlTableElement;
}

/**
 * Creates table row with specified columns by name from `rowData`
 *
 * @param rowData {Object}
 * @param fields
 * @returns {HTMLTableRowElement}
 */
function createTableRow(rowData, fields) {
  const htmlTableRowElement = document.createElement("tr");

  for (const [key, value] of Object.entries(rowData)) {
    if (fields.includes(key)) {
      let htmlTableTd = document.createElement("td");
      htmlTableTd.textContent = `${value}`;
      htmlTableRowElement.appendChild(htmlTableTd);
    }
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
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => remapDataByKey(users, "id"))
      .then(usersByKey => {
        let postsWithUsers = posts.map(post => {
          let user = usersByKey[post.userId];
          return Object.assign(post, user);
        });
        resolve(postsWithUsers);
      });
  });
}

/**
 * create object of objects
 * so for example `dataArr.id` is key for data object itself
 *
 * @param dataArr
 * @param primaryKey
 * @returns {*}
 */
function remapDataByKey(dataArr, primaryKey) {
  return dataArr.reduce((acc, data) => {
    let keyValue = data[primaryKey];
    delete data[primaryKey];
    acc[keyValue] = data;
    return acc;
  }, {});
}

const htmlPostsTable = document.getElementById("js-posts-table");

document.getElementById("js-posts-button")?.addEventListener("click", evt => {
  getPosts("https://jsonplaceholder.typicode.com/posts")
    .then(posts => getUsers(posts))
    .then(postsWithUsers =>
      htmlPostsTable.appendChild(createTable(postsWithUsers, "title", "body", "name"))
    )
    .catch(err => console.log(err));
});
