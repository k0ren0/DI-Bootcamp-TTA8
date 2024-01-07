// //  Exercise 1 : Location

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// // Result: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// // Exercise 2: Display Student Info

// function displayStudentInfo(objUser){
//     //destructuring

//     const {first, last} = objUser;
//     return `Your full name is ${first} ${last}`;

// }

// const result = displayStudentInfo({first: 'Elie', last:'Schoppik'});
// console.log(result)


// // // Exercise 3: User & Id

// // const users = { user1: 18273, user2: 92833, user3: 90315 }
// // console.log(users)

// // 1
// const entries = Object.entries(users)
// console.log(entries);

// // // 2
// for (entry of entries) {
//     console.log(entry[0], entry[1]*2);
// }

// // or with MAP

// const newEntries = Object.entries(users).map(entry => [entry[0], entry[1] * 2]);
// console.log(usersArray);

// // // Exercise 4 : Person Class

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

//   Will be output "object" since member is an object 
// created using the Person class constructor.

// // // Exercise 5 : Dog Class
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };


// // // Exercise 6 : Challenges

// // 1

// [2] === [2] 
// {} === {}

// So, both statements are false.

// // 2

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) // 4
// console.log(object3.number) // 4
// console.log(object4.number) // 5

// After changing object1.number to 4, printing object2.number and object3.number outputs 4 
// object4.number remains 5 because it's a separate and unchanged object.

// // Part 1
// class Animal {
//         constructor(name, type, color){
//             this.name = name;
//             this.type = type;
//             this.color = color;
//         }
//     }
    
//     const myDog = new Animal('Lucky', 'dog', 'brown');
//     const myCat = new Animal('Crazy','cat', 'grey');
//     const myDolphin = new Animal('Quickly', 'dolphin', 'whitegray');
//     console.log(myDog);
//     console.log(myCat);
//     console.log(myDolphin);

//     // Part 2

//     class Animal {
//         constructor(name, type, color){
//             this.name = name;
//             this.type = type;
//             this.color = color;
//         }
//         makeSound(sound) {
//             return `${this.name}, ${this.color} ${this.type}, makes ${sound}`;
//         }

//         makeCowSound(soundCow) { //  Part 3
//             return `${soundCow} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
//         }
//     }
       
//     class Mammal extends Animal {
//         constructor(name, type, color) {
//             super(name, type, color);
//         }
    
//         sound(sound) {
//             return super.makeSound(sound);
//         }

//         soundCow(soundCow) { //  Part 3
//             return super.makeCowSound(soundCow);
//         }

//     }

// const myDog = new Mammal('Lucky', 'dog', 'brown');
// const myCat = new Mammal('Crazy','cat', 'grey');
// const myDolphin = new Mammal('Quickly', 'dolphin', 'white and gray');

// console.log(myDog.sound("Woof woof"));
// console.log(myCat.sound("Miow miow"));
// console.log(myDolphin.sound("tdsdsddffff"));

// //  Part 3

// const farmerCow = new Mammal('Lily', 'cow', 'brown and white')
// console.log(farmerCow.soundCow("Moooo"));


