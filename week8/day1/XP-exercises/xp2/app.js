import people from "./data.js";

console.log(people);

const calcAverageAge = (people) => {
    if (people.length === 0) return "Data unavailable.";
    
    const averageAge = (people.reduce((sum, person) => sum + person.age, 0) / people.length).toFixed(0);
    console.log(`The average age of all persons is: ${averageAge} years`);
  };
  
calcAverageAge(people);
  