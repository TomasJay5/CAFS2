class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    showTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    }

    showBookAge() {
        return `${new Date().getFullYear() - this.year}`;
    }
}