(() => {
  "use strict"

  //card 1
  document.getElementById("btnAlert").addEventListener("click", function () {
    alert("Hello World!");
  });

  //card 2
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

  //card 3
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

//card 4
let blocktext = document.querySelector("#blocktext");

let unblocktext = document.querySelector("#unblocktext");

let inputtextblockunblock = document.querySelector("#inputtextblockunblock");

blocktext?.addEventListener("click", function () {
  inputtextblockunblock?.setAttribute("readonly", " ");
});

unblocktext?.addEventListener("click", function () {
  inputtextblockunblock?.removeAttribute("readonly");
});

//card 5
let monkeyimage = document.querySelector("#monkeyimage");

monkeyimage?.addEventListener("mouseenter", function () {
  monkeyimage.setAttribute("src", "https://i.imgur.com/PLDVxza.jpg");
});

monkeyimage?.addEventListener("mouseleave", function () {
  monkeyimage.setAttribute("src", "https://i.imgur.com/0DElr0H.jpg");
});

//card 6
let resetallbtn = document.querySelector('#resetallbtn')

let pointer = document.querySelector('#pointer');

let cursortext = document.querySelector('#cursortext');

let copy = document.querySelector('#copy');

let help = document.querySelector('#help');

let crosshair = document.querySelector('#crosshair');

let paratext = document.querySelector('#paratext');

let colorred = document.querySelector('#colorred');

let colorgreen = document.querySelector('#colorgreen');

let colorblue = document.querySelector('#colorblue');

let borderred = document.querySelector('#borderred');

let bordergreen = document.querySelector('#bordergreen');

let borderblue = document.querySelector('#borderblue');

//card 6 colors
colorred?.addEventListener('click', function(e) {
  e.preventDefault();
  paratext.style.color = 'red';
});

colorgreen?.addEventListener('click', function(e) {
  e.preventDefault();
  paratext.style.color = 'green';
});

colorblue?.addEventListener('click', function(e) {
  e.preventDefault();
  paratext.style.color = 'blue';
});

//card 6 borders
borderred?.addEventListener('click', function(e) {
  e.preventDefault();
  paratext.style.outline = '1px solid red';
});

bordergreen?.addEventListener('click', function(e) {
  e.preventDefault();
  paratext.style.outline = '1px solid green';
});

borderblue?.addEventListener('click', function(e) {
  e.preventDefault();
  paratext.style.outline = '1px solid blue';
});

//card 6 cursors
pointer?.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.style.cursor = 'pointer';
});

cursortext?.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.style.cursor = 'text';
});

copy?.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.style.cursor = 'copy';
});

help?.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.style.cursor = 'help';
});

crosshair?.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.style.cursor = 'crosshair';
});

//Reset all button
resetallbtn?.addEventListener('click', function(e) {
  e.preventDefault();
  paratext.style.color = 'black';
  paratext.style.outline = 'none';
  document.body.style.cursor = 'auto';
})
