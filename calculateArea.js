const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculate = document.querySelector("#check");
const output = document.querySelector("#output");

function calculateArea(e) {
    const area = 0.5 * base.value * height.value;

    console.log(area)

    output.innerText = "Area of a triangle " + area + " is units";
}

calculate.addEventListener("click", calculateArea);