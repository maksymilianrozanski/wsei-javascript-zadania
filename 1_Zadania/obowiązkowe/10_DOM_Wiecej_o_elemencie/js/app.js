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
});
