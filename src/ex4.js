const degreeInput = exercise4.querySelector("#f-temperature");
const converterBtn = exercise4.querySelector("button");
const fahrenheitDisplay = exercise4.querySelector("#fahrenheit");
const celsiusDisplay = exercise4.querySelector("#celsius");

function convertToCelsius() {
    let f = getValue(degreeInput, "number");
    let c = (5 * (f - 32)) / 9;
    return c;
}

function displayConversion() {
    let f = getValue(degreeInput, "number");
    let c = convertToCelsius();
    fahrenheitDisplay.innerText = `${f.toFixed(1)}°F`;
    celsiusDisplay.innerText = `${c.toFixed(1)}°C`;
}

converterBtn.addEventListener("click", displayConversion);