// // Exercise 1 : Find The Numbers Divisible By 23

// function displayNumbersDivisible() {
//     let sum = 0;
  
//     for (let i = 0; i <= 500; i++) {
//       if (i % 23 === 0) {
//         console.log(i);
//         sum += i;
//       }
//     }
  
//     console.log("Sum :", sum);
//   }
 
//   displayNumbersDivisible();  

// // Exercise 2 : Shopping List

// const stock = {
//   "banana": 6,
//   "apple": 0,
//   "pear": 12,
//   "orange": 32,
//   "blueberry": 1
// };

// const prices = {
//   "banana": 4,
//   "apple": 2,
//   "pear": 1,
//   "orange": 1.5,
//   "blueberry": 10
// };

// const shoppingList = ["banana", "orange", "apple"];

// function myBill(shoppingList, stock, prices) {
//   let totalPrice = 0;

//   for (let i = 0; i < shoppingList.length; i++) {
//     const item = shoppingList[i];
    
//     if (item in stock) {
       
//       if (item in prices) {

//         if (stock[item] > 0) {
        
//           totalPrice += stock[item] * prices[item];
         
//           stock[item]--;

//         } else {
//           console.log(`Attention: ${item} out of the stock.`);
//         }   

//       } else {
//         console.log(`Attention: No price available for ${item}.`);
//       }
//     } else {
//       console.log(`Attention: ${item} is not in stock.`);
//     }
//   }

//   return totalPrice;
// }


// const total = myBill(shoppingList, stock, prices);
// console.log("Total:", total);
// console.log("Remaining stock:", stock);


// // Exercise 3 : What’s In My Wallet ?


// function changeEnough(itemPrice, amountOfChange) {

//   let total = (amountOfChange[0] * 0.25) + (amountOfChange[1] * 0.10) + (amountOfChange[2] * 0.05) + (amountOfChange[3] * 0.01);

//   return total >= itemPrice;
// }

// let result = changeEnough(4.25, [25, 20, 5, 0]);
// console.log(result);

// let result1 = changeEnough(14.11, [2,100,0,0]);
// console.log(result1);

// let result2 = changeEnough(0.75, [0,0,20,5]);
// console.log(result2);

// // Exercise 4 : Vacations Costs

// const readlineSync = require('readline-sync');

// function hotelCost() {
//   let nights;

//   while (true) {
//     nights = parseInt(prompt("Enter quontity of nights in the hotel:"));

//     if (!isNaN(nights) && nights > 0) {
//       return nights * 140; 
//     } else {
//       alert("Please enter quontity of nights.");
//     }
//   }
// }

// // Cost
// function planeRideCost() {
//   let destination = prompt("Enter your destination:");

//   switch (destination.toLowerCase()) {
//     case 'london':
//       return 183;
//     case 'paris':
//       return 220;
//     default:
//       return 300;
//   }
// }

// // Rental car cost
// function rentalCarCost() {
//   let days = parseInt(prompt("Enter the number of days for car rental:"));

//   let cost = days * 40; // price per day

//   if (days > 10) {
//     cost *= 0.95; // discount
//   }

//   return cost;
// }

// // Total vacation cost
// function totalVacationCost() {
//   let hotelCostValue = hotelCost();
//   let planeRideCostValue = planeRideCost();
//   let rentalCarCostValue = rentalCarCost();

//   let totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;

//   return `Hotel cost: $${hotelCostValue}, plane tickets cost: $${planeRideCostValue}, car rental cost: $${rentalCarCostValue}. Total cost: $${totalCost}.`;
// }

// // Call the function
// let vacationCostSummary = totalVacationCost();
// console.log(vacationCostSummary);


// Exercise 5 : Users