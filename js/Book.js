class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  getCoverName() {
    return `${this.name} ${this.author}`;
  }

  calcBookAge() {
    return (new Date().getFullYear()) - this.year;
  }
}

const book1 = new Book("book1", "author1", 2000);
console.log(book1.getCoverName());
console.log(book1.calcBookAge());
