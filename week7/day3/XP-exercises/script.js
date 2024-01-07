// // Exercise 1 : Comparison

// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//       if (num <= 10) {
//         resolve(`${num} is less than or equal to 10`);
//       } else {
//         reject(`${num} is greater than 10`);
//       }
//     });
//   }

//   compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))



// // Exercise 2 : Promises

// function findSuccess() {
//     return new Promise ((resolve) => {
//     setTimeout(() => {
//         resolve('Success');
//         }, 4000); // delay 4 seconds

//     });
// }

// findSuccess()
// .then(result => console.log(result))
// .catch(error => console.error(error));



// // Exercise 3 : Resolve & Reject

// // 1
// const resPromise = Promise.resolve(3);

// resPromise.then(result => {
//   console.log(result); // Output: 3
// });


// // 2

// const errPromise = Promise.reject("Boo");

// errPromise.catch(error => {
//   console.log(error); // Output: "Boo"
// });



