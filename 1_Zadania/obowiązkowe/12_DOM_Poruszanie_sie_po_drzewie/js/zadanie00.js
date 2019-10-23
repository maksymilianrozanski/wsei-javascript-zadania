document.addEventListener("DOMContentLoaded", function () {
    let element1 = document.getElementsByClassName("first")[0].children[0].children[2];
    console.log(element1);

    let element2 = document.getElementById("second").parentElement.children[3];
    console.log(element2);

    let thirdDataEx = Array.from(document.querySelectorAll("[data-ex]"))
        .filter(
            it => it.getAttribute("data-ex") === "third"
        );
    let grandFather = thirdDataEx[0].parentElement.parentElement;
    let grandFathersLastChild = grandFather.children[grandFather.children.length - 1];
    let firstChild = grandFathersLastChild.firstElementChild;
    let element3 = firstChild.children[parseInt((firstChild.children.length / 2).toString())];
    console.log(element3);

    let forthDiv = Array.from(document.getElementsByTagName("div")).filter(
        it => it.className === "forth"
    )[0];
    let articleTagElement = Array.from(forthDiv.parentElement.children)
        .filter(
            it => it.tagName === "ARTICLE"
        )[0];
    let element4 = Array.from(articleTagElement.children).filter(it => it.tagName === "P")[1];
    console.log(element4);

});
