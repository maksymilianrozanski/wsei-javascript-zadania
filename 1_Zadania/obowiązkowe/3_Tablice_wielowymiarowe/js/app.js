var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Zadanie 0
const arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

function checkArray(array2d) {
    let newArray = [];
    for (let i = 0; i < array2d.length; i++) {
        if (array2d[i][0] % 2 === 0) {
            newArray.push(true)
        } else {
            newArray.push(false)
        }
    }
    return newArray
}

console.log(checkArray(arr));

//Zadanie 1
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

//Zadanie 2
task2Array[0].forEach(it => {
    console.log(it)
});

//TODO: W pętli wypisz długość tablic składających się na 2gi wymiar.

task2Array.forEach(it => it.forEach(it2 => console.log(it2)));

//Zadanie 3
function print2DArray(array2d) {
    array2d.forEach(it => it.forEach(it2 => console.log(it2)));
}

//Zadanie 4
let array2dZad3 = [[1, 2], [3, 4]];
print2DArray(array2dZad3);

//Zadanie 5
function create2DArray(rows, columns) {
    let number = 1;
    let result = [];
    for (let row = 0; row < rows; row++) {
        result[row] = [];
        for (let column = 0; column < columns; column++) {
            result[row][column] = number;
            number++;
        }
    }
    return result
}

console.log(create2DArray(4, 4));
