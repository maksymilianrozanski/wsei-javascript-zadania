window.addEventListener("DOMContentLoaded", () => {
    
    let anchors = document.getElementsByTagName("a");
    anchors[0].addEventListener("click", function() {
        this.nextElementSibling.style.display = "block";
    });
    
});