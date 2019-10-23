document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.body.children).map(it => it.addEventListener("click", (ev => {
        let next = ev.target.nextElementSibling;
        if (next !== null && next.tagName !== "SCRIPT") {
            if (next.style.visibility === 'visible' || next.style.visibility === "") {
                next.style.visibility = 'hidden'
            } else {
                next.style.visibility = 'visible'
            }
        }
    })))
});
