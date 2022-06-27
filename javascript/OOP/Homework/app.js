// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes: 

// 1. make; 2. model; 3. year.

// ir metodus: 

// 1. getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).

// 2. getAge, kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą). 

// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: 

// 1. wheels (kurio vertė bus number).

// Ir metodą: 

// 1. getWheelsNumber, kuris grąžins “motociklas turi 3 ratus”, jei wheels vertė bus 3 ir “motociklas turi 2 ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių).

// Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.

let thiscar = new Car('Audi', 'A4', 2010);

let motorcycle = new Motorcycle('BMW', 'S1000', 2009, 2)

console.log(thiscar.getIntroduction());

console.log(thiscar.getAge());

console.log(motorcycle.getWheelsNumber());