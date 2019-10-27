//I. Sprawdź najpierw zasięg let
let numbers = [2, 3, 4];
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to :ReferenceError: numbers is not defined
    //Dlaczego taki wynik? zmienna jest nie zadeklarowana
    console.log(numbers);

    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to [ 2, 3, 4 ]
    //Dlaczego taki wynik? ponieważ zmienna jest wcześniej zadeklarowana
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to [ 2, 3, 4 ]
//Dlaczego taki wynik? ponieważ blok został zamknięty
console.log(numbers);



//II. Sprawdź teraz  zasięg const
const PI = 3.14;
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to ReferenceError: PI is not defined
    //Dlaczego taki wynik? ponieważ zmienna jest nie zadeklarowana
    console.log(PI);

    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to 3.14
    //Dlaczego taki wynik? ponieważ zmienna jest zadeklarowana
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to 3.14
//Dlaczego taki wynik? ponieważ blok został zamknięty
console.log(PI);
