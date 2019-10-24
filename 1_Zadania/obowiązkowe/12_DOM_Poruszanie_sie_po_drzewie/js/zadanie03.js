function changeListItemsColors() {
    Array.from(this.children[0].children).forEach(li => {
        if (li.previousElementSibling === null) li.style.backgroundColor = "red";
        else if (li.nextElementSibling === null) li.style.backgroundColor = "blue";
        else li.style.backgroundColor = "green";
    })
}

document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.getElementsByClassName("listContainer")).forEach(
        div => {
            div.addEventListener("mouseover",
                changeListItemsColors
            )
        })
});

