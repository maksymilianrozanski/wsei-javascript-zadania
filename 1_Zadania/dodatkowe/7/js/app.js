//Zadanie 1
function getNumber(number, array) {
    return array.includes(number)
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

//Zadanie 2
function createIdentityMatrix(rows, columns) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            if (i === j) {
                row.push(1)
            } else {
                row.push(0)
            }
        }
        array.push(row)
    }
    return array
}

console.log(createIdentityMatrix(4, 4));

//Zadanie 1 - dodatkowe

function addTheSameNumbers(number, array) {
    if (!array.includes(number)) return null;
    return array.reduce((sum, current) => {
        if (current === number) {
            return sum + number
        } else return sum;
    }, 0);
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

//Zadanie 2 - dodatkowe

function factors(number) {
    let result = [];
    if (number <= 0) return result;
    for (let i = number; i > 0; i--) {
        if (number % i === 0) {
            result.push(i)
        }
    }
    return result;
}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));

//Zadanie 3 - dodatkowe
function getMissingElement(array) {
    let missingValue =
        array.find((element, index) => {
            if (array[index + 1] - element > 1) return element;
        }) + 1;
    if (isNaN(missingValue)) {
        return null
    } else return missingValue;
}

console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));

//Zadanie 4 - dodatkowe
function getLastNumbers(number, array) {
    if (isNaN(number)) return [];
    let startIndex = array.length - number;
    return array.slice(startIndex)
}

console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
console.log(getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]));
