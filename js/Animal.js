"use strict";

class Animal {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return "zzz";
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined

console.log(rabbit.created);
console.log(rabbit.name);
console.log(rabbit);
;
