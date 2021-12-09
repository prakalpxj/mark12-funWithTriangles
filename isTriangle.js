var inputs = document.querySelectorAll(".input")
var checkButton = document.querySelector("#isTriangle")
var result = document.querySelector("#result")

function calculateSum(a1, a2, a3) {
    return a1 + a2 + a3;
}


function isTriangle() {
    const sumOfAngles = calculateSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))

    if (sumOfAngles == 180)
        result.innerText = "It is a triangle"
    else
        result.innerText = "It is not a triangle"
}


checkButton.addEventListener("click", isTriangle);