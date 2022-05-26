let userInfoOutput = document.getElementById("main");



let user = {
    name: "John",
    lastname: "Brown"

};

userInfoOutput.innerHTML = `<h2> User information</h2>

<p> User name is ${user.name}, User last name is ${user.lastname} </p>`;

