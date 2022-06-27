class ProductFilters {

  static filterByPrice(prodArr, price, option) {
    // TODO implement price filter
  }

  static filterByCategory(prodArr, catToMatch) {
    return prodArr.reduce((matchedProd, item) => {
      console.log(item);
      if (item.categories.includes(catToMatch)) {
        matchedProd.push(item)
      }
      return matchedProd;
    }, []);
  }

  static filterByPromo(prodArr) {
    return prodArr.filter(prod => prod.isDiscountAvailable());
  }
}
