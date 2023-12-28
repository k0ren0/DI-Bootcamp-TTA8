// var my_array = [1, 3, 5, 2, 4];

// //map calls a function which has "item" passed as parameter
// //map will pass each element of my_array as "item" in this function
// //the function will double each element passed to it and return it
// result = my_array.map(function(item) {
//   return item*2;
// });

// //prints new list containing the doubled values
// console.log(result);


// var my_array = [1,3,5,2,4];

// my_array.map(function(item,index,arr) {
//   console.log("item: " + item + " at index: " + index + " in the array: " + arr);
// });

// // Example 1:
// // This example, done without using the “start” parameter, searches for a number in an array. It is the same example used in the illustration above.

// var myarray = [1, 3, 5, 2, 4];
// var check = myarray.includes(2);
// console.log(check);

// // Example 2:
// // This example uses the start parameter and shows how the element is missed if the parameter is over estimated.

// var myarray = [1, 3, 5, 2, 4];
// var check = myarray.includes(3,2); 
// if (check==true)
// console.log("Found");
// else 
// {
//   console.log("Not found"); 
// }

// // Found

// var myarray = [1, 3, 5, 2, 4];
// var check = myarray.includes(3,1); 
// if (check==true)
// console.log("Found");
// else 
// {
//   console.log("Not found"); 
// }

// // What Is The Every() Method In JS?

// function isPositive(element) {
//     return element >= 0;
//   }
  
//   let arr = [1, 4, 82, 45, 6]
//   console.log(arr.every(isPositive)); 

// //   Lambda

// let arr = [11, 12, 13, 14, 15]
// console.log(arr.every(element => element > 10)); 

//  В этом примере обратите внимание, как функция возвращает значение после обнаружения первого значения, не удовлетворяющего условию (кошка не является собакой). Остальная часть массива не проверяется.

// // What Is The Every() Method In JS?

// function isCanine(element, index, arr) {
//     console.log("Checking if " + arr[index] + " is a canine.")
//     return (element == "dog" || element == "doggo")
//   }
  
//   let arr = ["dog", "cat", "doggo"]
//   console.log(arr.every(isCanine)); 

// //   OR

// function isCanine(element, index, arr) {
//     console.log("Checking if " + arr[index] + " is a canine.")
//     return (element == "dog" || element == "doggo")
//   }
  
//   let arr = ["dog", "doggo", "cat"]
//   console.log(arr.every(isCanine)); 


// // // Array ForEach Method 

// The forEach method will call the function for each element in the array.

// When using forEach, we have to specify a callback function. This callback will be executed on each element in the array.

// const myArray = [2, 3, 4, 5, 6]; 
// const colors = ["red", "blue", "green", "purple"];
// // myArray.forEach((number, index)=> {
// //     console.log("index: ", index) 
// //     console.log("number: ", number)
// // })
// colors.forEach((element, index, arr) => {
//     console.log(index + " " + element); 
//     console.log();
// })


// console.log(myArray)
// //output : [ 4, 6, 8, 10, 12 ]

// //2nd example with function expression
// myArray.forEach(function(number, i, arr) { 
//     arr[i] = number * 2; 
// }); 

// console.log(myArray)
// //output : [ 4, 6, 8, 10, 12 ]

// // Exercise
// const numbers = [10,11,12,15,20];
// numbers.forEach((number) => {
//     if (number % 2===0) {
//         console.log(number);
//     }
// })

// numbers.forEach((number) => {
//     number % 2===0 ? console.log(number + " is even") : console.log(number + " is odd");
//     })

//     // THE BEST SOLUTION
// numbers.forEach((number) => {
//     number % 2===0 && console.log(number);
// });


