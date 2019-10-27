//Zadanie 3
//Zmienne nazwane inaczej, aby uniknąc konfliktu z instniejącymi zmiennymi

for (var i2 = 0; i2 < 10; i2++) {
    console.log(i2)
}

console.log("");
//wypisana jest wartość 10, wartość w pętli jest powiększana po każdym wykonaniu
console.log(i2);
console.log("");

for (let j = 0; j < 10; j++) {
    console.log(j)
}

//console.log(j);    ReferenceError: j is not defined. W tym miejscu nie ma dostępu do zmiennej let
//zadeklarowanej wewnątrz pętli

//w pliku index.html jest odniesienie do zadanie01.js, poniższy kod nie działa poprawnie
document.addEventListener('DOMContentLoaded', function () {

    const x = 5;
    let y = 3;

    for (var i = 0; i < 10; i++) {
        console.log(i, y);
    }
    console.log(i, y);

    function myFn(param1) {
        let y = 4;
        let i = 20;
        console.log(param1, y, i);


    }

    myFn(i)

    console.log(x);
    {
        let y = 25;
        console.log(y);
        var z = 50;

    }

    console.log(z, y);
})
