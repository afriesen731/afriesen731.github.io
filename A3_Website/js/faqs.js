


let buttons = document.querySelectorAll(".icon");



buttons.forEach(element => {
    element.addEventListener("click", () => {
        let answer = element.parentElement.querySelector(".answer");
        
        if (answer.classList.contains("closed")) {
            answer.classList.remove("closed");
            element.classList.remove("closed-icon");
            element.innerHTML = "x";
        }
        else {
            answer.classList.add("closed");
            element.classList.add("closed-icon");

            element.innerHTML = "+";
        }

        

        



    });
});


