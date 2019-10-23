document.addEventListener("DOMContentLoaded", function () {
    displaySizeValues();

    window.addEventListener("resize", () => {
        displaySizeValues();
    })
});

function displaySizeValues() {
    let windowWidthSpan = document.getElementById("windowWidth");
    let windowHeightSpan = document.getElementById("windowHeight");
    windowWidthSpan.innerHTML = window.innerWidth.toString();
    windowHeightSpan.innerHTML = window.innerWidth.toString();
}
