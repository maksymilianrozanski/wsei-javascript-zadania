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
