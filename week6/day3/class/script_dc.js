// Давайте разберем весь код и поясним каждый его блок:

// Объявление переменных client и groceries:


// let client = "John";

// const groceries = {
//     fruits: ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice: "20$",
//     other: {
//         paid: true,
//         meansOfPayment: ["cash", "creditCard"]
//     }
// };
// Здесь создаются две переменные: client, содержащая строку "John", и groceries, содержащая объект с продуктами и другой информацией.

// Функция displayGroceries:


// const displayGroceries = () => {
//     groceries.fruits.forEach((fruit) => {
//         console.log(fruit);
//     });
// };
// displayGroceries();
// Функция displayGroceries использует метод forEach для перебора массива fruits в объекте groceries и выводит каждый фрукт в консоль.

// Функция cloneGroceries:


// const cloneGroceries = () => {
//     const clonedGroceries = { ...groceries };
//     let user = client;
//     let shopping = groceries;
//     return { clonedGroceries, user, shopping };
// };
// Функция cloneGroceries создает клон объекта groceries с использованием оператора расширения ({...groceries}). Создаются переменные user и shopping, которые получают значения client и groceries соответственно. Функция возвращает объект, содержащий клонированные groceries, user и shopping.

// Изменение client и вывод в консоль:


// const { clonedGroceries, user, shopping } = cloneGroceries();
// console.log("User:", user);
// client = "Betty";
// console.log("Modified Client:", client);
// console.log("User after modification:", user);
// Выводится исходное значение переменной user ("John"), затем client изменяется на "Betty", и выводится измененное значение client. Однако, значение user не изменится, так как user - это отдельная копия значения client, а не ссылка на переменную client.

// Изменение clonedGroceries.totalPrice:


// clonedGroceries.totalPrice = "35$";
// console.log("Modified Cloned Groceries:", clonedGroceries);
// console.log("Shopping after modifying cloned groceries:", shopping);
// Здесь изменяется значение totalPrice в объекте clonedGroceries на "35$". Затем выводятся измененный clonedGroceries и shopping. Обе переменные отражают изменение, потому что они ссылаются на один и тот же объект.

// Изменение clonedGroceries.other.paid:


// clonedGroceries.other.paid = false;
// console.log("Modified Cloned Groceries:", clonedGroceries);
// console.log("Shopping after modifying cloned groceries:", shopping);
// Аналогично, изменяется значение paid в объекте other в clonedGroceries. Обе переменные clonedGroceries и shopping отражают это изменение, так как они ссылаются на один и тот же объект.

// В итоге, код демонстрирует работу с переменными, создание копии объекта, и влияние изменений на клонированный и оригинальный объекты.