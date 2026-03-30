let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let input = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            input = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                input = eval(input);
                display.value = input;
            } catch {
                display.value = "Error";
            }
        } 
        else {
            input += value;
            display.value = input;
        }
    });
});