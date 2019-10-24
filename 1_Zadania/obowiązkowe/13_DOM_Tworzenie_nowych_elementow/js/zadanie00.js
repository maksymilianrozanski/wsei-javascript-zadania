document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.getElementsByClassName("deleteBtn");
    Array.from(buttons).forEach(
        button => {
            button.addEventListener("click", (ev => {
                let table = button.parentElement.parentElement.parentElement;
                let currentRow = button.parentElement.parentElement.rowIndex;
                table.deleteRow(currentRow);
            }));
        }
    )
});
