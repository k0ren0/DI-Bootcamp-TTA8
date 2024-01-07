// // // Exercise 1 : Print Full Name

// // // printFullName({first: 'Elie', last:'Schoppik'}) 
// // // 'Your full name is Elie Schoppik`

// function printFullName({ first, last }) {
//     return `Your full name is ${first} ${last}`;
// }

// const fullName = printFullName({ first: 'Elie', last: 'Schoppik' });
// console.log(fullName); 

// // Output: 'Your full name is Elie Schoppik'



// // // Exercise 2 : Keys And Values

// function keysAndValues(obj) {
//     const keys = Object.keys(obj).sort();
//     const values = keys.map(key => obj[key]);
//     return [keys, values];
// }

// // Examples:
// const result1 = keysAndValues({ a: 1, b: 2, c: 3 });
// console.log(result1);
// // // [["a", "b", "c"], [1, 2, 3]]
// const result2 = keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// console.log(result2);
// // // [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// const result3 = keysAndValues({ key1: true, key2: false, key3: undefined })
// console.log(result3);
// // // [["key1", "key2", "key3"], [true, false, undefined]]



// // //  // Exercise 3 : Counter Class

// class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     increment() {
//       this.count++;
//     }
//   }
  
//   const counterOne = new Counter();
//   counterOne.increment(); // 1
//   counterOne.increment(); // 2
  
//   const counterTwo = counterOne;
//   counterTwo.increment(); // 3
  
//   console.log(counterOne.count);

// //   Result 3