var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateInput = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Yeah numbers please');
        }
    };
    Calculator.prototype.add = function (a, b) {
        this.validateInput(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateInput(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateInput(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateInput(a, b);
        if (b === 0) {
            return 'Error: Division by zero is not allowed';
        }
        return a / b;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
console.log(calculator.divide(10, 0));
