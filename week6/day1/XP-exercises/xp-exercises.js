// // Exercise 1 : List Of People
// // Part 1
// // 1
const people = ["Greg", "Mary", "Devon", "James"];

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


// Part II - Loops
// 1
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
// 2
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

    if (people[i] === 'Devon') {
        console.log('Devon found! Exit.');
        break;
    }
}