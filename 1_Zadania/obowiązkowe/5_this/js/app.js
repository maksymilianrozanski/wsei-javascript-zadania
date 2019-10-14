//Zadanie 0
let car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKilometers: 0,
    printCarInfo: function () {
        return this.color + " " + this.brand + ", " + this.numberOfKilometers
    },
    drive: function (km) {
        this.numberOfKilometers += km
    }
};

console.log(car.printCarInfo());
car.drive(20);
console.log(car.printCarInfo());
