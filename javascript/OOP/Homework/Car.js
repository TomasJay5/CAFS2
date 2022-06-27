class Car {
    constructor(maker, model, year) {
        this.maker = maker;
        this.model = model;
        this.year = year;
    }

    getIntroduction() {
        return `Maker:${this.maker} Model:${this.model}`
    }

    getAge() {
        let date = new Date();
        let year = date.getFullYear();
        return ((year - this.year) <= 10) ? '10 years or newer' : '11 years or older';
    }
}