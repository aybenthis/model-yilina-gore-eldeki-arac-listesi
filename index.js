const { arabaStogu } = require('./arabaStogu.js');

function countStock(cars, model) {
  const filteredCars = cars.filter((car) => car.name.includes(model));
  const yearCount = {};

  filteredCars.forEach((car) => {
    if (yearCount[car.year]) {
      yearCount[car.year]++;
    } else {
      yearCount[car.year] = 1;
    }
  });
  return yearCount;
}
