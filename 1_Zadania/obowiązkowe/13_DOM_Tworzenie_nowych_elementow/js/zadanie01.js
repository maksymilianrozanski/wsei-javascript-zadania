document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementsByClassName("button")[0];
    let ul = document.getElementsByClassName("menu")[0];
    button.addEventListener("click", () => {
        let listItem = document.createElement("li");
        listItem.innerHTML = "Element " + (ul.childElementCount + 1) +
            " w chwili dodania było " + ul.childElementCount + " elementów";
        ul.appendChild(listItem);
    })
});
