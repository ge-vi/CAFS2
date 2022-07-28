class Product {

  constructor(name, price, salePrice, categories) {
    if (name) {
      this.setName(name);
    }
    if (price) {
      this.setPrice(price);
    }
    if (salePrice) {
      this.setSalePrice(salePrice);
    }
    if (categories) {
      this.setCategories(categories);
    }
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

  /**
   *
   * @param catToFind
   * @returns {boolean}
   */
  containsCategory(catToFind) {
    if (this.categories) {
      return this.categories.includes(catToFind);
    } else {
      return false;
    }
  }

  /**
   *
   * @param category
   */
  isAlowedCategory(category) {
    return category.every(item => {
      return AVAILABLE_CATEGORIES.includes(item);
    });
  }

  /* getters and setters */
  setName(name) {
    this.name = name;
    return this;
  }

  setPrice(price) {
    this.price = Number(price);
    return this;
  }

  setSalePrice(salePrice) {
    this.salePrice = Number(salePrice);
    return this;
  }

  setCategories(categories) {
    if (Array.isArray(categories) && this.isAlowedCategory(categories)) {
      this.categories = categories;
    } else if (this.isAlowedCategory(Array.of(categories))) {
      this.categories = Array.of(categories);
    }
  }
}
