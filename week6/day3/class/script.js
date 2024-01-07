// let y = 2;
// function greet() {
//     let x = 1;
//     return x + y;
// }

// console. log(greet());


//Access Before Decleration


// function checkAge(age) {
//     let message;
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
  
//   console.log(checkAge(1));

// function numbers() {
//     for (var i = 0; i < 5; i += 1) {
//       console.log(i);
//     }
//       console.log(i);
//   }
//   numbers();


// // Default Parameters

// function multiply(a, b = 1) {
//     return a * b;
//   }
  
//   console.log(multiply(5, 2));
//   //expected output: 10
  
//   console.log(multiply(5));
//   //expected output: 5

// III. Conditional In JavaScript
// A. Conditional (Ternary) Operator

// function getFee(isMember) {
//     return (isMember ? "$2.00" : "$10.00");
//   }

    // if (isMember) {
    // return 2.0;
    // } else {
    // return 10.0;
    // }
  
//   console.log(getFee(true));
//   // expected output: "$2.00"
  
//   console.log(getFee(false));
//   // expected output: "$10.00"
  
//   console.log(getFee(1));
//   // expected output: "$2.00"
//   // because Boolean(1) is true

// function checkYear() {
//     const year = parseInt(prompt("Enter a year:"));
//     console.log(year > 2000 ? "You are in the 21st century." : "You live in the Middle Ages.");
// }

// // Call the function
// checkYear();


// // IV. Strings In JavaScript
// // Template Strings

// let fname = "Viktor"
// console.log(`My name is ${fname}`)

// console.log('string text line 1\n' + 'string text line 2');
// console.log(`string text line 1
// string text line 2`);


// // Expression Interpolation
// var a = 5;
// var b = 10;
// console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);


// // // Functions

// // Function Declaration


// function funcName (parameters) {
//   // statement to execute
// }
// funcName(arguments)


// // Function Expression
// // Functions stored in variables do not need function names. They are always invoked (called) using the variable name.



// const funcName = function (parameters) {
//   // statement to execute
// }
// funcName(arguments)

// ES6 Arrow Function Expressions


// function myFunc (x, y) {
//     return x + y;
//   };
  
//   myFunc(2,9);
  
//   const myFunc1 = (x, y) => {
//     return x + y;
//   };
  
//   console.log(myFunc1(6,7));

//   const myFunc2 = (x, y) => x + y;
//   console.log(myFunc2(6,7));

// const funcName = () => //statement

// Concise Way To Write Functions In JavaScript.
// Syntax

// const funcName = () => {
//    // statement to execute
// }


// const show = (name, age) => {
//     console.log(name, age);
// }
// show("Sarah",20) 


// Implicit Return
// Arrow functions allow you to have an implicit return, values are returned without having to use the return keyword.



// If you use the block {} syntax, you need to specify the return keyword:


// const show = (x, y) => {
//     return x + y
// }


// If the arrow function only returns a value, you can omit the {} and the return keyword.
// const show = (x, y) => x + y


// Single Parameter, No Parameter
// If an arrow function takes a single parameter, you can omit the parentheses as follows:
// const show = (x) => x*2
// show(3) // 6

// //same as
// const show = x => x*2
// show(3) // 6


// let username = "john";
// const changeUsername = () => username.toUpperCase(); 
// changeUsername() // "JOHN"


// // Exercise
// const calculator = (num1, num2, operator) => {
//     return operator === '+' ? num1 + num2 :
//     operator === '-' ? num1 - num2 :
//     operator === '*' ? num1 * num2 :
//     operator === '/' ? num1 / num2 :
//     'Invalid operator';
// }

// // const calculator = (num1, num2, operator) => 
// //     operator === '+' ? num1 + num2 :
// //     operator === '-' ? num1 - num2 :
// //     operator === '*' ? num1 * num2 :
// //     operator === '/' ? num1 / num2 :
// //     'Invalid operator';

// console.log(result = calculator(5, 3, '*'));
// console.log(result = calculator(5, 3, '+'));
// console.log(result = calculator(5, 3, '-'));
// console.log(result = calculator(5, 3, '/'));
// console.log(result = calculator(5, 3, '%'));


// let say = function (name) {
//     alert("Hello " + name);
// }         
// say("Sarah"); 

// let say = function (name) {
//     alert(`Hello ${name}`);
// }         
// say("Sarah");

// // Exercise

// function add() {
//     let counter = 0;
//     function plus() {
//         counter += 1;
//         console.log(counter) ;
//     }
//     plus();  
//   }
  
