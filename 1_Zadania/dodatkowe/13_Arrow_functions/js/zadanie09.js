document.addEventListener("DOMContentLoaded", () => {

    //hide <ul> elements where parent is <div> element
    Array.from(document.getElementsByTagName("UL")).filter(
        it => it.parentElement.tagName === 'DIV'
    ).forEach(it => it.style.display = "none");

    Array.from(document.getElementsByTagName("SPAN"))
        .forEach(it => {
            it.addEventListener("mouseover", (ev => {
                ev.target.nextSibling.nextSibling.style.display = "block"
            }));

            it.addEventListener("mouseleave", (ev => {
                ev.target.nextSibling.nextSibling.style.display = "none"
            }))
        })
});
