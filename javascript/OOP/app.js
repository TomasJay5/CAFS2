// Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus, kurie turės šias savybes (properties): name, author, year ir metodus (naudojant prototype), kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).

let books = new Book("Harry Potter and the Philosophers Stone", "J. K. Rowling", 1997);

console.log(books.showTitleAndAuthor());
console.log(books.showBookAge());