class ProductFilters {

  static priceFilterOptions() {
    return {
      nuo: "from",
      iki: "to"
    }
  }

  /**
   * TODO sort ???
   *
   * @param prodArr
   * @param price
   * @param option
   * @returns {*}
   */
  static filterByPrice(prodArr, price, option) {
    if (option === ProductFilters.priceFilterOptions().nuo) {
      return prodArr.filter(prod => {
        return prod.getCartPrice >= price;
      });
    } else if (option === ProductFilters.priceFilterOptions().iki) {
      return prodArr.filter(prod => {
        return prod.getCartPrice <= price;
      });
    } else {
      return prodArr;
    }
  }

  static filterByCategory(prodArr, catToFind) {
    return prodArr.reduce((matchedProd, item) => {
      if (item.containsCategory(catToFind)) {
        matchedProd.push(item);
      }
      return matchedProd;
    }, []);
  }

  static filterByPromo(prodArr) {
    return prodArr.filter(prod => prod.isDiscountAvailable());
  }
}
