// // // Exercise 1 : Promise.All()

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

//   Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   Explanation:
// Promise1 is immediately fulfilled with a value of 3.
// Promise2 has a non-perspective value (42) and is considered to be fulfilled.
// Promise3 will be executed after a delay of 3 seconds with a value of 'foo'.
// Thus, Promise.all will wait for the fulfillment of all three promises and the then block will be executed with the array [3, 42, 'foo'] which represents the fulfillment values of the three promises.

// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Resolve Promise 1");
//     }, 2 * 1000);
//   });

  
// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Resolve Promise 2");
//     }, 5 * 1000);
//   });

// const promise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Resolve Promise 3");
//     }, 1 * 1000);
//   });



// // Exercise 2 : Analyse Promise.All()

// function timesTwoAsync(x) {
//     return new Promise(resolve => resolve(x * 2));
//   }
  
//   const arr = [1, 2, 3];
//   const promiseArr = arr.map(timesTwoAsync);
  
//   Promise.all(promiseArr)
//     .then(result => {
//       console.log(result);
//     });


// Will be [ 2, 4, 6 ] because resolve * 2!