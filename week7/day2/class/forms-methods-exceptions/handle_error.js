// function getX(){
//     console.log('start');
//     let x = 10;
//     try{
//         let y;
//     }
//     catch(error){
//         console.log(error.name + "at getX function");
//         console.log(error.message);
//         console.log(error.stack);
//     }
//     finally{
//         x++
//     }
//     console.log('end');
//     return x;
// }

// let result = getX();
// console.log(result);

/**
 try{

 }
 catch(error){

 }
 */

function divideNumbers(num) {
  try {
    if (num > 10) {
      throw new Error("please send number lower than 10");
    }
    let arr = new Array(num);
    return arr;
  } catch (e) {
    return new Array(10);
  }
}

// let result = divideNumbers(5);
// console.log(result);

/**
 * Create a function called findElement that takes an array
 * and an index as parameters.
 * The function should attempt to retrieve the element at the given index
 * from the array.
 * Implement a try...catch block to handle any errors that might occur,
 * such as an invalid index or accessing an element that doesn't exist.
 * Return the element if it exists or return a custom error message
 * for invalid index or missing elements.
 */
// const myArray = [10, 20, 30, 40, 50];
// console.log(findElement(myArray, 2)); // Output: 30
// console.log(findElement(myArray, 8)); // Output: "Error: Index out of range or invalid"
// console.log(findElement(myArray, -1)); // Output: "Error: Index out of range or invalid"

function findElement(arr, index) {
  try {
    if (index < 0 || index >= arr.length) {
      throw new Error("Index out of range or invalid");
    }
    arr.forEach((element) => {
      if (!element) {
        throw new Error("Index out of range or invalid");
      }
    });
    return arr[index];
  } catch (error) {
    return error.message;
  }
}
const myArray = [10, 20, 30, 40, 50];
console.log(findElement(myArray, 2));
console.log(findElement(myArray, 8));
console.log(findElement(myArray, -1));

/**
 *  Birthday Cake Candles
 *  This array are Birthday Cake Candles
 *  You can blow only the tallest candles
 *  let arr = [2,4,4,1]
 *  birthdayCakeCandles function will return
 *  how many candles you can blow
 */
const birthdayCakeCandles = (arr) => {
  let maxNum = Math.max(...arr);
  let filter = arr.filter((item) => item === maxNum);
  return filter.length;
};
/**
 * Create a function called parseJSON that takes a string as a parameter
 * and attempts to parse it as JSON using JSON.parse().
 * Implement error handling using a try...catch block
 * to catch any parsing errors that might occur.
 * Return the parsed JSON object if successful,
 * or return a custom error message if parsing fails.
 */
function parseJSON(jsonToParse) {
  try {
    return JSON.parse(jsonToParse);
  } catch (error) {
    return `Error parsing JSON: ${error.message}`;
  }
}
const validJSON = `[{"name":"John","age":36}]`;
const invalidJSON = `[{'name:'John',age:36}]`;

console.log(parseJSON(validJSON));
console.log(parseJSON(invalidJSON));
/**
 * find the smallest distance between 2 numbers in array
 * [2,5,3,7,2,3,6,8,6] => 2
 */

function minimumDistance(arr) {
  /** */
}
