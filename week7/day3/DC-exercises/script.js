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


// // // 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs() {
    return new Promise((resolve, reject) => {
        let morseParse = JSON.parse(morse);
            if (Object.keys(morseParse).length === 0) {
            reject("Object is empty.");
        } else 
            resolve(morseParse);
        }  
    )};

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        if (!userText || typeof userText !== "string") {
            reject("Error. You entered a character that doesnt exist "); 
        } else {
            resolve();
            const uppercasedUserText = usedText.toUpperCase();
            const morseArr = [];

            for (let x of uppercasedUserText) {
                if (morseJS[x]) {
                morseArr.push(morseJS[x]);
                } else if (x === ' ') {
                morseArr.push(' ');
                } else {
                reject(`Unsupported character: ${x}`);
                return;
                }
            }

      resolve(morseArr.join(' '));
    }
  });
}
        
function joinWords(morseTranslation) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(morseTranslation)) {
        reject("Invalid input. Please provide a valid array.");
      } else {
        const joinedMorse = morseTranslation.join('\n');
        resolve(joinedMorse);
      }
    });
  }

  const morseTranslation = ["....", ".-..", ".-..", "---", ",", " ", "World", "!"];
  joinWords(morseTranslation)
    .then(joinedMorse => {
      // Assuming there is an HTML element with an id "output" to display the result
      const outputElement = document.getElementById("output");
      outputElement.innerText = joinedMorse;
    })
    .catch(error => console.error("Rejected:", error));