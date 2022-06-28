"use strict";

currentProducts.forEach((value, index) => {
  console.log(value);
  console.log(value.productDescription());
  console.log("productDescriptionStr:", value.productDescriptionStr());
  console.log("isDiscountAvailable:", value.isDiscountAvailable());
  console.log("---")
});

console.log(product2.containsCategory(AVAILABLE_CATEGORIES[1]));
console.log(product4.containsCategory(AVAILABLE_CATEGORIES[1]));


console.log(`cat: ${AVAILABLE_CATEGORIES[1]}`, ProductFilters.filterByCategory(currentProducts, AVAILABLE_CATEGORIES[1]));
console.log("promo", ProductFilters.filterByPromo(currentProducts));

console.log("iki 100", ProductFilters.filterByPrice(currentProducts, 100, ProductFilters.priceFilterOptions().iki));
console.log("nuo 100", ProductFilters.filterByPrice(currentProducts, 100, ProductFilters.priceFilterOptions().nuo));


console.log("--------- eof");
