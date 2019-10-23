document.addEventListener("DOMContentLoaded", () => {
    let bigBoxDiv = document.getElementById("box");
    let isMouseOver = false;
    let mouseEvent;

    bigBoxDiv.addEventListener("mousemove", (event) => {
        mouseEvent = event;
        isMouseOver = true;
    });

    bigBoxDiv.addEventListener("mouseout", () => {
        isMouseOver = false;
    });

    setInterval(() => {
        if (isMouseOver) {
            updateGlobalSpans(getWindowMousePosition(mouseEvent));
            updateElementSpans(getElementMousePosition(mouseEvent));
        }
    }, 200);
});

function updateGlobalSpans(coordinates) {
    let globalX = document.getElementById("globalX");
    let globalY = document.getElementById("globalY");
    globalX.innerHTML = coordinates.xCoordinate;
    globalY.innerHTML = coordinates.yCoordinate;
}

function updateElementSpans(coordinates) {
    let localX = document.getElementById("localX");
    let localY = document.getElementById("localY");
    localX.innerHTML = coordinates.xCoordinate;
    localY.innerHTML = coordinates.yCoordinate;
}

function getWindowMousePosition(event) {
    let x = event.clientX;
    let y = event.clientY;
    return {xCoordinate: x, yCoordinate: y}
}

function getElementMousePosition(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    return {xCoordinate: x, yCoordinate: y}
}
