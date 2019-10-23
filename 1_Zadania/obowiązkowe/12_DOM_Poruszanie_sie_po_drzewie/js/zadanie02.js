function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

EventTarget.prototype.changeColor = function () {
    this.parentElement.style.backgroundColor = randomColor();
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("hi");
    document.body.addEventListener("click", (ev) => {
        ev.target.changeColor()
    })
});

