function validateForm() {
    return isEmailValid() && isNameLongEnough() && isSurnameLongEnough() && arePasswordsValid() && isCheckboxChecked();
}

function isEmailValid() {
    let email = document.getElementById("email");
    let isValid = email.value.includes("@");
    if (!isValid) {
        appendErrorMessage("Email musi posiadać znak @");
        return false
    }
    return true
}

function isNameLongEnough() {
    let name = document.getElementById("name");
    let isValid = name.value.length > 6;
    if (!isValid) {
        appendErrorMessage("Twoje imię jest za krótkie");
        return false
    }
    return true
}

function isSurnameLongEnough() {
    let surname = document.getElementById("surname");
    let isValid = surname.value.length > 6;
    if (!isValid) {
        appendErrorMessage("Twoje nazwisko jest za krótkie");
        return false
    }
    return true
}

function arePasswordsValid() {
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    let isValid = (pass1.value === pass2.value) && pass1.value.length > 0;
    if (!isValid) {
        appendErrorMessage("Hasła nie są takie same lub puste");
        return false
    }
    return true;
}

function isCheckboxChecked() {
    let checkbox = document.getElementById("agree");
    let isChecked = checkbox.checked;
    if (!isChecked) {
        appendErrorMessage("Musisz zaakceptować warunki");
        return false
    }
    return true;
}

function appendErrorMessage(message) {
    let errorMessageDiv = document.getElementsByClassName("error-message")[0];
    let errorMessageElement = document.createElement("p");
    errorMessageElement.innerHTML = message;
    errorMessageDiv.appendChild(errorMessageElement);
}
