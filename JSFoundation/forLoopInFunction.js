let cars = ["Volvo", "Toyota", "Benz", "BMW"];

let carModels = new Array(3).fill(cars);

function printArrayElement(cars) {
  for (let i = 0; i < cars.length; i++) {
    console.log("car models " + cars[i]);
  }
}
printArrayElement(carModels);
