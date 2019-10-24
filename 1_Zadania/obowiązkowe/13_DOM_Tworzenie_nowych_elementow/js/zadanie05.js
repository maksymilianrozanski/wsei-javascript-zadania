document.addEventListener("DOMContentLoaded", () => {

    let list1 = document.getElementById("list1");
    let list2 = document.getElementById("list2");

    [list1, list2].forEach(
        list => {
            list.addEventListener("click", ev => {
                if (ev.target.className === "moveBtn") {
                    let liElement = ev.target.parentElement;
                    moveToAnotherList(liElement)
                }
            });
        }
    );

    function moveToAnotherList(liElement) {
        if (liElement.parentElement.id === "list1") {
            liElement.parentElement.removeChild(liElement);
            list2.appendChild(liElement)
        } else {
            liElement.parentElement.removeChild(liElement);
            list1.appendChild(liElement);
        }
    }
});
