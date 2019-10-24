document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById("remove");
    button.addEventListener("click", (ev) => {
        ev.target.parentElement.removeChild(ev.target)
    })
});
