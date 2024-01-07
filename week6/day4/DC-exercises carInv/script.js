// Part I

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

function getCarHonda(carInventory) {
    const hondaCar = carInventory
      .filter((car) => car.car_make === "Honda")
      .map((car) => `This is a ${car.car_make} ${car.car_model} from ${car.car_year}.`);
  
    return hondaCar.length > 0 ? hondaCar[0] : "Toyota the best cars).";
  }

const result = getCarHonda(inventory);
console.log(result);

// Part II

function sortCarInventoryByYear(carInventory) {
    return carInventory.slice().sort((car1, car2) => car1.car_year - car2.car_year);
  }
  
  const sortedInventory = sortCarInventoryByYear(inventory);
  console.log(sortedInventory);