document.addEventListener("DOMContentLoaded", () => {

    let imagesHeader = document.getElementsByClassName("page-header")[0];
    let images = imagesHeader.getElementsByTagName("IMG");

    let dictionary = {
        "Windows": images[2],
        "Os X": images[0],
        "Ubuntu": images[1]
    };

    let select = document.getElementsByClassName("form-control")[0];
    select.addEventListener("change", () => {
        displayCorrectImage()
    });

    function displayCorrectImage() {
        let selectOptions = select.children;
        Array.from(selectOptions).forEach(
            option => {
                let optionText = option.innerHTML;
                let correspondingImage = dictionary[optionText];
                if (optionText === select.value) {
                    correspondingImage.style.visibility = "visible"
                } else {
                    correspondingImage.style.visibility = "hidden"
                }
            })
    }
});
