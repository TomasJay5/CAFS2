(() => {
  "use strict"

  //CARD 1
  document.getElementById("btnAlert").addEventListener("click", function () {
    alert("Hello World!");
  });

  //CARD 2
  let inpt = document.querySelector("#inpt");

  let upprcsbtn = document.querySelector("#upprcsbtn");

  let lwrcsbtn = document.querySelector("#lwrcsbtn");

  let frsupcsbtn = document.querySelector("#frsupcsbtn");

  let frslwcsbtn = document.querySelector("#frslwcsbtn");


  upprcsbtn?.addEventListener("click", function () {
    inpt.value = inpt.value.toUpperCase();
  })

  lwrcsbtn?.addEventListener("click", function () {
    inpt.value = inpt.value.toLowerCase();
  })

  frsupcsbtn?.addEventListener("click", function () {
    inpt.value = inpt.value[0].toUpperCase() + inpt.value.slice(1);
  })

  frslwcsbtn?.addEventListener("click", function () {
    inpt.value = inpt.value[0].toLowerCase() + inpt.value.slice(1);
  })

  //CARD 3
  const forms = document.querySelectorAll(".needs-validation")

  Array.from(forms).forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add("was-validated")
    }, false)
  })
})()

//CARD 4
let blocktext = document.querySelector("#blocktext");

let unblocktext = document.querySelector("#unblocktext");

let inputtextblockunblock = document.querySelector("#inputtextblockunblock");

blocktext?.addEventListener("click", function () {
  inputtextblockunblock?.setAttribute("readonly", " ");
});

unblocktext?.addEventListener("click", function () {
  inputtextblockunblock?.removeAttribute("readonly");
});

//CARD 5
let monkeyimage = document.querySelector("#monkeyimage");

monkeyimage?.addEventListener("mouseenter", function () {
  monkeyimage.setAttribute("src", "https://i.imgur.com/PLDVxza.jpg");
});

monkeyimage?.addEventListener("mouseleave", function () {
  monkeyimage.setAttribute("src", "https://i.imgur.com/0DElr0H.jpg");
});

//CARD6

