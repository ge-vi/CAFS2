// run this with node in console
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// node. import Movie class to this file
const Movie = require('./Movie.js');

let mov1 = new Movie("mov1", 2010, "direct1", 1000, 1500);

console.log(mov1);
console.log(mov1.name);
