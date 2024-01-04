// // Function to get the Y value, and it calls the provided callback with the value 6
// function getY(callback) {
//     callback(6);
// }

// // Function to get the X value, and it calls getY with a callback that logs the sum of X and Y
// function getX(callback) {
//     // Assuming x is 17
//     var x = 17;

//     // Calling getY with a callback function
//     getY(function(y) {
//         console.log(x + y);
//     });
// }

// // Calling getX
// getX();



// // Создание нового обещания (Promise)
// const myPromise = new Promise((resolve, reject) => {
//     // Ваш асинхронный код помещается сюда
    
//     // Если операция успешна, вызывается resolve
//     // Например, предположим, что какая-то асинхронная задача выполнена успешно
//     // resolve("Операция успешно завершена");
    
//     // Если возникла ошибка, вызывается reject
//     // Например, предположим, что в асинхронной задаче произошла ошибка
//     // reject("Произошла ошибка");
//   });
  
//   // Обработка обещания
//   myPromise
//     .then((result) => {
//       // Этот блок выполняется, когда обещание выполнено
//       console.log("Выполнено:", result);
//     })
//     .catch((error) => {
//       // Этот блок выполняется, когда обещание отклонено
//       console.error("Отклонено:", error);
//     });
  

// // В представленном коде:

// // new Promise используется для создания нового обещания.
// // Функция внутри Promise принимает два параметра: resolve и reject. Это функции, которые вы вызываете в зависимости от результата вашей асинхронной операции.
// // Блок then выполняется, если обещание выполнено, и блок catch выполняется, если обещание отклонено.
// // Не стесняйтесь заменить комментарии фактическим асинхронным кодом внутри конструктора new Promise.



// // Функция flip генерирует случайный результат броска монеты: "head" (орел), "tail" (решка) или "side" (ребро).
// const flip = () => {
//     const coin = Math.floor(Math.random() * 3);
//     return coin < 2 ? (coin === 0 ? "head" : "tail") : "side";
// };

// // Создаем новое обещание (Promise) с использованием конструктора Promise.
// const flipCoinPromise = new Promise((resolve, reject) => {
//     // Задержка в 1000 миллисекунд (1 секунда) с помощью функции setTimeout, эмулирующая асинхронную операцию.
//     setTimeout(() => {
//         // Вызываем функцию flip для получения результата броска монеты.
//         const flipResult = flip();

//         // Проверяем результат броска монеты и вызываем соответствующую функцию - resolve или reject.
//         if (flipResult) {
//             // Если бросок прошел успешно, вызываем resolve и передаем результат.
//             resolve(flipResult);
//         } else {
//             // Если возникла ошибка, вызываем reject и передаем сообщение об ошибке.
//             reject("Failed to flip the coin.");
//         }
//     }, 1000); // Операция происходит через 1 секунду.
// });

// // Обработка обещания с использованием методов then (в случае успешного выполнения) и catch (в случае ошибки).
// flipCoinPromise
//     .then((result) => {
//         // Этот блок выполняется, когда обещание выполнено успешно (resolve).
//         console.log("result", result);
//     })
//     .catch((error) => {
//         // Этот блок выполняется, когда обещание отклонено (reject) или возникла ошибка.
//         console.error("reject", error);
//     });


// //  В предоставленном коде используются промисы (Promises) и функция броска монеты для демонстрации асинхронности и обработки результатов асинхронных операций в JavaScript.

// // Вот пошаговое объяснение:

// // flip функция:

// // flip представляет собой функцию, которая моделирует бросок монеты.
// // Она генерирует случайное число (coin), затем возвращает "head" (орел), "tail" (решка) или "side" (ребро) в зависимости от значения coin.
// // flipcoin Промис:

// // Создается новый промис (flipcoin), который представляет асинхронную операцию (бросок монеты) с использованием setTimeout.
// // Внутри промиса через 1 секунду вызывается функция flip, и результат передается в функцию обещания через resolve (в случае успешного выполнения) или reject (в случае ошибки).
// // Обработка промиса:

// // Используются методы then и catch для обработки результата промиса.
// // В блоке then выполняется код, если промис успешно выполнен (выполнен resolve), и в нем выводится результат броска монеты в консоль.
// // В блоке catch выполняется код, если промис отклонен (вызван reject) или возникла ошибка, и в консоль выводится сообщение об ошибке.
// // Цель:

// // Этот код служит примером использования промисов для управления асинхронными операциями в JavaScript.
// // Промисы предоставляют удобный механизм для работы с асинхронным кодом, делая его более понятным и управляемым.
// // В общем, код демонстрирует, как можно использовать промисы для обработки асинхронных операций, таких как задержка с использованием setTimeout, и как правильно обрабатывать результаты этих операций.


// // // // // // // // //  Вариант с JSON

// const flip = () => {
//     const coin = Math.floor(Math.random() * 3);
//     return coin < 2 ? (coin === 0 ? "head" : "tail") : "side";
// };

// const flipcoin = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const flipResult = flip();
//         if (flipResult === "head" || flipResult === "tail") {
//             // Используем JSON для представления результата в виде строки
//             const resultJSON = JSON.stringify({ result: flipResult });
//             resolve(resultJSON);
//         } else {
//             // В случае ошибки также представляем ее в виде JSON
//             const errorJSON = JSON.stringify({ error: flipResult });
//             reject(errorJSON);
//         }
//     }, 1000);
// });

