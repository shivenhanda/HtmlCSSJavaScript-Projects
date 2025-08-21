let celsiusInput = document.getElementById("Celsius");
let fahrenheitInput = document.getElementById("Fahrenheit");
let kelvinInput = document.getElementById("Kelvin");

celsiusInput.addEventListener('input', function() {
    const celsiusValue = parseFloat(celsiusInput.value) || 0;
    fahrenheitInput.value = (celsiusValue * 9/5 + 32).toFixed(2);
    kelvinInput.value = (celsiusValue + 273.15).toFixed(2);
});

kelvinInput.addEventListener("input", function() {
    const kelvinValue = parseFloat(kelvinInput.value) || 0;
    celsiusInput.value = (kelvinValue - 273.15).toFixed(2);
    fahrenheitInput.value = ((kelvinValue - 273.15) * 9/5 + 32).toFixed(2);
});

fahrenheitInput.addEventListener("input", function() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value) || 0;
    celsiusInput.value = ((fahrenheitValue - 32) * 5/9).toFixed(2);
    kelvinInput.value = ((fahrenheitValue - 32) * 5/9 + 273.15).toFixed(2);
});
