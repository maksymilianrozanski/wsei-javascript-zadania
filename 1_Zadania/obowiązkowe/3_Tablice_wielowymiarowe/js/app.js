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
