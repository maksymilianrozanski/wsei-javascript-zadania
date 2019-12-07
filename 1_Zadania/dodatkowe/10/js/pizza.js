window.addEventListener("DOMContentLoaded", () => {

    let checkBoxElements = document.getElementsByTagName("INPUT");
    let priceCheckBoxElements = Array.from(checkBoxElements).filter(
        it => it.hasAttribute('data-price')
    );
    let wszystkieCheckBoxElement = checkBoxElements[0];
    let clearCheckBoxElement = checkBoxElements[checkBoxElements.length -1 ];
    
    function calculatePrice(){
        return priceCheckBoxElements.reduce((sum, current) =>{
            if(current.checked === true) {
            sum = sum + parseFloat(current.dataset.price);
        }
            return sum;
        }, 0);   
    }

    function updatePrice(price){
        document.getElementById("price").innerHTML = price.toFixed(2) + "zł";
    }

    priceCheckBoxElements.forEach(it => {
        it.addEventListener("click", () =>{
        updatePrice(calculatePrice());
        });
    });
    
    wszystkieCheckBoxElement.addEventListener("click", () => {
        priceCheckBoxElements.forEach(it => it.checked = true);
        updatePrice(calculatePrice());
    });
    
    clearCheckBoxElement.addEventListener("click", () => {
        priceCheckBoxElements.forEach(it => it.checked = false);
        wszystkieCheckBoxElement.checked = false;
        clearCheckBoxElement.checked = false;
        updatePrice(0);        
    });
    
});