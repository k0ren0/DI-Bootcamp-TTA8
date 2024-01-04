// // 1
// function makeAllCaps(words) {
//     return new Promise((resolve, reject) => {
//       if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
//         resolve(words.map(word => word.toUpperCase()));
//       } else {
//         reject("Invalid input. All elements in the array must be strings.");
//       }
//     });
//   }
  
// // 2
//   function sortWords(uppercasedWords) {
//     return new Promise((resolve, reject) => {
//       if (uppercasedWords.length > 4) {
//         resolve(uppercasedWords.sort());
//       } else {
//         reject("Invalid input. The array must have more than 4 elements.");
//       }
//     });
//   }
  
//   //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result))
// .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result))
// .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
// .catch(error => console.log(error))


