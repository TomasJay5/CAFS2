class Motorcycle extends Car {
    constructor(maker, model, year, wheels) {
        super(maker, model, year);
        this.wheels = +wheels
    }

    getWheelsNumber() {
        if (this.wheels == 3) {
            return 'Motorcycle has 3 wheels'
        } else if (this.wheels == 2) {
            return 'Motorcycle has 2 wheels'
        } else {
            return 'Strange motorcycle'
        }
    }

}