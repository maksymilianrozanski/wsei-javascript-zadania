document.addEventListener('DOMContentLoaded', function (callbackfn) {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    });
    console.log(result);

    //Zadanie 0
    let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    let nameLengths = cities.reduce((array, element) => {
        array.push(element.length);
        return array;
    }, []);
    console.log(nameLengths);

    //Zadanie 1
    function randomize(param1, param2, callback) {
        if (callback instanceof Function) {
            let randomValue = (param2 - param1) * Math.random();
            return callback(randomValue)
        }
    }

    function print(number) {
        console.log(number)
    }

    randomize(20, 100, print)
});
