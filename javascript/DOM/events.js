let firstInput = document.getElementsByName("text1");

let secondInput = document.getElementsByName("text2");

let btn = document.querySelector("button");

function copytext (){
    secondInput[0].value = firstInput[0].value
}

btn.addEventListener("click", copytext)