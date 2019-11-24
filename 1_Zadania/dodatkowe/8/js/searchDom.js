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
