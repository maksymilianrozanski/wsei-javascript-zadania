var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    }

};

calculator.save(2, 3);

calculator.sum = function () {
    return this.a + this.b;
};

calculator.multiply = function () {
    return this.a * this.b;
};

console.log(calculator.sum());
console.log(calculator.multiply());
