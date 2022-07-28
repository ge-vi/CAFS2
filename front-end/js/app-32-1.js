"use strict";

const movie1 = new Movie("mov1", 2010, "direct1", 1000, 1500);
const movie2 = new Movie("mov2", 2020, "direct2", 2000, 4000);

console.log(movie1.getIntroduction());
console.log(movie1.getProfit());

console.log(movie2.getIntroduction());
console.log(movie2.getProfit());
