// https://www.w3schools.com/js/js_htmldom_nodes.asp

const div = document.querySelector("#main");

const h2element = document.createElement("h2");

const p1element = document.createElement("p");

const ulelement = document.createElement("ul");

const lielement = document.createElement("li");

const p2element = document.createElement("p");

const textnode1 = document.createTextNode("H2");

const textnode2 = document.createTextNode("Para1");

const textnode3 = document.createTextNode("Para2");

h2element.appendChild(textnode1);

p1element.appendChild(textnode2);

p2element.appendChild(textnode3);

ulelement.appendChild(lielement);

div.appendChild(h2element);

div.appendChild(p1element);

div.appendChild(ulelement);

div.appendChild(p2element);