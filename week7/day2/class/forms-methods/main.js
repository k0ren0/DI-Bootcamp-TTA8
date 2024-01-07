// let arr = [
//     { id: 1, name: "aaa", username: "aaa111" },
//     { id: 2, name: "bbb", username: "bbb111" },
//     { id: 3, name: "ccc", username: "ccc111" },
// ]

// console.log(arr);
// arr.forEach(item => {
//     console.log(item.name);
// })

// let arrjson = JSON.stringify(arr);
// console.log(arrjson);

// let json = `[
//     {"id":1,"name":"aaa","username":"aaa111"},
//     {"id":2,"name":"bbb","username":"bbb111"},
//     {"id":3,"name":"ccc","username":"ccc111"}
// ]`;

// let arrparse = JSON.parse(arrjson);
// console.log(arrparse);



// // Create a function called findElement that takes an array and an index as parameters.
// // The function should attempt to retrieve the element at the given index from the array.
// // Implement a try... catch block to handle any errors that might occur, such as an invalid index or accessing an element that doesn't exist.
// // Return the element if it exists or return a custom error message for invalid index or missing elements.


// function findElement(arr, index) {
//     try {
//         if (index < 0 || index >= arr.length) {
//             throw new Error('Error: Index out of range or invalid');
//         }
//         return arr[index];
//     } catch (error) {
//         return error.message;
//     }
// }

// const myArray = [10, 20, 30, 40, 50];
// console. log(findElement(myArray, 2)); // • Output: • 30
// console. log(findElement(myArray, 8)); // Output: "Error: • Index out of range or invalid"
// console. log(findElement(myArray, -1)); // Output: "Error: Index out of range or invalid"

// // Birthday Cake Candles
// // This array are Birthday Cake Candles You can blow only the tallest candles
// // let arr = [2,4,4,1]
// // birthdayCakeCandles function will return 
// // how many candles you can blow

// function birthdayCakeCandles(arr) {
//     // Находим максимальное значение в массиве (высоту самой высокой свечи)
//     const maxHeight = Math.max(...arr);

//     // Считаем количество свечей с максимальной высотой
//     const count = arr.filter(height => height === maxHeight).length;

//     return count;
// }

// let arr = [2, 4, 4, 1];
// console.log(birthdayCakeCandles(arr)); 


// // find the smallest distance between 2 numbers in array
// // [2,5,3,7,2,3,6,8,6] => 2

// function smallestDistance(arr) {
//     const smallDist = Math.min(...arr);

//     let count = arr.filter(item => item === smallDist).length

//     return count;
// }

// let arr = [2,5,3,7,2,3,6,8,6];
// console.log(smallestDistance(arr));

// // OR variant

// function minimumDistance(arr) {
//     let distances = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i !== arr.lastIndexOf(arr[i])) {
//             let minDistance = arr.lastIndexOf(arr[i]) - i;
//             distances.push(minDistance);
//         }
//     }

//     return distances.length === 0
//         ? -1
//         : distances.sort((a, b) => a - b)[0];
// }

// console.log(minimumDistance(arr));
