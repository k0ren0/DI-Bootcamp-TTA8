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

const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });
};
displayGroceries();

const cloneGroceries = () => {
    const clonedGroceries = { ...groceries };
    let user = client;
    let shopping = groceries;
    return { clonedGroceries, user, shopping };
}

const { clonedGroceries, user, shopping } = cloneGroceries();

console.log("User:", user);

client = "Betty";

console.log("Modified Client:", client);
console.log("User after modification:", user);

clonedGroceries.totalPrice = "35$";
console.log("Modified Cloned Groceries:", clonedGroceries);
console.log("Shopping after modifying cloned groceries:", shopping); // Yes, we will see the modification in the shopping object. They share the same reference to the original object.

clonedGroceries.other.paid = false;
console.log("Modified Cloned Groceries:", clonedGroceries);
console.log("Shopping after modifying cloned groceries:", shopping); 