//   add()


//   // Объявление функции add
// function add() {
//     // Инициализация локальной переменной counter, устанавливаем её в 0
//     let counter = 0;
  
//     // Объявление вложенной функции plus
//     function plus() {
//       // Увеличение значения переменной counter на 1
//       counter += 1;
//       // Вывод текущего значения counter в консоль
//       console.log(counter);
//     }
  
//     // Вызов функции plus
//     plus();
//   }
  
//   // Вызов функции add
//   add();
//   Основная идея кода заключается в создании функции add, которая содержит локальную переменную counter и вложенную функцию plus. При вызове функции add срабатывает вызов функции plus, которая увеличивает значение counter на 1 и выводит его в консоль.
  
//   Теперь давайте рассмотрим, что происходит при выполнении кода:
  
//   Вызывается функция add.
//   Внутри функции add создаётся локальная переменная counter со значением 0.
//   Вызывается функция plus.
//   Внутри функции plus значение counter увеличивается на 1 и выводится в консоль.
//   Таким образом, при выполнении данного кода будет выведено число 1 в консоль.

// // II. Closures

// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
  
//   let fnInside = outside(13);
//   console.log(fnInside) 
//   // function inside(y) {
//   //    return x + y;
//   //  }
//   console.dir(fnInside) 
//   // Closure (outside) x: 3
  
//   let result = fnInside(7); // The same as calling outside(3)(5)
//   console.log(result) // returns 8


// // Exercise
// // Analyse this code before executing it. Write explanatory comments. What will be the output ?

// let add = (function () {
//   let counter = 0;
//   function calculus() {
//       counter += 1; 
//       return counter
//   }
//   return calculus
// })();

// add();
// add();
// add();


// // Определяем функцию add с использованием мгновенно вызываемого функционального выражения (IIFE).
// let add = (function () {
//     // Инициализируем локальную переменную counter значением 0.
//     let counter = 0;
  
//     // Определяем внутреннюю функцию calculus внутри IIFE.
//     function calculus() {
//       // Увеличиваем счетчик на 1.
//       counter += 1;
//       // Возвращаем обновленное значение счетчика.
//       return counter;
//     }
  
//     // Возвращаем внутреннюю функцию calculus, создавая замыкание.
//     return calculus;
//   })();
  
//   // Вызываем функцию add три раза.
//   add(); // счетчик теперь равен 1
//   add(); // счетчик теперь равен 2
//   add(); // счетчик теперь равен 3
  
//   // Значение счетчика теперь 3, но оно не доступно напрямую извне IIFE.
  
// // III. Currying

// const add = a => b => a + b;
// const result = add(2)(3)
// console.log(result) // console.log 5

// const multiply = (n, m) => (n * m)
// multiply(3, 4) === 12 // true

// const curryedMultiply = (n) => (m) => multiply(n, m)
// let triple = curryedMultiply(3)
// triple(4) === 12 // true

// // Давайте разберем этот код на JavaScript с комментариями на русском:

// // Определяем функцию multiply с использованием стрелочной функции.
// const multiply = (n, m) => (n * m);

// // Вызываем функцию multiply с аргументами 3 и 4, затем сравниваем результат с 12.
// multiply(3, 4) === 12; // true

// // Определяем curryedMultiply, функцию, которая принимает один аргумент (n) и возвращает другую функцию.
// const curryedMultiply = (n) => (m) => multiply(n, m);

// // Вызываем curryedMultiply с аргументом 3, получаем функцию, которая умножает свой аргумент на 3.
// let triple = curryedMultiply(3);

// // Вызываем полученную функцию с аргументом 4, затем сравниваем результат с 12.
// triple(4) === 12; // true
// Объяснение:

// multiply - это функция, принимающая два аргумента (n и m) и возвращающая их произведение.

// multiply(3, 4) === 12 - вызываем функцию multiply с аргументами 3 и 4, затем сравниваем результат (произведение) с 12. В данном случае, это верное утверждение, поэтому результат равен true.

// curryedMultiply - это функция, которая принимает один аргумент (n) и возвращает другую функцию. Внутренняя функция, в свою очередь, принимает аргумент m и вызывает multiply с аргументами n и m.

// let triple = curryedMultiply(3) - вызываем curryedMultiply с аргументом 3 и сохраняем в переменную triple возвращенную функцию. Эта функция умножает свой аргумент на 3.

