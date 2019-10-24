document.addEventListener("DOMContentLoaded", () => {

    Array.from(document.getElementsByClassName("parent"))
        .forEach(div => {
            div.addEventListener("mouseover", showChildren);
            div.addEventListener("mouseout", hideChildren)
        });

    function showChildren() {
        this.children[0].style.display = "block";
    }

    function hideChildren() {
        this.children[0].style.display = "none"
    }
});
