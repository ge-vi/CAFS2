class Movie {
  constructor(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = Number(budget);
    this.income = Number(income);
  }

  /**
   * grąžina filmo pilną pavadinimą (su name, year, director)
   */
  getIntroduction() {
    return `Movie name: ${this.name}, year: ${this.year} and director: ${this.director}`;
  }

  /**
   * grąžina sumą, kurią uždirbo (pelną) filmas
   */
  getProfit() {
    return this.income - this.budget;
  }
}

const movie1 = new Movie("mov1", 2010, "direct1", 1000, 1500);
const movie2 = new Movie("mov2", 2020, "direct2", 2000, 2500);

console.log(movie1.getIntroduction());
console.log(movie1.getProfit());
