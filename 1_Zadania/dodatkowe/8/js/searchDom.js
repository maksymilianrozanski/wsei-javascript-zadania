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

