// let b = 3, d = b, u = b;
// const tree = ++d *  d*b  *  b++  +
//  + --d+   +   +b-- +
// + +d*b+  +  
// u

// console.log(tree);

// 4 * 4 * 3 * 3 + 

// 3 + 4 + 

// 3 * 3 + 

// 3

// let obj = {
//     name: "dan",
//     age:16
// }

// obj.email = "dan@dan.con"

// let obj1 = new Object();
// obj1.name = "John";
// obj1["email"] = "john@gmail.com";

// console.log(obj);
// console.log(obj1);

// let name = obj.name;
// console.log(name);

// let email = obj.email;
// console.log(email);

// /* dynamic key */

// let a = 'bnbnbn'
// let obj2 = {
//     [a] : 'Marry',
// }

// console.log(obj2[a]);


// let e = "email";
// let un = "username";

// let obj3 = {
//     [e]: 'jjj@gmail.com',
//     [un]: "john@gmail.com"
// }

// console.log(obj3);

// console.log(obj3.email);
// console.log(obj3["email"]);
// console.log(obj3[e]);


// // loop
// let obj = {
//     name: "dan",
//     age:16
// }

// for (x in obj){
//     console.log(x, obj[x]);
// }

// // ** object.keys */

// const keys = Object.keys(obj);
// console.log(keys);
// keys.forEach(item => {
//     console.log(item);
// })

// // ** object.values */

// const values = Object.values(obj);
// console.log(values);
// console.log(item);

// Object.values(obj).forEach((item) => {
//     console.log(item);
// }) ;

// // ** object.entries */

// const entries = Object.entries(obj);
// console.log(entries);
// for (x of entries) {
//     console.log(x[0], x[1]);
// }

// // ** Object.fromEntries() */

// const shopping = [
//     ["apple", "$2"],
//     ["pear", "$1"],
//     ["banana", "$0.77"],
//   ];
  
//   const shoppingObject = Object.fromEntries(shopping);
//   console.log(shoppingObject); 



// let obj = {
//     name: "dan", 
//     age: 16,
// };

// /** clone */

// let obj1 = {...obj};

// obj1.age = 20

// console.log('obj=>', obj); 
// console.log('obj1=>', obj1);

// /** deep cloning */

// let obj = {
//     name: "dan", 
//     age: 16,
//     address: {
//         city: 'Tel aviv'
//     }
// };

// let obj2 = {...obj};

// obj2.name = 'Marry';
// obj2["age"] = 25;
// obj2.address.city = "Paris";

// console.log('obj=>', obj); 
// console.log('obj2=>', obj2);


// /** JSON */

// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

// let newObj = JSON.parse(jsonObj);
// console.log("newObj=>", newObj);

// newObj.address.city = "New York";


// /** Merging */

// let obj = {
//     name: "dan", 
//     age: 16,
// };

// let obj2 = {
//     city: "TLV",
//     name: "Marry"
// };

// let obj3 = {...obj2, ...obj}
// // obj.city = obj2.city
// console.log(obj3);


// // /** Destcurting */

// let obj = {
//     fname: "dan", 
//     age: 16,
// };

// // const fname = obj.fname;
// // const age = obj["age"];

// // //  OR // //

// const {fname, age} = obj

// console.log(fname, age);

// // // v2

// let arr = ["one", "two"];

// const [a, b] = arr;

// console.log(a,b);

// // /** Spreading */

// let obj = {
//     fname: "dan", 
//     age: 16,
// };

// let obj1 = {...obj, city:"tlv", lname:"cohen", age: 30}
// console.log(obj1);

// // // /** Nested Object Destructuring  */

// let obj = {
//     fname: "dan", 
//     age: 16,
//     address: {
//         city:"NY",
//         country:"USA"
//     }
// };

// const {fname, age, address} = obj;

// console.log(fname, age, address.city);

// // // OR

// const {fname, age, address:{city}} = obj;

// console.log(fname, age, city);

// // // OR

// const {fname, age, address:{city, country}} = obj;

// console.log(fname, age, city, country);


// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys


// const users = {
//     user1: { age: 44, name: 'picard', },
//     user2: { age: 12, name: 'sisko', },
//     user3: { age: 109, name: 'janeway',},
//   }

// // Results:

// // {id:'user1',age:44, name: 'picard'},
// // {id:'user3',age:109, name: 'janeway'}


// // //   // OR


// const keysUsers = Object.keys(users)
//   .filter(key => users[key].age > 30)
//   .map(key => ({
//     id: key,
//     age: users[key].age,
//     name: users[key].name,
//   }));

// console.log(keysUsers);


// // OR (деструктуризация и лучший вариант)

// const keysUsers_var2 = Object.keys(users)
//   .filter(key => users[key].age > 30)
//   .map((id) => ({id: id, ...users[id]}));

// console.log(keysUsers_var2);



// let name = "Marry";
// let email = "m@gmail.com";
// let id = "user1";

// let obj = {
//     name,
//     email,
//     id,
// };

// console.log(obj);


// /** object method */


// let obj = {
//     name: "jonh",
//     getName: function(){
//         return this.name
//     }
// }

// let username = obj.getName()
// console.log(username);

// // console.log(this);


// /** CLASS */

// class Animal {
//     constructor(animalname){
//         this.name = animalname;
//     }
//     makeSound() {
//         return (`${this.name} make a sound`)
//     }
// }

// const animalA = new Animal('Dog');
// const animalB = new Animal('Lion');
// let soundA = animalA.makeSound();
// let soundB = animalB.makeSound();
// console.log(soundA);
// console.log(soundB);


// // /** SUBcLASS */


// class Animal {
//     constructor(animalname){
//         this.name = animalname;
//     }
//     makeSound() {
//         return (`${this.name} make a sound`)
//     }
// }

// const animalA = new Animal('Dog');
// const animalB = new Animal('Lion');

// let soundA = animalA.makeSound();
// let soundB = animalB.makeSound();

// // console.log(soundA);
// // console.log(soundB);

// class Dog extends Animal {
//     constructor(name){
//         super("Dog")
//         this.mydogname = name
//     }
//     // getters
//     bark(){
//         return `My ${this.name}, ${this.mydogname} bark`;
//     }
//     makeSound(){
//         return "how how"
//     }

//     getName(){
//         return this.mydogname
//     }


//     // setters
//     setName(val){
//         this.mydogname = val
//     }
    
// }

// class Chinto extends Dog {

// }

// const myDog = new Dog('Tony');


// let sound = myDog.bark();
// let soundAnimal = myDog.makeSound();
// console.log(sound);
// console.log(soundAnimal);

