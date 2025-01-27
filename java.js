let btn = document.getElementById("btn");
let result = document.getElementById("result");
let finel = "";

btn.addEventListener("click" , function () {

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let option = document.getElementById("option");

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
})