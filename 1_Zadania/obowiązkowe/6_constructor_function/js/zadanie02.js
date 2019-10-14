//Zadanie 2
function Calculator() {
    this.operations = [];
}

Calculator.prototype.add = function (num1, num2) {
    let result = num1 + num2;
    this.operations.push("added " + num1 + " to " + num2 + " got " + result);
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    let result = num1 * num2;
    this.operations.push("multiplied " + num1 + " with " + num2 + " got " + result);
    return result;
};

Calculator.prototype.subtract = function (num1, num2) {
    let result = num2 - num1;
    this.operations.push("subtracted " + num1 + " from " + num2 + " got " + result);
    return result;
};

Calculator.prototype.divide = function (num1, num2) {
    let result = num1 / num2;
    this.operations.push("divided " + num1 + " by " + num2 + " got " + result);
    return result;
};

Calculator.prototype.printOperations = function () {
    this.operations.forEach(it => console.log(it));
};

Calculator.prototype.clearOperations = function () {
    this.operations.length = 0;
};

//test
let myCalculator = new Calculator();
console.log(myCalculator.add(2, 3));
console.log(myCalculator.multiply(2, 3));
console.log(myCalculator.subtract(3, 2));
console.log(myCalculator.divide(8, 2));
myCalculator.printOperations();
myCalculator.clearOperations();
myCalculator.printOperations();
