class Product {

  constructor(name, price, salePrice, ...category) {
    this.name = name;
    this.price = Number(price);
    this.salePrice = Number(salePrice);
    this.categories = category;
  }

  productDescription() {
    return {
      [this.name]: this.getCartPrice
    }
  }

  /**
   * 1.1
   * provides a product presentation with name and price (or stock price) (E.g. "Nike pants": 59.00 Eur");
   * @returns {string}
   */
  productDescriptionStr() {
    return `${this.name}: ${this.getCartPrice} €`;
  }

  /**
   *
   * @returns {boolean}
   */
  isDiscountAvailable() {
    return this.price !== this.salePrice;
  }

  /**
   * 1.2
   * check if the product has a promotional price and, if it has to show a promotional price, if not,
   * return a text stating that the promotion is not applicable to this product
   *
   * @returns {number|string}
   */
  getCartPriceStr() {
    return this.isDiscountAvailable() ? this.salePrice : "regular price";
  }

  /**
   * get product price for end customer
   *
   * @returns {number}
   */
  get getCartPrice() {
    return this.isDiscountAvailable() ? this.price : this.salePrice;
  }

}
