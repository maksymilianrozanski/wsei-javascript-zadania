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

//Zadanie 1
car.dates = [];
car.addDate = function (date) {
    this.dates.push(date);
};
car.getDates = function () {
    return this.dates;
};

car.addDate("2019-02-02");
console.log(car.getDates());

//Zadanie 3
let stairs = {
    step: 0,
    up: function () {
        this.step += 1;
    },
    down: function () {
        this.step -= 1;
    },
    printStep: function () {
        console.log(this.step)
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep(); // 2
