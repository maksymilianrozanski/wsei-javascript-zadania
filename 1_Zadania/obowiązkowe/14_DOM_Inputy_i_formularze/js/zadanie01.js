document.addEventListener("DOMContentLoaded", () => {

    let invoiceCheckbox = document.getElementById("invoice");
    let invoiceData = document.getElementById("invoiceData");
    invoiceData.style.visibility = "hidden";
    invoiceCheckbox.addEventListener("click", () => {
        if (invoiceCheckbox.checked) {
            invoiceData.style.visibility = "visible"
        } else {
            invoiceData.style.visibility = "hidden"
        }
    })
});