// triple(4) === 12 - вызываем функцию, сохраненную в triple, с аргументом 4 и сравниваем результат (произведение 3 на 4) с 12. В данном случае, это также верное утверждение, поэтому результат равен true.

// Таким образом, код демонстрирует использование каррирования (currying) для создания новой функции на основе существующей, что делает код более гибким и удобным для частичного применения аргументов.

// // Is There Uncurrying?

// curryedMultiply = (n) => (m) => n * m
// curryedMultiply(3)(4) === 12 // true

// multiply = (n, m) => curryedMultiply(n)(m)
// multiply(3, 4) === 12 // true

// // Примеры использования:

// // Каррирование:

// const add = (a) => (b) => a + b;
// const add2 = add(2); // Частичное применение
// console.log(add2(3)); // Вывод: 5

// // Декаррирование:


// const curryedMultiply = (n) => (m) => n * m;
// const multiply = (n, m) => curryedMultiply(n)(m); // Декаррирование
// console.log(multiply(3, 4)); // Вывод: 12

// // Определяем функцию curryedMultiply с использованием стрелочных функций.
// const curryedMultiply = (n) => (m) => n * m;

// // Вызываем curryedMultiply с аргументами 3 и 4, затем сравниваем результат с 12.
// curryedMultiply(3)(4) === 12; // true

// // Определяем функцию multiply с использованием curryedMultiply и декаррированием.
// const multiply = (n, m) => curryedMultiply(n)(m);

// // Вызываем multiply с аргументами 3 и 4, затем сравниваем результат с 12.
// multiply(3, 4) === 12; // true


// // Каррирование и декаррирование (uncurrying) - это взаимные операции, связанные с представлением функций. Давайте разберем ваш код и объясним, что такое декаррирование:

// // Определяем функцию curryedMultiply с использованием стрелочных функций.
// const curryedMultiply = (n) => (m) => n * m;

// // Вызываем curryedMultiply с аргументами 3 и 4, затем сравниваем результат с 12.
// curryedMultiply(3)(4) === 12; // true

// // Определяем функцию multiply с использованием curryedMultiply и декаррированием.
// const multiply = (n, m) => curryedMultiply(n)(m);

// // Вызываем multiply с аргументами 3 и 4, затем сравниваем результат с 12.
// multiply(3, 4) === 12; // true

// // Объяснение:

// // curryedMultiply - это каррированная функция, принимающая один аргумент n и возвращающая функцию, которая в свою очередь принимает аргумент m и возвращает произведение n * m.

// // curryedMultiply(3)(4) === 12 - вызываем curryedMultiply с аргументом 3, затем вызываем возвращенную функцию с аргументом 4 и сравниваем результат с 12. В данном случае, это верное утверждение, поскольку результат действительно равен 12.

// // multiply - это функция, использующая декаррирование. Она принимает два аргумента n и m, а затем вызывает каррированную функцию curryedMultiply с этими аргументами.

// // multiply(3, 4) === 12 - вызываем multiply с аргументами 3 и 4, затем сравниваем результат с 12. В данном случае, это также верное утверждение, потому что multiply внутренне использует curryedMultiply для умножения чисел.

// // Таким образом, декаррирование (uncurrying) - это процесс преобразования каррированной функции (принимающей несколько аргументов) в функцию, принимающую все аргументы одновременно. В вашем случае multiply представляет декаррированную версию curryedMultiply.


// Reference And Primitive Values: Pass By Value, Pass By Reference


// const colors = ["blue", "green", "grey"];
// //x1
// const person = {
// fname: "Daniel", age: 27,
// };
// //x2

// const colors1 = colors;
// const colors2 = [...colors1];
// //x1

// colors.push("black")
// colors1.push("pink")
// colors2.push("yellow")
// console.log(colors);
// console.log(colors1);
// console.log(colors2);


// //Copying as opposed to refrencing
// const colors = ["blue", "green", "grey"];
// console.log(...colors);
// const colors2 = [...colors];
// colors-push("black"); console.log(colors); console.log(colors2);

// // Objects And Properties
// // 1. Creating An Empty Object

// let user = {};  // "object literal" syntax
// let alsoUser = new Object(); // "object constructor" syntax

// // Dot-Notation : ObjectName.PropertyName

// let myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// console.log(myCar)
// console.log(myCar.make)
// console.log(myCar.model)
// console.log(myCar.year)
// console.log(myCar.color)

// Bracket-Notation : ObjectName[“PropertyName”]

// myCar['make'] = 'Ford';
// myCar['model'] = 'Mustang';
// myCar['year'] = 1969;

