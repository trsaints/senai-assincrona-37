const nameInput = exercise7.querySelector("#user-name");
const ageInput = exercise7.querySelector("#user-age");
const incomeInput = exercise7.querySelector("#user-wage");
const infoBtn = exercise7.querySelector("button");
const infoDisplay = exercise7.querySelector("p");

function showPersonalInfo() {
    let myName = getValue(nameInput, "string");
    let myAge = getValue(ageInput, "number");
    let mySalary = getValue(incomeInput, "number");
    infoDisplay.innerText = `Nome: ${myName} | Idade: ${myAge} | Salário: R$ ${mySalary.toFixed(2)}`;
}

infoBtn.addEventListener("click", showPersonalInfo);