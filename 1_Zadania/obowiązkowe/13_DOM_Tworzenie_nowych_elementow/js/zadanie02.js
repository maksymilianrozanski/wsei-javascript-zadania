document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById("addBtn");
    button.addEventListener("click", () => {
        console.log("click");

        let orders = document.getElementById("orders");
        let orderId = document.getElementById("orderId");
        let item = document.getElementById("item");
        let quantity = document.getElementById("quantity");

        let newRow = document.createElement("tr");

        let newIdData = document.createElement("td");
        newIdData.innerHTML = orderId.value;
        newRow.appendChild(newIdData);

        let newItemData = document.createElement("td");
        newItemData.innerHTML = item.value;
        newRow.appendChild(newItemData);

        let newQuantityData = document.createElement("td");
        newQuantityData.innerHTML = quantity.value;
        newRow.appendChild(newQuantityData);

        orders.appendChild(newRow)
    })
});
