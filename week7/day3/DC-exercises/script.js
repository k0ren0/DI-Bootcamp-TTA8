// // // 1rst Daily Challenge

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


// // // // 2nd Daily Challenge

// const morse = `{
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-",
//     " ": " "
//   }`

//   const toJs = (jsonString) => {
//     return new Promise((resolve, reject) => {
//         let objMorse;
//         try {
//             objMorse = JSON.parse(jsonString);
//         } catch (error) {
//             reject(new Error("Invalid JSON format --- ERROR in toJs function"));
//             return;
//         }
//         if (Object.keys(objMorse).length === 0) {
//             reject(new Error("Empty JSON --- ERROR in toJs function"));
//         } else {
//             resolve(objMorse);
//         }
//     });
// };

// const toMorse = (morseObj) => {
//     return new Promise((resolve, reject) => {
//         const userStr = prompt("Enter a word");
//         if (!userStr) {
//             reject(new Error("No input provided"));
//             return;
//         }
//         const arrStr = userStr.toLowerCase().split("");
//         const returnArr = arrStr.map(char => {
//             if (char in morseObj) {
//                 return morseObj[char];
//             } else {
//                 reject(new Error(`Character ${char} does not exist in the Morse code mapping`));
//                 return null; // or some placeholder value
//             }
//         });
//         resolve(returnArr);
//     });
// };

// const joinWords = (morseTranslation) => {
//     return morseTranslation.map((element) => `<div>${element}</div>`);
// };

// toJs(morse)
//     .then(result => {
//         return toMorse(result);
//     })
//     .then((result) => {
//         console.log(result);
//         return joinWords(result);
//     })
//     .then((htmlArr) => {
//         document.getElementById("output").innerHTML = htmlArr.join('');
//     })
//     .catch(error => {
//         console.log(error.message);
//     });


