document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //Zadanie 0
    function getDataAnimationElement(element) {
        let dataAnimation = element.getAttribute("data-animation");
        return dataAnimation.valueOf();
    }

    let title = document.getElementsByClassName("title")[0];
    getDataAnimationElement(title);

    //Zadanie 1
    //Element o id home (na dwa sposoby).
    let elementHome = document.getElementById("home");
    console.log(elementHome);
    let elementHome2 = document.getElementsByTagName("header")[0];
    console.log(elementHome2);

    //Pierwszy element li posiadający atrybut data-direction.
    let isDataDirectionDefined = function (element) {
        return element.getAttribute("data-direction") !== undefined;
    };
    let allListItems = document.getElementsByTagName("li");
    let filteredListItems = Array.from(allListItems).filter(
        isDataDirectionDefined
    );
    let firstLiItemDataDirectionDefined = filteredListItems[0];
    console.log(firstLiItemDataDirectionDefined);

    //Pierwszy element o klasie block.
    let firstBlock = document.getElementsByClassName("block")[0];
    console.log(firstBlock);

    //Zadanie 2
    let allNavElements = document.getElementsByTagName("nav");
    console.log(allNavElements);
    console.log("Number of nav elements: " + allNavElements.length);

    let pElements = document.getElementsByTagName("p");
    console.log(pElements);
    console.log("Number of p elements: " + pElements.length);

    let articleElements = document.getElementsByTagName("article");
    let isDiv = function (element) {
        return element.tagName === 'DIV'
    };

    let articleElementsChildren = [];
    Array.from(articleElements).forEach(articleElement => {
        Array.from(articleElement.childNodes).forEach(it => {
            articleElementsChildren.push(it)
        });
    });

    let divElements = articleElementsChildren.filter(
        isDiv
    );
    console.log(divElements);
    console.log("Number of div elements inside article tag elements: " + divElements.length);

});