// // // Array Some Method - The some() method determines whether at least one element of the array matches the given predicate.

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let someReturn = myArr.some((element) => {
//     // return element % 2 === 0;
//     return element === 4;
// })

// console.log(someReturn);

// Exercise

// Check if at least one element of the array starts with the letter 'h'

// const words = ["wow","hey","bye"];
// // 1
// // const FirstH = words.some((word) => {
// //     return word[0] === "h";
// // });

// // console.log(FirstH);
// // 2
// const FirstH = words.some(word => word[0] === "h")
// console.log(FirstH);

// // 3
// let returnedSome = words.some ((element) => {
//     return element.startsWith("h");
//     }) ;
//     console. log(returnedSome) ;

// // // Array Every Method

// // The every() method determines whether all elements of the array match the predicate.

// // As soon as every() finds an array element that doesn’t match the predicate, it immediately returns false and doesn’t iterate over the remaining elements.

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// const areAllGreaterThanZero = myArr.every((value) => { 
//     console.log(value); //loop
//     return (value > 2); 
// });

// console.log(areAllGreaterThanZero);

// // Exercise

// // Check if all the elements of the array start with the letter 'h'

// const words = ["hello","hey","hola"];
// const FirstH = words.every(word => word[0] === "h")
// console.log(FirstH);

// // // // // // Array Map : Transforming

// const originalArray = [1, 4, 9, 16];

// const newArr = originalArray.map((element) => {
//     return element * 2;
// });

// console.log(originalArray)
// console.log(newArr)

// // OR

// const originalArray = [1, 4, 9, 16];

// const newArr = originalArray.map((element) => {
//     if (element >= 4) {
//         return element * 2;
//     } else {
//         return element;
//     }
// });

// console.log(newArr);


// const myArr = [10, 20, 30, 40];

// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i
//   };
// });

// console.log(newArr);

// // // Array Filter : Filtering
// The filter() method creates a new array with all elements that passed the test implemented by the provided function.

// Rather than deleting elements from the existing array, it builds up a new array with only the elements that pass the test.

// const words = ['spray', 'limit', 'elite', 'exuberant',
// 'destruction', 'present'];

// const newArr = words.filter((word) => {
//     return word.length >6
// });

// console.log(newArr)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = numbers.filter((element) => {
//     return element > 6
// });

// console.log(newNumbers)

// // OR

// const newNumbers = numbers.filter((element) => {
//     return element > 6
// });

// console.log(newNumbers)

// // // // OR (more terms) 

// const newNumbers = numbers.filter((element) => {
//     return element > 3 && element < 9
// });
// console.log(newNumbers)

// // // 
// // //Array Reduce 
// The reduce() method executes a reducer function (that you provide) on each array element, resulting in a single output value.

// It builds a value by repeatedly taking a single element from the array and combining it with the current value

// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current;
// }

// // Пример использования функции reduce для суммирования элементов массива
// const numbers = [1, 2, 3, 4, 5];
// const sum = reduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Вывод: 15


// const arr = [1, 4, 9, 16];

// let sum = arr.reduce((acc, val) => {
//   console.log(`acc: ${acc}`)
//   console.log(`val: ${val}`)
//   console.log(`acc + val: ${acc + val}`);
//   return acc + val;
// });

// console.log(sum)

// NEXT

// const arr = [1, 4, 9, 16];

// let sum = arr.reduce((acc, val) => {
//   console.log(`acc: ${acc}`)
//   console.log(`val: ${val}`)
//   console.log(`acc + val: ${acc + val}`);
//   return acc + val;
// }, 5);
// // the number 5 is the starting point
// console.log(sum)

// // EXEMPLE

// let party = [
//     {
//       desert: 'Chocolate Mousse',
//       calories: 30,
//     },
//     {
//       desert: 'Apple Pie',
//       calories: 15,
//     },
//     {
//       desert: 'Croissant',
//       calories: 50,
//     },
//     {
//       desert: 'Strawberry Icecream',
//       calories: 5,
//     },
//   ]

// let sum = party.reduce((acc, val) => {
//     if (val.desert !== "Apple Pie") {
//         return acc + val.calories;
//     } else {
//         return acc;
//     }
//  }, 0);
//   console.log(sum)

// // // OR ternarium

// let sum = party.reduce((acc, val) => {
//     return val.desert != "Apple Pie" ? acc + val.calories :  acc;
// }, 0);
// console.log(sum)


// // // Destructuring Assignment

// // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// // Destructuring

// let a, b, rest;
// [a, b] = [10, 20];
// rest = [30,40,50]

// console.log(a);
// // expected output: 10

// console.log(b);
// // expected output: 20

// console.log(rest);
// // expected output: [30,40,50]

// let arr = ["Shlomi", "Elhanan"];
// let [person1, person2] = arr;
// console.log(person1);
// console.log(person2);

// // // Spread Operator
// // // The spread operator consists of three dots (...) followed by an expression.
// // // The spread operator unpacks elements elements of an array.

// let a = 10;
// let b = 20
// let rest = [30,40,50]
// let str = "this is a string and I will unpack this string ›:)";

// const iterable = [a, b, ...rest] 
// console.log(iterable);

// // // Rest Operator
// // // The rest operator consists of three dots (...) followed by an expression.
// // // The rest operator packs elements into an array.

// let [c, d, ...rest] = [10, 20, 30, 40, 50];

// console.log('c: ',c); // c: 10
// console.log('d: ',d); // d: 20
// console.log('rest: ',rest); // [30, 40, 50]


// // Cloning Arrays
// In JavaScript, arrays are reference types; therefore, they are assigned by reference instead of copied.

// const rainbow = ['red', 'orange', 'yellow'];
// const rainbowClone = rainbow;

// rainbow.push("black");

// console.log(rainbow)
// console.log(rainbowClone)


// ____________________________________________
// const rainbow = ['red', 'orange', 'yellow'];

// // Cloning with array destructuring and spread operator
// const [...rainbowClone] = rainbow;

// // console.log(rainbow === rainbowClone); // false
// // console.log(rainbowClone); // ['red', 'orange', 'yellow']

// rainbow.push("violet");
// console.log("rainbow", rainbow); //['red', 'orange', 'yellow', 'violet']
// console.log("rainbowClone", rainbowClone); // ['red', 'orange', 'yellow']

// // Exercise

// let prices = [12, 20, 18];
// let newPriceArray = [...prices];
// console.log(newPriceArray);

// let alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);
