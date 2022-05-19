/* EXERCÍCIO 6 */
const canvas = exercise6.querySelector("canvas");
const ctx = canvas.getContext("2d");
const triangleBasis = exercise6.querySelector("#triangle-b");
const triangleHeight = exercise6.querySelector("#triangle-h");
const displayAreaBtn = exercise6.querySelector("button");
const triangleArea = exercise6.querySelector("#triangle-display");

function calculateArea(basis, height) {
    let b = getValue(basis, "number");
    let h = getValue(height, "number");
    let triangleArea = (b * h) / 2;
    return triangleArea; 
}

function getRandomColor() {
    let hslCode = 100;
    let color = () => {
        return Math.floor((Math.random()) * hslCode);
    };
    let colors = [];

    for (let i = 0; i < 3; i++) {
        colors.push(color());
    }

    let randomColor = `hsl(${colors[0]}, ${colors[1]}%, ${colors[2]}%)`;
    return randomColor;
}

function displayTriangle() {
    let triangle = calculateArea(triangleBasis, triangleHeight);
    triangleArea.innerText = `${triangle.toFixed(1)}mm²`;
}

function drawTriangle() {
    let x = getValue(triangleBasis, "number");
    let y = getValue(triangleHeight, "number");
    let startX = 150;
    let startY = 75;

    ctx.clearRect(0, 0, 300, 300);

    ctx.fillStyle = getRandomColor();
    ctx.beginPath();
    ctx.moveTo(startX, startY - y / 2);
    ctx.lineTo(startX - x / 2, startY + y / 2);
    ctx.lineTo(startX + x / 2, startY + y / 2);
    
    ctx.fill();
}


displayAreaBtn.addEventListener("click", () => {
    displayTriangle();
    drawTriangle();
});