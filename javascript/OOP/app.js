// // Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus, kurie turės šias savybes (properties): name, author, year ir metodus (naudojant prototype), kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).

// // let books = new Book("Harry Potter and the Philosophers Stone", "J. K. Rowling", 1997);

// // console.log(books.showTitleAndAuthor());
// // console.log(books.showBookAge());

// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes: 

// 1. name; 2. year; 3. director; 4. budget; 5. income.

// ir metodus: 

// 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director); 

// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.

// Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.


let Firstmovie = new Movie('Batman Begins',2005,'Christopher Nolan', 150000000,373700000);

let Secondmovie = new Movie('The Dark Knight',2008,'Christopher Nolan',185000000,1006000000000);
  
console.log(Firstmovie);

console.log(Firstmovie.getIntroduction());

console.log(Firstmovie.getProfit());

console.log(Secondmovie);

console.log(Secondmovie.getIntroduction());

console.log(Secondmovie.getProfit());