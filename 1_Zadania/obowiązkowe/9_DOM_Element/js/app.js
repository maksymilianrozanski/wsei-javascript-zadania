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
});
