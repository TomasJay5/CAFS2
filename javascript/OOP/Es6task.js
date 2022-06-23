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
  
  
  