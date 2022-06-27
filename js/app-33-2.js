"use strict";

const AVAILABLE_CATEGORIES = ["T-shirts", "Pants", "Sweaters", "Shoes"];

const currentProducts = [];

const product1 = new Product("Dark T-Shirt", 20, 15, ["T-shirts"]);
currentProducts.push(product1);

const product2 = new Product("Suite", 250, 250, "Pants", "Sweaters");
currentProducts.push(product2);

const product3 = new Product("Sneakers", 70, 60, ["Shoes"]);
currentProducts.push(product3);

const product4 = new Product("Shorts", 100, 100, ["Pants"]);
currentProducts.push(product4);

const product5 = new Product("Sweater", 120, 110, "Sweaters");
currentProducts.push(product5);


// currentProducts.forEach((value, index) => {
//   console.log(value);
//   console.log(value.productDescription());
//   console.log("productDescriptionStr:", value.productDescriptionStr());
//   console.log("isDiscountAvailable:", value.isDiscountAvailable());
//   console.log("---")
// });


console.log(`cat: ${AVAILABLE_CATEGORIES[1]}`, ProductFilters.filterByCategory(currentProducts, AVAILABLE_CATEGORIES[1]));
// console.log("promo", ProductFilters.filterByPromo(currentProducts));
