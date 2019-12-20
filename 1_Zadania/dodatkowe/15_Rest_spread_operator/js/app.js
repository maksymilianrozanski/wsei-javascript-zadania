//Zadanie 0
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil","Jan", "Karol" ];


function getAverage() {
    return Array.from(arguments).reduce((acc, current) =>
          acc + current, 0)/ arguments.length
}
console.log(getAverage(2,4,5,6,7,79))
console.log(getAverage(2,4,6))