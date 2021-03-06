//Zadanie 0
function distFromAverage(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    let avg = sum / inputArray.length;

    let newArray = [];

    for (let j = 0; j < inputArray.length; j++) {
        newArray.push(Math.abs(inputArray[j] - avg));
    }
    return newArray;
}

distFromAverage([1, 2, 3, 4, 5, 6, 7]);
distFromAverage([1, 1, 1, 1]);
distFromAverage([2, 8, 3, 7]);

console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(distFromAverage([1, 1, 1, 1]));
console.log(distFromAverage([2, 8, 3, 7]));

//Zadanie 1
const fruitsArray = ['blueberry', 'orange', 'strawberry'];

function fruits(fruits) {
    //first
    console.log(fruits[0]);
    //last
    console.log(fruits[fruits.length - 1]);
    //all
    fruits.forEach(it => console.log(it.toString()))
}

fruits(fruitsArray);

//Zadanie 3
const array = [1, 2, 3, 4];

function printTable(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printTable(array);

//Zadanie 4
function multiply(array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result = result * array[i];
    }
    return result;
}

console.log(multiply([1, 2, 3, 4, 5, 6, 7]));
console.log(multiply([1, 1, 1, 1]));
console.log(multiply([2, 8, 3, 7]));

//Zadanie 5
function getEvenAverage(array) {
    let sum = 0;
    let counter = 0;

    array.forEach(
        it => {
            if (it % 2 === 0) {
                sum += it;
                counter++;
            }
        }
    );

    if (counter === 0) return null;
    return sum / counter;
}

console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));

//Zadanie 6
function sortArray(array) {
    return array.sort(function (a, b) {
        return a > b
    })
}

console.log(sortArray([145, 11, 3, 64, 4, 6, 10]));

//Zadanie 7
function addArrays(array1, array2) {
    let longerArray;
    let shorterArray;
    if (array1.length > array2.length) {
        longerArray = array1;
        shorterArray = array2
    } else {
        longerArray = array2;
        shorterArray = array1
    }

    for (let i = 0; i < longerArray.length; i++) {
        let shorterArrayValue = shorterArray[i];
        if (shorterArrayValue === undefined) {
            break;
        }
        longerArray[i] = longerArray[i] + shorterArrayValue;
    }

    return longerArray;
}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));
console.log(addArrays([8, 3, 22], [1, 3, 2]));
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));
