// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
//Navbar
function navbarfunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//PhotoSlider
var images = [];

images[0] = ["https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"];
images[1] = ["https://media.istockphoto.com/photos/big-and-small-picture-id172759822?k=20&m=172759822&s=170667a&w=0&h=UcINA4UlwuaR4ESHDVS5GmCets8N97guXlFoNCPJh8s="];
images[2] = ["https://media.gettyimages.com/photos/small-ball-out-balance-picture-id182825867?s=612x612"];
var index = 0;

function change() {
    document.getElementById("mainPhoto").src = images[index];
    if (index == 2) {
        index = 0;
    } else {
        index++;
    }

    setTimeout(change, 2000);
}

window.onload = change();

//Clock

var timeDisplay = document.getElementById("time");


function refreshTime() {
    var dateString = new Date().toLocaleString("en-US", { timeZone: "Europe/Vilnius" });
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

//Form

let form = document.querySelector('form');
let textarea = document.querySelector('#textarea');
let email = document.querySelector('#email');
let message = "Form submited!";
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (textarea.value == "" || email.value == "") {
        alert('Please fill required fields!');
        return false;
    }
    let msg = document.querySelector('#message');
    msg.textContent = message;
    msg.style.paddingBottom = '50px';
    msg.scrollIntoView();
})