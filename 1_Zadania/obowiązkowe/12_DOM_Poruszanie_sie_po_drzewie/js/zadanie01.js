EventTarget.prototype.changeVisibility = changeVisibility;

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click",
        (ev) => {
            ev.target.changeVisibility()
        }
    );
});

function changeVisibility() {
    let next = this.nextElementSibling;
    if (next !== null && next.tagName !== "SCRIPT") {
        if (next.style.visibility === 'visible' || next.style.visibility === "") {
            next.style.visibility = 'hidden'
        } else {
            next.style.visibility = 'visible'
        }
    }
}
