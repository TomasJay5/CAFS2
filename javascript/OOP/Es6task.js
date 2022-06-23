// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes: 

// 1. name; 2. year; 3. director; 4. budget; 5. income.

// ir metodus: 

// 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director); 

// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.

// Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.

class Movie {
    constructor(name, year, director, budget, income) {
      this.name = name;
      this.year = year;
      this.director = director;
      this.budget = budget;
      this.income = income;
      this.getIntroduction = function() {
        return `Movie: ${this.name}, Year: ${this.year}, Director: ${this.director}`};
      this.getProfit = function() {;
        return `Profit: ${this.income - this.budget} USD.`};
    }
  }
  
  let Firstmovie = new Movie('Batman Begins',2005,'Christopher Nolan', 150000000,373700000);

  let Secondmovie = new Movie('The Dark Knight',2008,'Christopher Nolan',185000000,1006000000000);
  
console.log(Firstmovie);

console.log(Firstmovie.getIntroduction());

console.log(Firstmovie.getProfit());

console.log(Secondmovie);

console.log(Secondmovie.getIntroduction());

console.log(Secondmovie.getProfit());
  
  