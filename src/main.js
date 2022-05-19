const exercise9 = document.querySelector("#exercise9");
const exercise6 = document.querySelector("#exercise6");
const exercise4 = document.querySelector("#exercise4");
const exercise7 = document.querySelector("#exercise7");

function getValue(input, type) {
    let content = input.value;

    switch (type) {
        case "string":
            return content;
        case "number":
            return Number(content);
        default:
            console.error("Insert value type as a parameter on getValue() function");
    }
}