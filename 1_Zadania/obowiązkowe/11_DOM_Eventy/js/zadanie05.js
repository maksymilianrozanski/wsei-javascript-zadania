document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (element) => {
        console.log("123");
        let idOfClicked = element.target.id;
        document.getElementById(idOfClicked).style.backgroundColor = "#" + Math.floor(Math.random() * 16777);
    }, false);
});
