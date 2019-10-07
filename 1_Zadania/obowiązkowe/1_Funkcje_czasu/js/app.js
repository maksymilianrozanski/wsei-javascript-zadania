//Zadanie 1
function countHello(number) {
    let counter = 1;
    let interval = setInterval(() => {
        console.log('Hello' + counter);
        counter++;
        if (counter > number) {
            clearInterval(interval);
        }
    }, 50);
}

countHello(5);
