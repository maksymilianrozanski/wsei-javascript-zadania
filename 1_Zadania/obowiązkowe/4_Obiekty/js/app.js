//Zadanie 0a
let city = {};
city.capital = "Warsaw";
city.population = 10000;
city.president = "Mr. President";
city.primeMinisters = ["Minister1", "Minister2"];

console.log(city.capital);
console.log(city.population);
console.log(city.president);
city.primeMinisters.forEach(it => console.log(it));

//Zadanie 0b
let timeMachine = {};
timeMachine.shape = "triangle";
timeMachine.model = "x27";
timeMachine.run = function (date, place) {
console.log("Moving to "+ place + " in " + date);
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("2030-02-02", "WSEI");
