document.addEventListener("DOMContentLoaded", () => {
      let buttons = document.querySelectorAll("button")
      buttons.forEach(it => it.addEventListener("click", () => {
            let currentSpan = document.getElementsByClassName("counter")[0];
            currentSpan.innerHTML = parseInt(currentSpan.innerHTML) + 1;  
      }));
});