document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zadanie 0
    function getDatasInfo(elements) {
        let newArray = [];
        Array.from(elements).forEach(element => {
            newArray.push(element.dataset);
        });
        return newArray
    }

    let result = getDatasInfo(links);

    //Zadanie 1
    console.log(homeElement);
    console.log(childElements);
    console.log(banner);
    console.log(blocks);
    console.log(links);

    Array.from(childElements).forEach(console.log);
    Array.from(blocks).forEach(console.log);
    Array.from(links).forEach(console.log);

    let elementsArray = [homeElement, childElements, banner, blocks, links];
    elementsArray.forEach(element => {
        console.log("tagName: " + element.tagName + " className: " + element.className)
    });

    //Zadanie 2
    Array.from(blocks).forEach(it => console.log(it.innerHTML));
    Array.from(blocks).forEach(it => console.log(it.outerHTML));
    //innerHTML zwraca tylko zawartość wewnątrz tagu, outerHTML zwraca tag wraz z zawartością
    Array.from(blocks).forEach(it => it.innerHTML = "Nowa wartość diva o klasie blocks");
    //Zmiana wartości innerHTML zmienia wyświetlane elementy/tekst

    //Zadanie 3
    let mainFooter = document.getElementById("mainFooter");

    function getId(element) {
        return element.id;
    }

    console.log(getId(mainFooter));

});
