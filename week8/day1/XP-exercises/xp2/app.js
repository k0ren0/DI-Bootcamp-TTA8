import people from "./data.js";

console.log(people);

const calcAverageAge = (people) => {
    const averageAge = (people.reduce((sum, person) => sum + person.age, 0) / people.length).toFixed(2);
    console.log(`Average age: ${averageAge}`);
  };
  
calcAverageAge(people);
  