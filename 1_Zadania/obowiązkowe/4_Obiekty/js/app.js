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
    console.log("Moving to " + place + " in " + date);
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("2030-02-02", "WSEI");

//Zadanie 1
let book = {};
book.title = "Tytuł";
book.author = "Autor";
book.numberOfPages = 140;
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//Zadanie 2
let person = {};
person.name = "imię";
person.age = 100;
person.sayHello = function () {
    console.log("hello")
};

console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
let coffee = {};
coffee.title = "Flat White";
coffee.servings = 2;
coffee.ingredients = ["Water", "Coffee", "Milk"];

console.log(coffee.title);
console.log(coffee.servings);
coffee.ingredients.forEach(it => console.log(it));

//Zadanie 4
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
};

for (let each in movie) {
    console.log(each + ": " + movie[each.valueOf()])
}

//Zadanie 5
var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

];
console.log(" ");
for (let i = 0; i < animals.length; i++) {
    for (let each in animals[i]) {
        if (!Array.isArray(animals[i][each.valueOf()])) {
            console.log(each + ": " + animals[i][each.valueOf()])
        } else {
            for (let health in animals[i][each.valueOf()]) {
                for (let property in animals[i][each.valueOf()][health]) {
                    console.log(property.valueOf() + ": " + animals[i][each.valueOf()][health][property.valueOf()])
                }
            }
        }
    }
    console.log(" ")
}
