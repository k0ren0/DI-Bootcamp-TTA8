let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

const cloneGroceries = () => {
    const clonedGroceries = { ...groceries };
    let user = client; // user === John
    client = "Betty";
    const shopping = { ...groceries };
    shopping.totalPrice = "35$";
    clonedGroceries.other.paid = false;

    console.log("Groceries", groceries);
    console.log("Shopping", shopping);

    return { clonedGroceries, user, shopping };
}

displayGroceries();
cloneGroceries();




