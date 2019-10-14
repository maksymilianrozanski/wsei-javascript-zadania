/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...
//deklaracja funkcji
function sortArray() {

    //Twoj komentarz ...
    //deklaracja tablicy wewnątrz funkcji
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twoj komentarz ...
    //wywołanie funkcji sortującej tablicę
    points.sort(function (a, b) {
        //Twoj komentarz ...
        //w jaki sposób mają być porównywane wartości (zwracane mniejsze od zera, zero, lub większe od zera)
        return a - b;
    });

    //Twoj komentarz ...
    //zwracanie posortowanej listy
    return points;
}

//Twoj komentarz ...
//wywołanie funkcji
sortArray();

console.log(sortArray());
