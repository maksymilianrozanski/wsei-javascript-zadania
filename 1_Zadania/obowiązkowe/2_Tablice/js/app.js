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
