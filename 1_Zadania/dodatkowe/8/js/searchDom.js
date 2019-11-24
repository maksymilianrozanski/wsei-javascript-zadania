//Zadanie 2
//2.1
let menuElement = document.getElementById('menu');

function getDataInfo(element) {
    let dataInfoArray = [];

    element.childNodes.forEach(it => {
        if (it.tagName === "LI") dataInfoArray.push(it.getAttribute('data-info'));
    });
    return dataInfoArray;
}

getDataInfo(menuElement).forEach(it => console.log(it));

//2.2
let mainContener = document.getElementById('main-contener');

function getElementClass(element) {
    return Array.from(element.classList).reduce((accumulator, it) => {
            accumulator.push(it);
            return accumulator;
        }, []
    )
}

console.log(getElementClass(mainContener));

//2.3
let pinkColor = document.getElementsByClassName('pink-color')[0];

function getElementText(element) {
    return element.innerText;
}

console.log(getElementText(pinkColor));

//2.4
let imageElements = document.getElementsByClassName('images');

function getElementAlt(imageElements) {
    let elements = [];
    Array.from(imageElements).forEach(img => elements.push(img.alt));
    return elements;
}

console.log(getElementAlt(imageElements));

//2.5
let myLinkElements = document.getElementsByClassName('my-link');

function getElementHref(myLinkElements) {
    let hrefs = [];
    Array.from(myLinkElements).forEach(it => hrefs.push(it.href));
    return hrefs;
}

console.log(getElementHref(myLinkElements));