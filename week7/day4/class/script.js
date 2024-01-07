// function simpleAsync() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(1);
//         });
//     });
// }

// simpleAsync()
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// /** return promise */
// async function asyncFunction() {
//     // throw new Error('aaaa');
//     return 10;
// }

// const arrowAsyncFunction = async () => {};

// // asyncFunction()
// //     .then((result) => console.log(result))
// //     .catch((err) => console.log('catching my error =>', err));


// async function getResult() {
//     try {
//         let res = await asyncFunction();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }

// }

// getResult();

// // // // GET XY

// const getX = () => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res(5);
//       }, 2000);
//     });
//   };
  
//   const getY = () => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res(6);
//       }, 3000);
//     });
//   };

//   function getXY() {
//     getX()
//       .then((resultX) => {
//         getY()
//           .then((resultY) => {
//             return resultX + resultY;
//           })
//           .then((sum) => {
//             console.log(sum);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   getXY()

// // OR ASYNC

// async function getXY() {
//     try {
//         const resultX = await getX();
//         const resultY = await getY();
//         const sum = resultX + resultY;
//         console.log(sum);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getXY();


// ASync Loops/Await In Loops
//- WARNING: async/await doesn't play nicely with .forEach() loops //• async/await plays nicely with for, for: of and while loops

// const timeout = async (milliseconds, id) => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(id, "Done!");
//             resolve();
//         }, milliseconds);
//     });
// };

// async function x() {
//     console.log("before");

//     // ["first", "second", "third"].forEach(async (item) => {
//     //     await timeout(2000, item);
//     // });
//     for(item of ["first", "second", "third"]){
//         await timeout(2000, item);
//     }
//     console.log("after")
// }

// x();