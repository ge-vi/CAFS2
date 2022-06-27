class Motorcycle extends Car {

  constructor(make, model, year, wheels) {
    super(make, model, year);
    this.wheels = Number(wheels);
  }

  getWheelsNumber() {
    return this.wheels;
  }

  getWheelsNumberStr() {
    if (this.wheels === 3) {
      return `motociklas turi 3 ratus`;
    } else if (this.wheels === 2) {
      return `motociklas turi 2 ratus`;
    }
  }
}
