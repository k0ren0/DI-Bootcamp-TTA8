// let addressNumber = 5;
// let street = "Ness Ziona";
// let country = "Israel";

// let globalAddress = "I live in " + addressNumber + " " + street + ", in " + country;
// console.log(globalAddress)

// let globalAddressButBetter = "I live in ${addressNumber} ${street}, in ${country}";
// console.log(globalAddress)

// // Display globalAddress
// document.getElementById("output").textContent = globalAddress;

// Number Methods
// let op = "me";
// let num = 1;
// let numTypeNum = 1;
// console.log(isNaN(op));   //returns true because op is Not a Number
// console.log(isNaN(num)); 
// console.log(isNaN(numTypeNum)); 

// console.log(numTypeNum); 
// console.log(numTypeNum.toString()); 

// let op = 10.6789;
// console.log(op.toFixed(2));
// console.log(op.toFixed(1));
// console.log(op.toFixed(0));

// Exercise 2

// let birthYear = 1984;
// let futureYear = 2024;
// let ageInThatYear = futureYear - birthYear;
// console.log(`I will be ${ageInThatYear} in ${futureYear}`);

// User Interface Functions
// Alert

// alert("Hello")

// let userAnswer = prompt("What is your username?");
// console.log(userAnswer);

// let age = prompt('How old are you?', 20);
// alert(`You are ${age} years old!`); // You are 20 years old!

// let isBoss = confirm("Are you the boss?");
// alert(isBoss); // true if OK is pressed

////  Array

// let user1 = "John";
// let user2 = "Bill";
// let user3 = "Nancy";

// let users = ["John", "Bill", "Nancy", "Sam"];
// console.log(users)
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])

// // NestedArray
// let sampleArr = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8],
// ];
// console.log(sampleArr)
// console.log(sampleArr[0])
// console.log(sampleArr[0][1])


// // Changing element in array
// let colors = ["blue", "yellow", "green"]; 
// console.log(colors)
// console.log(colors[0])

// colors[0] = "black"
// console.log(colors)

// console.log(colors.length);

// // Array methods
// // Push to add element to end of array
// let colors = ["blue", "yellow", "green"]; 
// console.log(colors);
// colors.push("white", "pink");
// console.log(colors);

// // Remove last element of array
// colors.pop();
// colors.pop(2);
// console.log(colors);

// // Splice
// colors.splice(0, 0, "pink", "black");
// colors.splice(1, 1, "pink");
// console.log(colors);

// // Slice
// // The slice() method creates a new array. It does not remove any elements from the source array.


// let colors = ["blue", "yellow", "green"]; 
// // let slicedArray = colors.slice(0, 2);
// let slicedArray = colors.slice(1);
// console.log(slicedArray);

// // String
// let colors = ["blue", "yellow", "green"]; 
// let colorstring = colors.toString();
// console.log(colors);
// console.log(colorstring);

// // Exercise 3
// // 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']

// let pets = ['cat','dog','fish','rabbit','cow'];
// console.log(pets)
// // 2. Display dog

// let dogIndex = pets.indexOf("dog")
// console.log(pets[dogIndex])
// // console.log(pets[1])

// // 3. Add to the array pets, the pet horse. Remove the pet rabbit

// let rabbitIndex = pets.indexOf("rabbit")
// // console.log(pets[rabitIndexIndexIndex])
// pets.splice(rabbitIndex, 1, "horse")
// console.log(pets)


// // 4. Display the array length
// console.log(pets.length)


// // Object
// let person={
//     fname:"Dani",
//     lname:"Robb",
//     age: 27,
// };

// console.log(person);
// console.log(person.age);
// console.log(person.lname);

// console.log(person.fname);
// console.log(person["fname"]);


// person.country = "Israel";
// person.favoriteFood = "Meat";
// person.age = 28;
// console.log(person);

// delete person.favoriteFood;
// console.log(person);

// // Нечетные
// const numbers = [2, 7, 19, 22, 38, 9];


// let i = 0;
// while (i < numbers.length) {
//     if (i % 2 !== 0) {
//         numbers[i] *= 2;
//     }
//     i++;
// }

// console.log(numbers);


// // Четные
// const numbers = [1, 2, 3, 4, 5, 6];


// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
//         numbers[i] += 3;
//     }
// }

// console.log(numbers);


// let i = 0;
// do {
//   console.log("The number is " + i)
//   i++;
// }
// while (i < 10);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// console.log()


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let arr = [1, 4, 7, 10]
//     for (let i=0; i<arr.length; i++) {
//         console.log(arr[i]);
//     }


// let person = {fname:"John", lname:"Doe", age:25};
// for (let x in person) {
//   console.log(x) //fname lname age
//   console.log(person[x]) // John Doe 25
// }


// let colors = ["blue", "yellow", "red"];

// for (let i in colors) {
//    console.log(i); //0 1 2
//    console.log(colors[i]) //blue yellow red
// }

// let colors = ["blue", "yellow", "red"];

// for (let i of colors) {
//    console.log(i); // logs blue, yellow, red
// }

// function multiply(a, b, c) {
//     return a * b * c;
// }

// let result = multiply(2, 3, 4);
// console.log(result); 

let person= {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : function () {
        console.log("My name is" + this.firstName + "I love chocolate")
    }
}

