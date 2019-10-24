document.addEventListener("DOMContentLoaded", () => {

    let list = document.getElementsByClassName("list")[0];
    let button = document.getElementById("remove");

    button.addEventListener("click", () => {
        Array.from(list.children).forEach(
            it => it.parentElement.removeChild(it)
        )
    })
});