// // Обработка обещания
// flipcoin
//     .then((resultJSON) => {
//         // Разбираем JSON, чтобы получить объект с результатом
//         const resultObj = JSON.parse(resultJSON);
//         console.log("Результат броска:", resultObj.result);
//     })
//     .catch((errorJSON) => {
//         // Разбираем JSON, чтобы получить объект с ошибкой
//         const errorObj = JSON.parse(errorJSON);
//         console.error("Ошибка при броске монеты:", errorObj.error);
//     });

// // // // // // // // // // GET

// const getX = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 2000);
//     });
// };

// const getY = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6);
//         }, 3000);
//     });
// };

// const getXY = () => {
//     let x = getX(); 
//     console.log('x =>', x);

//     x.then((resultX) => {
//         console.log('resultX =>', resultX);
//         let y = getY(); 
//         console.log('y =>', y);

//         y.then((resultY) => {
//             console.log('resultY =>', resultY);
//             console.log('resultX + resultY =>', resultX + resultY);
//         })
//         .catch((errorY) => {
//             console.error('Error resultY:', errorY);
//         });
//     })
//     .catch((errorX) => {
//         console.error('Error resultX:', errorX);
//     });
// };

// // Пример использования
// getXY();



// В представленном коде использованы промисы и задержки (setTimeout) для демонстрации асинхронности в JavaScript. Давайте рассмотрим, зачем это может быть полезно:

// Асинхронность:

// Промисы позволяют обрабатывать асинхронные операции более удобно, чем использование колбэков.
// В данном случае, функции getX и getY представляют собой асинхронные операции, которые выполняются через определенное время с использованием setTimeout.
// Последовательные операции:

// Промисы позволяют выполнять последовательные асинхронные операции, используя метод then. В коде getXY, после завершения операции getX, выполняется операция getY, и затем выводится сумма результатов X и Y.
// Управление потоком выполнения:

// Промисы обеспечивают лучшее управление потоком выполнения в сравнении с колбэками. Это делает код более читаемым и легким для понимания.
// Обработка ошибок:

// Использование метода catch позволяет обрабатывать ошибки, возникающие в ходе асинхронных операций. Например, если операция getX завершится с ошибкой, код в блоке catch сможет обработать эту ошибку.
// Пример для обучения:

// Этот код может служить хорошим примером для изучения работы с промисами и асинхронным кодом в JavaScript.
// В общем, использование промисов и асинхронных операций в таких примерах демонстрирует способы эффективной работы с асинхронностью в языке программирования JavaScript.


// // 1.-simulateAsyncoperation function-return a Promise with data as
// // Array-of objects from server as json
// // Simulate successful completion after 2 seconds
// // 2. Call this function and log the data as an Array datatype
// // 3. -Simulate an error

// const simulateAsyncOperation = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const arr = [
//                 { username: "aaa", email: "aaa@aaa.co.il" },
//                 { username: "bbb", email: "bbb@bbb.co.il" },
//                 { username: "ccc", email: "ccc@ccc.co.il" },
//             ];

//             resolve(JSON.stringify(arr));
//         }, 2000);
//     });
// };

// simulateAsyncOperation()
//     .then((res) => {
//         console.log(res);
//         return JSON.parse(res);
//     })
//     .then((data) => {
//         showData(data);
//     })
//     .catch((error) => {
//         console.error("Error:", error.message);
//     });

// const showData = (arr) => {
//     const html = arr.map((item) => {
//         return `<div>${item.username}, ${item.email}</div>`;
//     });
//     document.getElementById("root").innerHTML = html.join("");
// };



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

//   Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Конечно! Ваш код использует Promise.all, Promise.allSettled и Promise.race для работы с несколькими промисами. Давайте разберем каждую часть:

// Promise.all:

// Promise.all используется, когда вы хотите дождаться разрешения всех промисов, и он отклоняется, если хотя бы один из промисов отклоняется.
// В вашем примере используется Promise.all([promise1, promise2, promise3]), поэтому он будет ждать, пока все три промиса завершатся (разрешатся или отклонятся).
// Если все промисы разрешатся, выполнится блок then, и результаты (массив разрешенных значений) будут выведены в консоль.
// Если хотя бы один из промисов отклонится, выполнится блок catch, и ошибка будет выведена в консоль.
// Promise.allSettled:

// Promise.allSettled используется, когда вы хотите дождаться завершения всех промисов (разрешения или отклонения), независимо от того, разрешаются они или отклоняются.
// В вашем примере используется Promise.allSettled([promise1, promise2, promise3]).
// Выполнится блок then, и будет выведен массив объектов, представляющих завершение каждого промиса. Каждый объект в массиве имеет свойство status, указывающее, был ли промис выполнен или отклонен, и свойство value или reason, содержащее разрешенное значение или причину отклонения, соответственно.
// Promise.race:

// Promise.race используется, когда вы хотите дождаться первого завершения промиса (разрешения или отклонения).
// В вашем примере используется Promise.race([promise1, promise2, promise3]).
// Выполнится блок then сразу после завершения первого промиса (либо разрешением, либо отклонением), и результат будет выведен в консоль.
// Если самый быстро завершившийся промис разрешится, вы получите разрешенное значение. Если он отклонится, вы получите причину отклонения.
// Ваш код корректно демонстрирует использование этих различных методов агрегации промисов в зависимости от ситуации, когда нужно дождаться разрешения всех промисов, завершения всех промисов или получения результата первого завершившегося промиса.


