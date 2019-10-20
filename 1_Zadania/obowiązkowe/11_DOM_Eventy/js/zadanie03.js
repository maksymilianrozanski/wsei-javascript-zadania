document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button1").addEventListener("click", () => {
        let currentSpan = document.getElementsByTagName("span")[0];
        currentSpan.innerHTML = parseInt(currentSpan.innerHTML) + 1;
    });
    document.getElementById("button2").addEventListener("click", () => {
        let currentSpan = document.getElementsByTagName("span")[1];
        currentSpan.innerHTML = parseInt(currentSpan.innerHTML) + 1;
    });
    document.getElementById("button3").addEventListener("click", () => {
        let currentSpan = document.getElementsByTagName("span")[2];
        currentSpan.innerHTML = parseInt(currentSpan.innerHTML) + 1;
    })
});
