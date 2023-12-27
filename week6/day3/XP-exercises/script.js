// // Exercise 1 : Scope

// // #1
// function funcOne() {
//     let a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne(); // Prediction: It will display "inside the funcOne function 3" because the if condition is true, and it sets 'a' to 3.

// // #1.2 What will happen if the variable is declared with const instead of let?
// // Prediction: It will result in an error because you cannot reassign a value to a constant variable.

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree(); // Prediction: It will display "inside the funcThree function 0" because 'a' is initially set to 0.
// funcTwo(); // Prediction: It will assign 5 to the global variable 'a'.
// funcThree(); // Prediction: It will display "inside the funcThree function 5" because 'a' has been modified by funcTwo.

// // #2.2 What will happen if the variable is declared with const instead of let?
// // Prediction: It will result in an error because you cannot reassign a value to a constant variable.

// //#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour(); // Prediction: It will set the global variable 'a' to "hello".
// funcFive(); // Prediction: It will display "inside the funcFive function hello" because 'a' is accessed from the global scope.

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix(); // Prediction: It will display "inside the funcSix function test" because the local variable 'a' shadows the global variable.

// // #4.2 What will happen if the variable is declared with const instead of let?
// // Prediction: It will not result in an error, but it will display "inside the funcSix function test". The constant variable 'a' will shadow the global variable.

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // Prediction: It will display "in the if block 5" and then "outside of the if block 2" because the inner 'a' shadows the outer 'a' only within the if block.

// // #5.2 What will happen if the variable is declared with const instead of let?
// // Prediction: It will not result in an error, but it will display the same output as with 'let'. The constant variable 'a' will shadow the global variable only within the if block.

// // Exercise 2 : Ternary Operator

// const winBattle = () => true; 
// const experiencePoints = winBattle () ? "10" : "1";
// console.log(experiencePoints)


// // Exercise 3 : Is It A String ?
// const isString = (value) => typeof value === 'string';

// // Example usage:
// console.log(isString("Hello"));   // Output: true
// console.log(isString(123));       // Output: false
// console.log(isString(true));      // Output: false


// // Exercise 4 : Find The Sum

// const myFunc = (x, y) => x + y;
// console.log(myFunc(6,7));

// // Exercise 5 : Kg And Grams

// function kgToGramsDeclaration() {
//     const weightInKg = parseFloat(prompt("Enter weight in kilograms:"));
//     return weightInKg * 1000;
// }

// console.log(kgToGramsDeclaration());

// const kgToGramsExpression = function() {
//     const weightInKg = parseFloat(prompt("Enter weight in kilograms:"));
//     return weightInKg * 1000;
// };

// console.log(kgToGramsDeclaration());

// // The difference:
// // Function declarations are raised, meaning they can be called before they are declared, while function expressions cannot be called before they are defined.

// const kgToGramsArrow = () => {
//     const weightInKg = parseFloat(prompt("Enter weight in kilograms:"));
//     return weightInKg * 1000;
// };

// console.log(kgToGramsDeclaration());




