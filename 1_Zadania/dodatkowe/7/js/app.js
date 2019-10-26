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
