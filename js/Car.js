class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getIntroduction() {
    return {
      make: this.make,
      model: this.model
    }
  }

  getAge() {
    return (new Date().getFullYear() - this.year <= 10) ? `10 metų arba naujesnis` : `11 metų arba senesnis`;
  }
}
