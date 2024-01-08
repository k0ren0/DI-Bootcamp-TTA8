// 5
const products = require("./products");

console.log("List of Products:");
products.forEach(product => {
  console.log(`Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
});

// 6
const searchProductByName = (productName) => {
  const lowerCaseProductName = productName.toLowerCase(); // I added lowerCaseProductName 
  const foundProduct = products.find(product => product.name.toLowerCase() === lowerCaseProductName);
  return foundProduct;
};

const product1 = searchProductByName("iPhone 15");
const product2 = searchProductByName("iPad Pro");
const product3 = searchProductByName("airpods pro");

// 7
console.log("Product Details:");
console.log(product1);
console.log(product2);
console.log(product3);
