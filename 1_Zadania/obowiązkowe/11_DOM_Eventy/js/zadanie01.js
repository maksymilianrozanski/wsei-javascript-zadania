window.addEventListener("DOMContentLoaded", (event) => {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// kod umieszczony w tagu head jest wykonywany przed wyswietlaniem strony
//tak, umieszczenie eventu poprawilo sytuacje
//ponowne przeniesienie tagu script do wnetrza tagu html nie powoduje zmian w wyswietlanej tresci