// for (let key in myCar) {
//     console.log(key);
// }

// for (let key in myCar) {
//     console.log(myCar[key]);
// }


// // four variables are created and assigned in a single go,
// // separated by commas
// let myObj = new Object(),
//     str = 'myString',
//     rand = Math.random(),
//     obj = new Object();

// myObj.type              = 'Dot syntax';
// myObj['date created']   = 'String with space';
// myObj[str]              = 'String value';
// myObj[rand]             = 'Random Number';
// myObj[obj]              = 'Object';
// myObj['']               = 'Even an empty string';

// console.log(myObj)
// // output
// { type: 'Dot syntax',
//   'date created': 'String with space',
//   myString: 'String value',
//   '0.6039956548449055': 'Random Number',
//   '[object Object]': 'Object',
//   '': 'Even an empty string' }



// // 3. Computed Properties

// let myCar = new Object()

// let propertyName = 'make';
// myCar[propertyName] = 'Ford';

// propertyName = 'model';
// myCar[propertyName] = 'Mustang';

// console.log(myCar)

// //output
// { make: 'Ford', model: 'Mustang' }


// // Давайте разберем этот код по шагам:

// let myCar = new Object() - создается новый объект myCar с использованием конструктора Object(). Это можно сделать также с помощью литерала объекта: let myCar = {}.

// let propertyName = 'make'; - создается переменная propertyName и ей присваивается значение 'make'.

// myCar[propertyName] = 'Ford'; - свойству объекта myCar с именем, равным значению переменной propertyName ('make'), присваивается значение 'Ford'. Теперь у объекта есть свойство make со значением 'Ford'.

// propertyName = 'model'; - значение переменной propertyName изменяется на 'model'.

// myCar[propertyName] = 'Mustang'; - свойству объекта myCar с именем, равным новому значению переменной propertyName ('model'), присваивается значение 'Mustang'. Теперь у объекта есть свойство model со значением 'Mustang'.

// console.log(myCar) - выводится объект myCar в консоль.

// Таким образом, в результате выполнения кода получается объект myCar с двумя свойствами: make со значением 'Ford' и model со значением 'Mustang'. Вывод в консоль будет следующим:

// javascript
// Copy code
// { make: 'Ford', model: 'Mustang' }
// Обратите внимание, что использование квадратных скобок [] позволяет обратиться к свойству объекта с динамически формируемым именем, что может быть полезно, например, при работе с переменными, как в данном случае с propertyName.


// // 4. Property Value Shorthand
// // Used when properties have the same names as variables

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

// // The same as
// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age,  // same as age: age
//     // ...
//   };
// }


// // Данный код иллюстрирует использование короткой записи при создании объектов в JavaScript, когда имена свойств объекта совпадают с именами переменных, значения которых используются для этих свойств. Давайте рассмотрим его на примере:


// // Используется длинная запись
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...другие свойства
//   };
// }

// let user = makeUser("John", 30);
// console.log(user.name); // Вывод: John
// В данном случае создается объект user с двумя свойствами: name и age. Имена свойств совпадают с именами параметров функции makeUser. Однако, чтобы избежать повторения имен, можно использовать короткую запись:


// // Используется короткая запись
// function makeUser(name, age) {
//   return {
//     name, // то же самое, что и name: name
//     age,  // то же самое, что и age: age
//     // ...другие свойства
//   };
// }

// let user = makeUser("John", 30);
// console.log(user.name); // Вывод: John

// // Это эквивалентная короткая запись, которая автоматически использует значения переменных name и age в качестве значений соответствующих свойств объекта. Эта короткая запись делает код более кратким и лаконичным, особенно в случаях, когда имена переменных и свойств совпадают.

// // Exercise

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
// //   for (const item in person) {
// //     console.log(item);
// //   }

// // update
// for (const item in person) {
//     console.log(item + " " + person[item]);
//   }


// More Javascript Methods

// let colors = ["blue", "yellow", "red"];
// console.log(colors.includes("red"));

// const str = 
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, assumenda eveniet. Rerum perferendis reprehenderit dolorem officia commodi soluta nisi suscipit illum corrupti. Vitae sunt molestias quod fuga asperiores, laudantium nobis?";
// console.log(str.includes("Omnis"));   

// console.log("bottle".replace("tt", "z")); 

// // padStart and padEnd

// console.log("string".padStart(9, "CAT").padEnd(12, "DOG"))

// let str= "string";
// str= str.padStart(str.length + 3, "CAT");
// console.log(str);







