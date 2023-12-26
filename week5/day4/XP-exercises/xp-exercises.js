// // Exercise 1 : List Of People
// // Part 1
// // 1
// const people = ["Greg", "Mary", "Devon", "James"];

// console.log(people);

// let gregIndex = people.indexOf("Greg");

// if (gregIndex !== -1) {
//     people.splice(gregIndex, 1);
// }

// console.log(people);

// // 2
// let jamesIndex = people.indexOf("James");

// if (jamesIndex !== -1) {
//     people[jamesIndex] = "Jason";
// }

// console.log(people);

// // 3
// people.push("Viktor");

// console.log(people);

// // 4

// let maryIndex = people.indexOf("Mary");
// console.log("Mary's index:", maryIndex);

// // 5

// const people = ['Mary', 'Devon', 'Jason', 'Viktor'];

// console.log(people.slice(1, -1));

// // 6

// people.push("Foo");
// console.log(people);
// let fooIndex = people.indexOf("Foo");
// console.log("Foo's index:", fooIndex);

// // last index = -1

// // 7

// const last = people[people.length - 1];

// console.log("The last element:", last);


// // Part II - Loops
// // 1
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }
// // 2
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);

//     if (people[i] === 'Devon') {
//         console.log('Devon found! Exit.');
//         break;
//     }
// }

// Exercise 2 : Your Favorite Colors

// let colors = ["blue", "yellow", "red", "orange", "green"];


// for (let i = 0; i < colors.length; i++) {
//     console.log(`My #${i + 1} choice is ${colors[i]}`);
// }

// // Exercise 3 : Repeat The Question

// let userInput = prompt("Please enter a number from 1 to 20:");
// let dataType = typeof userInput;

// console.log("You entered: " + userInput);
// console.log("Data type: " + dataType);

// while (userInput > 10) {
//     userInput = prompt("Please enter a number from 1 to 20:");
//     dataType = typeof userInput;

//     console.log("You entered: " + userInput);
//     console.log("Data type: " + dataType);
// }

// console.log(`Thanks you are put ${userInput} and that lower or equal 10`)

// // Exercise 4 : Building Management

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// // Console.log the number of floors in the building.
// console.log(`${building.numberOfFloors} floors in the building`);

// // Console.log how many apartments are on the floors 1 and 3.
// console.log(`${building.numberOfAptByFloor.firstFloor} apartments are on the 1th floor and ${building.numberOfAptByFloor.thirdFloor} apartments are on the 3th floor `);

// // Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log(`${building.nameOfTenants[1]} is the second tenant and ${building.numberOfRoomsAndRent.dan[0]} numbers of rooms he has in his apartment`);

// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// const sarahAndDavidRentSum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahAndDavidRentSum > danRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log("Dan's rent has been increased to 1200.");
// } else {
//     console.log("Dan's rent remains unchanged.");
// }


// // Exercise 5 : Family

// const family = {
//     father: "John",
//     mother: "Jane",
//     son: "Jack",
//     daughter: "Joahna",
//     pet: "James"
// };

// console.log("Keys of the object:");
// for (let key in family) {
//     console.log(key);
// }

// console.log("\nValues of the object:");
// for (let value in family) {
//     console.log(family[value]);
// }

// // Exercise 6 : Rudolf

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   };
  
//   let outputString = 'my ';
  
//   for (let key in details) {
//       outputString += details[key] + ' ';
//   }
  
//   console.log(outputString.trim());
  
  
//   Exercise 7 : Secret Group

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let secretSociety = "";

// for (let name of names) {
//     secretSociety += name[0];
// }

// secretSociety = secretSociety.split('').sort().join('');

// console.log("The name of the secret society:", secretSociety);
