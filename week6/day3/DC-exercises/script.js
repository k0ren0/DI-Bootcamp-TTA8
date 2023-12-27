let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// for (let fruit of groceries.fruits) {
//     console.log(fruit)
// };

groceries.fruits.forEach((fruit) => {
    console.log(fruit);
});


