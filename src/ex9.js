/* EXERCÍCIO 9 */
const salesInput = exercise9.querySelector("#month-sales");
const incomeBtn = exercise9.querySelector("button");
const resultingWage = exercise9.querySelector("#month-wage");

let baseIncome = 500;

function calculateWage(origin) {
    let monthlySales = getValue(salesInput, "number");
    let finalIncome = (monthlySales * 50) + origin;
    return finalIncome;
}

function displayIncomes() {
    let currentIncome = calculateWage(baseIncome);
    resultingWage.innerText = `R$ ${currentIncome.toFixed(2)}`
}

incomeBtn.addEventListener("click", displayIncomes);
