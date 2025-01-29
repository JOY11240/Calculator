let btn = document.getElementById("btn");
let result = document.getElementById("result");
let num1Error = document.getElementById("num1Error");
let num2Error = document.getElementById("num2Error");
let optionError = document.getElementById("optionError");
let num1Status , num2Status , optionStatus = true;
let finel;

num1Error.style.display = "none";
num2Error.style.display = "none";
optionError.style.display = "none";

btn.addEventListener("click" , function () {

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let option = document.getElementById("option");

    checkIn(num1 , num2 , option);

    if (num1Status && num2Status && optionStatus == true){
    num1 = parseFloat(num1.value);
    num2 = parseFloat(num2.value);
    
    switch (option.value) {
        case "add" : finel = num1 + num2; 
        break;

        case "minus" : finel = num1 - num2; 
        break;

        case "multiply" : finel = num1 * num2; 
        break;

        case "instead" : finel = num1 / num2; 
        break;
    }

    result.innerHTML = (finel);
    }
})

    function checkIn (num1 , num2 , option) {
    if (num1.value == "") {
        num1Error.style.display = "block";
        num1Status = false;
    } else {
        num1Error.style.display = "none";
        num1Status = true;
    }

    if (num2.value == "") {
        num2Error.style.display = "block";
        num2Status = false;
    } else {
        num2Error.style.display = "none";
        num2Status = true;
    }

    if (option.value == "empty") {
        optionError.style.display = "block";
        optionStatus = false;
    } else {
        optionError.style.display = "none";
        optionStatus = true;
    }
}