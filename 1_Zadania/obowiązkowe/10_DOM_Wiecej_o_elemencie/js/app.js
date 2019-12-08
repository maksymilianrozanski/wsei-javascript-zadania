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
        if (elementNumber % 5 === 0) {
            it.classList.add("big");
        }
        if (elementNumber % 3 === 0) {
            it.style.textDecoration = "underline";
        }
        elementNumber++;
    });

    //Zadanie 1
    let ex1 = document.getElementsByClassName("exercise ex1");
    let chromeElement = ex1[0].getElementsByClassName("chrome");
    chromeElement[0].style.width = "100px";
    let chromeAnchor = chromeElement[0].nextElementSibling;
    chromeAnchor.innerHTML = "Chrome";

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
    name.innerHTML = "Maksymilian Różański";
    let favColor = document.getElementById("fav_color");
    favColor.innerHTML = "White";
    let favMeal = document.getElementById("fav_meal");
    favMeal.innerHTML = "Burger";

    //Zadanie 3
    let ex3 = document.getElementsByClassName("exercise ex3");
    let unorderedList = ex3[0].getElementsByTagName("ul");
    unorderedList[0].className = "menu";
    let ex3ListItems = ex3[0].getElementsByTagName("li");
    Array.from(ex3ListItems).forEach(it => {
        if (it.className.search("menuElement") === -1) it.className += " menuElement";
        it.className = it.className.replace("error", "");
        it.className = it.className.trim()
    });

    //Zadanie 4
    let ex4 = document.getElementsByClassName("exercise ex4");
    let ex4ListItems = ex4[0].getElementsByTagName("li");
    let startNumber = 1;
    Array.from(ex4ListItems).forEach(it => {
        it.dataset["id"] = startNumber;
        startNumber++;
    });

});
