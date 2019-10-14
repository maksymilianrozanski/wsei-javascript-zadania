/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ...
//Deklaracja funkcji jeden
function jeden() {

    //Twoj komentarz ...
    //Deklaracja zmiennej wewnątrz funcji jeden
    var zmienna1 = 1;

    //Twoj komentarz ...
    //Deklaracja zmiennej dwa wewnątrz funkcji jeden
    function dwa() {

        //Twoj komentarz ...
        //Wypisanie zmiennej zadeklarowanej w funkcji jeden
        console.log(zmienna1);

        //Twoj komentarz ...
        //deklaracja funkcji zmienna2 wewnątrz funkcji dwa
        var zmienna2 = 3;
    }

    //Twoj komentarz ...
    //wywołanie funcji dwa
    dwa();

    //Twoj komentarz ...
    //próba wypisania wartości zmiennej 2, nieudana bo deklaracja zmiennej jest wewnątz funkcji wewnętrznej
    console.log(zmienna2)
}

//Twoj komentarz ...
//wywołanie funkcji jeden
jeden();
