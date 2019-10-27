let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    //Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
    //Wartości zadeklarowane wewnątrz bloku {}, brane są pod uwagę najpierw zmienne o mniejszym zasięgu
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
//Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
//Wartości zadeklarowane przed blokiem {}, w tym miejscu nie ma dostępu do zmiennych zadeklarowanych wewnątrz bloku
