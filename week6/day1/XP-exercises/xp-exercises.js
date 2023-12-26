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


// Exercise 3 : What’s In My Wallet ?

