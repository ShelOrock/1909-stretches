class Calculator {
    constructor() {
        this.value = 0;
    }

    add(n) {
        this.value += n
        return this;
    }

    subtract(n) {
        this.value -= n
        return this;
    }

    multiply(n) {
        this.value *= n
        return this;
    }

    divide(n) {
        n !== 0 ? this.value /= n : console.error('Cannot divide by 0')
        return this;
    }

    clear() {
        this.value = 0
    }

}

module.exports = { Calculator };
