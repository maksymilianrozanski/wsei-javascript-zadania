document.addEventListener("DOMContentLoaded", () => {

    let table = document.getElementById("orders");
    table.addEventListener("click", (ev) => {
        if (ev.target.className === "deleteBtn") {
            let table = ev.target.parentElement.parentElement.parentElement;
            let currentRow = ev.target.parentElement.parentElement.rowIndex;
            table.deleteRow(currentRow);
        }
    })
});
