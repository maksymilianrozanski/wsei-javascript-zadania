document.addEventListener("DOMContentLoaded", () => {

    let cardInputField = document.getElementById("name");
    let cardTypeField = document.getElementById("type");

    cardInputField.addEventListener("input", () => {
        let enteredNumber = cardInputField.value;
        let cardType = detectCardType(enteredNumber);

        if (enteredNumber.length >= 2 && cardType === "unknown") {
            cardInputField.style.backgroundColor = "lightSalmon"
        } else cardInputField.style.backgroundColor = "white";

        if (cardType !== "unknown") {
            cardTypeField.innerHTML = cardType;
        } else cardTypeField.innerHTML = "";

        if (isEnoughNumbersToValidate(enteredNumber, cardType)) {
            if (isValid(enteredNumber, cardType)) {
                cardInputField.style.backgroundColor = "lime"
            } else {
                cardInputField.style.backgroundColor = "lightSalmon"
            }
        }
    });

    function detectCardType(number) {
        if (number.startsWith("4")) {
            return "Visa"
        }
        if (number.startsWith("5")) {
            return "MasterCard"
        }
        if (number.startsWith("34") || number.startsWith("37")) {
            return "American Express"
        }
        return "unknown"
    }

    function isEnoughNumbersToValidate(number, cardType) {
        return (cardType === "Visa" && number.length >= 13)
            || (cardType === "MasterCard" && number.length >= 16)
            || (cardType === "American Express" && number.length >= 15)
    }

    function isValid(number, cardType) {
        return (cardType === "Visa" && number.length >= 13 && number.length <= 16)
            || (cardType === "MasterCard" && number.length === 16)
            || (cardType === "American Express" && number.length === 15)
    }
});
