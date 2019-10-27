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

});
