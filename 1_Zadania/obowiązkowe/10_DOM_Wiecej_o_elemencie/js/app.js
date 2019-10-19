document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zadanie 0
    let ex5 = document.getElementsByClassName("exercise ex5");
    let listItems = ex5[0].getElementsByTagName("LI");
    console.log(listItems);
    let elementNumber = 0;
    Array.from(listItems).forEach(it => {
        if (elementNumber % 2 === 0) {
            it.style.backgroundColor = "green";
        }
        if (elementNumber % 5 === 0){
            it.className = "big"
        }
        if (elementNumber % 3 ===0){
            it.style.textDecoration = "underline";
        }
        elementNumber++;
    });

    //Zadanie 1
    let ex1 = document.getElementsByClassName("exercise ex1");
    let chromeElement = ex1[0].getElementsByClassName("chrome");
    chromeElement[0].style.width = "100px";
    let chromeParent = chromeElement[0].parentNode;
    let chromeAnchor = chromeParent.getElementsByTagName("a");
    chromeAnchor[0].innerHTML = "Chrome";

    let edgeElement = ex1[0].getElementsByClassName("edge");
    edgeElement[0].style.backgroundImage = "url(assets/img/edge.png)";
    let edgeParent = edgeElement[0].parentNode;
    let edgeAnchor = edgeParent.getElementsByTagName("a");
    edgeAnchor[0].href = "https://www.microsoft.com/en-us/windows/microsoft-edge";

    let firefoxElement = ex1[0].getElementsByClassName("firefox");
    firefoxElement[0].style.backgroundImage = "url(assets/img/firefox.png)";
    let firefoxParent = firefoxElement[0].parentNode;
    let firefoxAnchor = firefoxParent.getElementsByTagName("a");
    firefoxAnchor[0].innerHTML = "Firefox";
    firefoxAnchor[0].href = "https://www.mozilla.org/en-US/firefox/new/";

    //Zadanie 2
    let name = document.getElementById("name");
    name.innerHTML = "Maksymilian";
    let favColor = document.getElementById("fav_color");
    favColor.innerHTML = "White";
    let favMeal = document.getElementById("fav_meal");
    favMeal.innerHTML = "Burger";

});
