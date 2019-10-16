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

});
