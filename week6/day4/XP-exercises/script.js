// // Exercise 1 : Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element, index) => {
//     console.log(`${index + 1}# choice ${element}`); 
// });

// console.log(colors.includes("Violet") ? "Yeah" : "No...");

// // -------------------------------------------------------------------
// // Exercise 2 : Colors #2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((color, index) => {
//     const suffix = ordinal[index < 3 ? index + 1 : 0];
//     console.log(`${index + 1}${suffix} choice is ${color}.`);
//   });


// // -------------------------------------------------------------------
// // Exercise 3 : Analyzing
// // 1
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// // result ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// // 2
// const country = "USA";
// console.log([...country]);

// // result ['U', 'S', 'A']


// // -------------------------------------------------------------------
// Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// // 1
// const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);

// console.log(welcomeStudents);

// // 2
// const fullStack = users.filter((user) => user.role === `Full Stack Resident`);

// console.log(fullStack );

// // // // OR

// const fullStack = users.filter((user) => user.role === `Full Stack Resident`);
// // console.log(fullStack);
// const welcomeFullStack = fullStack.map((user) => `Hello ${user.firstName}`); 
// console.log(welcomeFullStack);

// // // // OR

// const welcomeFullStack = users
//     .filter((user) => user.role === 'Full Stack Resident')
//     .map((user) => `Hello ${user.firstName}`);
// console.log(welcomeFullStack);

// // 3/ Bonus

// const fullStackLastNames = users
//   .filter((user) => user.role === 'Full Stack Resident')
//   .map((user) => user.lastName);

// console.log(fullStackLastNames);


// // // //  Exercise 5 : Star Wars

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const starWars = epic.reduce((acc, word) => {
//     return acc + ' ' + word;
//   });
  
// console.log(starWars)

// // // // Exercise 6 : Employees #2

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// const passedStudents = students.filter((student) => student.isPassed);

// console.log(passedStudents);



