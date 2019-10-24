document.addEventListener("DOMContentLoaded", () => {

    Array.from(document.getElementsByClassName("parent"))
        .forEach(div => {
            div.addEventListener("mouseover", showChildrenElement);
            div.addEventListener("mouseout", hideChildrenElement)
        });

    function showChildrenElement() {
        this.children[0].style.display = "block";
    }

    function hideChildrenElement() {
        this.children[0].style.display = "none"
    }
});
