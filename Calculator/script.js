const display = document.getElementById("DisplayValue");
display.innerText = " ";
function displayaction(input) {
    display.innerText += input;
}
function clearDisplay(input) {
    display.innerText = "";
    console.log(display)
}
function calculate() {
    try {
        display.innerText = eval(display.innerText);
        console.log(display.innerText);
    }
    catch (error) {
        display.innerText = "Error";
    }
}
document.addEventListener("keydown", function(e) {
    if (e.key >= "0" && e.key <= "9") {
        displayaction(e.key);
    }
    if (["+", "-", "*", "/", "."].includes(e.key)) {
        displayaction(e.key);
    }
    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }
    if (e.key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1);
    }
    if (e.key.toLowerCase() === "c") {
        clearDisplay();
    }
});
const overlay = document.getElementById("keyOverlay");

document.addEventListener("keydown", (e) => {
    overlay.innerText = e.key === " " ? "Space" : e.key;
    overlay.style.display = "block";

    clearTimeout(overlay.timeout);
    overlay.timeout = setTimeout(() => {
        overlay.style.display = "none";
    }, 1000); 
});