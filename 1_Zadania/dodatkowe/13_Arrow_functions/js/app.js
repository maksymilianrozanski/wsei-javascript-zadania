//Zadanie 0
class Students {
    constructor(students) {
        this.students = students
    }
}

Students.prototype.countLetters = function () {
    this.numberOfLetters = this.students.reduce((accumulator, current) => {
        accumulator.push(current.length);
        return accumulator;
    }, [])
};

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters); // [4, 5, 7]

//Zadanie 1
const helloWorld = () => console.log("Hello World");
helloWorld();

//Zadanie 2
const multiplyByTwo = (number) => typeof number !== "undefined" ? number * 2 : 1;
console.log(multiplyByTwo(3));
console.log(multiplyByTwo());
