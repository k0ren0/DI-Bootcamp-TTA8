const _ = require('lodash');
const math = require('./math');

const numbers = [1, 7, 9, 12, 6, 8, 3, 4, 15];
const sum = _.sum(numbers);
console.log("Sum:", sum);

// Task 

const resultAddition0 = math.add(7, 4);
const resultMultiplication0 = math.multiply(9, 3);

console.log('Result of addition:', resultAddition0);
console.log('Result of multiplication:', resultMultiplication0);


// // // Add random from arr numbers - it's more interesting
// const randomIndex1 = Math.floor(Math.random() * numbers.length);
// const randomIndex2 = Math.floor(Math.random() * numbers.length);

// const num1 = numbers[randomIndex1];
// const num2 = numbers[randomIndex2];
// console.log("Num1:", num1);
// console.log("Num2:", num2);

// const resultAddition = math.add(num1, num2);
// const resultMultiplication = math.multiply(num1, num2);

// console.log('Result of addition:', resultAddition);
// console.log('Result of multiplication:', resultMultiplication);