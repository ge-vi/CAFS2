"use strict";

const moto1 = new Motorcycle("moto1", "model1", 2020, 3);
console.log(moto1.getIntroduction().make, moto1.getIntroduction().model);
console.log(moto1.getAge());
console.log(moto1.getAgeStr());
console.log(moto1.getWheelsNumber());


const moto2 = new Motorcycle("moto2", "model2", 2000, 2);
console.log(moto2.getIntroduction().make, moto2.getIntroduction().model);
console.log(moto2.getAge());
console.log(moto2.getAgeStr());
console.log(moto2.getWheelsNumber());
