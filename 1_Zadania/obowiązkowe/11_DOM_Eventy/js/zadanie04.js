document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (element) => {
        if (element.target.id === 'button1' ||
            element.target.id === 'button2' ||
            element.target.id === 'button3') {
            let currentSpan = document.getElementsByClassName("counter")[0];
            currentSpan.innerHTML = parseInt(currentSpan.innerHTML) + 1;
        }
    }, false);
});
